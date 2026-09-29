import { useState, type FormEvent } from 'react'
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
import footerArt from './assets/figma/imgGroup6.svg'
import impactArt from './assets/figma/imgImpacto.svg'
import image1 from './assets/figma/imgImage1.png'
import image4 from './assets/figma/imgImage4.png'
import multiRatioPhoto from './assets/figma/imgBuildingBlocks169.jpg'
import mascotImage from './assets/figma/imgMascotImage.png'
import socialFacebook from './assets/figma/imgPlatformFacebookColorNegative.svg'
import socialLinkedin from './assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialTiktok from './assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from './assets/figma/imgPlatformXTwitterColorNegative.svg'
import socialInstagram from './assets/figma/imgSocialIcons.svg'
import socialYoutube from './assets/figma/imgSocialIcons1.svg'
import topHeader from './assets/figma/imgTopHeader1.svg'
import heroImage from './assets/figma/img71.png'
import NosotrosPage from './pages/NosotrosPage'
import './App.css'

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

const socialLinks = [
  { label: 'Facebook', image: socialFacebook },
  { label: 'Instagram', image: socialInstagram },
  { label: 'X', image: socialX },
  { label: 'LinkedIn', image: socialLinkedin },
  { label: 'TikTok', image: socialTiktok },
  { label: 'YouTube', image: socialYoutube },
]

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`social-links ${className}`} aria-label="Redes sociales">
      {socialLinks.map((social) => (
        <a href="#redes" aria-label={social.label} key={social.label}>
          <img src={social.image} alt="" />
        </a>
      ))}
    </div>
  )
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <img className="site-header__art" src={topHeader} alt="" />
      <a className="site-header__brand" href="#inicio" aria-label="Sembrando Perú, inicio">
        <img src={image4} alt="Sembrando Perú" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span className="sr-only">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
      </button>
      <nav
        className={`primary-navigation${menuOpen ? ' primary-navigation--open' : ''}`}
        id="primary-navigation"
      >
        <a className="primary-navigation__active" href="#inicio" onClick={() => setMenuOpen(false)}>
          Inicio
          <img src={greenLine} alt="" />
        </a>
        <a href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
        <a href="#noticias" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contáctanos</a>
      </nav>
      <div className="site-header__actions">
        <SocialLinks className="site-header__socials" />
        <a className="donate-button" href="#unete">
          Donar Ahora
          <img src={arrowRight} alt="" />
        </a>
      </div>
    </header>
  )
}

function ProgramCard({ title, description, image, alt }: (typeof programs)[number]) {
  return (
    <article className="program-card">
      <img className="program-card__image" src={image} alt={alt} />
      <div className="program-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
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
  return (
    <article className="article-card">
      <img className="article-card__image" src={image} alt={alt} />
      <div className="article-card__body">
        <div className="article-card__meta">
          <span>{category}</span>
          <img src={ellipse} alt="" />
          <time>{date}</time>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="article-card__link" href="#noticias">
          Leer artículo
          <img src={arrow} alt="" />
        </a>
      </div>
    </article>
  )
}

function CommunityForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="community-form" onSubmit={handleSubmit}>
      <label>
        <span>Nombre <em>(Requerido)</em></span>
        <input name="firstName" placeholder="Nombre*" autoComplete="given-name" required />
      </label>
      <label>
        <span>Apellido <em>(Requerido)</em></span>
        <input name="lastName" placeholder="Apellido*" autoComplete="family-name" required />
      </label>
      <label>
        <span>Correo electrónico <em>(Requerido)</em></span>
        <input name="email" type="email" placeholder="Nombre*" autoComplete="email" required />
      </label>
      <label>
        <span>País/Región <em>(Requerido)</em></span>
        <select name="country" defaultValue="" required>
          <option value="" disabled>Seleccione país o región*</option>
          <option value="Perú">Perú</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Otro">Otro</option>
        </select>
      </label>
      <label className="community-form__consent">
        <input type="checkbox" name="consent" required />
        <span>
          Quiero recibir noticias por correo sobre proyectos de siembra, avances de impacto y
          eventos de voluntariado de Sembrando Perú. <em>(Requerido)</em>
        </span>
      </label>
      <div className="community-form__submit">
        <button className="button button--green" type="submit">Unirme al cambio</button>
        {submitted && <p role="status">Gracias por unirte a nuestra comunidad.</p>}
      </div>
    </form>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="site-footer__main">
        <img className="site-footer__art" src={footerArt} alt="" />
        <div className="site-footer__inner">
          <div className="site-footer__callout">
            <h2>HAGAMOS EL CAMBIO POSIBLE!</h2>
            <div className="site-footer__partners">
              <img src={image1} alt="Organizaciones aliadas" />
            </div>
          </div>
          <div className="site-footer__columns">
            <div>
              <h3>Navegación</h3>
              <a href="#inicio">Inicio</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#noticias">Blog</a>
              <a href="#contacto">Contáctanos</a>
            </div>
            <div>
              <h3>Contacto</h3>
              <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
              <a href="tel:+51921462828">+51 921 462 828</a>
              <p>Av. Arequipa 2447 – Office 409, Lince District, Lima, Peru</p>
            </div>
            <div>
              <h3>Involúcrate</h3>
              <a href="#unete">Voluntariado</a>
              <a href="#unete">Donaciones</a>
              <a href="#contacto">Transparencia</a>
            </div>
          </div>
          <div className="site-footer__follow" id="redes">
            <span>SÍGUENOS :</span>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="legal-bar">
        <span>© 2026 Sembrando. Todos los derechos reservados.</span>
        <a href="#privacidad">Políticas de privacidad</a>
      </div>
    </footer>
  )
}

function App() {
  if (window.location.pathname === '/nosotros') {
    return <NosotrosPage />
  }

  return (
    <div className="home-page" id="inicio">
      <SiteHeader />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <img className="hero-section__image" src={heroImage} alt="Paisaje de la Amazonía peruana" />
          <div className="hero-section__content">
            <h1 id="hero-title">SOMOS<br /><span>SEMBRANDO PERÚ</span></h1>
            <p>Trabajamos junto a comunades de la Amazonía y los Andes para construir sostenible</p>
          </div>
        </section>

        <section className="intro-section" id="nosotros" aria-labelledby="intro-title">
          <img
            className="intro-section__image"
            src={multiRatioPhoto}
            alt="Fotografía de la sección Qué hacemos"
          />
          <div className="intro-section__content">
            <h2 id="intro-title">¿QUÉ<br />HACEMOS?</h2>
            <p>
              Sembrando Perú es una organización sin fines de lucro comprometida con la protección
              de la Amazonía peruana y el desarrollo sostenible de las comunidades rurales.
              Restauramos bosques degradados, promovemos la educación y la alfabetización,
              fortalecemos la salud infantil y combatimos la anemia en las zonas más vulnerables
              del país.
            </p>
            <a className="button button--lime" href="#programas">
              CONÓCENOS <img src={arrowRight} alt="" />
            </a>
          </div>
        </section>

        <section className="programs-section" id="programas" aria-labelledby="programs-title">
          <div className="section-heading">
            <h2 id="programs-title">Mejorando vida, futuro y medio ambiente</h2>
            <p>Trabajamos por un futuro sostenible desde diferentes frentes.</p>
          </div>
          <div className="program-grid">
            {programs.map((program) => <ProgramCard key={program.title} {...program} />)}
          </div>
        </section>

        <section className="news-section" id="noticias" aria-labelledby="news-title">
          <img className="news-section__art" src={impactArt} alt="" />
          <div className="news-section__content">
            <h2 id="news-title">Últimas noticias</h2>
            <div className="article-grid">
              {articles.map((article) => <ArticleCard key={article.title} {...article} />)}
            </div>
            <a className="button button--green news-section__more" href="#noticias">Ver más</a>
          </div>
        </section>

        <section className="community-section" id="unete" aria-labelledby="community-title">
          <img className="community-section__mascot" src={mascotImage} alt="" />
          <div className="community-section__inner">
            <h2 id="community-title">ÚNETE A LA COMUNIDAD</h2>
            <p className="community-section__description">
              Recibe avances mensuales sobre nuestras jornadas de plantación, historias de impacto
              en nuestras comunidades y noticias sobre cómo estamos protegiendo nuestros
              ecosistemas.
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