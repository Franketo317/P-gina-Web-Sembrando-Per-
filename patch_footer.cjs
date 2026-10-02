const fs = require('fs');
const tsxPath = '/home/danna/Documentos/S1/P-gina-Web-Sembrando-Per-/src/pages/BlogPage.tsx';
let tsx = fs.readFileSync(tsxPath, 'utf8');

// Modify socials array to only include Facebook, Instagram, Twitter(X), LinkedIn
tsx = tsx.replace(
  /const socials = \[\s*\{ label: 'Facebook', image: socialFacebook \},\s*\{ label: 'Instagram', image: socialInstagram \},\s*\{ label: 'X', image: socialX \},\s*\{ label: 'LinkedIn', image: socialLinkedin \},\s*\{ label: 'TikTok', image: socialTiktok \},\s*\{ label: 'YouTube', image: socialYoutube \},\s*\]/,
  "const socials = [\n  { label: 'Facebook', image: socialFacebook },\n  { label: 'Instagram', image: socialInstagram },\n  { label: 'X', image: socialX },\n  { label: 'LinkedIn', image: socialLinkedin },\n]"
);

// Replace BlogFooter component
const newFooter = `function BlogFooter() {
  return (
    <footer className="blog-footer" id="contacto">
      <div className="blog-footer__main">
        <h2>HAGAMOS EL CAMBIO POSIBLE!</h2>
        <div className="blog-footer__content">
          <div className="blog-footer__brand">
            <a href="/" aria-label="Sembrando Perú, inicio">
              <div className="blog-footer__logo-horizontal">
                <img src={logo} alt="Sembrando Perú Icon" />
                <span className="blog-footer__logo-text">SEMBRANDO<br/>PERÚ</span>
              </div>
            </a>
            <p>Esperanza para un futuro mejor</p>
          </div>
          <div className="blog-footer__column">
            <h3>Navegación</h3>
            <a href="/">Inicio</a><a href="/nosotros">Nosotros</a><a href="/blog">Blog</a><a href="#contacto">Contáctanos</a>
          </div>
          <div className="blog-footer__column blog-footer__contact">
            <h3>Contacto</h3>
            <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
            <a href="tel:+51921462828">+51 921 462 828</a>
            <p>Av. Arequipa 2447 – Office 409, Lince District,<br/>Lima, Peru</p>
          </div>
          <div className="blog-footer__column">
            <h3>Involúcrate</h3>
            <a href="/#unete">Voluntariado</a><a href="/#unete">Donaciones</a><a href="#contacto">Transparencia</a>
          </div>
        </div>
        <div className="blog-footer__follow">
          <span>SÍGUENOS :</span>
          {socials.map((social) => <a href="#redes" aria-label={social.label} key={social.label}><img src={social.image} alt="" /></a>)}
        </div>
      </div>
      <div className="blog-footer__legal">
        <span>© 2026 Sembrando. Todos los derechos reservados.</span>
        <a href="#privacidad">Políticas de privacidad</a>
      </div>
    </footer>
  )
}`;

tsx = tsx.replace(/function BlogFooter\(\) \{[\s\S]*?\}\n/, newFooter + '\n');

fs.writeFileSync(tsxPath, tsx);
console.log('BlogPage.tsx footer patched!');
