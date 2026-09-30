const fs = require('fs');

const tsxPath = '/home/danna/Documentos/S1/P-gina-Web-Sembrando-Per-/src/App.tsx';
let tsx = fs.readFileSync(tsxPath, 'utf8');

const newSiteHeader = `function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="about-header" style={{ position: 'absolute', width: '100%' }}>
      <a className="about-header__brand" href="#inicio" aria-label="Sembrando Perú, inicio">
        <img src={image4} alt="Sembrando Perú" />
      </a>
      <button
        className="about-header__menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="about-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={\`about-navigation\${menuOpen ? ' about-navigation--open' : ''}\`}
        id="about-navigation"
      >
        <a className="about-navigation__active" href="#inicio" onClick={() => setMenuOpen(false)}>
          Inicio
          <img src={greenLine} alt="" />
        </a>
        <a href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
        <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contáctanos</a>
        <a className="about-navigation__donate" href="#unete" onClick={() => setMenuOpen(false)}>
          Donar Ahora <img src={arrowRight} alt="" />
        </a>
      </nav>
      <div className="about-header__language" aria-label="Idioma: español">
        <span aria-hidden="true">◎</span> ES | Español <span aria-hidden="true">⌄</span>
      </div>
      <a className="about-header__donate" href="#unete">
        Donación
      </a>
    </header>
  )
}`;

tsx = tsx.replace(/function SiteHeader\(\) \{[\s\S]*?\}\n/, newSiteHeader + '\n');

// Import NosotrosPage.css in App.tsx if it's not already there
if (!tsx.includes("import './pages/NosotrosPage.css'")) {
  tsx = tsx.replace("import './App.css'", "import './App.css'\nimport './pages/NosotrosPage.css'");
}

fs.writeFileSync(tsxPath, tsx);
console.log('App.tsx patched!');
