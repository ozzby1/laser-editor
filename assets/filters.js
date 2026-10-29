/* PhotoEngraving.online – image filters.
   Pure functions, no DOM access. Loaded both by the page (app.js) and by the
   Web Worker (worker.js). */
(function (root) {
  'use strict';

  var DITHER_MODES = ['floyd', 'atkinson', 'jarvis', 'ordered'];
  var DEFAULT_DITHER = 'floyd';

  function makeImageData(w, h) {
    if (typeof ImageData === 'function') {
      try { return new ImageData(w, h); } catch (e) {}
    }
    return { data: new Uint8ClampedArray(w * h * 4), width: w, height: h };
  }

  function toGrayscale(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
      var g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      d[i] = d[i + 1] = d[i + 2] = g;
    }
  }

  function applyBrightnessContrast(imageData, brightness, contrast) {
    var d = imageData.data;
    var b = parseInt(brightness, 10) || 0;
    var c = parseInt(contrast, 10) || 0;
    var factor = (259 * (c + 255)) / (255 * (259 - c));

    for (var i = 0; i < d.length; i += 4) {
      var v = d[i] + b;
      v = factor * (v - 128) + 128;
      v = Math.max(0, Math.min(255, v));
      d[i] = d[i + 1] = d[i + 2] = v;
    }
  }

  function applyGamma(imageData, gamma) {
    var d = imageData.data;
    var g = parseFloat(gamma);
    if (!g || g === 1.0) return;

    var lut = new Uint8Array(256);
    for (var i = 0; i < 256; i++) {
      lut[i] = Math.min(255, Math.round(255 * Math.pow(i / 255, 1 / g)));
    }

    for (var j = 0; j < d.length; j += 4) {
      d[j] = d[j + 1] = d[j + 2] = lut[d[j]];
    }
  }

  function applySharpen(imageData, w, h, amount) {
    var src = imageData.data;
    var out = makeImageData(w, h);
    var d = out.data;

    var k = amount * 0.3;
    var kernel = [-k, -k, -k, -k, 1 + 8 * k, -k, -k, -k, -k];

    for (var y = 1; y < h - 1; y++) {
      for (var x = 1; x < w - 1; x++) {
        var v = 0;
        for (var ky = -1; ky <= 1; ky++) {
          for (var kx = -1; kx <= 1; kx++) {
            var idx = ((y + ky) * w + (x + kx)) * 4;
            v += src[idx] * kernel[(ky + 1) * 3 + (kx + 1)];
          }
        }
        var i = (y * w + x) * 4;
        var clamped = Math.max(0, Math.min(255, v));
        d[i] = d[i + 1] = d[i + 2] = clamped;
        d[i + 3] = 255;
      }
    }

    for (var x2 = 0; x2 < w; x2++) {
      var top = x2 * 4;
      var bottom = ((h - 1) * w + x2) * 4;
      for (var c = 0; c < 4; c++) {
        d[top + c] = src[top + c];
        d[bottom + c] = src[bottom + c];
      }
    }

    for (var y2 = 0; y2 < h; y2++) {
      var left = y2 * w * 4;
      var right = (y2 * w + (w - 1)) * 4;
      for (var c2 = 0; c2 < 4; c2++) {
        d[left + c2] = src[left + c2];
        d[right + c2] = src[right + c2];
      }
    }

    return out;
  }

  function applyDithering(imageData, w, h, mode, thresh) {
    var d = imageData.data;
    var selectedMode = DITHER_MODES.indexOf(mode) !== -1 ? mode : DEFAULT_DITHER;
    var pixels = new Float32Array(w * h);
    for (var i = 0; i < w * h; i++) pixels[i] = d[i * 4];

    if (selectedMode === 'ordered') {
      var bayer4 = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5]
      ];

      for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
          var idx = y * w + x;
          var thresholdOffset = (bayer4[y % 4][x % 4] - 7.5) * (255 / 16);
          var localThreshold = thresh + thresholdOffset;
          pixels[idx] = pixels[idx] >= localThreshold ? 255 : 0;
        }
      }
    } else {
      var weights;

      if (selectedMode === 'atkinson') {
        weights = [
          [1, 0, 1 / 8],
          [2, 0, 1 / 8],
          [-1, 1, 1 / 8],
          [0, 1, 1 / 8],
          [1, 1, 1 / 8],
          [0, 2, 1 / 8]
        ];
      } else if (selectedMode === 'jarvis') {
        weights = [
          [1, 0, 7 / 48],
          [2, 0, 5 / 48],
          [-2, 1, 3 / 48],
          [-1, 1, 5 / 48],
          [0, 1, 7 / 48],
          [1, 1, 5 / 48],
          [2, 1, 3 / 48],
          [-2, 2, 1 / 48],
          [-1, 2, 3 / 48],
          [0, 2, 5 / 48],
          [1, 2, 3 / 48],
          [2, 2, 1 / 48]
        ];
      } else {
        weights = [
          [1, 0, 7 / 16],
          [-1, 1, 3 / 16],
          [0, 1, 5 / 16],
          [1, 1, 1 / 16]
        ];
      }

      for (var yy = 0; yy < h; yy++) {
        for (var xx = 0; xx < w; xx++) {
          var id2 = yy * w + xx;
          var oldVal = pixels[id2];
          var newVal = oldVal >= thresh ? 255 : 0;
          pixels[id2] = newVal;

          var err = oldVal - newVal;
          for (var wi = 0; wi < weights.length; wi++) {
            var dx = weights[wi][0];
            var dy = weights[wi][1];
            var factor = weights[wi][2];
            var nx = xx + dx;
            var ny = yy + dy;
            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
              pixels[ny * w + nx] += err * factor;
            }
          }
        }
      }
    }

    for (var k = 0; k < w * h; k++) {
      var v = Math.max(0, Math.min(255, pixels[k]));
      d[k * 4] = d[k * 4 + 1] = d[k * 4 + 2] = v;
      d[k * 4 + 3] = 255;
    }
  }

  function invertImageData(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
      var v = 255 - d[i];
      d[i] = d[i + 1] = d[i + 2] = v;
    }
  }

  /* Full pipeline used for the main output. `params`:
     { brightness, contrast, gamma, sharpness, ditherMode, invert, threshold } */
  function runPipeline(imageData, w, h, params) {
    toGrayscale(imageData);
    applyBrightnessContrast(imageData, params.brightness, params.contrast);
    applyGamma(imageData, params.gamma);

    var sharp = parseFloat(params.sharpness) || 0;
    if (sharp > 0) imageData = applySharpen(imageData, w, h, sharp);

    applyDithering(imageData, w, h, params.ditherMode, params.threshold);
    if (params.invert) invertImageData(imageData);
    return imageData;
  }

  root.PEFilters = {
    DITHER_MODES: DITHER_MODES,
    makeImageData: makeImageData,
    toGrayscale: toGrayscale,
    applyBrightnessContrast: applyBrightnessContrast,
    applyGamma: applyGamma,
    applySharpen: applySharpen,
    applyDithering: applyDithering,
    invertImageData: invertImageData,
    runPipeline: runPipeline
  };
})(typeof self !== 'undefined' ? self : this);
