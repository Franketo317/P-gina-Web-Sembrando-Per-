import { useEffect, useRef, useState, type FormEvent } from 'react'
import arrowRight from './assets/figma/imgArrowRight.svg'
import arrowRight1 from './assets/figma/imgArrowRight1.svg'
import arrowRight2 from './assets/figma/imgArrowRight2.svg'
import blogImage from './assets/figma/imgBlogImage.png'
import blogImage1 from './assets/figma/imgBlogImage1.png'
import blogImage2 from './assets/figma/imgBlogImage2.png'
import blogImage3 from './assets/figma/imgBlogImage3.png'
import blogImage4 from './assets/figma/imgBlogImage4.png'
import blogImage5 from './assets/figma/imgBlogImage5.png'
import ellipse from './assets/figma/imgEllipse.svg'
import greenLine from './assets/figma/imgGreenLine.svg'
import impactArt from './assets/figma/imgImpacto.svg'
import image4 from './assets/figma/imgImage4.png'
import multiRatioPhoto from './assets/figma/imgBuildingBlocks169.jpg'
import mascotImage from './assets/figma/imgMascotImage.png'
import heroImage from './assets/figma/img71.png'
import educationHeroImage from './assets/figma/1.jpg'
import healthHeroImage from './assets/figma/2.jpg'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useLanguage } from './components/LanguageContext'
import SocialLinks from './components/SocialLinks'
import NosotrosPage from './pages/NosotrosPage'
import BlogPage from './pages/BlogPage'
import { BlogFooter } from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'
import ContactPage from './pages/ContactPage'
import DonationPage from './pages/DonationPage'
import './App.css'
import './pages/NosotrosPage.css'

const programs = [
  {
    title: 'SEMBRANDO ÁRBOLES',
    description:
      'Trabajamos para restaurar los árboles extraídos de manera injusta en la Amazonía, protegiendo bosques y la biodiversidad.',
    image: blogImage5,
    alt: 'Trabajo de reforestación en la Amazonía',
  },
  {
    title: 'SEMBRANDO EDUCACIÓN',
    description: 'Promovemos la igualdad social a través de procesos de alfabetización.',
    image: blogImage4,
    alt: 'Niños participando en actividades educativas',
  },
  {
    title: 'SEMBRANDO SALUD',
    description:
      'Trabajamos para prevenir la anemia infantil en niños de las regiones de Selva y Sierra, mejorando su salud y bienestar.',
    image: blogImage3,
    alt: 'Atención de salud para niños y familias',
  },
]

const heroSlides = [
  {
    image: heroImage,
    alt: 'Familias de comunidades andinas en una jornada de alimentación saludable',
    titleStart: 'SOMOS',
    titleEnd: 'SEMBRANDO PERÚ',
    description: 'Trabajamos junto a comunidades de la Amazonía y los Andes para construir un futuro sostenible.',
    position: 'center 20%',
  },
  {
    image: educationHeroImage,
    alt: 'Actividad educativa de Sembrando Perú en una comunidad amazónica',
    titleStart: 'EDUCACIÓN QUE',
    titleEnd: 'TRANSFORMA',
    description: 'Promovemos el aprendizaje y la participación para fortalecer a las comunidades.',
    position: 'center 48%',
  },
  {
    image: healthHeroImage,
    alt: 'Campaña comunitaria para mejorar la alimentación y salud infantil',
    titleStart: 'JUNTOS CONTRA',
    titleEnd: 'LA ANEMIA',
    description: 'Impulsamos una mejor alimentación y el cuidado de la salud infantil.',
    position: 'center 18%',
  },
]

const articles = [
  {
    category: 'MEDIO AMBIENTE',
    date: 'Marzo 12, 2026',
    title: 'Sembrando futuro: juntos por nuestros bosque',
    description:
      'Conoce nuestras acciones de reforestación y el impacto que generamos en las comunidades.',
    image: blogImage,
    alt: 'Bosque de la Amazonía peruana',
    arrow: arrowRight1,
  },
  {
    category: 'VOLUNTARIADO',
    date: 'Febrero 28, 2026',
    title: 'Convocatoria de voluntariado 2026',
    description:
      'Sé parte del cambio y únete a nuestras próximas actividades y proyectos sociales.',
    image: blogImage1,
    alt: 'Voluntariado de Sembrando Perú',
    arrow: arrowRight2,
  },
  {
    category: 'COMUNIDAD',
    date: 'Enero 15, 2026',
    title: 'Transformando vidas en nuestras comunidades',
    description:
      'Conoce las historias y acciones que impulsamos para mejorar la vida de niños y familias.',
    image: blogImage2,
    alt: 'Familia de una comunidad amazónica',
    arrow: arrowRight2,
  },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="about-header">
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
        className={`about-navigation${menuOpen ? ' about-navigation--open' : ''}`}
        id="about-navigation"
      >
        <a className="about-navigation__active" href="#inicio" onClick={() => setMenuOpen(false)}>
          {t('Inicio')}
          <img src={greenLine} alt="" />
        </a>
        <a href="/nosotros" onClick={() => setMenuOpen(false)}>{t('Nosotros')}</a>
        <a href="/blog" onClick={() => setMenuOpen(false)}>{t('Blog')}</a>
        <a href="/contacto" onClick={() => setMenuOpen(false)}>{t('Contáctanos')}</a>
        <a className="about-navigation__donate" href="/donacion" onClick={() => setMenuOpen(false)}>
          {t('Donar Ahora')} <img src={arrowRight} alt="" />
        </a>
        <LanguageSwitcher className="about-navigation__language-mobile" />
      </nav>
      <LanguageSwitcher className="about-header__language" />
      <a className="about-header__donate" href="/donacion">
        {t('Donación')}
      </a>
    </header>
  )
}

function ProgramCard({ title, description, image, alt }: (typeof programs)[number]) {
  const { t } = useLanguage()

  return (
    <article className="program-card">
      <img className="program-card__image" src={image} alt={alt} />
      <div className="program-card__body">
        <h3>{t(title)}</h3>
        <p>{t(description)}</p>
      </div>
    </article>
  )
}

function ArticleCard({
  category,
  date,
  title,
  description,
  image,
  alt,
  arrow,
}: (typeof articles)[number]) {
  const { t } = useLanguage()

  return (
    <article className="article-card">
      <img className="article-card__image" src={image} alt={alt} />
      <div className="article-card__body">
        <div className="article-card__meta">
          <span>{t(category)}</span>
          <img src={ellipse} alt="" />
          <time>{date}</time>
        </div>
        <h3>{t(title)}</h3>
        <p>{t(description)}</p>
        <a className="article-card__link" href="/blog">
          {t('Leer artículo')}
          <img src={arrow} alt="" />
        </a>
      </div>
    </article>
  )
}

function CommunityForm() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="community-form" onSubmit={handleSubmit}>
      <label>
        <span>{t('Nombre')} <em>{t('(Requerido)')}</em></span>
        <input name="firstName" placeholder={`${t('Nombre')}*`} autoComplete="given-name" required />
      </label>
      <label>
        <span>{t('Apellido')} <em>{t('(Requerido)')}</em></span>
        <input name="lastName" placeholder={`${t('Apellido')}*`} autoComplete="family-name" required />
      </label>
      <label>
        <span>{t('Correo electrónico')} <em>{t('(Requerido)')}</em></span>
        <input name="email" type="email" placeholder={`${t('Correo electrónico')}*`} autoComplete="email" required />
      </label>
      <label>
        <span>{t('País/Región')} <em>{t('(Requerido)')}</em></span>
        <select name="country" defaultValue="" required>
          <option value="" disabled>{t('Seleccione país o región*')}</option>
          <option value="Perú">Perú</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Otro">{t('Otro')}</option>
        </select>
      </label>
      <label className="community-form__consent">
        <input type="checkbox" name="consent" required />
        <span>
          {t('Quiero recibir noticias por correo sobre proyectos de siembra, avances de impacto y eventos de voluntariado de Sembrando Perú. (Requerido)')}
        </span>
      </label>
      <div className="community-form__submit">
        <button className="button button--green" type="submit">{t('Unirme al cambio')}</button>
        {submitted && <p role="status">{t('Gracias por unirte a nuestra comunidad.')}</p>}
      </div>
    </form>
  )
}

function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const pointerStartX = useRef<number | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!isPlaying) return

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [activeSlide, isPlaying])

  function showSlide(index: number) {
    setActiveSlide((index + heroSlides.length) % heroSlides.length)
  }

  function handlePointerDown(event: React.PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest('button, a')) return
    pointerStartX.current = event.clientX
  }

  function handlePointerUp(event: React.PointerEvent<HTMLElement>) {
    if (pointerStartX.current === null) return

    const distance = event.clientX - pointerStartX.current
    pointerStartX.current = null
    if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1))
  }

  const slide = heroSlides[activeSlide]

  return (
    <section
      className="hero-section"
      aria-label={t('Carrusel de Sembrando Perú')}
      aria-roledescription={t('carrusel')}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { pointerStartX.current = null }}
    >
      {heroSlides.map((item, index) => (
        <img
          className={`hero-section__image${index === activeSlide ? ' is-active' : ''}`}
          src={item.image}
          alt={item.alt}
          aria-hidden={index !== activeSlide}
          key={item.image}
          style={{ objectPosition: item.position }}
        />
      ))}
      <SocialLinks />
      <div className="hero-section__content" aria-live="polite">
        <h1 id="hero-title">
          {t(slide.titleStart)}<br /><span>{t(slide.titleEnd)}</span>
        </h1>
        <p>{t(slide.description)}</p>
      </div>
      <button
        className="hero-section__arrow hero-section__arrow--previous"
        type="button"
        aria-label={t('Diapositiva anterior')}
        onClick={() => showSlide(activeSlide - 1)}
      >
        <span aria-hidden="true" />
      </button>
      <button
        className="hero-section__arrow hero-section__arrow--next"
        type="button"
        aria-label={t('Siguiente diapositiva')}
        onClick={() => showSlide(activeSlide + 1)}
      >
        <span aria-hidden="true" />
      </button>
      <div className="hero-section__controls">
        <div className="hero-section__indicators" role="group" aria-label={t('Elegir diapositiva')}>
          {heroSlides.map((item, index) => (
            <button
              className={index === activeSlide ? 'is-active' : ''}
              type="button"
              aria-label={`${t('Ir a la diapositiva')} ${index + 1}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              key={item.titleStart}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <button
          className="hero-section__playback"
          type="button"
          aria-label={t(isPlaying ? 'Pausar reproducción' : 'Reanudar reproducción')}
          onClick={() => setIsPlaying((playing) => !playing)}
        >
          <span className={isPlaying ? 'is-playing' : 'is-paused'} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <BlogFooter /> 
  )
}

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const { t } = useLanguage()

  if (currentPath === '/donacion') {
    return <DonationPage />
  }

  if (currentPath === '/contacto') {
    return <ContactPage />
  }

  if (currentPath === '/blog') {
    return <BlogPage />
  }

  if (currentPath.startsWith('/blog/articulo/')) {
    const slug = decodeURIComponent(currentPath.slice('/blog/articulo/'.length))
    return <BlogArticlePage slug={slug} />
  }

  if (currentPath === '/nosotros') {
    return <NosotrosPage />
  }

  return (
    <div className="home-page" id="inicio">
      <SiteHeader />
      <main>
        <HomeHero />

        <section className="intro-section" id="nosotros" aria-labelledby="intro-title">
          <img
            className="intro-section__image"
            src={multiRatioPhoto}
            alt="Fotografía de la sección Qué hacemos"
          />
          <div className="intro-section__content">
            <h2 id="intro-title">{t('¿QUÉ HACEMOS?')}</h2>
            <p>{t('Sembrando Perú es una organización sin fines de lucro comprometida con la protección de la Amazonía peruana y el desarrollo sostenible de las comunidades rurales. Restauramos bosques degradados, promovemos la educación y la alfabetización, fortalecemos la salud infantil y combatimos la anemia en las zonas más vulnerables del país.')}</p>
            <a className="button button--lime" href="/nosotros">
              {t('CONÓCENOS')} <img src={arrowRight} alt="" />
            </a>
          </div>
        </section>

        <section className="programs-section" id="programas" aria-labelledby="programs-title">
          <div className="section-heading">
            <h2 id="programs-title">{t('Mejorando vida, futuro y medio ambiente')}</h2>
            <p>{t('Trabajamos por un futuro sostenible desde diferentes frentes.')}</p>
          </div>
          <div className="program-grid">
            {programs.map((program) => <ProgramCard key={program.title} {...program} />)}
          </div>
          <div className="programs-pagination" aria-hidden="true">
            <span className="is-active" />
            <span />
            <span />
          </div>
        </section>

        <section className="news-section" id="noticias" aria-labelledby="news-title">
          <img className="news-section__art" src={impactArt} alt="" />
          <div className="news-section__content">
            <h2 id="news-title">{t('Últimas noticias')}</h2>
            <div className="article-grid">
              {articles.map((article) => <ArticleCard key={article.title} {...article} />)}
            </div>
            <a className="button button--green news-section__more" href="/blog">{t('Ver más')}</a>
          </div>
        </section>

        <section className="community-section" id="unete" aria-labelledby="community-title">
          <img className="community-section__mascot" src={mascotImage} alt="" />
          <div className="community-section__inner">
            <h2 id="community-title">{t('ÚNETE A LA COMUNIDAD')}</h2>
            <p className="community-section__description">
              {t('Recibe avances mensuales sobre nuestras jornadas de plantación, historias de impacto en nuestras comunidades y noticias sobre cómo estamos protegiendo nuestros ecosistemas.')}
            </p>
            <CommunityForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App