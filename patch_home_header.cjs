const fs = require('fs');
const cssPath = '/home/danna/Documentos/S1/P-gina-Web-Sembrando-Per-/src/App.css';
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(
  /\.site-header__brand\s*\{[^}]*\}/,
  `.site-header__brand {
  position: absolute;
  inset: 0 auto 0 0;
  width: 222px;
  display: grid;
  place-items: center;
  background: #e8f5e9;
}`
);

css = css.replace(
  /\.site-header__brand img\s*\{[^}]*\}/,
  `.site-header__brand img {
  width: 132px;
  height: 104px;
  object-fit: contain;
}`
);

fs.writeFileSync(cssPath, css);
console.log('App.css patched');
