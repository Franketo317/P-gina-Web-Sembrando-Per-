import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import blogImage3 from './assets/figma/imgBlogImage3.png'
import blogImage4 from './assets/figma/imgBlogImage4.png'
import blogImage5 from './assets/figma/imgBlogImage5.png'
import heroImage from './assets/figma/img71.png'
import educationHeroImage from './assets/figma/1.jpg'
import healthHeroImage from './assets/figma/2.jpg'
import { useLanguage } from './components/LanguageContext'
import SocialLinks from './components/SocialLinks'
import SiteHeader from './components/SiteHeader'
import { CommunitySignupForm, PeruOfficeInfo } from './components/CommunitySignup'
import ValuesSection from './components/ValuesSection'
import NosotrosPage from './pages/NosotrosPage'
import { BlogFooter } from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'
import ContactPage from './pages/ContactPage'
import DonationPage from './pages/DonationPage'
import JoinPage from './pages/JoinPage'
import HowWeWorkPage from './pages/HowWeWorkPage'
import OurTeamPage from './pages/OurTeamPage'
import ConservationStrategiesPage from './pages/ConservationStrategiesPage'
import ReforestationPage from './pages/ReforestationPage'
import EducationPage from './pages/EducationPage'
import HealthPage from './pages/HealthPage'
import ConservationStrategyDetailPage from './pages/ConservationStrategyDetailPage'
import AlliancesPage from './pages/AlliancesPage'
import './App.css'
import './pages/NosotrosPage.css'
import './pages/ParticipationTypography.css'

const programs = [
  {
    category: 'medio-ambiente',
    title: 'Reto 300',
    action: 'Conoce el Reto 300',
    href: '/estrategias-conservacion',
    description:
      'Trabajamos para restaurar los árboles extraídos de manera injusta en la Amazonía, protegiendo bosques y la biodiversidad.',
    image: blogImage5,
    alt: 'Trabajo de reforestación en la Amazonía',
  },
  {
    category: 'educacion',
    title: 'VOLUNTARIADO',
    action: 'ÚNETE',
    href: '/voluntariado',
    description: 'Promovemos la igualdad social a través de procesos de alfabetización.',
    image: blogImage4,
    alt: 'Niños participando en actividades educativas',
  },
  {
    category: 'salud',
    title: 'SEMBRANDO SALUD',
    action: 'Apoya esta iniciativa',
    href: '/donacion',
    description:
      'Trabajamos para prevenir la anemia infantil en niños de las regiones de Selva y Sierra, mejorando su salud y bienestar.',
    image: blogImage3,
    alt: 'Atención de salud para niños y familias',
  },
]

const programCategories = [
  { id: 'medio-ambiente', label: 'Reforestación', href: '/reforestacion' },
  { id: 'educacion', label: 'Educación', href: '/educacion' },
  { id: 'salud', label: 'Salud', href: '/salud' },
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

function RedirectToContactComplaints() {
  useEffect(() => {
    window.location.replace('/contacto#mecanismo-de-quejas')
  }, [])

  return null
}

function ProgramCard({ category, title, action, href, image, alt }: (typeof programs)[number]) {
  const { t } = useLanguage()

  return (
    <article className={`program-card program-card--${category}`}>
      <img className="program-card__image" src={image} alt={t(alt)} />
      <div className="program-card__body">
        <h3><a className="program-card__title-link" href={href}>{t(title)}</a></h3>
        <a className="program-card__action" href={href} aria-label={`${t(action)}: ${t(title)}`}>
          {t(action)} <ChevronRight aria-hidden="true" size={24} strokeWidth={3} />
        </a>
      </div>
    </article>
  )
}

function ProgramsSection() {
  const { t } = useLanguage()

  return (
    <section className="programs-section" id="programas" aria-labelledby="programs-title">
      <div className="section-heading">
        <h2 id="programs-title">{t('NUESTRO TRABAJO')}</h2>
        <p>{t('Trabajamos por un futuro sostenible desde diferentes frentes.')}</p>
      </div>
      <nav className="program-filters" aria-label={t('NUESTRO TRABAJO')}>
        {programCategories.map((category) => (
          <a
            className={`program-filter program-filter--${category.id}`}
            id={`programas-filter-${category.id}`}
            href={category.href}
            key={category.id}
          >
            {t(category.label)}
          </a>
        ))}
      </nav>
      <div className="program-grid">
        {programs.slice(0, 2).map((program) => <ProgramCard key={program.category} {...program} />)}
      </div>
    </section>
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
          alt={t(item.alt)}
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

  if (currentPath === '/membresia') {
    return <ContactPage />
  }

  if (currentPath === '/donacion') {
    return <DonationPage />
  }

  if (currentPath === '/voluntariado') {
    return <JoinPage volunteering />
  }

  if (currentPath === '/sumate') {
    return <JoinPage />
  }

  if (currentPath === '/contacto') {
    return <ContactPage />
  }

  if (currentPath === '/alianzas-empresariales') {
    return <AlliancesPage />
  }

  if (currentPath === '/campanas' || currentPath.startsWith('/campanas/')) {
    return <JoinPage volunteering />
  }

  if (currentPath.startsWith('/blog/articulo/')) {
    const slug = decodeURIComponent(currentPath.split('/articulo/')[1])
    return <BlogArticlePage slug={slug} />
  }

  if (currentPath === '/nosotros') {
    return <NosotrosPage />
  }

  if (currentPath === '/como-trabajamos') {
    return <HowWeWorkPage />
  }

  if (currentPath === '/estrategias-conservacion') {
    return <ConservationStrategiesPage />
  }

  if (currentPath === '/reforestacion') {
    return <ReforestationPage />
  }

  if (currentPath === '/educacion') {
    return <EducationPage />
  }

  if (currentPath === '/salud') {
    return <HealthPage />
  }

  if (currentPath.startsWith('/estrategias-conservacion/')) {
    const slug = currentPath.slice('/estrategias-conservacion/'.length)
    return <ConservationStrategyDetailPage slug={slug} />
  }

  if (currentPath === '/nuestro-equipo') {
    return <OurTeamPage />
  }

  if (currentPath === '/mecanismo-de-quejas') {
    return <RedirectToContactComplaints />
  }

  return (
    <div className="home-page" id="inicio">
      <SiteHeader />
      <main>
        <HomeHero />

        <ValuesSection />

        <section className="community-section" id="unete" aria-labelledby="community-title">
          <div className="community-section__inner">
            <div className="community-section__signup">
              <h2 id="community-title">{t('ÚNETE A LA COMUNIDAD')}</h2>
              <p className="community-section__description">
                {t('Recibe avances mensuales sobre nuestras jornadas de plantación, historias de impacto en nuestras comunidades y noticias sobre cómo estamos protegiendo nuestros ecosistemas.')}
              </p>
              <CommunitySignupForm />

              <div className="community-section__info" aria-label={t("Información de contacto")}>
                <PeruOfficeInfo />
              </div>
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
