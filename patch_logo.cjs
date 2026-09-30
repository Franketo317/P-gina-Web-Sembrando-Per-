const fs = require('fs');
const cssPath = '/home/danna/Documentos/S1/P-gina-Web-Sembrando-Per-/src/pages/BlogPage.css';
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(
  /\.blog-footer__logo-horizontal img \{[^}]*\}/g,
  `.blog-footer__logo-horizontal img {
  width: 65px;
  height: 50px;
  object-fit: cover;
  object-position: center top;
  filter: brightness(0) invert(1);
}`
);

fs.writeFileSync(cssPath, css);
