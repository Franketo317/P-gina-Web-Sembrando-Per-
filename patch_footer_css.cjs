const fs = require('fs');
const cssPath = '/home/danna/Documentos/S1/P-gina-Web-Sembrando-Per-/src/pages/BlogPage.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Update legal bar
css = css.replace('  background: #006445;', '  background: #ffffff;\n  color: #111;');
css = css.replace('.blog-footer__legal a {\n  color: #ffffff;', '.blog-footer__legal a {\n  color: #111;');

// Remove partners
css = css.replace('.blog-footer__partners {\n  display: block;\n  width: min(250px, 100%);\n  height: 72px;\n  object-fit: contain;\n  object-position: left center;\n}', '.blog-footer__partners {\n  display: none;\n}');

// Add horizontal logo styling
const newStyles = `
.blog-footer__logo-horizontal {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.blog-footer__logo-horizontal img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: top; /* try to focus on the icon part */
  filter: brightness(0) invert(1);
}
.blog-footer__logo-text {
  font-family: var(--font-poppins);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
  text-align: left;
}
.blog-footer__legal {
  color: #111;
}
`;

css += newStyles;

fs.writeFileSync(cssPath, css);
console.log('BlogPage.css footer patched!');
