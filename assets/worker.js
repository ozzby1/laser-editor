/* PhotoEngraving.online – Web Worker: runs the dithering pipeline off the main thread. */
importScripts('/assets/filters.js');

self.onmessage = function (e) {
  var msg = e.data || {};
  var id = msg.id;
  try {
    var w = msg.w, h = msg.h;
    var imageData = { data: new Uint8ClampedArray(msg.buffer), width: w, height: h };
    var out = self.PEFilters.runPipeline(imageData, w, h, msg.params);
    var buffer = out.data.buffer;
    self.postMessage({ id: id, ok: true, buffer: buffer, w: w, h: h }, [buffer]);
  } catch (err) {
    self.postMessage({ id: id, ok: false, error: String(err && err.message || err) });
  }
};
