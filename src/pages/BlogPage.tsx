import { useState } from 'react'
import arrowRight from '../assets/figma/imgArrowRight.svg'
import arrowRight1 from '../assets/figma/imgArrowRight1.svg'
import arrowRight2 from '../assets/figma/imgArrowRight2.svg'
import blogFeatureForest from '../assets/figma/blog-featured-forest.jpg'
import blogFeatureCommunity from '../assets/figma/blog-featured-community.jpg'
import blogReforestation from '../assets/figma/blog-article-reforestation.jpg'
import blogCommunity from '../assets/figma/blog-article-community.jpg'
import blogHealth from '../assets/figma/blog-article-health.jpg'
import logo from '../assets/figma/imgImage4.png'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialInstagramReal from '../assets/figma/imgSocialIcons1.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'

import greenLine from '../assets/figma/imgGreenLine.svg'
import blogHeroBackground from '../assets/figma/about-values-background.png'
import './BlogPage.css'

const categories = [
  { label: 'Reforestación', count: 12 },
  { label: 'Educación', count: 8 },
  { label: 'Comunidad', count: 15 },
  { label: 'Voluntariado', count: 24 },
  { label: 'Salud', count: 5 },
]

const featuredArticles = [
  {
    slug: 'sembrando-futuro-juntos-por-nuestros-bosques',
    category: 'MEDIO AMBIENTE',
    date: 'Marzo 12, 2026',
    title: 'Sembrando futuro: juntos por nuestros bosque',
    description: 'Conoce nuestras acciones de reforestación y el impacto que generamos en las comunidades.',
    image: blogFeatureForest,
    alt: 'Niñas plantando árboles en la Amazonía',
    arrow: arrowRight1,
  },
  {
    slug: 'transformando-vidas-comunidades',
    category: 'COMUNIDAD',
    date: 'Enero 15, 2026',
    title: 'Transformando vidas en nuestras comunidades',
    description: 'Conoce las historias y acciones que impulsamos para mejorar la vida de niños y familias.',
    image: blogFeatureCommunity,
    alt: 'Mujeres de una comunidad amazónica',
    arrow: arrowRight2,
  },
]

const articles = [
  {
    slug: 'jornada-reforestacion-madre-de-dios',
    category: 'VOLUNTARIADO',
    date: '12 Oct, 2024',
    title: 'Jornada de reforestación en Madre de Dios',
    description: 'Un fin de semana lleno de esfuerzo y esperanza, donde más de 50 voluntarios se unieron para restaurar áreas.',
    image: blogReforestation,
    alt: 'Jornada comunitaria de reforestación',
  },
  {
    slug: 'guardianas-del-bosque',
    category: 'COMUNIDAD',
    date: '05 Oct, 2024',
    title: 'Guardianas del bosque: historias locales',
    description: 'Conoce a las mujeres que lideran los esfuerzos de conservación y educación ambiental en sus propias comunidades.',
    image: blogCommunity,
    alt: 'Equipo comunitario trabajando en un vivero',
  },
  {
    slug: 'prevencion-anemia-nuevos-enfoques',
    category: 'SALUD',
    date: '28 Sep, 2024',
    title: 'Prevención de anemia: nuevos enfoques',
    description: 'Nuestra reciente campaña médica ha introducido métodos innovadores para combatir la malnutrición infantil.',
    image: blogHealth,
    alt: 'Jornada de atención de salud en una comunidad',
  },
]

const popularArticles = [
  { title: '5 consejos para proteger el bosque amazónico', date: '10 Oct, 2024', image: blogReforestation },
  { title: 'El rol de la comunidad en la conservación', date: '02 Oct, 2024', image: blogCommunity },
  { title: 'Lucha contra la prevención de la anemia', date: '25 Sep, 2024', image: blogHealth },
]

const tags = ['Amazonía', 'Sostenibilidad', 'Innovación', 'Perú', 'Clima', 'Biodiversidad']
const socials = [
  { label: 'Facebook', image: socialFacebook, href: 'https://www.facebook.com/PeruSembrando' },
  { label: 'Instagram', image: socialInstagramReal, href: 'https://www.instagram.com/sembrando_peru/' },
  { label: 'X', image: socialX, href: 'https://x.com/PeruSembrando' },
  { label: 'LinkedIn', image: socialLinkedin, href: 'https://www.linkedin.com/company/sembrandoperu/' },
  { label: 'TikTok', image: socialTiktok, href: 'https://www.tiktok.com/@sembrando_peru' },
]

export function BlogFooter() {
  const { t } = useLanguage()

  return (
    <footer className="blog-footer" id="contacto">
      <div className="blog-footer__main">
        <h2>{t('HAGAMOS EL CAMBIO POSIBLE!')}</h2>
        <div className="blog-footer__content">
          <div className="blog-footer__brand">
            <a href="/" aria-label="Sembrando Perú, inicio">
              <div className="blog-footer__logo-horizontal">
                <img src={logo} alt="Sembrando Perú Icon" />
                <span className="blog-footer__logo-text">SEMBRANDO<br/>PERÚ</span>
              </div>
            </a>
            <p>{t('Esperanza para un futuro mejor')}</p>
          </div>
          <div className="blog-footer__column">
            <h3>{t('Navegación')}</h3>
            <a href="/">{t('Inicio')}</a><a href="/nosotros">{t('Nosotros')}</a><a href="/blog">{t('Blog')}</a><a href="/contacto">{t('Contáctanos')}</a>
          </div>
          <div className="blog-footer__column blog-footer__contact">
            <h3>{t('Contacto')}</h3>
            <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
            <a href="tel:+51921462828">+51 921 462 828</a>
            <p>Av. Arequipa 2447 – Office 409, Lince District,<br/>Lima, Peru</p>
          </div>
          <div className="blog-footer__column">
            <h3>{t('Involúcrate')}</h3>
            <a href="/#unete">{t('Voluntariado')}</a><a href="/donacion">{t('DONACIONES')}</a><a href="#contacto">{t('Transparencia')}</a>
          </div>
        </div>
        <div className="blog-footer__follow">
          <span>{t('SÍGUENOS :')}</span>
          {socials.map((social) => <a href={social.href ?? '#redes'} target={social.href ? '_blank' : undefined} rel={social.href ? 'noreferrer' : undefined} aria-label={social.label} key={social.label}><img src={social.image} alt="" /></a>)}
        </div>
      </div>
      <div className="blog-footer__legal">
        <span>{t('© 2026 Sembrando. Todos los derechos reservados.')}</span>
        <a href="#privacidad">{t('Políticas de privacidad')}</a>
      </div>
    </footer>
  )
}


export function BlogHeader({ showMasthead = true }: { showMasthead?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

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
          aria-label={t(menuOpen ? 'Cerrar menú' : 'Abrir menú')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`blog-navigation${menuOpen ? ' blog-navigation--open' : ''}`}
          id="blog-navigation"
        >
          <a href="/" onClick={closeMenu}>{t('Inicio')}</a>
          <a href="/nosotros" onClick={closeMenu}>{t('Nosotros')}</a>
          <a className="blog-navigation__active" href="/blog" onClick={closeMenu}>
            {t('Blog')}
            <img src={greenLine} alt="" />
          </a>
          <a href="/contacto" onClick={closeMenu}>{t('Contáctanos')}</a>
          <a className="blog-navigation__donate" href="/donacion" onClick={closeMenu}>
            {t('Donar Ahora')} <img src={arrowRight} alt="" />
          </a>
          <LanguageSwitcher className="blog-navigation__language-mobile" />
        </nav>
        <LanguageSwitcher className="blog-header__language" />
        <a className="blog-header__donate" href="/donacion">
          {t('Donación')}
        </a>
      </header>
      {showMasthead && (
        <section
          className="blog-masthead"
          style={{ backgroundImage: `url(${blogHeroBackground})` }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(2, 115, 77, 0.4)', zIndex: 1 }} />
          <SocialLinks />
          <h1>{t('"Historias que inspiran, acciones que transforman"')}</h1>
        </section>
      )}
    </>
  )
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [message, setMessage] = useState('')
  const { t } = useLanguage()
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category.toLowerCase() === selectedCategory.toLowerCase())
    : articles

  function clearFilters() {
    setSelectedCategory('')
    setSelectedTag('')
    setMessage('')
  }

  return (
    <div className="blog-page">
      <BlogHeader />
      <main className="blog-layout">
        <div className="blog-main-column">
          <section className="blog-featured" aria-labelledby="featured-title">
            <div className="blog-section-heading"><h2 id="featured-title">{t('Destacados')}</h2></div>
            <div className="blog-featured__grid">
              {featuredArticles.map((article) => (
                <article className="featured-card" key={article.title}>
                  <img className="featured-card__image" src={article.image} alt={article.alt} />
                  <div className="featured-card__content">
                    <div className="blog-meta"><span>{t(article.category)}</span><i /><time>{article.date}</time></div>
                    <h3>{t(article.title)}</h3>
                    <p>{t(article.description)}</p>
                    <a href={`/blog/articulo/${article.slug}`}>{t('Leer artículo')} <img src={article.arrow} alt="" /></a>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="blog-latest" id="articulos" aria-labelledby="latest-title">
            <div className="blog-section-heading"><h2 id="latest-title">{t('Últimos Artículos')}</h2></div>
            {selectedCategory || selectedTag ? (
              <div className="blog-filter-status">
                <span>{selectedCategory || selectedTag}</span>
                <button type="button" onClick={clearFilters}>{t('Limpiar filtro')}</button>
              </div>
            ) : null}
            <div className="blog-latest__list">
              {filteredArticles.length ? filteredArticles.map((article) => (
                <article className="latest-card" key={article.title}>
                  <img className="latest-card__image" src={article.image} alt={article.alt} />
                  <div className="latest-card__content">
                    <div className="blog-meta"><span>{t(article.category)}</span><i /><time>{article.date}</time></div>
                    <h3>{t(article.title)}</h3>
                    <p>{t(article.description)}</p>
                    <a href={`/blog/articulo/${article.slug}`}>{t('Leer más')} <img src={arrowRight} alt="" /></a>
                  </div>
                </article>
              )) : <p className="blog-empty">{t('No hay artículos para este filtro.')}</p>}
            </div>
            <div className="blog-load-more">
              <button type="button" onClick={() => setMessage('No hay más historias por ahora.')}>{t('Cargar más historias')}</button>
              {message && <p role="status">{t(message)}</p>}
            </div>
          </section>
        </div>
        <aside className="blog-sidebar" aria-label={t('Explorar artículos')}>
          <section className="blog-sidebar__categories">
            <h2>{t('Categorías')}</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.label}>
                  <button type="button" aria-pressed={selectedCategory === category.label} onClick={() => { setSelectedCategory(category.label); setSelectedTag('') }}>
                    {t(category.label)}<span>{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <section className="blog-sidebar__popular">
            <h2>{t('Post más leídos')}</h2>
            {popularArticles.map((article) => (
              <a className="popular-post" href="#articulos" key={article.title}>
                <img src={article.image} alt="" />
                <span><strong>{t(article.title)}</strong><time>{article.date}</time></span>
              </a>
            ))}
          </section>
          <section className="blog-sidebar__tags">
            <h2>{t('Etiquetas Populares')}</h2>
            <div>
              {tags.map((tag) => (
                <button className={selectedTag === tag ? 'is-selected' : ''} type="button" key={tag} onClick={() => { setSelectedTag(tag); setSelectedCategory('') }}>{t(tag)}</button>
              ))}
            </div>
          </section>
        </aside>
      </main>
      <BlogFooter />
    </div>
  )
}