import { useState } from 'react'
import arrowRight1 from './assets/figma/imgArrowRight1.svg'
import arrowRight2 from './assets/figma/imgArrowRight2.svg'
import blogImage from './assets/figma/imgBlogImage.png'
import blogImage1 from './assets/figma/imgBlogImage1.png'
import blogImage2 from './assets/figma/imgBlogImage2.png'
import blogImage3 from './assets/figma/imgBlogImage3.png'
import blogImage4 from './assets/figma/imgBlogImage4.png'
import blogImage5 from './assets/figma/imgBlogImage5.png'
import ellipse from './assets/figma/imgEllipse.svg'
import heroImage from './assets/figma/img71.png'
import educationHeroImage from './assets/figma/1.jpg'
import healthHeroImage from './assets/figma/2.jpg'
import { useLanguage } from './components/LanguageContext'
import SocialLinks from './components/SocialLinks'
import SiteHeader from './components/SiteHeader'
import { CommunitySignupForm, PeruOfficeInfo } from './components/CommunitySignup'
import ValuesSection from './components/ValuesSection'
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
    category: 'medio-ambiente',
    title: 'SEMBRANDO ÁRBOLES',
    description:
      'Trabajamos para restaurar los árboles extraídos de manera injusta en la Amazonía, protegiendo bosques y la biodiversidad.',
    image: blogImage5,
    alt: 'Trabajo de reforestación en la Amazonía',
  },
  {
    category: 'educacion',
    title: 'SEMBRANDO EDUCACIÓN',
    description: 'Promovemos la igualdad social a través de procesos de alfabetización.',
    image: blogImage4,
    alt: 'Niños participando en actividades educativas',
  },
  {
    category: 'salud',
    title: 'SEMBRANDO SALUD',
    description:
      'Trabajamos para prevenir la anemia infantil en niños de las regiones de Selva y Sierra, mejorando su salud y bienestar.',
    image: blogImage3,
    alt: 'Atención de salud para niños y familias',
  },
]

type ProgramCategory = (typeof programs)[number]['category']

const programCategories: { id: ProgramCategory; label: string }[] = [
  { id: 'medio-ambiente', label: 'Medio ambiente' },
  { id: 'educacion', label: 'Educación' },
  { id: 'salud', label: 'Salud' },
]

const heroSlides = [
  {
    image: heroImage,
    alt: 'Familias de comunidades andinas en una jornada de alimentación saludable',
    titleStart: 'SOMOS',
    titleEnd: 'SEMBRANDO PERÚ',
    description: 'Trabajamos junto a comunidades de la Amazonía y los Andes para construir un futuro sostenible.',
    position: 'center 22%',
    href: '/nosotros',
  },
  {
    image: educationHeroImage,
    alt: 'Actividad educativa de Sembrando Perú en una comunidad amazónica',
    titleStart: 'EDUCACIÓN QUE',
    titleEnd: 'TRANSFORMA',
    description: 'Promovemos el aprendizaje y la participación para fortalecer a las comunidades.',
    position: 'center 35%',
    href: '/#programas',
  },
  {
    image: healthHeroImage,
    alt: 'Campaña comunitaria para mejorar la alimentación y salud infantil',
    titleStart: 'JUNTOS CONTRA',
    titleEnd: 'LA ANEMIA',
    description: 'Impulsamos una mejor alimentación y el cuidado de la salud infantil.',
    position: 'center 20%',
    href: '/#programas',
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

function ProgramCard({ category, title, description, image, alt }: (typeof programs)[number]) {
  const { t } = useLanguage()

  return (
    <article className={`program-card program-card--${category}`}>
      <img className="program-card__image" src={image} alt={alt} />
      <div className="program-card__body">
        <h3>{t(title)}</h3>
        <p>{t(description)}</p>
        <a className="button button--green program-card__action" href="/donacion">
          {t('Apoya esta iniciativa')}
        </a>
      </div>
    </article>
  )
}

function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory | null>(null)
  const { t } = useLanguage()
  const visiblePrograms = activeCategory
    ? programs.filter((program) => program.category === activeCategory)
    : programs.slice(0, 2)

  return (
    <section className="programs-section" id="programas" aria-labelledby="programs-title">
      <div className="section-heading">
        <h2 id="programs-title">{t('NUESTRO TRABAJO')}</h2>
        <p>{t('Trabajamos por un futuro sostenible desde diferentes frentes.')}</p>
      </div>
      <div className="program-filters" role="group" aria-label={t('Filtrar iniciativas por categoría')}>
        {programCategories.map((category) => (
          <button
            className={`program-filter program-filter--${category.id}${activeCategory === category.id ? ' is-active' : ''}`}
            type="button"
            aria-pressed={activeCategory === category.id}
            onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            key={category.id}
          >
            {t(category.label)}
          </button>
        ))}
      </div>
      <div className={`program-grid${activeCategory ? ' program-grid--filtered' : ''}`} aria-live="polite">
        {visiblePrograms.map((program) => <ProgramCard key={program.category} {...program} />)}
      </div>
    </section>
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

function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const { t } = useLanguage()

  function showSlide(index: number) {
    setActiveSlide((index + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[activeSlide]

  return (
    <section
      className="hero-section"
      aria-label={t('Carrusel de Sembrando Perú')}
      aria-roledescription={t('carrusel')}
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
        <a className="hero-section__cta" href={slide.href}>
          {t('Leer más')}
        </a>
      </div>

      {/* Flecha izquierda: fondo negro rectangular */}
      <button
        className="hero-section__arrow hero-section__arrow--previous"
        type="button"
        aria-label={t('Diapositiva anterior')}
        onClick={() => showSlide(activeSlide - 1)}
      >
        <span aria-hidden="true" />
      </button>

      {/* Flecha derecha: fondo negro rectangular */}
      <button
        className="hero-section__arrow hero-section__arrow--next"
        type="button"
        aria-label={t('Siguiente diapositiva')}
        onClick={() => showSlide(activeSlide + 1)}
      >
        <span aria-hidden="true" />
      </button>
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

        <ValuesSection />

        <section className="community-section" id="unete" aria-labelledby="community-title">
          <div className="community-section__inner">
            <h2 id="community-title">{t('ÚNETE A LA COMUNIDAD')}</h2>
            <p className="community-section__description">
              {t('Recibe avances mensuales sobre nuestras jornadas de plantación, historias de impacto en nuestras comunidades y noticias sobre cómo estamos protegiendo nuestros ecosistemas.')}
            </p>
            <CommunitySignupForm />

            <div className="community-section__info" aria-label="Información de contacto">
              <PeruOfficeInfo />

              <div className="community-section__subscribe">
                <span>{t('Suscríbete a nuestro boletín')}</span>
              </div>

              <div className="community-section__articles">
                {articles.map((article) => <ArticleCard key={article.title} {...article} />)}
              </div>

              <a className="button button--green community-section__more" href="/blog">{t('Ver más')}</a>
            </div>
          </div>
        </section>

        <ProgramsSection />

      </main>
      <SiteFooter />
    </div>
  )
}

export default App