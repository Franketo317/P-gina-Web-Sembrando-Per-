const fs = require('fs');

const tsxPath = '/home/danna/Documentos/S1/P-gina-Web-Sembrando-Per-/src/pages/BlogPage.tsx';
let tsx = fs.readFileSync(tsxPath, 'utf8');

const importsToAdd = `
import greenLine from '../assets/figma/imgGreenLine.svg'
import blogHeroBackground from '../assets/figma/blog-featured-frame.jpg'
`;

tsx = tsx.replace("import './BlogPage.css'", importsToAdd + "import './BlogPage.css'");

const headerComponent = `
function BlogHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="blog-header">
        <a className="blog-header__brand" href="/" aria-label="Sembrando Perú, inicio">
          <img src={logo} alt="Sembrando Perú" />
        </a>
        <button
          className="blog-header__menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="blog-navigation"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={\`blog-navigation\${menuOpen ? ' blog-navigation--open' : ''}\`}
          id="blog-navigation"
        >
          <a href="/" onClick={closeMenu}>Inicio</a>
          <a href="/nosotros" onClick={closeMenu}>Nosotros</a>
          <a className="blog-navigation__active" href="/blog" onClick={closeMenu}>
            Blog
            <img src={greenLine} alt="" />
          </a>
          <a href="/#contacto" onClick={closeMenu}>Contáctanos</a>
          <a className="blog-navigation__donate" href="/#unete" onClick={closeMenu}>
            Donar Ahora <img src={arrowRight} alt="" />
          </a>
        </nav>
        <div className="blog-header__language" aria-label="Idioma: español">
          <span aria-hidden="true">◎</span> ES | Español <span aria-hidden="true">⌄</span>
        </div>
        <a className="blog-header__donate" href="/#unete">
          Donación
        </a>
      </header>
      <section
        className="blog-masthead"
        style={{ backgroundImage: \`url(\${blogHeroBackground})\` }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(2, 115, 77, 0.4)', zIndex: 1 }} />
        <h1>"Historias que inspiran,<br />acciones que transforman"</h1>
      </section>
    </>
  )
}
`;

tsx = tsx.replace('export default function BlogPage() {', headerComponent + '\nexport default function BlogPage() {');

// Replace the old header with BlogHeader
tsx = tsx.replace(
  '<header className="blog-masthead">\n        <h1>"Historias que inspiran,<br />acciones que transforman"</h1>\n      </header>',
  '<BlogHeader />'
);

fs.writeFileSync(tsxPath, tsx);
console.log('TSX patched!');
