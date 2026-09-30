import { useState } from 'react'
import arrowRight from '../assets/figma/imgArrowRight.svg'
import arrowRight1 from '../assets/figma/imgArrowRight1.svg'
import arrowRight2 from '../assets/figma/imgArrowRight2.svg'
import blogFeatureForest from '../assets/figma/blog-featured-forest.jpg'
import blogFeatureCommunity from '../assets/figma/blog-featured-community.jpg'
import blogReforestation from '../assets/figma/blog-article-reforestation.jpg'
import blogCommunity from '../assets/figma/blog-article-community.jpg'
import blogHealth from '../assets/figma/blog-article-health.jpg'
import footerArt from '../assets/figma/imgGroup6.svg'
import logo from '../assets/figma/imgImage4.png'
import partners from '../assets/figma/blog-footer-partners.png'
import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialInstagram from '../assets/figma/imgSocialIcons.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'
import socialYoutube from '../assets/figma/imgSocialIcons1.svg'
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
    category: 'MEDIO AMBIENTE',
    date: 'Marzo 12, 2026',
    title: 'Sembrando futuro: juntos por nuestros bosque',
    description: 'Conoce nuestras acciones de reforestación y el impacto que generamos en las comunidades.',
    image: blogFeatureForest,
    alt: 'Niñas plantando árboles en la Amazonía',
    arrow: arrowRight1,
  },
  {
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
    category: 'VOLUNTARIADO',
    date: '12 Oct, 2024',
    title: 'Jornada de reforestación en Madre de Dios',
    description: 'Un fin de semana lleno de esfuerzo y esperanza, donde más de 50 voluntarios se unieron para restaurar áreas.',
    image: blogReforestation,
    alt: 'Jornada comunitaria de reforestación',
  },
  {
    category: 'COMUNIDAD',
    date: '05 Oct, 2024',
    title: 'Guardianas del bosque: historias locales',
    description: 'Conoce a las mujeres que lideran los esfuerzos de conservación y educación ambiental en sus propias comunidades.',
    image: blogCommunity,
    alt: 'Equipo comunitario trabajando en un vivero',
  },
  {
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
  { label: 'Facebook', image: socialFacebook },
  { label: 'Instagram', image: socialInstagram },
  { label: 'X', image: socialX },
  { label: 'LinkedIn', image: socialLinkedin },
  { label: 'TikTok', image: socialTiktok },
  { label: 'YouTube', image: socialYoutube },
]

function BlogFooter() {
  return (
    <footer className="blog-footer" id="contacto">
      <div className="blog-footer__main" style={{ backgroundImage: `url(${footerArt})` }}>
        <h2>HAGAMOS EL CAMBIO POSIBLE!</h2>
        <div className="blog-footer__content">
          <div className="blog-footer__brand">
            <a href="/" aria-label="Sembrando Perú, inicio"><img src={logo} alt="Sembrando Perú" /></a>
            <img className="blog-footer__partners" src={partners} alt="Organizaciones aliadas" />
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
            <p>Av. Arequipa 2447 – Office 409, Lince District, Lima, Peru</p>
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
      <div className="blog-footer__legal"><span>© 2026 Sembrando. Todos los derechos reservados.</span><a href="#privacidad">Políticas de privacidad</a></div>
    </footer>
  )
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [message, setMessage] = useState('')
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
      <header className="blog-masthead">
        <p className="blog-masthead__ghost" aria-hidden="true">¿QUIÉNES SOMOS?</p>
        <h1><span>SOMOS</span><strong>SEMBRANDO PERÚ</strong></h1>
      </header>
      <main className="blog-layout">
        <div className="blog-main-column">
          <section className="blog-featured" aria-labelledby="featured-title">
            <div className="blog-section-heading"><h2 id="featured-title">Destacados</h2></div>
            <div className="blog-featured__grid">
              {featuredArticles.map((article) => (
                <article className="featured-card" key={article.title}>
                  <img className="featured-card__image" src={article.image} alt={article.alt} />
                  <div className="featured-card__content">
                    <div className="blog-meta"><span>{article.category}</span><i /><time>{article.date}</time></div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href="#articulos">Leer artículo <img src={article.arrow} alt="" /></a>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="blog-latest" id="articulos" aria-labelledby="latest-title">
            <div className="blog-section-heading"><h2 id="latest-title">Últimos Artículos</h2></div>
            {selectedCategory || selectedTag ? (
              <div className="blog-filter-status">
                <span>{selectedCategory || selectedTag}</span>
                <button type="button" onClick={clearFilters}>Limpiar filtro</button>
              </div>
            ) : null}
            <div className="blog-latest__list">
              {filteredArticles.length ? filteredArticles.map((article) => (
                <article className="latest-card" key={article.title}>
                  <img className="latest-card__image" src={article.image} alt={article.alt} />
                  <div className="latest-card__content">
                    <div className="blog-meta"><span>{article.category}</span><i /><time>{article.date}</time></div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href="#articulos">Leer más <img src={arrowRight} alt="" /></a>
                  </div>
                </article>
              )) : <p className="blog-empty">No hay artículos para este filtro.</p>}
            </div>
            <div className="blog-load-more">
              <button type="button" onClick={() => setMessage('No hay más historias por ahora.')}>Cargar más historias</button>
              {message && <p role="status">{message}</p>}
            </div>
          </section>
        </div>
        <aside className="blog-sidebar" aria-label="Explorar artículos">
          <section className="blog-sidebar__categories">
            <h2>Categorías</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.label}>
                  <button type="button" aria-pressed={selectedCategory === category.label} onClick={() => { setSelectedCategory(category.label); setSelectedTag('') }}>
                    {category.label}<span>{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <section className="blog-sidebar__popular">
            <h2>Post más leídos</h2>
            {popularArticles.map((article) => (
              <a className="popular-post" href="#articulos" key={article.title}>
                <img src={article.image} alt="" />
                <span><strong>{article.title}</strong><time>{article.date}</time></span>
              </a>
            ))}
          </section>
          <section className="blog-sidebar__tags">
            <h2>Etiquetas Populares</h2>
            <div>
              {tags.map((tag) => (
                <button className={selectedTag === tag ? 'is-selected' : ''} type="button" key={tag} onClick={() => { setSelectedTag(tag); setSelectedCategory('') }}>{tag}</button>
              ))}
            </div>
          </section>
        </aside>
      </main>
      <BlogFooter />
    </div>
  )
}