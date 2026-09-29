import { useState } from 'react'
import arrowRight from '../assets/figma/imgArrowRight.svg'
import aboutHero from '../assets/figma/about-hero-background.png'
import missionIcon from '../assets/figma/about-mission-icon.png'
import storyCard from '../assets/figma/about-story-card.png'
import valuesImage from '../assets/figma/about-values-main.png'
import visionIcon from '../assets/figma/about-vision-icon.png'
import valuesBackground from '../assets/figma/about-values-background.png'
import footerArt from '../assets/figma/imgGroup6.svg'
import logo from '../assets/figma/imgImage4.png'
import greenLine from '../assets/figma/imgGreenLine.svg'
import childrenImage from '../assets/figma/imgBlogImage5.png'
import learningImage from '../assets/figma/imgBlogImage4.png'
import forestImage from '../assets/figma/imgBlogImage1.png'
import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialInstagram from '../assets/figma/imgSocialIcons.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'
import './NosotrosPage.css'

const socialLinks = [
  { label: 'Facebook', image: socialFacebook },
  { label: 'Instagram', image: socialInstagram },
  { label: 'X', image: socialX },
  { label: 'LinkedIn', image: socialLinkedin },
  { label: 'TikTok', image: socialTiktok },
]

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

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`about-socials ${className}`} aria-label="Redes sociales">
      {socialLinks.map((social) => (
        <a href="#redes" aria-label={social.label} key={social.label}>
          <img src={social.image} alt="" />
        </a>
      ))}
    </div>
  )
}

function AboutHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

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
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
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
          <a href="/" onClick={closeMenu}>Inicio</a>
          <a className="about-navigation__active" href="/nosotros" onClick={closeMenu}>
            Nosotros
            <img src={greenLine} alt="" />
          </a>
          <a href="/#noticias" onClick={closeMenu}>Blog</a>
          <a href="/#contacto" onClick={closeMenu}>Contáctanos</a>
          <a className="about-navigation__donate" href="/#unete" onClick={closeMenu}>
            Donar Ahora <img src={arrowRight} alt="" />
          </a>
        </nav>
        <div className="about-header__language" aria-label="Idioma: español">
          <span aria-hidden="true">◎</span> ES | Español <span aria-hidden="true">⌄</span>
        </div>
        <a className="about-header__donate" href="/#unete">
          Donación
        </a>
      </header>
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
        aria-labelledby="about-title"
      >
        <h1 id="about-title">¿QUIÉNES SOMOS?</h1>
        <SocialLinks className="about-hero__socials" />
      </section>
    </>
  )
}

function StorySection() {
  return (
    <section className="about-story" aria-label="Sobre Sembrando Perú">
      <div className="about-story__intro">
        <img
          className="about-story__image"
          src={storyCard}
          alt="Integrante de Sembrando Perú en una jornada de reforestación"
        />
        <div className="about-story__copy">
          <h2>Una familia comprometida con la vida, bosques y la Amazonía, creando un futuro sostenible</h2>
          <p>
            Nos enfocamos en frenar la tala indiscriminada, combatir el analfabetismo y la anemia
            infantil en zonas rurales. Trabajamos con comunidades rurales de la Amazonía y Andes,
            restaurando ecosistemas, mejorando la vida de niños y promoviendo agricultura y salud
            sostenible.
          </p>
        </div>
      </div>
      <div className="about-story__history">
        <h2>Nuestra historia</h2>
        <img className="about-story__rule" src={greenLine} alt="" />
        <p>
          Sembrando Perú nació con una misión clara y profundamente social: mitigar la deforestación,
          contribuir a la mejora de la educación en zonas rurales y apoyar la lucha contra la anemia
          infantil en las comunidades más vulnerables del país. Su creación surge como respuesta a
          la creciente degradación de los bosques nativos, la falta de acceso a educación de calidad
          y los graves problemas de salud que afectan a miles de niños en áreas rurales y altoandinas.
        </p>
        <p>
          Desde sus inicios, Sembrando Perú ha trabajado con un enfoque integral de desarrollo
          sostenible, entendiendo que la protección del medio ambiente y el bienestar humano están
          estrechamente conectados. Por ello, la organización impulsa acciones que combinan
          reforestación, educación ambiental, alfabetización y prevención en salud, trabajando de
          manera directa y participativa con agricultores, familias y comunidades locales.
        </p>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section
      className="about-mission-vision"
      style={{ backgroundImage: `url(${valuesBackground})` }}
      aria-label="Misión y visión"
    >
      <article className="about-mission-vision__item">
        <img src={missionIcon} alt="" />
        <h2>Misión</h2>
        <p>
          Reducción de la deforestación en Perú, fomento de la alfabetización en zonas rurales y
          lucha contra la anemia infantil mediante soluciones sostenibles y educativas.
        </p>
      </article>
      <article className="about-mission-vision__item">
        <img src={visionIcon} alt="" />
        <h2>Visión</h2>
        <p>
          Convertirnos en un motor de cambio en la Amazonía y las zonas rurales, donde los árboles
          restauren los ecosistemas y las nuevas generaciones crezcan sanas y con acceso a una
          educación de calidad.
        </p>
      </article>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="about-values" aria-labelledby="values-title">
      <div className="about-values__layout">
        <div className="about-values__gallery" aria-label="Acciones de Sembrando Perú">
          <div className="about-values__photo">
            <img src={childrenImage} alt="Niños participando en actividades educativas" />
            <span>{values[0].title}</span>
          </div>
          <div className="about-values__photo">
            <img src={learningImage} alt="Jornada comunitaria de salud" />
            <span>{values[1].title}</span>
          </div>
          <div className="about-values__photo about-values__photo--wide">
            <img src={forestImage} alt="Equipo de Sembrando Perú en un bosque" />
            <span>{values[2].title}</span>
          </div>
          <img className="about-values__frame" src={valuesImage} alt="" />
        </div>
        <div className="about-values__copy">
          <h2 id="values-title">Valores</h2>
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutFooter() {
  return (
    <footer className="about-footer" id="contacto">
      <div className="about-footer__main" style={{ backgroundImage: `url(${footerArt})` }}>
        <h2>HAGAMOS EL CAMBIO POSIBLE!</h2>
        <div className="about-footer__content">
          <div className="about-footer__brand">
            <a href="/" aria-label="Sembrando Perú, inicio">
              <img src={logo} alt="Sembrando Perú" />
            </a>
            <p>Esperanza para un futuro mejor</p>
          </div>
          <div className="about-footer__column">
            <h3>Navegación</h3>
            <a href="/">Inicio</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/#noticias">Blog</a>
            <a href="/#contacto">Contáctanos</a>
          </div>
          <div className="about-footer__column">
            <h3>Contacto</h3>
            <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
            <a href="tel:+51921462828">+51 921 462 828</a>
            <p>Av. Arequipa 2447 – Office 409, Lince District, Lima, Peru</p>
          </div>
          <div className="about-footer__column">
            <h3>Involúcrate</h3>
            <a href="/#unete">Voluntariado</a>
            <a href="/#unete">Donaciones</a>
            <a href="/#contacto">Transparencia</a>
          </div>
        </div>
        <div className="about-footer__follow" id="redes">
          <span>SÍGUENOS :</span>
          <SocialLinks />
        </div>
      </div>
      <div className="about-footer__legal">
        <span>© 2026 Sembrando. Todos los derechos reservados.</span>
        <a href="#privacidad">Políticas de privacidad</a>
      </div>
    </footer>
  )
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