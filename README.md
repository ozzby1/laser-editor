# PhotoEngraving.online

Statický web (GitHub Pages). Převod fotografie na černobílý PNG / 1bit BMP pro laserové gravírování.

## Struktura

```
index.html, cs/, de/, … zh/   jazykové verze editoru – jen HTML (texty přeložené v HTML pro SEO)
assets/styles.css             jeden společný styl pro všechny jazyky
assets/app.js                 logika editoru + donate box + menu nástrojů (společné)
assets/filters.js             obrazové filtry (grayscale, jas/kontrast, gama, ostrost, dithering)
assets/worker.js              Web Worker – dithering výstupu běží mimo hlavní vlákno
i18n/<lang>.json              překlady UI (každá stránka načítá jen svůj jazyk)
guide/, cs/pruvodce/          uživatelský návod (EN, CS)
image-to-svg/                 převod obrázku na SVG siluetu
lab/                          testovací kopie editoru (noindex)
qrgenerator/                  přesměrování na qr-generator.tech (noindex)
sitemap.xml, robots.txt, CNAME
```

## Úpravy

- Změna vzhledu → `assets/styles.css` (platí pro všech 14 jazyků).
- Změna logiky → `assets/app.js`, filtry → `assets/filters.js` (používá je stránka i worker).
- Změna textu v UI → `i18n/<lang>.json` **a** odpovídající text v HTML dané jazykové verze
  (HTML obsahuje stejný text, aby byl viditelný bez JS a pro vyhledávače).
- Nová stránka / změna URL → doplnit do `sitemap.xml` (hreflang kódy: `cs`, `de`, …, `pt-BR`, `zh`).

Stránka načte `/i18n/<lang>.json`; pokud se nepovede, zůstanou texty z HTML.
Jazyk stránky určuje atribut `<html data-lang="…">`.
