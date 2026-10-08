import { useState, useRef, useEffect, type FormEvent } from 'react'
import logo from '../assets/figma/imgImage4.png'
import arrowRight from '../assets/figma/imgArrowRight.svg'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from './LanguageContext'
import './HomeHeader.css'

type SearchItem = {
  title: string
  category: string
  description: string
  href: string
  keywords: string[]
}

const searchDatabase: SearchItem[] = [
  // SEMBRANDO PERÚ (Institucional)
  {
    title: '¿Quiénes somos? / Nosotros',
    category: 'Sembrando Perú',
    description: 'Conoce nuestra historia, misión y el equipo comprometido con la Amazonía y comunidades rurales.',
    href: '/nosotros',
    keywords: ['nosotros', 'quienes somos', 'historia', 'organizacion', 'familia', 'amazonia', 'ong'],
  },
  {
    title: 'Nuestra Historia',
    category: 'Sembrando Perú',
    description: 'El origen de Sembrando Perú y nuestro compromiso social frente a la deforestación y la anemia infantil.',
    href: '/nosotros#historia',
    keywords: ['historia', 'origen', 'fundacion', 'comunidad', 'mision social', 'creacion'],
  },
  {
    title: 'Misión y Visión',
    category: 'Sembrando Perú',
    description: 'Reducción de deforestación, fomento de la alfabetización y lucha contra la anemia mediante soluciones sostenibles.',
    href: '/nosotros#mision-vision',
    keywords: ['mision', 'vision', 'objetivos', 'futuro', 'compromiso', 'educacion', 'deforestacion'],
  },
  {
    title: 'Nuestros Valores',
    category: 'Sembrando Perú',
    description: 'Sostenibilidad, Compromiso Social e Innovación como pilares fundamentales de nuestro trabajo.',
    href: '/nosotros#valores',
    keywords: ['valores', 'sostenibilidad', 'compromiso social', 'innovacion', 'principios'],
  },
  {
    title: 'Contáctanos y Sedes',
    category: 'Sembrando Perú',
    description: 'Ponte en contacto con nuestro equipo en Lima, formulario de atención y canales de consulta.',
    href: '/contacto',
    keywords: ['contacto', 'contactanos', 'telefono', 'correo', 'oficina', 'sede', 'lima', 'whatsapp', 'formulario'],
  },

  // NUESTRO TRABAJO (Áreas y proyectos)
  {
    title: '¿Qué hacemos?',
    category: 'Nuestro Trabajo',
    description: 'Protegemos la Amazonía peruana, restauramos bosques degradados y promovemos el desarrollo comunitario.',
    href: '/#nosotros',
    keywords: ['que hacemos', 'proyectos', 'acciones', 'impacto', 'desarrollo sostenible', 'amazonia', 'andes'],
  },
  {
    title: 'Sembrando Árboles (Reforestación)',
    category: 'Nuestro Trabajo',
    description: 'Restauración de árboles nativos y protección de la biodiversidad en bosques de la Amazonía.',
    href: '/#programas',
    keywords: ['arboles', 'sembrando arboles', 'reforestacion', 'bosques', 'biodiversidad', 'plantacion', 'viveros', 'plantines'],
  },
  {
    title: 'Sembrando Educación (Alfabetización)',
    category: 'Nuestro Trabajo',
    description: 'Promovemos la igualdad social y el aprendizaje en comunidades rurales y amazónicas.',
    href: '/#programas',
    keywords: ['educacion', 'sembrando educacion', 'alfabetizacion', 'ninos', 'escuelas', 'aprendizaje', 'talleres'],
  },
  {
    title: 'Sembrando Salud (Lucha contra la anemia)',
    category: 'Nuestro Trabajo',
    description: 'Prevención de la anemia infantil y cuidado de la salud integral en niños de Selva y Sierra.',
    href: '/#programas',
    keywords: ['salud', 'sembrando salud', 'anemia', 'infantil', 'nutricion', 'alimentacion', 'campanas medicas'],
  },
  {
    title: 'Voluntariado y Comunidad',
    category: 'Nuestro Trabajo',
    description: 'Únete a nuestras jornadas de plantación, voluntariado social y actividades en comunidad.',
    href: '/#unete',
    keywords: ['voluntariado', 'unete', 'comunidad', 'voluntarios', 'jornadas', 'participacion'],
  },

  // INFÓRMATE (Blog y artículos)
  {
    title: 'Blog de Noticias y Artículos',
    category: 'Infórmate',
    description: 'Historias de impacto, avances ambientales y novedades de nuestras actividades en el Perú.',
    href: '/blog',
    keywords: ['blog', 'noticias', 'articulos', 'historias', 'novedades', 'publicaciones'],
  },
  {
    title: 'Últimas Noticias de Impacto',
    category: 'Infórmate',
    description: 'Conoce las acciones recientes de reforestación, salud y educación en nuestras comunidades.',
    href: '/#noticias',
    keywords: ['ultimas noticias', 'noticias', 'reciente', 'impacto'],
  },
  {
    title: 'Artículo: Sembrando futuro por nuestros bosques',
    category: 'Infórmate',
    description: 'Conoce nuestras acciones de reforestación y el impacto ambiental generado en la Amazonía.',
    href: '/blog/articulo/sembrando-futuro-juntos-por-nuestros-bosques',
    keywords: ['sembrando futuro', 'bosques', 'madre de dios', 'medio ambiente', 'plantas nativas'],
  },
  {
    title: 'Artículo: Transformando vidas en nuestras comunidades',
    category: 'Infórmate',
    description: 'Historias y acciones para mejorar la vida de niños y familias en zonas rurales.',
    href: '/blog/articulo/transformando-vidas-comunidades',
    keywords: ['transformando vidas', 'comunidad', 'familias', 'desarrollo', 'historias'],
  },
  {
    title: 'Artículo: Jornada de reforestación en Madre de Dios',
    category: 'Infórmate',
    description: 'Voluntarios y familias unidas para restaurar áreas degradadas en la selva peruana.',
    href: '/blog/articulo/jornada-reforestacion-madre-de-dios',
    keywords: ['jornada', 'madre de dios', 'voluntariado 2026', 'siembra'],
  },
  {
    title: 'Artículo: Guardianas del bosque: historias locales',
    category: 'Infórmate',
    description: 'Mujeres líderes que protegen la biodiversidad y transmiten saberes ancestrales en la Amazonía.',
    href: '/blog/articulo/guardianas-del-bosque-historias-locales',
    keywords: ['guardianas', 'mujeres', 'liderazgo', 'conservacion', 'saberes'],
  },
  {
    title: 'Artículo: Prevención de anemia: nuevos enfoques',
    category: 'Infórmate',
    description: 'Estrategias comunitarias y atención médica para combatir la desnutrición y anemia infantil.',
    href: '/blog/articulo/prevencion-anemia-nuevos-enfoques',
    keywords: ['anemia', 'prevencion anemia', 'salud infantil', 'nutricion'],
  },

  // DONACIONES
  {
    title: 'Donaciones Sembrando Perú',
    category: 'Donación',
    description: 'Dona hoy para financiar jornadas de reforestación, viveros y talleres de salud y educación.',
    href: '/donacion',
    keywords: ['donacion', 'donar', 'aportar', 'colaborar', 'apoyo', 'tarjeta', 'paypal'],
  },
]

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export default function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchItem[] | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { t } = useLanguage()

  // Handle outside click & Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setSearchOpen(false)
        setMobileMenuOpen(false)
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
        setSearchOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 50)
    } else {
      setSearchQuery('')
      setSearchResults(null)
      setHasSearched(false)
    }
  }, [searchOpen])

  function toggleDropdown(menuKey: string) {
    if (searchOpen) setSearchOpen(false)
    setOpenDropdown((current) => (current === menuKey ? null : menuKey))
  }

  function toggleSearch() {
    if (openDropdown) setOpenDropdown(null)
    setSearchOpen((open) => !open)
  }

  function closeAll() {
    setOpenDropdown(null)
    setSearchOpen(false)
    setMobileMenuOpen(false)
  }

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault()
    const query = normalizeText(searchQuery)
    if (!query) return

    const terms = query.split(/\s+/).filter(Boolean)
    const results = searchDatabase.filter((item) => {
      const titleNorm = normalizeText(item.title)
      const descNorm = normalizeText(item.description)
      const catNorm = normalizeText(item.category)
      const kwNorm = item.keywords.map(normalizeText).join(' ')

      const fullString = `${titleNorm} ${descNorm} ${catNorm} ${kwNorm}`
      return terms.every((term) => fullString.includes(term))
    })

    setSearchResults(results)
    setHasSearched(true)
  }

  const currentPath = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') || '/' : '/'
  const isSembrandoPeruActive = currentPath === '/nosotros' || currentPath.startsWith('/nosotros') || currentPath === '/contacto'
  const isInformateActive = currentPath === '/blog' || currentPath.startsWith('/blog')

  return (
    <header className="about-header site-header-root" ref={headerRef}>
      {/* Brand logo block (protruding below header) */}
      <a className="about-header__brand" href="/" aria-label="Sembrando Perú, inicio" onClick={closeAll}>
        <img src={logo} alt="Sembrando Perú" />
      </a>

      {/* Main Navigation (next to logo) */}
      <nav
        className={`about-navigation site-navigation${mobileMenuOpen ? ' about-navigation--open' : ''}`}
        id="about-navigation"
      >
        {/* Dropdown 1: SEMBRANDO PERÚ */}
        <div className={`nav-dropdown${openDropdown === 'sembrando-peru' ? ' is-open' : ''}${isSembrandoPeruActive ? ' is-active' : ''}`}>
          <button
            type="button"
            className="nav-dropdown__trigger"
            aria-expanded={openDropdown === 'sembrando-peru'}
            onClick={() => toggleDropdown('sembrando-peru')}
          >
            <span className="nav-dropdown__label">
              {t('SEMBRANDO PERÚ')}
              {isSembrandoPeruActive && <span className="nav-dropdown__active-indicator" aria-hidden="true" />}
            </span>
            <svg className="nav-dropdown__chevron" viewBox="0 0 12 8" width="11" height="7" aria-hidden="true">
              <path d="M1.4 1.4L6 6l4.6-4.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="nav-dropdown__menu" role="menu">
            <a href="/nosotros" role="menuitem" onClick={closeAll}>
              {t('¿Quiénes somos?')}
            </a>
            <a href="/nosotros#historia" role="menuitem" onClick={closeAll}>
              {t('Nuestra historia')}
            </a>
            <a href="/nosotros#mision-vision" role="menuitem" onClick={closeAll}>
              {t('Misión y Visión')}
            </a>
            <a href="/nosotros#valores" role="menuitem" onClick={closeAll}>
              {t('Nuestros Valores')}
            </a>
            <a href="/contacto" role="menuitem" onClick={closeAll}>
              {t('Contáctanos')}
            </a>
          </div>
        </div>

        {/* Dropdown 2: NUESTRO TRABAJO */}
        <div className={`nav-dropdown${openDropdown === 'nuestro-trabajo' ? ' is-open' : ''}`}>
          <button
            type="button"
            className="nav-dropdown__trigger"
            aria-expanded={openDropdown === 'nuestro-trabajo'}
            onClick={() => toggleDropdown('nuestro-trabajo')}
          >
            <span className="nav-dropdown__label">
              {t('NUESTRO TRABAJO')}
            </span>
            <svg className="nav-dropdown__chevron" viewBox="0 0 12 8" width="11" height="7" aria-hidden="true">
              <path d="M1.4 1.4L6 6l4.6-4.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="nav-dropdown__menu" role="menu">
            <a href="/#nosotros" role="menuitem" onClick={closeAll}>
              {t('¿Qué hacemos?')}
            </a>
            <a href="/#programas" role="menuitem" onClick={closeAll}>
              {t('Sembrando Árboles (Reforestación)')}
            </a>
            <a href="/#programas" role="menuitem" onClick={closeAll}>
              {t('Sembrando Educación')}
            </a>
            <a href="/#programas" role="menuitem" onClick={closeAll}>
              {t('Sembrando Salud (Lucha contra la anemia)')}
            </a>
            <a href="/#unete" role="menuitem" onClick={closeAll}>
              {t('Voluntariado y Comunidad')}
            </a>
          </div>
        </div>

        {/* Dropdown 3: INFÓRMATE */}
        <div className={`nav-dropdown${openDropdown === 'informate' ? ' is-open' : ''}${isInformateActive ? ' is-active' : ''}`}>
          <button
            type="button"
            className="nav-dropdown__trigger"
            aria-expanded={openDropdown === 'informate'}
            onClick={() => toggleDropdown('informate')}
          >
            <span className="nav-dropdown__label">
              {t('INFÓRMATE')}
              {isInformateActive && <span className="nav-dropdown__active-indicator" aria-hidden="true" />}
            </span>
            <svg className="nav-dropdown__chevron" viewBox="0 0 12 8" width="11" height="7" aria-hidden="true">
              <path d="M1.4 1.4L6 6l4.6-4.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="nav-dropdown__menu" role="menu">
            <a href="/blog" role="menuitem" onClick={closeAll}>
              {t('Blog Principal')}
            </a>
            <a href="/#noticias" role="menuitem" onClick={closeAll}>
              {t('Últimas Noticias')}
            </a>
            <a href="/blog/articulo/sembrando-futuro-juntos-por-nuestros-bosques" role="menuitem" onClick={closeAll}>
              {t('Reforestación en la Amazonía')}
            </a>
            <a href="/blog/articulo/transformando-vidas-comunidades" role="menuitem" onClick={closeAll}>
              {t('Historias de Impacto')}
            </a>
            <a href="/blog/articulo/prevencion-anemia-nuevos-enfoques" role="menuitem" onClick={closeAll}>
              {t('Prevención de Anemia')}
            </a>
          </div>
        </div>

        {/* Mobile Action Buttons & Language */}
        <div className="about-navigation__actions-mobile">
          <a className="about-navigation__btn about-navigation__btn--donate" href="/donacion" onClick={closeAll}>
            {t('DONACIÓN')} <img src={arrowRight} alt="" />
          </a>
          <a className="about-navigation__btn about-navigation__btn--volunteer" href="/contacto" onClick={closeAll}>
            {t('VOLUNTARIADO')} <img src={arrowRight} alt="" />
          </a>
          <a className="about-navigation__btn about-navigation__btn--alliances" href="/contacto" onClick={closeAll}>
            {t('ALIANZAS')} <img src={arrowRight} alt="" />
          </a>
        </div>
        <LanguageSwitcher className="about-navigation__language-mobile" />
      </nav>

      {/* Mobile menu toggle */}
      <button
        className="about-header__menu-toggle"
        type="button"
        aria-expanded={mobileMenuOpen}
        aria-controls="about-navigation"
        aria-label={t(mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú')}
        onClick={() => {
          setMobileMenuOpen((open) => !open)
          if (searchOpen) setSearchOpen(false)
          setOpenDropdown(null)
        }}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Right side group: Lupa | Idioma | 3 Action Buttons */}
      <div className="header-right-actions">
        <button
          type="button"
          className={`header-search-btn${searchOpen ? ' is-active' : ''}`}
          aria-label={t('Buscar en el sitio')}
          aria-expanded={searchOpen}
          onClick={toggleSearch}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        <LanguageSwitcher className="about-header__language" />

        <div className="header-action-buttons">
          <a className="header-action-btn header-action-btn--donate" href="/donacion" onClick={closeAll}>
            {t('DONACIÓN')}
          </a>
          <a className="header-action-btn header-action-btn--volunteer" href="/contacto" onClick={closeAll}>
            {t('VOLUNTARIADO')}
          </a>
          <a className="header-action-btn header-action-btn--alliances" href="/contacto" onClick={closeAll}>
            {t('ALIANZAS')}
          </a>
        </div>
      </div>

      {/* Search Panel Dropdown */}
      {searchOpen && (
        <div className="header-search-panel" role="region" aria-label="Buscador del sitio">
          <div className="header-search-panel__container">
            <button
              type="button"
              className="header-search-panel__close"
              aria-label={t('Cerrar buscador')}
              onClick={() => setSearchOpen(false)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2 className="header-search-panel__title">¿QUÉ TE GUSTARÍA BUSCAR?</h2>

            <form className="header-search-panel__form" onSubmit={handleSearchSubmit}>
              <div className="header-search-panel__input-wrap">
                <input
                  ref={searchInputRef}
                  type="search"
                  className="header-search-panel__input"
                  placeholder="Escribe un tema o una palabra clave…"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    if (hasSearched) {
                      setHasSearched(false)
                      setSearchResults(null)
                    }
                  }}
                  autoComplete="off"
                />
                <button type="submit" className="header-search-panel__submit">
                  <span>BUSCAR</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
            </form>

            {hasSearched && (
              <div className="header-search-panel__results" role="status">
                {searchResults && searchResults.length > 0 ? (
                  <div className="header-search-panel__results-list">
                    {searchResults.map((item) => (
                      <a
                        key={item.href + item.title}
                        href={item.href}
                        className="header-search-panel__result-item"
                        onClick={closeAll}
                      >
                        <span className="header-search-panel__result-category">{item.category}</span>
                        <h3 className="header-search-panel__result-title">{item.title}</h3>
                        <p className="header-search-panel__result-desc">{item.description}</p>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="header-search-panel__no-results">
                    No encontramos resultados para tu búsqueda.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
