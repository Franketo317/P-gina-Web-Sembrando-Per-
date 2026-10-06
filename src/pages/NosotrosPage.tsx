import { useState } from 'react'
import arrowRight from '../assets/figma/imgArrowRight.svg'
import aboutHero from '../assets/figma/about-hero-background.png'
import missionIcon from '../assets/figma/misión.png'
import storyCard from '../assets/figma/about-story-card.png'
import visionIcon from '../assets/figma/vision.png'
import valuesBackground from '../assets/figma/about-values-background.png'
import logo from '../assets/figma/imgImage4.png'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import greenLine from '../assets/figma/imgGreenLine.svg'
import childrenImage from '../assets/figma/imgBlogImage5.png'
import learningImage from '../assets/figma/imgBlogImage4.png'
import forestImage from '../assets/figma/imgBlogImage1.png'
import { BlogFooter } from './BlogPage'
import './NosotrosPage.css'

const values = [
  {
    title: 'SOSTENIBILIDAD',
    description:
      'Compromiso con el uso responsable de los recursos naturales, promoviendo soluciones que respeten el equilibrio ecológico y favorezcan la conservación a largo plazo.',
  },
  {
    title: 'COMPROMISO SOCIAL',
    description:
      'Prioridad en la mejora de la calidad de vida de las comunidades rurales, centrándose en soluciones que aborden la educación, la salud y el bienestar de las personas más vulnerables.',
  },
  {
    title: 'INNOVACIÓN',
    description:
      'Apertura a nuevas ideas y métodos creativos para resolver problemas medioambientales, educativos y sanitarios, buscando soluciones prácticas y eficaces como el uso de contenedores o cajas de semillas.',
  },
]

function AboutHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="about-header">
        <a className="about-header__brand" href="/" aria-label="Sembrando Perú, inicio">
          <img src={logo} alt="Sembrando Perú" />
        </a>
        <button
          className="about-header__menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="about-navigation"
          aria-label={t(menuOpen ? 'Cerrar menú' : 'Abrir menú')}
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
          <a href="/" onClick={closeMenu}>{t('Inicio')}</a>
          <a className="about-navigation__active" href="/nosotros" onClick={closeMenu}>
            {t('Nosotros')}
            <img src={greenLine} alt="" />
          </a>
          <a href="/blog" onClick={closeMenu}>{t('Blog')}</a>
          <a href="/contacto" onClick={closeMenu}>{t('Contáctanos')}</a>
          <a className="about-navigation__donate" href="/donacion" onClick={closeMenu}>
            {t('Donar Ahora')} <img src={arrowRight} alt="" />
          </a>
          <LanguageSwitcher className="about-navigation__language-mobile" />
        </nav>
        <LanguageSwitcher className="about-header__language" />
        <a className="about-header__donate" href="/donacion">
          {t('Donación')}
        </a>
      </header>
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
        aria-labelledby="about-title"
      >
        <h1 id="about-title">{t('¿QUIÉNES SOMOS?')}</h1>
        <SocialLinks />
      </section>
    </>
  )
}

function StorySection() {
  const { t } = useLanguage()

  return (
    <section className="about-story" aria-label={t('Sobre Sembrando Perú')}>
      <div className="about-story__intro">
        <img
          className="about-story__image"
          src={storyCard}
          alt="Integrante de Sembrando Perú en una jornada de reforestación"
        />
        <div className="about-story__copy">
          <h2>{t('Una familia comprometida con la vida, bosques y la Amazonía, creando un futuro sostenible')}</h2>
          <p>
            {t('Nos enfocamos en frenar la tala indiscriminada, combatir el analfabetismo y la anemia infantil en zonas rurales. Trabajamos con comunidades rurales de la Amazonía y Andes, restaurando ecosistemas, mejorando la vida de niños y promoviendo agricultura y salud sostenible.')}
          </p>
        </div>
      </div>
      <div className="about-story__history">
        <h2>{t('Nuestra historia')}</h2>
        <img className="about-story__rule" src={greenLine} alt="" />
        <p>
          {t('Sembrando Perú nació con una misión clara y profundamente social: mitigar la deforestación, contribuir a la mejora de la educación en zonas rurales y apoyar la lucha contra la anemia infantil en las comunidades más vulnerables del país. Su creación surge como respuesta a la creciente degradación de los bosques nativos, la falta de acceso a educación de calidad y los graves problemas de salud que afectan a miles de niños en áreas rurales y altoandinas.')}
        </p>
        <p>
          {t('Desde sus inicios, Sembrando Perú ha trabajado con un enfoque integral de desarrollo sostenible, entendiendo que la protección del medio ambiente y el bienestar humano están estrechamente conectados. Por ello, la organización impulsa acciones que combinan reforestación, educación ambiental, alfabetización y prevención en salud, trabajando de manera directa y participativa con agricultores, familias y comunidades locales.')}
        </p>
      </div>
    </section>
  )
}

function MissionVision() {
  const { t } = useLanguage()

  return (
    <section
      className="about-mission-vision"
      style={{ backgroundImage: `url(${valuesBackground})` }}
      aria-label={t('Misión y visión')}
    >
      <article className="about-mission-vision__item">
        <img src={missionIcon} alt="" />
        <h2>{t('Misión')}</h2>
        <p>
          {t('Reducción de la deforestación en Perú, fomento de la alfabetización en zonas rurales y lucha contra la anemia infantil mediante soluciones sostenibles y educativas.')}
        </p>
      </article>
      <article className="about-mission-vision__item">
        <img src={visionIcon} alt="" />
        <h2>{t('Visión')}</h2>
        <p>
          {t('Convertirnos en un motor de cambio en la Amazonía y las zonas rurales, donde los árboles restauren los ecosistemas y las nuevas generaciones crezcan sanas y con acceso a una educación de calidad.')}
        </p>
      </article>
    </section>
  )
}

function ValuesSection() {
  const { t } = useLanguage()

  return (
    <section className="about-values" aria-labelledby="values-title">
      <div className="about-values__layout">
        <div className="about-values__gallery" aria-label={t('Acciones de Sembrando Perú')}>
          <div className="about-values__photo about-values__photo--wide">
            <img src={childrenImage} alt="Niños participando en actividades educativas" />
            <span>{t(values[0].title)}</span>
          </div>
          <div className="about-values__photo">
            <img src={learningImage} alt="Jornada comunitaria de salud" />
            <span>{t(values[1].title)}</span>
          </div>
          <div className="about-values__photo">
            <img src={forestImage} alt="Equipo de Sembrando Perú en un bosque" />
            <span>{t(values[2].title)}</span>
          </div>
        </div>
        <div className="about-values__copy">
          <h2 id="values-title">{t('Valores')}</h2>
          {values.map((value) => (
            <article key={value.title}>
              <h3>{t(value.title)}</h3>
              <p>{t(value.description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutFooter() {
  return <BlogFooter />
}

export default function NosotrosPage() {
  return (
    <div className="about-page">
      <AboutHeader />
      <main>
        <StorySection />
        <MissionVision />
        <ValuesSection />
      </main>
      <AboutFooter />
    </div>
  )
}