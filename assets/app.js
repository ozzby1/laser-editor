/* PhotoEngraving.online – application script (shared by all languages).
   Texts come from /i18n/<lang>.json; image filters from /assets/filters.js;
   heavy processing runs in /assets/worker.js. */

/* ---- Donate box ---- */

(function(){
  var T={
    en:["Support PhotoEngraving.online","The tool is free. If it helped you, you can send a small tip in crypto. Thank you!","Almost no fees, ideal for small tips","Solana network only","Copy","Copied","Open wallet"],
    cs:["Podpořte PhotoEngraving.online","Nástroj je zdarma. Pokud vám pomohl, můžete poslat malý příspěvek v kryptoměnách. Děkujeme!","Téměř bez poplatků, ideální na drobné příspěvky","Pouze síť Solana","Kopírovat","Zkopírováno","Otevřít peněženku"],
    de:["PhotoEngraving.online unterstützen","Das Tool ist kostenlos. Wenn es dir geholfen hat, kannst du ein kleines Trinkgeld in Krypto senden. Danke!","Fast keine Gebühren, ideal für kleine Beträge","Nur Solana-Netzwerk","Kopieren","Kopiert","Wallet öffnen"],
    es:["Apoya PhotoEngraving.online","La herramienta es gratuita. Si te ha ayudado, puedes enviar una pequeña propina en cripto. ¡Gracias!","Casi sin comisiones, ideal para propinas pequeñas","Solo red Solana","Copiar","Copiado","Abrir billetera"],
    fr:["Soutenir PhotoEngraving.online","L’outil est gratuit. S’il vous a aidé, vous pouvez envoyer un petit pourboire en crypto. Merci !","Presque sans frais, idéal pour les petits dons","Réseau Solana uniquement","Copier","Copié","Ouvrir le portefeuille"],
    hi:["PhotoEngraving.online का समर्थन करें","यह टूल मुफ्त है। अगर इससे आपकी मदद हुई, तो आप क्रिप्टो में छोटी टिप भेज सकते हैं। धन्यवाद!","लगभग कोई शुल्क नहीं, छोटी टिप के लिए आदर्श","केवल Solana नेटवर्क","कॉपी करें","कॉपी हो गया","वॉलेट खोलें"],
    it:["Sostieni PhotoEngraving.online","Lo strumento è gratuito. Se ti è stato utile, puoi inviare una piccola mancia in cripto. Grazie!","Quasi senza commissioni, ideale per piccole mance","Solo rete Solana","Copia","Copiato","Apri wallet"],
    ja:["PhotoEngraving.online を応援する","このツールは無料です。役に立ったら、暗号資産で少額のチップを送れます。ありがとうございます！","手数料はほぼゼロ、少額のチップに最適","Solana ネットワークのみ","コピー","コピーしました","ウォレットを開く"],
    ko:["PhotoEngraving.online 후원하기","이 도구는 무료입니다. 도움이 되셨다면 암호화폐로 작은 팁을 보내주세요. 감사합니다!","수수료가 거의 없어 소액 팁에 적합","Solana 네트워크 전용","복사","복사됨","지갑 열기"],
    pl:["Wesprzyj PhotoEngraving.online","Narzędzie jest darmowe. Jeśli Ci pomogło, możesz wysłać mały napiwek w kryptowalutach. Dziękujemy!","Prawie bez opłat, idealne na drobne napiwki","Tylko sieć Solana","Kopiuj","Skopiowano","Otwórz portfel"],
    "pt-br":["Apoie o PhotoEngraving.online","A ferramenta é gratuita. Se ela te ajudou, você pode enviar uma pequena gorjeta em cripto. Obrigado!","Quase sem taxas, ideal para gorjetas pequenas","Somente rede Solana","Copiar","Copiado","Abrir carteira"],
    ru:["Поддержать PhotoEngraving.online","Инструмент бесплатный. Если он вам помог, вы можете отправить небольшие чаевые в криптовалюте. Спасибо!","Почти без комиссий, идеально для небольших сумм","Только сеть Solana","Копировать","Скопировано","Открыть кошелёк"],
    tr:["PhotoEngraving.online’ı destekleyin","Bu araç ücretsizdir. İşinize yaradıysa kripto ile küçük bir bahşiş gönderebilirsiniz. Teşekkürler!","Neredeyse ücretsiz, küçük bahşişler için ideal","Yalnızca Solana ağı","Kopyala","Kopyalandı","Cüzdanı aç"],
    zh:["支持 PhotoEngraving.online","本工具免费使用。如果对您有帮助，欢迎用加密货币打赏。谢谢！","几乎零手续费，适合小额打赏","仅限 Solana 网络","复制","已复制","打开钱包"]
  };
  var T2={
    en:["Support","Did it help you? Support the free tool with a small tip.","Support"],
    cs:["Podpořit","Pomohlo vám to? Podpořte nástroj zdarma malým příspěvkem.","Podpořit"],
    de:["Unterstützen","Hat es dir geholfen? Unterstütze das kostenlose Tool mit einem kleinen Trinkgeld.","Unterstützen"],
    es:["Apoyar","¿Te ha servido? Apoya la herramienta gratuita con una pequeña propina.","Apoyar"],
    fr:["Soutenir","Cela vous a aidé ? Soutenez l’outil gratuit avec un petit pourboire.","Soutenir"],
    hi:["समर्थन करें","क्या इससे मदद मिली? छोटी टिप देकर इस मुफ्त टूल का समर्थन करें।","समर्थन करें"],
    it:["Sostieni","Ti è stato utile? Sostieni lo strumento gratuito con una piccola mancia.","Sostieni"],
    ja:["応援する","お役に立ちましたか？少額のチップで無料ツールを応援してください。","応援する"],
    ko:["후원하기","도움이 되셨나요? 작은 팁으로 무료 도구를 후원해 주세요.","후원하기"],
    pl:["Wesprzyj","Pomogło? Wesprzyj darmowe narzędzie małym napiwkiem.","Wesprzyj"],
    "pt-br":["Apoiar","Ajudou você? Apoie a ferramenta gratuita com uma pequena gorjeta.","Apoiar"],
    ru:["Поддержать","Помогло? Поддержите бесплатный инструмент небольшими чаевыми.","Поддержать"],
    tr:["Destekle","İşinize yaradı mı? Ücretsiz aracı küçük bir bahşişle destekleyin.","Destekle"],
    zh:["支持","对您有帮助吗？小额打赏支持这个免费工具。","支持"]
  };
  var K=["title","text","lnNote","solNote","copy","copied","open","support","toastText","toastBtn"];
  function lang(){
    var l=(document.documentElement.lang||"en").toLowerCase();
    return T[l]?l:(T[l.split("-")[0]]?l.split("-")[0]:"en");
  }
  function strings(){var l=lang();return T[l].concat(T2[l]);}

  /* Place the box in the left column under the FAQ, so it lines up with the page layout */
  var box=document.getElementById("donate"),col=document.querySelector(".editor-left-extra");
  if(box&&col){col.appendChild(box);box.classList.add("in-column");}

  /* Support button next to every "Download BMP" button (BMP gets half width) */
  document.querySelectorAll('[id^="downloadBmpBtn"]').forEach(function(bmp){
    if(bmp.parentNode.classList.contains("donate-dl-row"))return;
    var row=document.createElement("div");
    row.className="donate-dl-row"+(bmp.classList.contains("mobile-download-btn")?" is-mobile":"");
    if(bmp.classList.contains("mt-2"))row.style.marginTop="0.5rem";
    bmp.parentNode.insertBefore(row,bmp);row.appendChild(bmp);
    var sup=document.createElement("a");
    sup.className="btn btn-secondary donate-dl-support"+(bmp.classList.contains("mobile-download-btn")?" mobile-download-btn":"");
    sup.href="#donate";
    sup.innerHTML='<img class="donate-heart" src="/heart.png" width="17" height="14" alt="" aria-hidden="true" loading="lazy" decoding="async"><span data-donate="support">Support</span>';
    row.appendChild(sup);
  });

  /* Toast after a file download (once per browser session) */
  var toast=document.createElement("div");
  toast.className="donate-toast";toast.setAttribute("role","status");
  toast.innerHTML='<span data-donate="toastText"></span><a class="donate-btn" href="#donate"><span data-donate="toastBtn"></span></a><button type="button" class="donate-toast-close" aria-label="Close">×</button>';
  document.body.appendChild(toast);
  function hideToast(){toast.classList.remove("show");}
  toast.querySelector(".donate-toast-close").addEventListener("click",hideToast);
  toast.querySelector("a").addEventListener("click",hideToast);
  var shown=false;
  try{shown=sessionStorage.getItem("donateToastShown")==="1";}catch(e){}
  document.addEventListener("click",function(e){
    var a=e.target&&e.target.closest&&e.target.closest("a[download]");
    if(!a||shown)return;
    shown=true;try{sessionStorage.setItem("donateToastShown","1");}catch(e){}
    setTimeout(function(){toast.classList.add("show");setTimeout(hideToast,15000);},1200);
  },true);
  function apply(){
    var s=strings();
    document.querySelectorAll("[data-donate]").forEach(function(el){
      var i=K.indexOf(el.getAttribute("data-donate"));
      if(i>-1&&!el.classList.contains("is-copied"))el.textContent=s[i];
    });
  }
  function copyLegacy(text){
    var t=document.createElement("textarea");t.value=text;t.style.position="fixed";t.style.opacity="0";
    document.body.appendChild(t);t.select();try{document.execCommand("copy");}finally{t.remove();}
    return Promise.resolve();
  }
  function copy(text){
    if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(text).catch(function(){return copyLegacy(text);});
    return copyLegacy(text);
  }
  document.querySelectorAll("#donate [data-copy]").forEach(function(btn){
    btn.addEventListener("click",function(){
      copy(btn.getAttribute("data-copy")).then(function(){
        btn.textContent=strings()[5];btn.classList.add("is-copied");
        setTimeout(function(){btn.classList.remove("is-copied");apply();},1800);
      });
    });
  });
  apply();
  new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
})();

/* ---- Tools menu / compact mobile header ---- */

(function(){
  var L={en:"More tools",cs:"Další nástroje",de:"Weitere Tools",es:"Más herramientas",fr:"Plus d’outils",hi:"अन्य टूल",it:"Altri strumenti",ja:"その他のツール",ko:"다른 도구",pl:"Więcej narzędzi","pt-br":"Mais ferramentas",ru:"Другие инструменты",tr:"Diğer araçlar",zh:"更多工具"};
  var TOOLS=[
    {name:"Image to SVG",url:"https://photoengraving.online/image-to-svg/",host:"photoengraving.online"},
    {name:"QR Generator",url:"https://qr-generator.tech/",host:"qr-generator.tech"},
    {name:"Photo Upscale",url:"https://photoupscale.online/",host:"photoupscale.online"}
  ];
  function label(){
    var l=(document.documentElement.lang||"en").toLowerCase();
    return L[l]||L[l.split("-")[0]]||L.en;
  }
  var holder=document.querySelector("header.app-header .ml-auto");
  if(!holder||document.getElementById("toolsSwitcher"))return;
  var nav=document.createElement("nav");
  nav.className="lang-switcher lang-dropdown";nav.id="toolsSwitcher";nav.setAttribute("aria-label","More tools");
  var items=TOOLS.map(function(t){
    return '<a class="tools-option" role="menuitem" href="'+t.url+'" target="_blank" rel="noopener">'+t.name+'<small>'+t.host+'</small></a>';
  }).join("");
  nav.innerHTML='<button type="button" class="lang-current" id="toolsButton" aria-haspopup="true" aria-expanded="false" aria-controls="toolsMenu"><span class="tools-label"></span><span aria-hidden="true" class="lang-chevron"></span></button><div class="lang-menu" id="toolsMenu" role="menu">'+items+'</div>';
  holder.appendChild(nav);
  var btn=nav.querySelector("#toolsButton");
  function setLabel(){nav.querySelector(".tools-label").textContent=label();nav.setAttribute("aria-label",label());}
  function close(){nav.classList.remove("open");btn.setAttribute("aria-expanded","false");}
  function open(){
    var ls=document.getElementById("langSwitcher");
    if(ls&&ls.classList.contains("open")){var lb=document.getElementById("langCurrentButton");if(lb)lb.click();}
    nav.classList.add("open");btn.setAttribute("aria-expanded","true");
    var m=nav.querySelector("#toolsMenu");m.style.left="";m.style.right="";
    var r=m.getBoundingClientRect();
    var nr=nav.getBoundingClientRect();
    var want=Math.max(8,Math.min(nr.left,window.innerWidth-8-r.width));
    if(r.left<8||r.right>window.innerWidth-8){m.style.left=(want-nr.left)+"px";m.style.right="auto";}
  }
  btn.addEventListener("click",function(e){e.stopPropagation();nav.classList.contains("open")?close():open();});
  document.addEventListener("click",function(e){if(!nav.contains(e.target))close();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&nav.classList.contains("open")){close();btn.focus();}});

  /* Compact header on mobile: short labels + theme icon */
  var G={en:"Guide",cs:"Návod",de:"Anleitung",es:"Guía",fr:"Guide",hi:"गाइड",it:"Guida",ja:"ガイド",ko:"가이드",pl:"Instrukcja","pt-br":"Guia",ru:"Справка",tr:"Kılavuz",zh:"指南"};
  var TS={en:"Tools",cs:"Nástroje",de:"Tools",es:"Herramientas",fr:"Outils",hi:"टूल",it:"Strumenti",ja:"ツール",ko:"도구",pl:"Narzędzia","pt-br":"Ferramentas",ru:"Инструменты",tr:"Araçlar",zh:"工具"};
  function pick(o){var l=(document.documentElement.lang||"en").toLowerCase();return o[l]||o[l.split("-")[0]]||o.en;}
  var gb=document.querySelector("header.app-header .guide-btn");
  var gl=gb&&gb.querySelector("[data-i18n]");
  if(gl){gl.classList.add("hdr-long");var gs=document.createElement("span");gs.className="hdr-short";gb.appendChild(gs);}
  var tl=nav.querySelector(".tools-label");tl.classList.add("hdr-long");
  var ts=document.createElement("span");ts.className="hdr-short";tl.parentNode.insertBefore(ts,tl.nextSibling);
  var tb=document.getElementById("themeToggleBtn");var ti=null;
  if(tb){ti=document.createElement("span");ti.className="hdr-theme-icon";ti.setAttribute("aria-hidden","true");tb.insertBefore(ti,tb.firstChild);}
  function shortLabels(){
    if(gb&&gb.querySelector(".hdr-short"))gb.querySelector(".hdr-short").textContent=pick(G);
    ts.textContent=pick(TS);
    if(ti)ti.textContent=document.body.getAttribute("data-theme")==="light"?"☾":"☀";
  }
  shortLabels();
  new MutationObserver(shortLabels).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  new MutationObserver(shortLabels).observe(document.body,{attributes:true,attributeFilter:["data-theme"]});
  setLabel();
  new MutationObserver(setLabel).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
})();

/* ---- Editor ---- */
   let originalImage = null; let cropRect = null; let cropEditorRect = null; let cropEditorScale = 1; let cropDragState = null; let cropAspectMode = 'free'; let renderQueued = false; let viewMode = 'compare'; let currentPreset = 'normal'; let currentMaterial = null; let currentLang = (document.documentElement.getAttribute('data-lang') || 'en').toLowerCase(); let originalImageToken = 0; let lastRenderedOutputSignature = '';

const FIXED_THRESHOLD = 128;
const STORAGE_KEY = 'laserEditorSimpleV8';
const LANG_STORAGE_KEY = 'laserEditorLanguageV1';
const THEME_STORAGE_KEY = 'photoEngravingThemeV1';
const OUTPUT_WIDTH_MIN_PX = 1;
const OUTPUT_WIDTH_DEFAULT_MAX_PX = 6000;
const OUTPUT_WIDTH_HARD_MAX_PX = 25000;
const LARGE_OUTPUT_CONFIRM_MEGAPIXELS = 25;
const HARD_OUTPUT_MAX_MEGAPIXELS = 50;
const PREVIEW_IMAGE_SMALL = '/preview-v3-small.webp';
const PREVIEW_IMAGE_FALLBACK = '/preview-v3.png';

const translations = { en: {} };
translations[currentLang] = translations[currentLang] || {};
let i18nLoaded = false;

function loadI18n() {
  const url = `/i18n/${currentLang}.json`;
  return fetch(url, { credentials: 'same-origin' })
    .then(r => { if (!r.ok) throw new Error(`i18n ${r.status}`); return r.json(); })
    .then(data => {
      translations[currentLang] = data;
      if (currentLang !== 'en') translations.en = translations.en || {};
      i18nLoaded = true;
    })
    .catch(err => { console.warn('Translations could not be loaded, keeping static HTML texts.', err); });
}

const localeMap = {
  "en": "en_US",
  "cs": "cs_CZ",
  "de": "de_DE",
  "es": "es_ES",
  "fr": "fr_FR",
  "hi": "hi_IN",
  "it": "it_IT",
  "ja": "ja_JP",
  "ko": "ko_KR",
  "pl": "pl_PL",
  "pt-br": "pt_BR",
  "ru": "ru_RU",
  "tr": "tr_TR",
  "zh": "zh_CN"
};

const SEO_DATA = {
  "en": {
    "title": "Convert Image to Laser Engraving Online Free | PhotoEngraving.online",
    "description": "Convert any image or photo to a laser-ready black-and-white PNG or 1-bit BMP. Set DPI, crop, preview materials and export for LightBurn, XCS, LaserGRBL or EZCAD."
  },
  "cs": {
    "title": "Převod obrázku pro laserové gravírování online zdarma | PhotoEngraving.online",
    "description": "Převeďte obrázek nebo fotografii na černobílý PNG připravený pro laser nebo 1bitový BMP. Nastavte DPI, ořízněte, zobrazte náhled materiálů a exportujte pro LightBurn, XCS, LaserGRBL nebo EZCAD."
  },
  "de": {
    "title": "Foto für Lasergravur online vorbereiten | PhotoEngraving.online",
    "description": "Bereiten Sie Fotos online für die Lasergravur vor: zuschneiden, Tonwerte anpassen, reale Größe und DPI festlegen, Materialvorschau prüfen und PNG oder 1-Bit-BMP exportieren."
  },
  "es": {
    "title": "Convertir imagen para grabado láser online gratis | PhotoEngraving.online",
    "description": "Convierte cualquier imagen o foto en un PNG en blanco y negro listo para láser o en un BMP de 1 bit. Define DPI, recorta, previsualiza materiales y exporta para LightBurn, XCS, LaserGRBL o EZCAD."
  },
  "fr": {
    "title": "Convertir une image pour la gravure laser en ligne gratuitement | PhotoEngraving.online",
    "description": "Convertissez une image ou une photo en PNG noir et blanc prêt pour la gravure laser ou en BMP 1 bit. Réglez le DPI, recadrez, prévisualisez les matériaux et exportez pour LightBurn, XCS, LaserGRBL ou EZCAD."
  },
  "it": {
    "title": "Convertitore gratuito da foto a incisione laser online | PhotoEngraving.online",
    "description": "Prepara foto per l’incisione laser online. Ritaglia, regola i toni, imposta dimensione reale e DPI, visualizza l’anteprima sui materiali più comuni, poi esporta PNG o BMP a 1 bit direttamente nel browser."
  },
  "pl": {
    "title": "Konwertuj obraz do grawerowania laserowego online za darmo | PhotoEngraving.online",
    "description": "Konwertuj dowolny obraz lub zdjęcie do czarno-białego PNG gotowego do lasera albo 1-bitowego BMP. Ustaw DPI, kadruj, sprawdź podgląd materiałów i eksportuj do LightBurn, XCS, LaserGRBL lub EZCAD."
  },
  "pt-br": {
    "title": "Conversor gratuito de fotos para gravação a laser online | PhotoEngraving.online",
    "description": "Converta fotos para gravação a laser no navegador. Recorte, escolha o dithering e o DPI, visualize materiais e exporte PNG ou BMP de 1 bit para LightBurn, XCS, LaserGRBL, EZCAD e outros programas."
  },
  "ru": {
    "title": "Конвертер изображения для лазерной гравировки онлайн бесплатно | PhotoEngraving.online",
    "description": "Преобразуйте изображение или фото в готовый для лазерной гравировки чёрно-белый PNG или 1-битный BMP. Настройте DPI, обрежьте, просмотрите материалы и экспортируйте для LightBurn, XCS, LaserGRBL или EZCAD."
  },
  "tr": {
    "title": "Ücretsiz Fotoğraftan Lazer Gravür Dönüştürücü Online | PhotoEngraving.online",
    "description": "Fotoğrafları tarayıcıda ücretsiz olarak lazer gravüre dönüştürün. Kırpma, DPI, dithering ve malzeme önizlemesi ayarlarıyla lazere hazır siyah-beyaz PNG veya 1 bit BMP oluşturun."
  },
  "hi": {
    "title": "छवि को मुफ्त ऑनलाइन लेज़र उत्कीर्णन में बदलें | PhotoEngraving.online",
    "description": "किसी छवि या फ़ोटो को लेज़र के लिए तैयार श्वेत-श्याम PNG या 1-बिट BMP में बदलें। DPI सेट करें, क्रॉप करें, सामग्री का पूर्वावलोकन करें और LightBurn, XCS, LaserGRBL या EZCAD के लिए निर्यात करें।"
  },
  "ja": {
    "title": "画像をレーザー彫刻用に無料オンライン変換 | PhotoEngraving.online",
    "description": "画像や写真をレーザー加工用の白黒PNGまたは1ビットBMPに変換。DPI設定、切り抜き、素材プレビューに対応し、LightBurn、XCS、LaserGRBL、EZCAD向けに書き出せます。"
  },
  "ko": {
    "title": "이미지를 레이저 각인용으로 무료 온라인 변환 | PhotoEngraving.online",
    "description": "이미지나 사진을 레이저 작업용 흑백 PNG 또는 1비트 BMP로 변환하세요. DPI 설정, 자르기, 소재 미리보기를 사용하고 LightBurn, XCS, LaserGRBL 또는 EZCAD용으로 내보낼 수 있습니다."
  },
  "zh": {
    "title": "免费在线将图片转换为激光雕刻图 | PhotoEngraving.online",
    "description": "将图片或照片转换为适合激光加工的黑白 PNG 或 1 位 BMP。设置 DPI、裁剪并预览材料效果，可导出供 LightBurn、XCS、LaserGRBL 或 EZCAD 使用。"
  }
};

const PRESETS = {
  custom:   { brightness: 0, contrast: 0, gamma: 1.00, sharpness: 0.0, ditherMode: 'floyd', invertColors: false },
  normal:   { brightness: 5, contrast: 30, gamma: 1.08, sharpness: 1.0, ditherMode: 'floyd', invertColors: false },
  negative: { brightness: 5, contrast: 30, gamma: 1.08, sharpness: 1.0, ditherMode: 'floyd', invertColors: true },
  dark:     { brightness: 25, contrast: 35, gamma: 1.25, sharpness: 1.0, ditherMode: 'floyd', invertColors: false },
  light:    { brightness: -10, contrast: 45, gamma: 0.95, sharpness: 1.0, ditherMode: 'floyd', invertColors: false }
};

const DITHER_MODES = ['floyd', 'atkinson', 'jarvis', 'ordered'];
const DITHER_COMPARISON_MAX_PX = 420;

const MATERIAL_PREVIEW_MAX_PX = 1600;

const MATERIALS = {
  wood: {
    nameKey: 'materialWood',
    tipKey: 'materialTipWood',
    base: [225, 213, 192],
    mark: [82, 48, 24],
    noise: 13,
    grain: 'wood',
    grainStrength: 17,
    dotGain: 0.28,
    seed: 11
  },
  slate: {
    nameKey: 'materialSlate',
    tipKey: 'materialTipSlate',
    base: [31, 34, 38],
    mark: [184, 184, 174],
    noise: 18,
    grain: 'stone',
    grainStrength: 12,
    dotGain: 0.14,
    seed: 23
  },
  blackAnodized: {
    nameKey: 'materialBlackAnodized',
    tipKey: 'materialTipBlackAnodized',
    base: [7, 8, 10],
    mark: [214, 218, 210],
    noise: 7,
    grain: 'metal',
    grainStrength: 8,
    dotGain: 0.05,
    laserPowerBehavior: 'darkSurface',
    seed: 31
  },
  stainless: {
    nameKey: 'materialStainless',
    tipKey: 'materialTipStainless',
    base: [196, 202, 206],
    mark: [58, 62, 64],
    noise: 6,
    grain: 'metal',
    grainStrength: 8,
    dotGain: 0.01,
    laserPowerBehavior: 'marking',
    seed: 37
  },
  leather: {
    nameKey: 'materialLeather',
    tipKey: 'materialTipLeather',
    base: [123, 72, 39],
    mark: [39, 22, 12],
    noise: 20,
    grain: 'leather',
    grainStrength: 18,
    dotGain: 0.32,
    seed: 59
  }
};

const DEFAULTS = {
  preset: 'normal',
  brightness: PRESETS.normal.brightness,
  contrast: PRESETS.normal.contrast,
  gamma: PRESETS.normal.gamma,
  sharpness: PRESETS.normal.sharpness,
  materialPower: 100,
  ditherMode: PRESETS.normal.ditherMode,
  invertColors: PRESETS.normal.invertColors,
  dpi: 254,
  customDpi: 254,
  outputWidthMm: 100,
  outputWidthPx: 1000
};

const fileInput = document.getElementById('fileInput');
const topUploadBtn = document.getElementById('topUploadBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeToggleLabel = document.getElementById('themeToggleLabel');
const brandLogo = document.querySelector('.brand-logo');
const themeColorMetas = document.querySelectorAll('meta[name="theme-color"]');
const dropZone = document.getElementById('dropZone');
const uploadCtaCard = document.getElementById('uploadCtaCard');
const hintUploadLink = document.getElementById('hintUploadLink');
const cropOpenBtn = document.getElementById('cropOpenBtn');
const cropResetBtn = document.getElementById('cropResetBtn');
const cropModalOverlay = document.getElementById('cropModalOverlay');
const cropModal = document.getElementById('cropModal');
const cropCanvasShell = document.getElementById('cropCanvasShell');
const cropCanvas = document.getElementById('cropCanvas');
const cropCloseBtn = document.getElementById('cropCloseBtn');
const cropCancelBtn = document.getElementById('cropCancelBtn');
const cropResetModalBtn = document.getElementById('cropResetModalBtn');
const cropApplyBtn = document.getElementById('cropApplyBtn');
const cropAspectButtons = document.querySelectorAll('[data-crop-aspect]');
const statusMessage = document.getElementById('statusMessage');
const demoNotice = document.getElementById('demoNotice');
const editorControlsColumn = document.getElementById('editorControlsColumn');
const btnResult = document.getElementById('btnResult');
const btnCompare = document.getElementById('btnCompare');
const btnMaterial = document.getElementById('btnMaterial');

const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const gamma = document.getElementById('gamma');
const sharpness = document.getElementById('sharpness');
const materialPower = document.getElementById('materialPower');
const ditherMode = document.getElementById('ditherMode');
const invertColors = document.getElementById('invertColors');
const dpi = document.getElementById('dpi');
const dpiCustomSelect = document.getElementById('dpiCustomSelect');
const dpiCustomButton = document.getElementById('dpiCustomButton');
const dpiCustomValue = document.getElementById('dpiCustomValue');
const dpiCustomOptions = document.getElementById('dpiCustomOptions');
const customDpi = document.getElementById('customDpi');
const customDpiWrap = document.getElementById('customDpiWrap');
const outputWidthMm = document.getElementById('outputWidthMm');
const outputWidthSlider = document.getElementById('outputWidthSlider');
let lastValidOutputWidthMm = DEFAULTS.outputWidthMm;

const downloadBtn = document.getElementById('downloadBtn');
const downloadBmpBtn = document.getElementById('downloadBmpBtn');
const resetBtn = document.getElementById('resetBtn');

const canvasSingle = document.getElementById('canvasSingle');
const canvasCompareOrig = document.getElementById('canvasCompareOrig');
const canvasCompareResult = document.getElementById('canvasCompareResult');
const canvasMaterialPreview = document.getElementById('canvasMaterialPreview');
const materialViewElement = document.getElementById('materialView');
const ditherComparisonSection = document.getElementById('ditherComparisonSection');
const ditherComparisonCanvases = {
  floyd: document.getElementById('canvasDitherFloyd'),
  atkinson: document.getElementById('canvasDitherAtkinson'),
  jarvis: document.getElementById('canvasDitherJarvis'),
  ordered: document.getElementById('canvasDitherOrdered')
};

const presetCards = document.querySelectorAll('#presetCards .preset-card');
const ditherCards = document.querySelectorAll('#ditherCards .preset-card');
const ditherComparisonCards = document.querySelectorAll('[data-comparison-mode]');
const ditherApplyButtons = document.querySelectorAll('[data-apply-dither]');
const materialCards = document.querySelectorAll('#materialCards .material-card');
const materialCustomSelect = document.getElementById('materialCustomSelect');
const materialCustomOptions = document.getElementById('materialCustomOptions');
const materialSelectNative = document.getElementById('materialSelectNative');
const langButtons = document.querySelectorAll('.lang-option');

if (materialViewElement && ditherComparisonSection) {
  const materialMobileActions = materialViewElement.querySelector('.mobile-action-stack');
  materialViewElement.insertBefore(ditherComparisonSection, materialMobileActions || null);
}

const LANG_DATA = {
  "en": {
    "flag": "🇬🇧",
    "name": "English",
    "locale": "en"
  },
  "cs": {
    "flag": "🇨🇿",
    "name": "Čeština",
    "locale": "cs"
  },
  "de": {
    "flag": "🇩🇪",
    "name": "Deutsch",
    "locale": "de"
  },
  "es": {
    "flag": "🇪🇸",
    "name": "Español",
    "locale": "es"
  },
  "fr": {
    "flag": "🇫🇷",
    "name": "Français",
    "locale": "fr"
  },
  "hi": {
    "flag": "🇮🇳",
    "name": "हिन्दी",
    "locale": "hi"
  },
  "it": {
    "flag": "🇮🇹",
    "name": "Italiano",
    "locale": "it"
  },
  "ja": {
    "flag": "🇯🇵",
    "name": "日本語",
    "locale": "ja"
  },
  "ko": {
    "flag": "🇰🇷",
    "name": "한국어",
    "locale": "ko"
  },
  "pl": {
    "flag": "🇵🇱",
    "name": "Polski",
    "locale": "pl"
  },
  "pt-br": {
    "flag": "🇧🇷",
    "name": "Português (Brasil)",
    "locale": "pt-BR"
  },
  "ru": {
    "flag": "🇷🇺",
    "name": "Русский",
    "locale": "ru"
  },
  "tr": {
    "flag": "🇹🇷",
    "name": "Türkçe",
    "locale": "tr"
  },
  "zh": {
    "flag": "🇨🇳",
    "name": "简体中文",
    "locale": "zh-CN"
  }
};
const langSwitcher = document.getElementById('langSwitcher');
const langCurrentButton = document.getElementById('langCurrentButton');
const langCurrentFlag = document.getElementById('langCurrentFlag');
const langCurrentName = document.getElementById('langCurrentName');
const langMenu = document.getElementById('langMenu');

function t(key) {
  const current = translations[currentLang];
  if (current && current[key] != null) return current[key];
  if (translations.en && translations.en[key] != null) return translations.en[key];
  return key;
}

function normalizeDpiValue(value) {
  const n = Number(String(value ?? '').trim().replace(',', '.'));
  return Number.isFinite(n) && n > 0 ? clamp(Math.round(n), 1, 2400) : DEFAULTS.customDpi;
}

function hasDpiOption(value) {
  return Array.from(dpi.options).some(option => option.value === String(value));
}

function isCustomDpiMode() {
  return dpi.value === 'custom';
}

function getCustomDpiValue() {
  return normalizeDpiValue(customDpi ? customDpi.value : DEFAULTS.customDpi);
}

function getDpiDisplayText() {
  if (isCustomDpiMode()) {
    return `${getCustomDpiValue()} DPI (${t('customDpiShort')})`;
  }

  const selectedOption = dpi.options[dpi.selectedIndex] || dpi.options[0];
  return selectedOption ? selectedOption.textContent : `${DEFAULTS.dpi} DPI`;
}

function updateCustomDpiVisibility() {
  if (!customDpiWrap) return;
  customDpiWrap.style.display = isCustomDpiMode() ? 'block' : 'none';
}

function setDpiValue(value) {
  const normalized = normalizeDpiValue(value);
  const stringValue = String(normalized);

  if (hasDpiOption(stringValue)) {
    dpi.value = stringValue;
  } else {
    dpi.value = 'custom';
    if (customDpi) customDpi.value = stringValue;
  }

  updateCustomDpiVisibility();
  syncCustomDpiSelect();
}

function syncCustomDpiSelect() {
  if (!dpiCustomValue || !dpiCustomOptions) return;

  dpiCustomValue.textContent = getDpiDisplayText();

  dpiCustomOptions.querySelectorAll('.custom-select-option').forEach(optionBtn => {
    const isSelected = optionBtn.dataset.value === dpi.value;
    optionBtn.classList.toggle('selected', isSelected);
    optionBtn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
  });
}

function closeCustomDpiSelect() {
  if (!dpiCustomSelect || !dpiCustomButton) return;
  dpiCustomSelect.classList.remove('open');
  dpiCustomButton.setAttribute('aria-expanded', 'false');
}

function openCustomDpiSelect() {
  if (!dpiCustomSelect || !dpiCustomButton) return;
  dpiCustomSelect.classList.add('open');
  dpiCustomButton.setAttribute('aria-expanded', 'true');
}

function toggleCustomDpiSelect() {
  if (!dpiCustomSelect) return;
  if (dpiCustomSelect.classList.contains('open')) {
    closeCustomDpiSelect();
  } else {
    openCustomDpiSelect();
  }
}

function selectCustomDpiValue(value) {
  const changed = dpi.value !== value;

  dpi.value = value;
  updateCustomDpiVisibility();
  syncCustomDpiSelect();
  closeCustomDpiSelect();

  if (value === 'custom' && customDpi) {
    setTimeout(() => customDpi.focus(), 0);
  }

  if (changed) {
    dpi.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

function buildCustomDpiSelect() {
  if (!dpi || !dpiCustomSelect || !dpiCustomButton || !dpiCustomOptions) return;

  dpiCustomOptions.innerHTML = '';

  Array.from(dpi.options).forEach(option => {
    const li = document.createElement('li');
    li.setAttribute('role', 'presentation');

    const optionBtn = document.createElement('button');
    optionBtn.type = 'button';
    optionBtn.className = 'custom-select-option';
    optionBtn.dataset.value = option.value;
    optionBtn.textContent = option.textContent;
    optionBtn.setAttribute('role', 'option');
    optionBtn.addEventListener('click', () => selectCustomDpiValue(option.value));

    li.appendChild(optionBtn);
    dpiCustomOptions.appendChild(li);
  });

  dpiCustomButton.addEventListener('click', toggleCustomDpiSelect);

  dpiCustomButton.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCustomDpiSelect();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      openCustomDpiSelect();
      const selected = dpiCustomOptions.querySelector('.custom-select-option.selected') || dpiCustomOptions.querySelector('.custom-select-option');
      if (selected) selected.focus();
    }

    if (e.key === 'Escape') closeCustomDpiSelect();
  });

  dpiCustomOptions.addEventListener('keydown', e => {
    const options = Array.from(dpiCustomOptions.querySelectorAll('.custom-select-option'));
    const currentIndex = options.indexOf(document.activeElement);

    if (e.key === 'Escape') {
      closeCustomDpiSelect();
      dpiCustomButton.focus();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = options[Math.min(options.length - 1, currentIndex + 1)] || options[0];
      if (next) next.focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = options[Math.max(0, currentIndex - 1)] || options[options.length - 1];
      if (prev) prev.focus();
    }

    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.dataset.value) {
      e.preventDefault();
      selectCustomDpiValue(document.activeElement.dataset.value);
      dpiCustomButton.focus();
    }
  });

  document.addEventListener('click', e => {
    if (!dpiCustomSelect.contains(e.target)) closeCustomDpiSelect();
  });

  syncCustomDpiSelect();
}


function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
  } catch (e) {}
  try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  } catch (e) {}
  return 'dark';
}

function applyTheme(theme, options = {}) {
  const selectedTheme = theme === 'light' ? 'light' : 'dark';
  document.body.dataset.theme = selectedTheme;
  document.documentElement.dataset.theme = selectedTheme;

  if (brandLogo) {
    brandLogo.src = selectedTheme === 'light' ? '/logo-light.png' : '/logo.png';
  }

  themeColorMetas.forEach(meta => {
    meta.setAttribute('content', selectedTheme === 'light' ? '#f5f7fa' : '#09090d');
  });

  if (themeToggleBtn && themeToggleLabel) {
    const nextLabel = selectedTheme === 'light' ? t('darkMode') : t('lightMode');
    const ariaLabel = selectedTheme === 'light' ? t('switchToDarkMode') : t('switchToLightMode');
    themeToggleLabel.textContent = nextLabel;
    themeToggleBtn.setAttribute('aria-label', ariaLabel);
    themeToggleBtn.setAttribute('aria-pressed', selectedTheme === 'light' ? 'true' : 'false');
  }

  if (options.save !== false) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    } catch (e) {}
  }
}

function toggleTheme() {
  const currentTheme = document.body.dataset.theme === 'light' ? 'light' : 'dark';
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

function applyTranslations() {
  const languageData = LANG_DATA[currentLang] || LANG_DATA.en;
  document.documentElement.lang = languageData.locale;

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', localeMap[currentLang] || 'en_US');

  if (i18nLoaded) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      el.innerHTML = t(key);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.dataset.i18nAriaLabel;
      el.setAttribute('aria-label', t(key));
    });
  }

  const originalImg = document.getElementById('emptyOriginalImg');
  const resultImg = document.getElementById('emptyResultImg');
  if (originalImg) originalImg.alt = t('emptyOriginalAlt');
  if (resultImg) resultImg.alt = t('emptyResultAlt');
  if (brandLogo) {
    brandLogo.alt = t('logoAlt');
    const brandLink = brandLogo.closest('a');
    if (brandLink) brandLink.href = currentLang === 'en' ? 'https://photoengraving.online/' : `https://photoengraving.online/${currentLang}/`;
  }

  const customDpiOption = dpi ? dpi.querySelector('option[value="custom"]') : null;
  const customDpiButton = dpiCustomOptions ? dpiCustomOptions.querySelector('[data-value="custom"]') : null;
  if (customDpiOption) customDpiOption.textContent = t('customDpiOption');
  if (customDpiButton) customDpiButton.textContent = t('customDpiOption');
  if (langSwitcher) langSwitcher.setAttribute('aria-label', t('languageSelectorAria'));
  if (langMenu) langMenu.setAttribute('aria-label', t('chooseLanguageAria'));

  const localizedAria = {
    cropCloseBtn: 'closeCropAria',
    cropAspectOptions: 'cropAspectAria',
    cropCanvas: 'cropCanvasAria',
    canvasDitherFloyd: 'floydPreviewAria',
    canvasDitherAtkinson: 'atkinsonPreviewAria',
    canvasDitherJarvis: 'jarvisPreviewAria',
    canvasDitherOrdered: 'orderedPreviewAria'
  };
  Object.entries(localizedAria).forEach(([id, key]) => {
    const element = document.getElementById(id);
    if (element) element.setAttribute('aria-label', t(key));
  });

  applyTheme(document.body.dataset.theme || getStoredTheme(), { save: false });
  updateLangDropdown(currentLang);

  updateSizeInfo();
  syncCustomDpiSelect();
  updateMaterialPreviewLabel();
  updateSeoMeta();
}


function closeLangDropdown() {
  if (!langSwitcher || !langCurrentButton) return;
  langSwitcher.classList.remove('open');
  langCurrentButton.setAttribute('aria-expanded', 'false');
}

function openLangDropdown() {
  if (!langSwitcher || !langCurrentButton) return;
  langSwitcher.classList.add('open');
  langCurrentButton.setAttribute('aria-expanded', 'true');
}

function toggleLangDropdown() {
  if (!langSwitcher) return;
  if (langSwitcher.classList.contains('open')) {
    closeLangDropdown();
  } else {
    openLangDropdown();
  }
}

function updateLangDropdown(lang) {
  const data = LANG_DATA[lang] || LANG_DATA.en;

  if (langCurrentFlag) langCurrentFlag.textContent = data.flag;
  if (langCurrentName) langCurrentName.textContent = data.name;
  if (langCurrentButton) langCurrentButton.setAttribute('aria-label', t('currentLanguageAria').replace('{name}', data.name));

  langButtons.forEach(btn => {
    const optionData = LANG_DATA[btn.dataset.lang];
    if (optionData) {
      const flag = btn.querySelector('.lang-option-flag');
      const text = btn.querySelector('.lang-option-text');
      if (flag) flag.textContent = optionData.flag;
      if (text) text.textContent = optionData.name;
      btn.setAttribute('aria-label', optionData.name);
      btn.setAttribute('title', optionData.name);
    }
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    if (isActive) {
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.removeAttribute('aria-current');
    }
  });
}

function syncMaterialSelect() {
  if (!materialSelectNative || !materialCustomOptions) return;

  materialSelectNative.value = currentMaterial && MATERIALS[currentMaterial] ? currentMaterial : '';

  materialCustomOptions.querySelectorAll('.custom-select-option').forEach(optionBtn => {
    const isSelected = optionBtn.dataset.value === materialSelectNative.value;
    optionBtn.classList.toggle('selected', isSelected);
    optionBtn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
  });
}

function closeMaterialSelect() {
  if (!materialCustomSelect || !btnMaterial) return;
  materialCustomSelect.classList.remove('open');
  btnMaterial.setAttribute('aria-expanded', 'false');
}

function openMaterialSelect() {
  if (!materialCustomSelect || !btnMaterial) return;
  materialCustomSelect.classList.add('open');
  btnMaterial.setAttribute('aria-expanded', 'true');
}

function toggleMaterialSelect() {
  if (!materialCustomSelect) return;
  if (materialCustomSelect.classList.contains('open')) {
    closeMaterialSelect();
  } else {
    openMaterialSelect();
  }
}

function chooseMaterialValue(value) {
  if (!materialSelectNative || !value) return;

  materialSelectNative.value = value;
  syncMaterialSelect();
  closeMaterialSelect();
  setMaterialPreview(value, { force: true });
}

function buildMaterialSelect() {
  if (!materialSelectNative || !materialCustomSelect || !btnMaterial || !materialCustomOptions) return;

  materialCustomOptions.innerHTML = '';

  Array.from(materialSelectNative.options).forEach(option => {
    if (!option.value) return;

    const li = document.createElement('li');
    li.setAttribute('role', 'presentation');

    const optionBtn = document.createElement('button');
    optionBtn.type = 'button';
    optionBtn.className = 'custom-select-option';
    optionBtn.dataset.value = option.value;
    optionBtn.textContent = option.textContent.trim();
    optionBtn.setAttribute('role', 'option');
    optionBtn.addEventListener('click', () => chooseMaterialValue(option.value));

    li.appendChild(optionBtn);
    materialCustomOptions.appendChild(li);
  });

  btnMaterial.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      openMaterialSelect();
      const selected = materialCustomOptions.querySelector('.custom-select-option.selected') || materialCustomOptions.querySelector('.custom-select-option');
      if (selected) selected.focus();
    }

    if (e.key === 'Escape') closeMaterialSelect();
  });

  materialCustomOptions.addEventListener('keydown', e => {
    const options = Array.from(materialCustomOptions.querySelectorAll('.custom-select-option'));
    const currentIndex = options.indexOf(document.activeElement);

    if (e.key === 'Escape') {
      closeMaterialSelect();
      btnMaterial.focus();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = options[Math.min(options.length - 1, currentIndex + 1)] || options[0];
      if (next) next.focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = options[Math.max(0, currentIndex - 1)] || options[options.length - 1];
      if (prev) prev.focus();
    }

    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.dataset.value !== undefined) {
      e.preventDefault();
      chooseMaterialValue(document.activeElement.dataset.value);
    }
  });

  document.addEventListener('click', e => {
    if (materialCustomSelect && !materialCustomSelect.contains(e.target)) closeMaterialSelect();
  });

  syncMaterialSelect();
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;

  updateLangDropdown(lang);

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {}

  applyTranslations();
  syncCustomDpiSelect();
  buildMaterialSelect();
  syncMaterialSelect();
  loadCounter();
}

function loadStoredLanguage() {
  const pathLang = location.pathname.split('/').filter(Boolean)[0];
  if (pathLang && translations[pathLang]) {
    currentLang = pathLang;
    return;
  }

  const htmlLang = (document.documentElement.lang || '').toLowerCase();
  if (htmlLang && translations[htmlLang]) {
    currentLang = htmlLang;
    return;
  }

  try {
    const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (storedLang && translations[storedLang]) {
      currentLang = storedLang;
      return;
    }
  } catch (e) {}

  currentLang = 'en';
}

function setMetaContent(selector, content) {
  const el = document.querySelector(selector);
  if (el && content) el.setAttribute('content', content);
}

function toPlainText(value) {
  const container = document.createElement('div');
  container.innerHTML = value || '';
  return (container.textContent || '').replace(/\s+/g, ' ').trim();
}

function updateStructuredData(lang, url, seo) {
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  if (!schemaScript) return;

  try {
    const schema = JSON.parse(schemaScript.textContent);
    const graph = Array.isArray(schema['@graph']) ? schema['@graph'] : [];
    const locale = (LANG_DATA[lang] || LANG_DATA.en).locale;
    const byType = type => graph.find(item => item['@type'] === type);

    const website = byType('WebSite');
    if (website) website.inLanguage = locale;

    const webPage = byType('WebPage');
    if (webPage) {
      webPage['@id'] = `${url}#webpage`;
      webPage.url = url;
      webPage.name = seo.ogTitle;
      webPage.description = seo.description;
      webPage.inLanguage = locale;
      webPage.about = { '@id': `${url}#webapp` };
      webPage.keywords = [
        seo.ogTitle,
        t('seoIntroTitle'),
        t('sectionDithering'),
        t('btnMaterialPreview'),
        'LightBurn', 'XCS', 'LaserGRBL', 'EZCAD'
      ];
    }

    const webApp = byType('WebApplication');
    if (webApp) {
      webApp['@id'] = `${url}#webapp`;
      webApp.url = url;
      webApp.inLanguage = locale;
      webApp.description = toPlainText(t('geoWhatText'));
      webApp.alternateName = [t('heroTitle'), t('seoIntroTitle')];
      webApp.featureList = [
        t('seoCard1Title'),
        t('seoCard2Title'),
        t('seoCard3Title'),
        t('sectionCrop'),
        t('sectionDithering'),
        t('ditherComparisonTitle'),
        t('ditherRecommendationsTitle'),
        t('btnMaterialPreview'),
        t('labelCustomDpi'),
        t('downloadBtn'),
        t('downloadBmpBtn')
      ];
      webApp.potentialAction = { '@type': 'UseAction', target: url };
    }

    const howTo = byType('HowTo');
    if (howTo) {
      howTo['@id'] = `${url}#howto`;
      howTo.name = t('helpStepsTitle');
      howTo.description = toPlainText(t('helpIntroText'));
      howTo.inLanguage = locale;
      howTo.supply = [{ '@type': 'HowToSupply', name: t('sectionUpload') }];
      howTo.step = [1, 2, 3, 4].map(number => ({
        '@type': 'HowToStep',
        name: t(`helpStep${number}Title`),
        text: t(`helpStep${number}Text`)
      }));
    }

    const faq = byType('FAQPage');
    if (faq) {
      faq['@id'] = `${url}#faq`;
      faq.inLanguage = locale;
      faq.mainEntity = Array.from({ length: 9 }, (_, index) => {
        const number = index + 1;
        return {
          '@type': 'Question',
          name: t(`faq${number}Question`),
          acceptedAnswer: { '@type': 'Answer', text: t(`faq${number}Answer`) }
        };
      });
    }

    schemaScript.textContent = JSON.stringify(schema);
  } catch (error) {
    console.warn('Could not localize structured data.', error);
  }
}

function updateSeoMeta() {
  const pathLang = location.pathname.split('/').filter(Boolean)[0];
  const lang = translations[pathLang] ? pathLang : currentLang;
  const baseUrl = 'https://photoengraving.online';
  const localizedPath = lang === 'en' ? '/' : `/${lang}/`;
  const url = `${baseUrl}${localizedPath}`;
  const sourceSeo = SEO_DATA[lang] || SEO_DATA.en;
  const seo = {
    ...sourceSeo,
    ogTitle: sourceSeo.title.split('|')[0].trim(),
    ogDescription: sourceSeo.description
  };

  document.title = seo.title;
  setMetaContent('meta[name="description"]', seo.description);
  setMetaContent('meta[property="og:title"]', seo.ogTitle);
  setMetaContent('meta[property="og:description"]', seo.ogDescription);
  setMetaContent('meta[name="twitter:title"]', seo.ogTitle);
  setMetaContent('meta[name="twitter:description"]', seo.description);
  setMetaContent('meta[property="og:url"]', url);
  setMetaContent('meta[property="og:image:alt"]', `${seo.ogTitle} — PhotoEngraving.online`);
  setMetaContent('meta[name="twitter:image:alt"]', `${seo.ogTitle} — PhotoEngraving.online`);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', url);
  updateStructuredData(lang, url, seo);
}


if (langCurrentButton) {
  langCurrentButton.addEventListener('click', toggleLangDropdown);
  langCurrentButton.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleLangDropdown();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      openLangDropdown();
      const firstOption = langMenu ? langMenu.querySelector('.lang-option:not(.active)') : null;
      if (firstOption) firstOption.focus();
    }

    if (e.key === 'Escape') closeLangDropdown();
  });
}

if (langMenu) {
  langMenu.addEventListener('keydown', e => {
    const options = Array.from(langMenu.querySelectorAll('.lang-option:not(.active)'));
    const currentIndex = options.indexOf(document.activeElement);

    if (e.key === 'Escape') {
      closeLangDropdown();
      if (langCurrentButton) langCurrentButton.focus();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = options[Math.min(options.length - 1, currentIndex + 1)] || options[0];
      if (next) next.focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = options[Math.max(0, currentIndex - 1)] || options[options.length - 1];
      if (prev) prev.focus();
    }
  });
}

document.addEventListener('click', e => {
  if (langSwitcher && !langSwitcher.contains(e.target)) closeLangDropdown();
});

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    try { localStorage.setItem(LANG_STORAGE_KEY, btn.dataset.lang); } catch (e) {}
  });
});

btnResult.addEventListener('click', () => setViewMode('result'));
btnCompare.addEventListener('click', () => setViewMode('compare'));
if (btnMaterial) btnMaterial.addEventListener('click', () => {
  toggleMaterialSelect();
});

const sliderPairs = [
  ['brightness', 'brightnessVal'],
  ['contrast', 'contrastVal'],
  ['gamma', 'gammaVal'],
  ['sharpness', 'sharpnessVal'],
  ['outputWidthSlider', 'outputWidthSliderVal']
];

function showStatus(message, type = 'info') {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.dataset.type = type;
  statusMessage.classList.add('visible');

  clearTimeout(showStatus.timer);
  showStatus.timer = setTimeout(() => {
    statusMessage.classList.remove('visible');
    statusMessage.textContent = '';
    statusMessage.dataset.type = 'info';
  }, type === 'error' ? 6000 : 4000);
}

function makeKeyboardClickable(el, handler) {
  if (!el || typeof handler !== 'function') return;
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');
  el.addEventListener('click', handler);
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler(e);
    }
  });
}

function scrollToControls() {
  if (!editorControlsColumn) return;
  editorControlsColumn.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showDemoNotice(isDemo) {
  const demoNotice = document.getElementById('demoNotice');
  if (!demoNotice) return;
  demoNotice.style.display = isDemo ? 'block' : 'none';
}

function getFullImageRect() {
  if (!originalImage) return null;
  return {
    x: 0,
    y: 0,
    width: originalImage.width,
    height: originalImage.height
  };
}

function cloneRect(rect) {
  return rect ? {
    x: rect.x,
    y: rect.y,
    width: rect.width,
    height: rect.height
  } : null;
}

function normalizeCropRect(rect) {
  if (!originalImage || !rect) return null;

  const minSize = Math.max(4, Math.min(originalImage.width, originalImage.height) * 0.01);
  let x = Number(rect.x);
  let y = Number(rect.y);
  let width = Number(rect.width);
  let height = Number(rect.height);

  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(width) || !Number.isFinite(height)) {
    return getFullImageRect();
  }

  if (width < 0) {
    x += width;
    width = Math.abs(width);
  }

  if (height < 0) {
    y += height;
    height = Math.abs(height);
  }

  width = Math.max(minSize, width);
  height = Math.max(minSize, height);

  x = clamp(x, 0, Math.max(0, originalImage.width - width));
  y = clamp(y, 0, Math.max(0, originalImage.height - height));

  width = clamp(width, minSize, originalImage.width - x);
  height = clamp(height, minSize, originalImage.height - y);

  return { x, y, width, height };
}

function getCropAspectRatio() {
  if (!originalImage) return null;

  if (cropAspectMode === 'square') return 1;

  if (cropAspectMode === 'original') {
    return originalImage.width / Math.max(1, originalImage.height);
  }

  return null;
}

function fitRectToAspect(rect, aspectRatio, anchor = 'center') {
  if (!originalImage || !rect || !aspectRatio) return normalizeCropRect(rect);

  let normalized = normalizeCropRect(rect);
  if (!normalized) return null;

  let { x, y, width, height } = normalized;
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const currentRatio = width / Math.max(1, height);

  if (currentRatio > aspectRatio) {
    width = height * aspectRatio;
  } else {
    height = width / aspectRatio;
  }

  if (anchor === 'topleft') {
    x = normalized.x;
    y = normalized.y;
  } else {
    x = centerX - width / 2;
    y = centerY - height / 2;
  }

  if (x < 0) x = 0;
  if (y < 0) y = 0;

  if (x + width > originalImage.width) x = originalImage.width - width;
  if (y + height > originalImage.height) y = originalImage.height - height;

  return normalizeCropRect({ x, y, width, height });
}

function setCropAspectMode(mode) {
  cropAspectMode = ['free', 'original', 'square'].includes(mode) ? mode : 'free';

  cropAspectButtons.forEach(btn => {
    const active = btn.dataset.cropAspect === cropAspectMode;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  const ratio = getCropAspectRatio();
  if (ratio && originalImage) {
    cropEditorRect = fitRectToAspect(cropEditorRect || cropRect || getFullImageRect(), ratio);
    drawCropEditor();
  }
}

function makeAspectRectFromPoints(startPoint, point, aspectRatio) {
  if (!originalImage || !aspectRatio) {
    return normalizeCropRect({
      x: Math.min(startPoint.x, point.x),
      y: Math.min(startPoint.y, point.y),
      width: Math.abs(point.x - startPoint.x),
      height: Math.abs(point.y - startPoint.y)
    });
  }

  const dx = point.x - startPoint.x;
  const dy = point.y - startPoint.y;
  const signX = dx < 0 ? -1 : 1;
  const signY = dy < 0 ? -1 : 1;

  let width = Math.abs(dx);
  let height = Math.abs(dy);

  if (width / Math.max(1, height) > aspectRatio) {
    height = width / aspectRatio;
  } else {
    width = height * aspectRatio;
  }

  let x = signX < 0 ? startPoint.x - width : startPoint.x;
  let y = signY < 0 ? startPoint.y - height : startPoint.y;

  if (x < 0) {
    width += x;
    x = 0;
    height = width / aspectRatio;
    if (signY < 0) y = startPoint.y - height;
  }

  if (y < 0) {
    height += y;
    y = 0;
    width = height * aspectRatio;
    if (signX < 0) x = startPoint.x - width;
  }

  if (x + width > originalImage.width) {
    width = originalImage.width - x;
    height = width / aspectRatio;
    if (signY < 0) y = startPoint.y - height;
  }

  if (y + height > originalImage.height) {
    height = originalImage.height - y;
    width = height * aspectRatio;
    if (signX < 0) x = startPoint.x - width;
  }

  return normalizeCropRect({ x, y, width, height });
}

function resizeAspectRect(start, action, point, aspectRatio) {
  if (!originalImage || !aspectRatio) return null;

  let fixedX = start.x;
  let fixedY = start.y;

  if (action.includes('l')) fixedX = start.x + start.width;
  if (action.includes('t')) fixedY = start.y + start.height;

  return makeAspectRectFromPoints(
    { x: fixedX, y: fixedY },
    point,
    aspectRatio
  );
}

function isFullCropRect(rect) {
  if (!originalImage || !rect) return true;

  return rect.x <= 1 &&
    rect.y <= 1 &&
    Math.abs(rect.width - originalImage.width) <= 1 &&
    Math.abs(rect.height - originalImage.height) <= 1;
}

function getActiveSourceRect() {
  const full = getFullImageRect();
  if (!full) return null;

  const normalized = normalizeCropRect(cropRect);
  return normalized && !isFullCropRect(normalized) ? normalized : full;
}

function getCropSignature() {
  if (!originalImage || !cropRect) return 'full';

  const r = normalizeCropRect(cropRect);
  if (!r || isFullCropRect(r)) return 'full';

  return [
    Math.round(r.x),
    Math.round(r.y),
    Math.round(r.width),
    Math.round(r.height)
  ].join(',');
}

function fitOutputWidthToActiveSource(options = {}) {
  const sourceRect = getActiveSourceRect();
  if (!sourceRect || !outputWidthMm) return;

  const sourceWidthPx = Math.max(1, Math.round(sourceRect.width));
  const currentWidthPx = getOutputWidthPx();

  if (currentWidthPx <= sourceWidthPx) return;

  const newWidthMm = pxToMm(sourceWidthPx, getDpiValue());
  outputWidthMm.value = formatNumberInput(newWidthMm);
  lastValidOutputWidthMm = newWidthMm;

  syncSliderFromMm();
  updateSizeInfo();

  if (!options.skipSave) saveSettings();
}

function setOutputWidthToActiveSource(options = {}) {
  const sourceRect = getActiveSourceRect();
  if (!sourceRect || !outputWidthMm) return;

  const sourceWidthPx = Math.max(1, Math.round(sourceRect.width));
  const targetWidthPx = Math.min(sourceWidthPx, DEFAULTS.outputWidthPx);
  const newWidthMm = pxToMm(targetWidthPx, getDpiValue());

  outputWidthMm.value = formatNumberInput(newWidthMm);
  lastValidOutputWidthMm = newWidthMm;

  ensureOutputWidthSliderMax(sourceWidthPx);
  syncSliderFromMm();
  updateSizeInfo();

  if (!options.skipSave) saveSettings();
}

function updateCropInfo() {
  // The visible crop status line was intentionally removed from the UI.
}

function getCropCanvasImagePoint(e) {
  if (!cropCanvas || !originalImage) return { x: 0, y: 0 };

  const rect = cropCanvas.getBoundingClientRect();
  const scaleX = cropCanvas.width / Math.max(1, rect.width);
  const scaleY = cropCanvas.height / Math.max(1, rect.height);
  const canvasX = (e.clientX - rect.left) * scaleX;
  const canvasY = (e.clientY - rect.top) * scaleY;

  return {
    x: clamp(canvasX / cropEditorScale, 0, originalImage.width),
    y: clamp(canvasY / cropEditorScale, 0, originalImage.height)
  };
}

function drawCropEditor() {
  if (!cropCanvas || !originalImage) return;

  const ctx = cropCanvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, cropCanvas.width, cropCanvas.height);
  ctx.drawImage(originalImage, 0, 0, cropCanvas.width, cropCanvas.height);

  const rect = normalizeCropRect(cropEditorRect || cropRect || getFullImageRect());
  cropEditorRect = rect;

  const x = rect.x * cropEditorScale;
  const y = rect.y * cropEditorScale;
  const w = rect.width * cropEditorScale;
  const h = rect.height * cropEditorScale;

  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.58)';
  ctx.fillRect(0, 0, cropCanvas.width, cropCanvas.height);
  ctx.clearRect(x, y, w, h);
  ctx.drawImage(originalImage, rect.x, rect.y, rect.width, rect.height, x, y, w, h);

  ctx.strokeStyle = '#f97316';
  ctx.lineWidth = 2;
  ctx.strokeRect(x + 1, y + 1, Math.max(1, w - 2), Math.max(1, h - 2));

  ctx.strokeStyle = 'rgba(255,255,255,0.52)';
  ctx.lineWidth = 1;
  for (let i = 1; i <= 2; i++) {
    const gx = x + (w * i / 3);
    const gy = y + (h * i / 3);
    ctx.beginPath();
    ctx.moveTo(gx, y);
    ctx.lineTo(gx, y + h);
    ctx.moveTo(x, gy);
    ctx.lineTo(x + w, gy);
    ctx.stroke();
  }

  const handleSize = 12;
  ctx.fillStyle = '#f97316';
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  [
    [x, y],
    [x + w, y],
    [x, y + h],
    [x + w, y + h]
  ].forEach(([hx, hy]) => {
    ctx.beginPath();
    ctx.rect(hx - handleSize / 2, hy - handleSize / 2, handleSize, handleSize);
    ctx.fill();
    ctx.stroke();
  });

  ctx.restore();
}

function renderCropEditor() {
  if (!cropCanvas || !cropCanvasShell || !originalImage) return;

  const shellWidth = Math.max(260, cropCanvasShell.clientWidth - 24);
  const maxWidth = Math.min(shellWidth, 920);
  const maxHeight = Math.min(Math.max(260, window.innerHeight * 0.58), 620);

  cropEditorScale = Math.min(maxWidth / originalImage.width, maxHeight / originalImage.height, 1);
  cropCanvas.width = Math.max(1, Math.round(originalImage.width * cropEditorScale));
  cropCanvas.height = Math.max(1, Math.round(originalImage.height * cropEditorScale));
  cropCanvas.style.width = `${cropCanvas.width}px`;
  cropCanvas.style.height = `${cropCanvas.height}px`;

  drawCropEditor();
}

function getCropActionAtPoint(point) {
  const rect = normalizeCropRect(cropEditorRect || cropRect || getFullImageRect());
  const handle = 14 / Math.max(cropEditorScale, 0.001);
  const left = rect.x;
  const right = rect.x + rect.width;
  const top = rect.y;
  const bottom = rect.y + rect.height;

  const nearLeft = Math.abs(point.x - left) <= handle;
  const nearRight = Math.abs(point.x - right) <= handle;
  const nearTop = Math.abs(point.y - top) <= handle;
  const nearBottom = Math.abs(point.y - bottom) <= handle;

  if (nearLeft && nearTop) return 'resize-tl';
  if (nearRight && nearTop) return 'resize-tr';
  if (nearLeft && nearBottom) return 'resize-bl';
  if (nearRight && nearBottom) return 'resize-br';

  if (point.x >= left && point.x <= right && point.y >= top && point.y <= bottom) {
    return 'move';
  }

  return 'draw';
}

function updateCropDrag(point) {
  if (!cropDragState || !originalImage) return;

  const start = cropDragState.startRect;
  const minSize = Math.max(8, Math.min(originalImage.width, originalImage.height) * 0.02);
  const dx = point.x - cropDragState.startPoint.x;
  const dy = point.y - cropDragState.startPoint.y;

  if (cropDragState.action === 'move') {
    cropEditorRect = {
      x: clamp(start.x + dx, 0, Math.max(0, originalImage.width - start.width)),
      y: clamp(start.y + dy, 0, Math.max(0, originalImage.height - start.height)),
      width: start.width,
      height: start.height
    };
    drawCropEditor();
    return;
  }

  if (cropDragState.action === 'draw') {
    cropEditorRect = makeAspectRectFromPoints(cropDragState.startPoint, point, getCropAspectRatio());
    drawCropEditor();
    return;
  }

  const aspectRatio = getCropAspectRatio();

  if (aspectRatio) {
    cropEditorRect = resizeAspectRect(start, cropDragState.action, point, aspectRatio);
    drawCropEditor();
    return;
  }

  let left = start.x;
  let top = start.y;
  let right = start.x + start.width;
  let bottom = start.y + start.height;

  if (cropDragState.action.includes('l')) left = clamp(point.x, 0, right - minSize);
  if (cropDragState.action.includes('r')) right = clamp(point.x, left + minSize, originalImage.width);
  if (cropDragState.action.includes('t')) top = clamp(point.y, 0, bottom - minSize);
  if (cropDragState.action.includes('b')) bottom = clamp(point.y, top + minSize, originalImage.height);

  cropEditorRect = normalizeCropRect({
    x: left,
    y: top,
    width: right - left,
    height: bottom - top
  });

  drawCropEditor();
}

function openCropModal() {
  if (!originalImage) {
    showStatus(t('alertUploadFirst'), 'error');
    return;
  }

  cropEditorRect = cloneRect(cropRect) || getFullImageRect();

  if (cropModalOverlay) {
    cropModalOverlay.classList.add('open');
    cropModalOverlay.setAttribute('aria-hidden', 'false');
  }

  setCropAspectMode(cropAspectMode);
  setTimeout(renderCropEditor, 0);
}

function closeCropModal() {
  cropDragState = null;

  if (cropModalOverlay) {
    cropModalOverlay.classList.remove('open');
    cropModalOverlay.setAttribute('aria-hidden', 'true');
  }
}

function applyCropFromModal() {
  if (!originalImage) return;

  const rect = normalizeCropRect(cropEditorRect || getFullImageRect());
  cropRect = rect && !isFullCropRect(rect)
    ? {
      x: Math.round(rect.x),
      y: Math.round(rect.y),
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    }
    : null;

  setOutputWidthToActiveSource();
  lastRenderedOutputSignature = '';
  updateCropInfo();
  updateSizeInfo();
  closeCropModal();

  if (originalImage) scheduleProcessImage();
}

function resetCrop(options = {}) {
  cropRect = null;
  cropEditorRect = getFullImageRect();
  setOutputWidthToActiveSource();
  lastRenderedOutputSignature = '';
  updateCropInfo();
  updateSizeInfo();

  if (options.redrawEditor) drawCropEditor();

  if (!options.skipProcess && originalImage) {
    scheduleProcessImage();
  }
}

function handleCropPointerDown(e) {
  if (!originalImage || !cropCanvas) return;

  e.preventDefault();
  const point = getCropCanvasImagePoint(e);
  const action = getCropActionAtPoint(point);

  cropDragState = {
    action,
    startPoint: point,
    startRect: cloneRect(cropEditorRect || cropRect || getFullImageRect())
  };

  cropCanvas.setPointerCapture(e.pointerId);
}

function handleCropPointerMove(e) {
  if (!cropDragState) return;
  e.preventDefault();
  updateCropDrag(getCropCanvasImagePoint(e));
}

function handleCropPointerUp(e) {
  if (!cropDragState) return;
  e.preventDefault();

  if (cropCanvas && cropCanvas.hasPointerCapture(e.pointerId)) {
    cropCanvas.releasePointerCapture(e.pointerId);
  }

  cropDragState = null;
  cropEditorRect = normalizeCropRect(cropEditorRect);
  drawCropEditor();
}

function getOutputMegapixels(widthPx = getOutputWidthPx()) {
  const heightPx = getOutputHeightPx(widthPx);
  if (!heightPx) return 0;
  return (widthPx * heightPx) / 1000000;
}

function getOutputSizeLabel(widthPx, heightPx) {
  return `${widthPx} × ${heightPx} px`;
}

function getCurrentRenderSignature(widthPx, heightPx) {
  return [
    originalImageToken,
    getCropSignature(),
    widthPx,
    heightPx,
    brightness.value,
    contrast.value,
    gamma.value,
    sharpness.value,
    ditherMode.value || DEFAULTS.ditherMode,
    invertColors.checked ? '1' : '0'
  ].join('|');
}

function showOutputTooLargeStatus(widthPx, heightPx, megapixels) {
  showStatus(
    t('alertOutputTooLarge')
      .replace('{size}', getOutputSizeLabel(widthPx, heightPx))
      .replace('{mp}', megapixels.toFixed(1)),
    'error'
  );
}

function canProcessOutputSize(widthPx, heightPx, options = {}) {
  const megapixels = (widthPx * heightPx) / 1000000;

  if (megapixels > HARD_OUTPUT_MAX_MEGAPIXELS) {
    showOutputTooLargeStatus(widthPx, heightPx, megapixels);
    return false;
  }

  if (!options.allowLarge && megapixels > LARGE_OUTPUT_CONFIRM_MEGAPIXELS) {
    const imageDimsEl = document.getElementById('imageDims');
    if (imageDimsEl) imageDimsEl.textContent = `${getOutputSizeLabel(widthPx, heightPx)} · ${t('previewPausedShort')}`;

    showStatus(
      t('statusLargePreviewSkipped').replace('{mp}', megapixels.toFixed(1)),
      'info'
    );
    updateSizeInfo();
    return false;
  }

  return true;
}

function shouldContinueLargeExport(widthPx = getOutputWidthPx()) {
  const heightPx = getOutputHeightPx(widthPx);
  if (!heightPx) return false;

  const megapixels = (widthPx * heightPx) / 1000000;

  if (megapixels > HARD_OUTPUT_MAX_MEGAPIXELS) {
    showOutputTooLargeStatus(widthPx, heightPx, megapixels);
    return false;
  }

  if (megapixels <= LARGE_OUTPUT_CONFIRM_MEGAPIXELS) return true;

  return confirm(t('confirmLargeOutput').replace('{mp}', megapixels.toFixed(1)));
}

if (dropZone && fileInput) makeKeyboardClickable(dropZone, () => fileInput.click());
if (topUploadBtn && fileInput) topUploadBtn.addEventListener('click', () => fileInput.click());
if (uploadCtaCard && fileInput) makeKeyboardClickable(uploadCtaCard, () => fileInput.click());
if (hintUploadLink && fileInput) hintUploadLink.addEventListener('click', () => fileInput.click());
if (cropOpenBtn) cropOpenBtn.addEventListener('click', openCropModal);
if (cropResetBtn) cropResetBtn.addEventListener('click', () => resetCrop());
if (cropCloseBtn) cropCloseBtn.addEventListener('click', closeCropModal);
if (cropCancelBtn) cropCancelBtn.addEventListener('click', closeCropModal);
if (cropApplyBtn) cropApplyBtn.addEventListener('click', applyCropFromModal);
if (cropResetModalBtn) cropResetModalBtn.addEventListener('click', () => {
  cropEditorRect = getFullImageRect();
  drawCropEditor();
});

if (cropModalOverlay) {
  cropModalOverlay.addEventListener('click', e => {
    if (e.target === cropModalOverlay) closeCropModal();
  });
}

if (cropCanvas) {
  cropCanvas.addEventListener('pointerdown', handleCropPointerDown);
  cropCanvas.addEventListener('pointermove', handleCropPointerMove);
  cropCanvas.addEventListener('pointerup', handleCropPointerUp);
  cropCanvas.addEventListener('pointercancel', handleCropPointerUp);
}

cropAspectButtons.forEach(btn => {
  btn.addEventListener('click', () => setCropAspectMode(btn.dataset.cropAspect));
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && cropModalOverlay && cropModalOverlay.classList.contains('open')) {
    closeCropModal();
  }
});

window.addEventListener('resize', () => {
  if (cropModalOverlay && cropModalOverlay.classList.contains('open')) {
    renderCropEditor();
  }
});


document.addEventListener('click', function(e) {
  const reuploadBtn = e.target.closest('#reuploadBtnResult, #reuploadBtnCompare, #reuploadBtnMaterial');
  if (reuploadBtn) {
    fileInput.click();
    return;
  }

  const mobileDownloadBtn = e.target.closest('#downloadBtnMobileResult, #downloadBtnMobileCompare, #downloadBtnMobileMaterial');
  if (mobileDownloadBtn) {
    downloadResult();
    return;
  }

  const mobileDownloadBmpBtn = e.target.closest('#downloadBmpBtnMobileResult, #downloadBmpBtnMobileCompare, #downloadBmpBtnMobileMaterial');
  if (mobileDownloadBmpBtn) {
    downloadBmpResult();
    return;
  }

  const adjustSettingsBtn = e.target.closest('#adjustSettingsBtnResult, #adjustSettingsBtnCompare, #adjustSettingsBtnMaterial');
  if (adjustSettingsBtn) {
    scrollToControls();
    return;
  }
});

fileInput.addEventListener('change', e => {
  if (e.target.files && e.target.files[0]) {
    loadFile(e.target.files[0]);
    e.target.value = '';
  }
});

if (dropZone) {
  dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
  });

  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]);
  });
}

presetCards.forEach(card => {
  makeKeyboardClickable(card, () => applyPreset(card.dataset.preset));
});

ditherCards.forEach(card => {
  makeKeyboardClickable(card, () => setDitherMode(card.dataset.dither, { markCustom: true }));
});

ditherApplyButtons.forEach(button => {
  button.addEventListener('click', () => {
    setDitherMode(button.dataset.applyDither, { markCustom: true });
  });
});

materialCards.forEach(card => {
  makeKeyboardClickable(card, () => toggleMaterialPreviewFromCard(card.dataset.material));
});

if (ditherMode) {
  ditherMode.value = DEFAULTS.ditherMode;
  setActiveDitherCard(ditherMode.value);
  ditherMode.addEventListener('change', () => {
    setDitherMode(ditherMode.value, { markCustom: true });
  });
}

if (invertColors) {
  invertColors.addEventListener('change', () => {
    markAsCustom();
    saveSettings();
    if (originalImage) scheduleProcessImage();
  });
}

dpi.addEventListener('change', () => {
  updateCustomDpiVisibility();
  syncCustomDpiSelect();
  syncSliderFromMm();
  updateSizeInfo();
  saveSettings();
  if (originalImage) scheduleProcessImage();
});

customDpi.addEventListener('input', () => {
  if (!isCustomDpiMode()) {
    dpi.value = 'custom';
    updateCustomDpiVisibility();
  }

  syncCustomDpiSelect();
  syncSliderFromMm({ preserveMmInput: true });
  updateSizeInfo();
  saveSettings();
  if (originalImage) scheduleProcessImage();
});

customDpi.addEventListener('blur', () => {
  customDpi.value = String(getCustomDpiValue());
  syncCustomDpiSelect();
  syncSliderFromMm();
  updateSizeInfo();
  saveSettings();
  if (originalImage) scheduleProcessImage();
});

outputWidthMm.addEventListener('input', () => {
  const value = getOutputWidthMmInputValue();

  // Allow the user to temporarily clear the field or type an incomplete value.
  // Do not immediately replace it while they are editing.
  if (value === null) return;

  lastValidOutputWidthMm = value;

  // While typing, never write a corrected/clamped value back into the mm field.
  // Otherwise intermediate values like "1" while entering "100" can be replaced
  // by the minimum pixel equivalent, e.g. 3.91 mm at 650 DPI.
  syncSliderFromMm({ preserveMmInput: true });
  updateSizeInfo();
  saveSettings();
  if (originalImage) scheduleProcessImage();
});

outputWidthMm.addEventListener('blur', () => {
  const value = getOutputWidthMmInputValue();

  if (value === null) {
    outputWidthMm.value = formatNumberInput(lastValidOutputWidthMm);
  } else {
    lastValidOutputWidthMm = value;
    outputWidthMm.value = formatNumberInput(value);
  }

  syncSliderFromMm();
  updateSizeInfo();
  saveSettings();
  if (originalImage) scheduleProcessImage();
});

outputWidthSlider.addEventListener('input', () => {
  syncMmFromSlider();
  updateSizeInfo();
  saveSettings();
  if (originalImage) scheduleProcessImage();
});

downloadBtn.addEventListener('click', downloadResult);
if (downloadBmpBtn) downloadBmpBtn.addEventListener('click', downloadBmpResult);
resetBtn.addEventListener('click', resetSettings);

[brightness, contrast, gamma, sharpness].forEach((el) => {
  el.addEventListener('input', () => {
    updateSlider(el);
    markAsCustom();
    saveSettings();
    if (originalImage) scheduleProcessImage();
  });
});

if (materialPower) {
  const handleMaterialPowerChange = () => {
    updateSlider(materialPower);
    saveSettings();
    updateMaterialPreviewFromCurrentCanvas();
  };
  materialPower.addEventListener('input', handleMaterialPowerChange);
  materialPower.addEventListener('change', handleMaterialPowerChange);
}

function setViewMode(mode) {
  if (!['result', 'compare', 'material'].includes(mode)) mode = 'compare';

  viewMode = mode;
  btnResult.classList.toggle('active', mode === 'result');
  btnCompare.classList.toggle('active', mode === 'compare');
  if (btnMaterial) btnMaterial.classList.toggle('active', mode === 'material');

  btnResult.setAttribute('aria-pressed', mode === 'result' ? 'true' : 'false');
  btnCompare.setAttribute('aria-pressed', mode === 'compare' ? 'true' : 'false');
  if (btnMaterial) btnMaterial.setAttribute('aria-pressed', mode === 'material' ? 'true' : 'false');

  document.getElementById('resultView').style.display = mode === 'result' ? 'block' : 'none';
  document.getElementById('compareView').style.display = mode === 'compare' ? 'block' : 'none';
  const materialView = document.getElementById('materialView');
  if (materialView) materialView.style.display = mode === 'material' ? 'block' : 'none';

  if (mode === 'material') updateMaterialPreviewFromCurrentCanvas();
}

function setActivePresetCard(key) {
  presetCards.forEach(card => {
    const isActive = card.dataset.preset === key;
    card.classList.toggle('active', isActive);
    card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function setActiveDitherCard(mode) {
  const selectedMode = DITHER_MODES.includes(mode) ? mode : DEFAULTS.ditherMode;
  ditherCards.forEach(card => {
    const isActive = card.dataset.dither === selectedMode;
    card.classList.toggle('active', isActive);
    card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  ditherComparisonCards.forEach(card => {
    const isActive = card.dataset.comparisonMode === selectedMode;
    card.classList.toggle('active', isActive);
  });

  ditherApplyButtons.forEach(button => {
    const isActive = button.dataset.applyDither === selectedMode;
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function setActiveMaterialCard(key) {
  const selectedMaterial = MATERIALS[key] ? key : null;

  materialCards.forEach(card => {
    const isActive = Boolean(selectedMaterial) && card.dataset.material === selectedMaterial;
    card.classList.toggle('active', isActive);
    card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function syncMaterialControls() {
  setActiveMaterialCard(currentMaterial);
  syncMaterialSelect();
}

function updateMaterialPreviewLabel() {
  const label = document.getElementById('materialPreviewLabel');
  const tip = document.getElementById('materialPreviewTip');

  if (!currentMaterial || !MATERIALS[currentMaterial]) {
    if (label) label.textContent = t('labelMaterialPreview');
    if (tip) tip.innerHTML = t('materialTipNone');
    return;
  }

  const material = MATERIALS[currentMaterial];

  if (label) {
    label.textContent = `${t('labelMaterialPreview')} · ${t(material.nameKey)}`;
  }

  if (tip) {
    const negativeHint = ['slate', 'blackAnodized'].includes(currentMaterial)
      ? ' <strong>Tip:</strong> Negative mode is often useful here because laser marks become lighter.'
      : '';
    tip.innerHTML = `${t(material.tipKey)}${negativeHint}`;
  }
}

function clearMaterialPreview(options = {}) {
  currentMaterial = null;
  syncMaterialControls();
  updateMaterialPreviewLabel();

  if (!options.skipSave) saveSettings();
  if (!options.keepView) setViewMode('result');
}

function setMaterialPreview(key, options = {}) {
  const normalizedKey = MATERIALS[key] ? key : null;

  if (!normalizedKey) {
    clearMaterialPreview(options);
    return;
  }

  if (!options.force && currentMaterial === normalizedKey) {
    syncMaterialControls();
    updateMaterialPreviewLabel();
    updateMaterialPreviewFromCurrentCanvas();
    if (!options.keepView) setViewMode('material');
    return;
  }

  currentMaterial = normalizedKey;
  syncMaterialControls();
  updateMaterialPreviewLabel();

  if (!options.skipSave) saveSettings();
  updateMaterialPreviewFromCurrentCanvas();
  if (!options.keepView) setViewMode('material');
}

function toggleMaterialPreviewFromCard(key) {
  const normalizedKey = MATERIALS[key] ? key : null;

  if (!normalizedKey) {
    clearMaterialPreview();
    return;
  }

  if (currentMaterial === normalizedKey) {
    clearMaterialPreview();
    return;
  }

  setMaterialPreview(normalizedKey);
}


function setDitherMode(mode, options = {}) {
  const selectedMode = DITHER_MODES.includes(mode) ? mode : DEFAULTS.ditherMode;
  if (ditherMode) ditherMode.value = selectedMode;
  setActiveDitherCard(selectedMode);

  if (options.markCustom) markAsCustom();
  saveSettings();
  if (originalImage) scheduleProcessImage();
}

function markAsCustom() {
  if (currentPreset !== 'custom') {
    currentPreset = 'custom';
    setActivePresetCard('custom');
  }
}

function applyPreset(key) {
  const p = PRESETS[key];
  if (!p) return;

  currentPreset = key;
  brightness.value = p.brightness;
  contrast.value = p.contrast;
  gamma.value = p.gamma;
  sharpness.value = p.sharpness;
  invertColors.checked = Boolean(p.invertColors);

  sliderPairs.forEach(([id]) => updateSlider(document.getElementById(id)));
  setActivePresetCard(key);
  saveSettings();

  if (originalImage) scheduleProcessImage();
}

function applyCurrentPresetValues() {
  const p = PRESETS[currentPreset] || PRESETS.normal;
  if (currentPreset === 'custom') return;

  brightness.value = p.brightness;
  contrast.value = p.contrast;
  gamma.value = p.gamma;
  sharpness.value = p.sharpness;
  invertColors.checked = Boolean(p.invertColors);
  sliderPairs.forEach(([id]) => updateSlider(document.getElementById(id)));
}

function resetCanvasInspectionState() {
  [canvasSingle, canvasCompareOrig, canvasCompareResult, canvasMaterialPreview].forEach(canvas => {
    if (!canvas) return;

    canvas.style.transform = '';

    const wrapper = canvas.parentElement;
    if (wrapper) {
      wrapper.classList.remove('zoomed', 'dragging');
      wrapper.scrollLeft = 0;
      wrapper.scrollTop = 0;
    }
  });

  const lens = document.getElementById('detailMagnifier');
  if (lens) lens.classList.remove('visible');
}


function initializeCanvasMagnifier() {
  const existingLens = document.getElementById('detailMagnifier');
  if (existingLens) existingLens.remove();

  const MAGNIFIER_ZOOM = 4;
  const canvases = [
    canvasSingle,
    canvasCompareOrig,
    canvasCompareResult,
    canvasMaterialPreview,
    ...Object.values(ditherComparisonCanvases)
  ].filter(Boolean);
  if (!canvases.length) return;

  const lens = document.createElement('div');
  lens.id = 'detailMagnifier';
  lens.className = 'detail-magnifier';
  lens.setAttribute('aria-hidden', 'true');

  const lensCanvas = document.createElement('canvas');
  lens.appendChild(lensCanvas);
  document.body.appendChild(lens);

  const lensCtx = lensCanvas.getContext('2d');
  if (!lensCtx) {
    lens.remove();
    return;
  }

  let activeCanvas = null;

  function getMagnifierSize() {
    return window.matchMedia('(max-width: 640px)').matches ? 190 : 270;
  }

  function prepareLensCanvas(size) {
    const dpr = window.devicePixelRatio || 1;
    const pixelSize = Math.round(size * dpr);

    lens.style.width = `${size}px`;
    lens.style.height = `${size}px`;

    if (lensCanvas.width !== pixelSize || lensCanvas.height !== pixelSize) {
      lensCanvas.width = pixelSize;
      lensCanvas.height = pixelSize;
    }

    lensCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lensCtx.imageSmoothingEnabled = false;
  }

  function positionLens(e, size) {
    const gap = 22;
    let left = e.clientX + gap;
    let top = e.clientY + gap;

    if (left + size + 8 > window.innerWidth) left = e.clientX - size - gap;
    if (top + size + 8 > window.innerHeight) top = e.clientY - size - gap;

    left = clamp(left, 8, Math.max(8, window.innerWidth - size - 8));
    top = clamp(top, 8, Math.max(8, window.innerHeight - size - 8));

    lens.style.left = `${left}px`;
    lens.style.top = `${top}px`;
  }

  function showMagnifier(e) {
    activeCanvas = e.currentTarget;
    if (!activeCanvas || !activeCanvas.width || !activeCanvas.height) return;

    lens.classList.add('visible');
    updateMagnifier(e);
  }

  function hideMagnifier() {
    lens.classList.remove('visible');
    activeCanvas = null;
  }

  function updateMagnifier(e) {
    const canvas = activeCanvas || e.currentTarget;
    if (!canvas || !canvas.width || !canvas.height) return;

    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const size = getMagnifierSize();
    prepareLensCanvas(size);
    positionLens(e, size);

    const sourceX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const sourceY = (e.clientY - rect.top) * (canvas.height / rect.height);
    const sourceW = Math.min(size / MAGNIFIER_ZOOM, canvas.width);
    const sourceH = Math.min(size / MAGNIFIER_ZOOM, canvas.height);
    const sx = clamp(sourceX - sourceW / 2, 0, Math.max(0, canvas.width - sourceW));
    const sy = clamp(sourceY - sourceH / 2, 0, Math.max(0, canvas.height - sourceH));

    lensCtx.clearRect(0, 0, size, size);
    lensCtx.imageSmoothingEnabled = false;
    lensCtx.drawImage(canvas, sx, sy, sourceW, sourceH, 0, 0, size, size);
  }

  canvases.forEach(canvas => {
    canvas.addEventListener('pointerenter', showMagnifier);
    canvas.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse' || activeCanvas === canvas) updateMagnifier(e);
    });
    canvas.addEventListener('pointerleave', hideMagnifier);

    canvas.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse') return;
      if (typeof canvas.setPointerCapture === 'function') {
        canvas.setPointerCapture(e.pointerId);
      }
      showMagnifier(e);
      e.preventDefault();
    });
    canvas.addEventListener('pointerup', hideMagnifier);
    canvas.addEventListener('pointercancel', hideMagnifier);
    canvas.addEventListener('lostpointercapture', hideMagnifier);
  });

  window.addEventListener('scroll', hideMagnifier, true);
  window.addEventListener('resize', hideMagnifier);
}

function scheduleProcessImage() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => {
    renderQueued = false;
    processImage().catch(err => console.error(err));
  });
}

function updateSlider(el) {
  const target =
    document.getElementById(el.id + 'Val') ||
    document.getElementById(el.id.replace('Slider', 'SliderVal'));

  if (!target) return;

  const step = el.step ? String(el.step) : '1';
  const decimals = step.includes('.') ? step.split('.')[1].length : 0;
  const value = Number(el.value).toFixed(decimals);

  if (el.id === 'outputWidthSlider') {
    target.textContent = `${value} px`;
  } else if (el.id === 'materialPower') {
    target.textContent = `${value}%`;
  } else {
    target.textContent = value;
  }
}

function loadStoredSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const s = JSON.parse(raw);

    if (s.preset && PRESETS[s.preset]) currentPreset = s.preset;
    currentMaterial = s.materialPreview && MATERIALS[s.materialPreview] ? s.materialPreview : null;
    if (s.brightness !== undefined) brightness.value = s.brightness;
    if (s.contrast !== undefined) contrast.value = s.contrast;
    if (s.gamma !== undefined) gamma.value = s.gamma;
    if (s.sharpness !== undefined) sharpness.value = s.sharpness;
    if (materialPower) materialPower.value = String(DEFAULTS.materialPower);
    ditherMode.value = DITHER_MODES.includes(s.ditherMode) ? s.ditherMode : DEFAULTS.ditherMode;
    setActiveDitherCard(ditherMode.value);
    if (s.invertColors !== undefined) invertColors.checked = Boolean(s.invertColors);
    if (s.customDpi !== undefined) customDpi.value = String(normalizeDpiValue(s.customDpi));
    if (s.dpiMode === 'custom') {
      dpi.value = 'custom';
      customDpi.value = String(normalizeDpiValue(s.dpi ?? s.customDpi));
    } else if (s.dpi) {
      setDpiValue(s.dpi);
    } else {
      updateCustomDpiVisibility();
      syncCustomDpiSelect();
    }
    if (s.outputWidthMm !== undefined) {
      outputWidthMm.value = formatNumberInput(Number(s.outputWidthMm));
    } else if (s.outputWidthPx !== undefined) {
      outputWidthMm.value = formatNumberInput(pxToMm(Number(s.outputWidthPx), getDpiValue()));
    } else {
      outputWidthMm.value = formatNumberInput(DEFAULTS.outputWidthMm);
    }
    lastValidOutputWidthMm = getOutputWidthMm();
    syncSliderFromMm();
  } catch (e) {}
}

function saveSettings() {
  const data = {
    preset: currentPreset,
    materialPreview: currentMaterial || '',
    brightness: Number(brightness.value),
    contrast: Number(contrast.value),
    gamma: Number(gamma.value),
    sharpness: Number(sharpness.value),
    ditherMode: ditherMode.value || DEFAULTS.ditherMode,
    invertColors: invertColors.checked,
    dpiMode: isCustomDpiMode() ? 'custom' : 'preset',
    dpiPreset: dpi.value,
    dpi: getDpiValue(),
    customDpi: getCustomDpiValue(),
    outputWidthMm: getOutputWidthMm(),
    outputWidthPx: getOutputWidthPx()
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
}

function resetSettings() {
  currentPreset = DEFAULTS.preset;
  cropRect = null;
  cropEditorRect = null;
  currentMaterial = null;
  syncMaterialControls();
  updateMaterialPreviewLabel();
  brightness.value = DEFAULTS.brightness;
  contrast.value = DEFAULTS.contrast;
  gamma.value = DEFAULTS.gamma;
  sharpness.value = DEFAULTS.sharpness;
  if (materialPower) materialPower.value = DEFAULTS.materialPower;
  ditherMode.value = DEFAULTS.ditherMode;
  setActiveDitherCard(ditherMode.value);
  invertColors.checked = DEFAULTS.invertColors;
  dpi.value = String(DEFAULTS.dpi);
  customDpi.value = String(DEFAULTS.customDpi);
  updateCustomDpiVisibility();
  syncCustomDpiSelect();
  outputWidthMm.value = formatNumberInput(DEFAULTS.outputWidthMm);
  lastValidOutputWidthMm = DEFAULTS.outputWidthMm;
  syncSliderFromMm();

  sliderPairs.forEach(([id]) => updateSlider(document.getElementById(id)));
  updateSizeInfo();
  setActivePresetCard(currentPreset);
  updateCropInfo();
  saveSettings();

  if (originalImage) scheduleProcessImage();
}

function showEditor() {
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('canvasArea').style.display = 'block';
}

function scrollToPreviewOnMobile() {
  if (window.innerWidth >= 1024) return;

  const target = document.getElementById('canvasArea');
  if (!target) return;

  setTimeout(() => {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 120);
}

function loadImageIntoEditor(img, switchToResult = false, targetDpi = null, isDemo = false) {
  if (originalImage && originalImage !== img && typeof originalImage.close === 'function') {
    try { originalImage.close(); } catch (e) {}
  }
  originalImage = img;
  cropRect = null;
  cropEditorRect = null;
  originalImageToken += 1;
  lastRenderedOutputSignature = '';
  showEditor();
  showDemoNotice(isDemo);
  updateCropInfo();

  applyCurrentPresetValues();
  setActivePresetCard(currentPreset);

  if (targetDpi !== null && targetDpi !== undefined) {
    setDpiValue(targetDpi);
  }

  setOutputWidthToActiveSource({ skipSave: true });
  updateSizeInfo();
  saveSettings();

  const isMobile = window.innerWidth < 1024;
  setViewMode(isMobile ? 'result' : (switchToResult ? 'result' : 'compare'));

  resetCanvasInspectionState();
  processImage().catch(err => console.error(err));

  if (isMobile && !isDemo) {
    scrollToPreviewOnMobile();
  }
}

function loadFile(file) {
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showStatus(t('alertInvalidFile'), 'error');
    return;
  }

  const loadViaImageElement = () => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      loadImageIntoEditor(img, true, null, false);
      showStatus(t('statusImageLoaded'), 'success');
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      showStatus(t('alertLoadFail'), 'error');
    };
    img.src = url;
  };

  if (typeof createImageBitmap === 'function') {
    // Decodes off the main thread and applies EXIF orientation.
    createImageBitmap(file, { imageOrientation: 'from-image' })
      .catch(() => createImageBitmap(file))
      .then(bitmap => {
        loadImageIntoEditor(bitmap, true, null, false);
        showStatus(t('statusImageLoaded'), 'success');
      })
      .catch(() => loadViaImageElement());
    return;
  }

  loadViaImageElement();
}

function loadDemoImage() {
  const img = new Image();
  let triedFallback = false;

  img.onload = () => {
    loadImageIntoEditor(img, false, null, true);
  };

  img.onerror = () => {
    if (!triedFallback) {
      triedFallback = true;
      img.src = PREVIEW_IMAGE_FALLBACK;
      return;
    }

    console.warn(t('demoLoadFail'));
  };

  img.src = PREVIEW_IMAGE_SMALL;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function roundTo(value, step) {
  return Math.round(value / step) * step;
}

function getDpiValue() {
  if (isCustomDpiMode()) return getCustomDpiValue();
  return Number(dpi.value) || DEFAULTS.dpi;
}

function getOutputWidthMaxPx() {
  const currentMax = Math.round(Number(outputWidthSlider.max) || OUTPUT_WIDTH_DEFAULT_MAX_PX);
  return clamp(currentMax, OUTPUT_WIDTH_DEFAULT_MAX_PX, OUTPUT_WIDTH_HARD_MAX_PX);
}

function ensureOutputWidthSliderMax(px) {
  const neededMax = Math.ceil((Math.round(Number(px) || 0)) / 10) * 10;
  const currentMax = getOutputWidthMaxPx();

  if (neededMax > currentMax) {
    outputWidthSlider.max = String(clamp(neededMax, OUTPUT_WIDTH_DEFAULT_MAX_PX, OUTPUT_WIDTH_HARD_MAX_PX));
  }
}

function getOutputWidthPx() {
  return clamp(Math.round(Number(outputWidthSlider.value) || 0), OUTPUT_WIDTH_MIN_PX, getOutputWidthMaxPx());
}

function getOutputWidthMmInputValue() {
  const raw = String(outputWidthMm.value || '').trim().replace(',', '.');
  if (raw === '') return null;

  const value = Number(raw);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function getOutputWidthMm() {
  const value = getOutputWidthMmInputValue();
  if (value !== null) {
    lastValidOutputWidthMm = value;
    return value;
  }

  return Number.isFinite(lastValidOutputWidthMm) && lastValidOutputWidthMm > 0
    ? lastValidOutputWidthMm
    : DEFAULTS.outputWidthMm;
}

function mmToPx(mm, dpiValue) {
  return Math.round((mm / 25.4) * dpiValue);
}

function pxToMm(px, dpiValue) {
  return (px / dpiValue) * 25.4;
}

function formatNumberInput(value) {
  if (!Number.isFinite(value)) value = DEFAULTS.outputWidthMm;
  return Number(value.toFixed(2)).toString();
}

function formatMm(mm) {
  return mm.toLocaleString(currentLang === 'cs' ? 'cs-CZ' : currentLang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function formatMmRounded(mm) {
  return Math.round(mm).toLocaleString(currentLang === 'cs' ? 'cs-CZ' : currentLang, {
    maximumFractionDigits: 0
  });
}

function syncSliderFromMm(options = {}) {
  const dpiValue = getDpiValue();
  let mm = getOutputWidthMm();
  let px = mmToPx(mm, dpiValue);

  ensureOutputWidthSliderMax(px);

  const clampedPx = clamp(px, OUTPUT_WIDTH_MIN_PX, getOutputWidthMaxPx());

  // Do not overwrite the millimeter field while the user is typing.
  // This keeps values editable: the user can erase the field and type 500 mm
  // without an intermediate value being replaced by the minimum pixel size.
  if (clampedPx !== px && !options.preserveMmInput) {
    mm = pxToMm(clampedPx, dpiValue);
    outputWidthMm.value = formatNumberInput(mm);
    lastValidOutputWidthMm = mm;
  }

  outputWidthSlider.value = clampedPx;
  updateSlider(outputWidthSlider);
}

function syncMmFromSlider() {
  const dpiValue = getDpiValue();
  const px = getOutputWidthPx();
  outputWidthSlider.value = px;
  outputWidthMm.value = formatNumberInput(pxToMm(px, dpiValue));
  updateSlider(outputWidthSlider);
}

function getOutputHeightPx(widthPx) {
  const sourceRect = getActiveSourceRect();
  if (!sourceRect || !sourceRect.width) return null;
  return Math.max(1, Math.round(sourceRect.height * widthPx / sourceRect.width));
}

function updateSizeInfo() {
  if (!outputWidthMm || !outputWidthSlider) return;

  const dpiValue = getDpiValue();
  const widthPx = getOutputWidthPx();
  const heightPx = getOutputHeightPx(widthPx);
  const widthMm = pxToMm(widthPx, dpiValue);

  if (heightPx) {
    const heightMm = pxToMm(heightPx, dpiValue);
    document.getElementById('sizeInfo').textContent = `${formatMmRounded(widthMm)} × ${formatMmRounded(heightMm)} mm`;
    document.getElementById('pixelInfo').textContent = `${widthPx} × ${heightPx} px @ ${dpiValue} DPI`;
  } else {
    document.getElementById('sizeInfo').textContent = `${formatMmRounded(widthMm)} mm`;
    document.getElementById('pixelInfo').textContent = `${widthPx} px @ ${dpiValue} DPI`;
  }
}

function renderDitherComparison() {
  if (!originalImage) return;

  const sourceRect = getActiveSourceRect();
  if (!sourceRect || !sourceRect.width || !sourceRect.height) return;

  const availableCanvases = Object.entries(ditherComparisonCanvases).filter(([, canvas]) => Boolean(canvas));
  if (!availableCanvases.length) return;

  try {
    const scale = Math.min(1, DITHER_COMPARISON_MAX_PX / Math.max(sourceRect.width, sourceRect.height));
    const w = Math.max(1, Math.round(sourceRect.width * scale));
    const h = Math.max(1, Math.round(sourceRect.height * scale));
    const sourceCanvas = document.createElement('canvas');
    sourceCanvas.width = w;
    sourceCanvas.height = h;

    const sourceCtx = sourceCanvas.getContext('2d', { willReadFrequently: true });
    if (!sourceCtx) return;

    sourceCtx.drawImage(
      originalImage,
      sourceRect.x,
      sourceRect.y,
      sourceRect.width,
      sourceRect.height,
      0,
      0,
      w,
      h
    );

    let baseImageData = sourceCtx.getImageData(0, 0, w, h);
    toGrayscale(baseImageData);
    applyBrightnessContrast(baseImageData, brightness.value, contrast.value);
    applyGamma(baseImageData, gamma.value);

    const sharp = parseFloat(sharpness.value);
    if (sharp > 0) baseImageData = applySharpen(baseImageData, w, h, sharp);

    availableCanvases.forEach(([mode, canvas]) => {
      const comparisonData = sourceCtx.createImageData(w, h);
      comparisonData.data.set(baseImageData.data);
      applyDithering(comparisonData, w, h, mode, FIXED_THRESHOLD);
      if (invertColors.checked) invertImageData(comparisonData);
      putImageDataToCanvas(canvas, comparisonData, w, h);
    });
  } catch (err) {
    console.warn('Dithering comparison could not be rendered.', err);
  }
}

let activeRenderToken = 0;

function drawSourceImageData(sourceRect, w, h) {
  const srcCanvas = document.createElement('canvas');
  srcCanvas.width = w;
  srcCanvas.height = h;
  const srcCtx = srcCanvas.getContext('2d', { willReadFrequently: true });
  if (!srcCtx) throw new Error('2D canvas context is not available.');
  srcCtx.drawImage(originalImage, sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height, 0, 0, w, h);
  return srcCtx.getImageData(0, 0, w, h);
}

function finishRender(imageData, w, h, sourceRect, renderSignature) {
  drawOriginalIntoCanvas(canvasCompareOrig, w, h, sourceRect);
  putImageDataToCanvas(canvasCompareResult, imageData, w, h);
  putImageDataToCanvas(canvasSingle, imageData, w, h);
  renderDitherComparison();
  updateMaterialPreviewFromCurrentCanvas();

  const imageDimsEl = document.getElementById('imageDims');
  if (imageDimsEl) imageDimsEl.textContent = getOutputSizeLabel(w, h);

  lastRenderedOutputSignature = renderSignature;
  updateSizeInfo();
}

/* Returns a Promise<boolean>: true when the output canvas was rendered. */
async function processImage(options = {}) {
  if (!originalImage) return false;

  const sourceRect = getActiveSourceRect();
  if (!sourceRect) return false;

  const w = getOutputWidthPx();
  const h = Math.max(1, Math.round(sourceRect.height * w / sourceRect.width));
  const renderSignature = getCurrentRenderSignature(w, h);

  if (!canProcessOutputSize(w, h, options)) {
    return false;
  }

  const token = ++activeRenderToken;
  const imageToken = originalImageToken;

  try {
    const params = getPipelineParams();
    let result = await runPipeline(drawSourceImageData(sourceRect, w, h), w, h, params);
    if (result === null) {
      // Worker unavailable – redo the work on the main thread.
      result = await runPipelineOnMainThread(drawSourceImageData(sourceRect, w, h), w, h, params);
    }

    // A newer render (or a new image) superseded this one – drop the stale result.
    if (token !== activeRenderToken || imageToken !== originalImageToken || !originalImage) return false;

    finishRender(result, w, h, sourceRect, renderSignature);
    return true;
  } catch (err) {
    console.error(err);
    if (token === activeRenderToken) {
      lastRenderedOutputSignature = '';
      showStatus(t('alertRenderFail'), 'error');
    }
    return false;
  }
}

function drawOriginalIntoCanvas(canvas, w, h, sourceRect = getActiveSourceRect()) {
  if (!canvas || !sourceRect) return;

  canvas.width = w;
  canvas.height = h;
  canvas.style.width = '100%';
  canvas.style.height = 'auto';

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(originalImage, sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height, 0, 0, w, h);
}

function putImageDataToCanvas(canvas, imageData, w, h) {
  canvas.width = w;
  canvas.height = h;
  canvas.style.width = '100%';
  canvas.style.height = 'auto';

  const ctx = canvas.getContext('2d');
  ctx.putImageData(imageData, 0, 0);
}

function updateMaterialPreviewFromCurrentCanvas() {
  if (!currentMaterial || !MATERIALS[currentMaterial]) return;
  if (!canvasMaterialPreview || !canvasSingle || !canvasSingle.width || !canvasSingle.height) return;

  const previewScale = Math.min(1, MATERIAL_PREVIEW_MAX_PX / Math.max(canvasSingle.width, canvasSingle.height));
  const previewW = Math.max(1, Math.round(canvasSingle.width * previewScale));
  const previewH = Math.max(1, Math.round(canvasSingle.height * previewScale));
  const tmp = document.createElement('canvas');
  tmp.width = previewW;
  tmp.height = previewH;

  const tmpCtx = tmp.getContext('2d', { willReadFrequently: true });
  if (!tmpCtx) return;

  tmpCtx.imageSmoothingEnabled = false;
  tmpCtx.drawImage(canvasSingle, 0, 0, previewW, previewH);

  try {
    const imageData = tmpCtx.getImageData(0, 0, previewW, previewH);
    renderMaterialPreview(imageData, previewW, previewH);
  } catch (err) {
    console.warn('Material preview could not be rendered.', err);
  }
}

function renderMaterialPreview(sourceImageData, w, h) {
  if (!canvasMaterialPreview) return;

  const material = MATERIALS[currentMaterial];
  const previewPower = materialPower ? clamp(Number(materialPower.value) || DEFAULTS.materialPower, 40, 160) / 100 : 1;
  const powerOver = clamp((previewPower - 1) / 0.6, 0, 1);
  const powerUnder = clamp((1 - previewPower) / 0.6, 0, 1);
  const isMarkingMaterial = material.laserPowerBehavior === 'marking';
  const isDarkSurfaceMaterial = material.laserPowerBehavior === 'darkSurface';
  const previewDotGain = material.dotGain + ((isMarkingMaterial || isDarkSurfaceMaterial) ? powerOver * 0.03 : powerOver * 0.42);
  const charR = 48;
  const charG = 31;
  const charB = 18;
  const metalDarkR = 6;
  const metalDarkG = 7;
  const metalDarkB = 8;
  const darkSurfaceR = 58;
  const darkSurfaceG = 60;
  const darkSurfaceB = 64;
  canvasMaterialPreview.width = w;
  canvasMaterialPreview.height = h;
  canvasMaterialPreview.style.width = '100%';
  canvasMaterialPreview.style.height = 'auto';

  const ctx = canvasMaterialPreview.getContext('2d');
  if (!ctx) return;

  const src = sourceImageData.data;
  const out = ctx.createImageData(w, h);
  const dst = out.data;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      let laserAmount = 1 - src[i] / 255;

      if (previewDotGain > 0 && laserAmount < 1) {
        const left = x > 0 ? 1 - src[i - 4] / 255 : 0;
        const right = x + 1 < w ? 1 - src[i + 4] / 255 : 0;
        const up = y > 0 ? 1 - src[i - w * 4] / 255 : 0;
        const down = y + 1 < h ? 1 - src[i + w * 4] / 255 : 0;
        laserAmount = Math.max(laserAmount, left * previewDotGain, right * previewDotGain, up * previewDotGain, down * previewDotGain);
      }

      let powerAmountBoost = 1 + powerOver * 0.18;
      if (isMarkingMaterial) powerAmountBoost = 1 + powerOver * 0.08;
      if (isDarkSurfaceMaterial) powerAmountBoost = 1 + powerOver * 0.04;
      laserAmount = clamp(laserAmount * (previewPower < 1 ? previewPower : powerAmountBoost), 0, 1);

      const texture = getMaterialTexture(material, x, y, w, h);
      const baseR = material.base[0] + texture;
      const baseG = material.base[1] + texture;
      const baseB = material.base[2] + texture;
      const highPowerR = isDarkSurfaceMaterial ? darkSurfaceR : (isMarkingMaterial ? metalDarkR : charR);
      const highPowerG = isDarkSurfaceMaterial ? darkSurfaceG : (isMarkingMaterial ? metalDarkG : charG);
      const highPowerB = isDarkSurfaceMaterial ? darkSurfaceB : (isMarkingMaterial ? metalDarkB : charB);
      const markMixR = material.mark[0] * (1 - powerOver) + highPowerR * powerOver;
      const markMixG = material.mark[1] * (1 - powerOver) + highPowerG * powerOver;
      const markMixB = material.mark[2] * (1 - powerOver) + highPowerB * powerOver;
      const markR = (markMixR * (1 - powerUnder) + baseR * powerUnder * 0.72) + texture * 0.35;
      const markG = (markMixG * (1 - powerUnder) + baseG * powerUnder * 0.72) + texture * 0.35;
      const markB = (markMixB * (1 - powerUnder) + baseB * powerUnder * 0.72) + texture * 0.35;

      dst[i] = clamp(Math.round(baseR * (1 - laserAmount) + markR * laserAmount), 0, 255);
      dst[i + 1] = clamp(Math.round(baseG * (1 - laserAmount) + markG * laserAmount), 0, 255);
      dst[i + 2] = clamp(Math.round(baseB * (1 - laserAmount) + markB * laserAmount), 0, 255);
      dst[i + 3] = 255;
    }
  }

  ctx.putImageData(out, 0, 0);
}

function pseudoNoise(x, y, seed) {
  const n = Math.sin(x * 12.9898 + y * 78.233 + seed * 37.719) * 43758.5453;
  return n - Math.floor(n);
}

function getMaterialTexture(material, x, y, w, h) {
  const n = (pseudoNoise(x, y, material.seed) - 0.5) * material.noise;
  let grain = 0;

  if (material.grain === 'wood') {
    grain = Math.sin(y * 0.055 + Math.sin(x * 0.018) * 2.4) * material.grainStrength;
    grain += Math.sin(y * 0.19 + material.seed) * material.grainStrength * 0.18;
  } else if (material.grain === 'stone') {
    grain = (pseudoNoise(Math.floor(x / 12), Math.floor(y / 7), material.seed + 3) - 0.5) * material.grainStrength;
  } else if (material.grain === 'metal') {
    grain = Math.sin((x + y) * 0.08) * material.grainStrength * 0.3;
  } else if (material.grain === 'leather') {
    grain = (pseudoNoise(Math.floor(x / 5), Math.floor(y / 5), material.seed + 5) - 0.5) * material.grainStrength;
  }

  return n + grain;
}

const { toGrayscale, applyBrightnessContrast, applyGamma, applySharpen, applyDithering, invertImageData } = window.PEFilters;

function getPipelineParams() {
  return {
    brightness: parseInt(brightness.value, 10) || 0,
    contrast: parseInt(contrast.value, 10) || 0,
    gamma: parseFloat(gamma.value) || 1,
    sharpness: parseFloat(sharpness.value) || 0,
    ditherMode: ditherMode.value || DEFAULTS.ditherMode,
    invert: Boolean(invertColors.checked),
    threshold: FIXED_THRESHOLD
  };
}

/* ---- Web Worker for the main output (keeps the page responsive on large images) ---- */
let processingWorker = null;
let processingWorkerBroken = false;
let processingJobId = 0;
const processingJobs = new Map();

function getProcessingWorker() {
  if (processingWorkerBroken || typeof Worker === 'undefined') return null;
  if (processingWorker) return processingWorker;
  try {
    processingWorker = new Worker('/assets/worker.js');
    processingWorker.onmessage = e => {
      const msg = e.data || {};
      const job = processingJobs.get(msg.id);
      if (!job) return;
      processingJobs.delete(msg.id);
      if (msg.ok) {
        job.resolve(new ImageData(new Uint8ClampedArray(msg.buffer), msg.w, msg.h));
      } else {
        job.reject(new Error(msg.error || 'Worker failed'));
      }
    };
    processingWorker.onerror = err => {
      console.warn('Processing worker failed, falling back to main thread.', err);
      processingWorkerBroken = true;
      processingJobs.forEach(job => job.reject(new Error('worker-unavailable')));
      processingJobs.clear();
      try { processingWorker.terminate(); } catch (e) {}
      processingWorker = null;
    };
  } catch (err) {
    processingWorkerBroken = true;
    processingWorker = null;
  }
  return processingWorker;
}

function runPipelineOnMainThread(imageData, w, h, params) {
  return Promise.resolve(window.PEFilters.runPipeline(imageData, w, h, params));
}

function runPipeline(imageData, w, h, params) {
  const worker = getProcessingWorker();
  if (!worker) return runPipelineOnMainThread(imageData, w, h, params);

  return new Promise((resolve, reject) => {
    const id = ++processingJobId;
    processingJobs.set(id, { resolve, reject });
    const buffer = imageData.data.buffer;
    worker.postMessage({ id, buffer, w, h, params }, [buffer]);
  }).catch(err => {
    if (err && err.message === 'worker-unavailable') {
      // Buffer was transferred – redraw and process on the main thread.
      return null;
    }
    throw err;
  });
}

function buildExportFilename(extension = 'png') {
  const dpiValue = getDpiValue();
  const mm = pxToMm(getOutputWidthPx(), dpiValue).toFixed(1).replace('.', '-');
  const ext = String(extension).replace(/^\./, '').toLowerCase() || 'png';
  return `laser-${mm}mm-${dpiValue}dpi.${ext}`;
}

const ABACUS_GET = 'https://abacus.jasoncameron.dev/get/stunning-twilight-266e8a/downloads';
const ABACUS_HIT = 'https://abacus.jasoncameron.dev/hit/stunning-twilight-266e8a/downloads';

function getProcessedPhotoTotalEl() {
  return document.getElementById('processedPhotoTotal') || document.getElementById('photoCounter');
}

function loadCounter() {
  fetch(ABACUS_GET)
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      const n = data && data.value ? data.value : 0;
      const totalEl = getProcessedPhotoTotalEl();
      if (totalEl) totalEl.textContent = n > 0 ? n.toLocaleString(currentLang === 'cs' ? 'cs-CZ' : currentLang) : '—';
    })
    .catch(() => {
      const totalEl = getProcessedPhotoTotalEl();
      if (totalEl) totalEl.textContent = '—';
    });
}

function incrementCounter() {
  fetch(ABACUS_HIT)
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      const n = data && data.value ? data.value : 0;
      const totalEl = getProcessedPhotoTotalEl();
      if (totalEl && n > 0) totalEl.textContent = n.toLocaleString(currentLang === 'cs' ? 'cs-CZ' : currentLang);
    })
    .catch(() => {});
}

function showIOSModal(blob) {
  const url = URL.createObjectURL(blob);
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
  overlay.innerHTML = `
    <div style="width:min(360px,100%);background:#0f1117;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:16px;">
      <div style="font-size:0.9rem;font-weight:700;color:#f97316;margin-bottom:4px">${t('iosTitle')}</div>
      <div style="font-size:0.74rem;color:#64748b;margin-bottom:14px">${t('iosText')}</div>
      <div style="background:#000;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);margin-bottom:14px;">
        <img src="${url}" style="width:100%;display:block;" alt="${t('exportPngAlt')}">
      </div>
      <button type="button" class="btn btn-secondary" id="iosCloseBtn" style="width:100%">${t('iosClose')}</button>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector('#iosCloseBtn').addEventListener('click', () => {
    URL.revokeObjectURL(url);
    overlay.remove();
  });

  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      URL.revokeObjectURL(url);
      overlay.remove();
    }
  });
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc ^= bytes[i];
    for (let j = 0; j < 8; j++) {
      if (crc & 1) crc = (crc >>> 1) ^ 0xedb88320;
      else crc = crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function concatUint8Arrays(...arrays) {
  const total = arrays.reduce((sum, arr) => sum + arr.length, 0);
  const result = new Uint8Array(total);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

function uint32ToBytes(num) {
  return new Uint8Array([
    (num >>> 24) & 255,
    (num >>> 16) & 255,
    (num >>> 8) & 255,
    num & 255
  ]);
}

function createPhysChunk(dpiValue) {
  const ppm = Math.round(dpiValue / 0.0254);
  const type = new TextEncoder().encode('pHYs');
  const data = new Uint8Array(9);

  data[0] = (ppm >>> 24) & 255;
  data[1] = (ppm >>> 16) & 255;
  data[2] = (ppm >>> 8) & 255;
  data[3] = ppm & 255;

  data[4] = (ppm >>> 24) & 255;
  data[5] = (ppm >>> 16) & 255;
  data[6] = (ppm >>> 8) & 255;
  data[7] = ppm & 255;

  data[8] = 1;

  const crc = crc32(concatUint8Arrays(type, data));

  return concatUint8Arrays(
    uint32ToBytes(data.length),
    type,
    data,
    uint32ToBytes(crc)
  );
}

async function canvasToPngBlobWithDPI(canvas, dpiValue) {
  const baseBlob = await new Promise((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Failed to create PNG blob.')), 'image/png');
  });

  const buffer = await baseBlob.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  let offset = 8;
  let ihdrEnd = -1;
  let existingPhysStart = -1;
  let existingPhysEnd = -1;

  while (offset + 8 <= bytes.length) {
    const length =
      (bytes[offset] << 24) |
      (bytes[offset + 1] << 16) |
      (bytes[offset + 2] << 8) |
      bytes[offset + 3];

    if (length < 0) break;

    const typeStart = offset + 4;
    const type = String.fromCharCode(
      bytes[typeStart],
      bytes[typeStart + 1],
      bytes[typeStart + 2],
      bytes[typeStart + 3]
    );

    const chunkTotalLength = 12 + length;
    if (offset + chunkTotalLength > bytes.length) break;

    if (type === 'IHDR') ihdrEnd = offset + chunkTotalLength;
    if (type === 'pHYs') {
      existingPhysStart = offset;
      existingPhysEnd = offset + chunkTotalLength;
      break;
    }
    offset += chunkTotalLength;
  }

  if (ihdrEnd === -1) {
    return baseBlob;
  }

  const physChunk = createPhysChunk(dpiValue);
  let finalBytes;

  if (existingPhysStart !== -1) {
    finalBytes = concatUint8Arrays(
      bytes.slice(0, existingPhysStart),
      physChunk,
      bytes.slice(existingPhysEnd)
    );
  } else {
    finalBytes = concatUint8Arrays(
      bytes.slice(0, ihdrEnd),
      physChunk,
      bytes.slice(ihdrEnd)
    );
  }

  return new Blob([finalBytes], { type: 'image/png' });
}


function writeAscii(bytes, offset, text) {
  for (let i = 0; i < text.length; i++) bytes[offset + i] = text.charCodeAt(i);
}

function canvasToBmp1BitBlob(canvas, dpiValue) {
  const width = canvas.width;
  const height = canvas.height;
  if (!width || !height) throw new Error('Canvas is empty.');

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const imageData = ctx.getImageData(0, 0, width, height);
  const pixels = imageData.data;
  const rowStride = Math.ceil(width / 32) * 4;
  const pixelArraySize = rowStride * height;
  const paletteSize = 8;
  const headerSize = 14 + 40 + paletteSize;
  const fileSize = headerSize + pixelArraySize;
  const bytes = new Uint8Array(fileSize);
  const view = new DataView(bytes.buffer);
  const pixelsPerMeter = Math.round(dpiValue * 39.37007874015748);

  writeAscii(bytes, 0, 'BM');
  view.setUint32(2, fileSize, true);
  view.setUint32(10, headerSize, true);

  view.setUint32(14, 40, true); // BITMAPINFOHEADER size
  view.setInt32(18, width, true);
  view.setInt32(22, -height, true); // top-down rows, same orientation as canvas
  view.setUint16(26, 1, true); // planes
  view.setUint16(28, 1, true); // 1 bit per pixel
  view.setUint32(30, 0, true); // BI_RGB
  view.setUint32(34, pixelArraySize, true);
  view.setInt32(38, pixelsPerMeter, true);
  view.setInt32(42, pixelsPerMeter, true);
  view.setUint32(46, 2, true); // colors used
  view.setUint32(50, 2, true); // important colors

  // Palette in BGRA order: index 0 = black, index 1 = white.
  const paletteOffset = 54;
  bytes[paletteOffset + 0] = 0;
  bytes[paletteOffset + 1] = 0;
  bytes[paletteOffset + 2] = 0;
  bytes[paletteOffset + 3] = 0;
  bytes[paletteOffset + 4] = 255;
  bytes[paletteOffset + 5] = 255;
  bytes[paletteOffset + 6] = 255;
  bytes[paletteOffset + 7] = 0;

  const dataOffset = headerSize;
  for (let y = 0; y < height; y++) {
    const rowOffset = dataOffset + y * rowStride;
    for (let x = 0; x < width; x++) {
      const srcIndex = (y * width + x) * 4;
      const gray = (pixels[srcIndex] + pixels[srcIndex + 1] + pixels[srcIndex + 2]) / 3;
      const bit = gray >= 128 ? 1 : 0;
      if (bit) bytes[rowOffset + (x >> 3)] |= 0x80 >> (x & 7);
    }
  }

  return new Blob([bytes], { type: 'image/bmp' });
}

function triggerFileDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = filename;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

async function ensureCanvasReadyForExport() {
  if (!originalImage) {
    showStatus(t('alertUploadFirst'), 'error');
    return false;
  }

  const w = getOutputWidthPx();
  const h = getOutputHeightPx(w);
  if (!h) {
    showStatus(t('alertUploadFirst'), 'error');
    return false;
  }

  if (!shouldContinueLargeExport(w)) return false;

  const expectedSignature = getCurrentRenderSignature(w, h);
  if (lastRenderedOutputSignature !== expectedSignature || canvasSingle.width !== w || canvasSingle.height !== h) {
    return await processImage({ allowLarge: true });
  }

  return true;
}

async function downloadBmpResult() {
  if (!(await ensureCanvasReadyForExport())) return;

  try {
    const dpiValue = getDpiValue();
    const blob = canvasToBmp1BitBlob(canvasSingle, dpiValue);
    incrementCounter();
    triggerFileDownload(blob, buildExportFilename('bmp'));
  } catch (err) {
    console.error(err);
    showStatus(t('alertBmpFail'), 'error');
  }
}

async function downloadResult() {
  if (!(await ensureCanvasReadyForExport())) return;

  try {
    const dpiValue = getDpiValue();
    const blob = await canvasToPngBlobWithDPI(canvasSingle, dpiValue);
    incrementCounter();

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      showIOSModal(blob);
      return;
    }

    triggerFileDownload(blob, buildExportFilename('png'));
  } catch (err) {
    console.error(err);
    showStatus(t('alertPngFail'), 'error');
  }
}

applyTheme(getStoredTheme(), { save: false });
loadStoredLanguage();

function initEditor() {
  buildCustomDpiSelect();
  buildMaterialSelect();
  loadStoredSettings();
  sliderPairs.forEach(([id]) => updateSlider(document.getElementById(id)));
  syncSliderFromMm();
  updateSizeInfo();
  setViewMode('compare');
  setActivePresetCard(currentPreset);
  setActiveDitherCard(ditherMode.value || DEFAULTS.ditherMode);
  syncMaterialControls();
  updateMaterialPreviewLabel();
  updateCropInfo();
  setCropAspectMode(cropAspectMode);
  setLanguage(currentLang);
  initializeCanvasMagnifier();
  loadDemoImage();
}

loadI18n().then(initEditor, initEditor);
