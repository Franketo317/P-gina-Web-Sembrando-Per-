import { useState, type FormEvent } from 'react'
import logo from '../assets/figma/imgImage4.png'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import heroImage from '../assets/figma/contact-hero.png'
import officeImage from '../assets/figma/contact-office.png'
import arrowRight from '../assets/figma/imgArrowRight.svg'
import greenLine from '../assets/figma/imgGreenLine.svg'
import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialInstagram from '../assets/figma/imgSocialIcons1.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'
import socialYoutube from '../assets/figma/imgSocialIcons1.svg'
import { BlogFooter } from './BlogPage'
import './ContactPage.css'

const socialLinks = [
  { label: 'Facebook', image: socialFacebook, className: 'facebook', href: 'https://www.facebook.com/PeruSembrando' },
  { label: 'Instagram', image: socialInstagram, className: 'instagram', href: 'https://www.instagram.com/sembrando_peru/' },
  { label: 'X', image: socialX, className: 'x', href: 'https://x.com/PeruSembrando' },
  { label: 'TikTok', image: socialTiktok, className: 'tiktok', href: 'https://www.tiktok.com/@sembrando_peru' },
  { label: 'LinkedIn', image: socialLinkedin, className: 'linkedin', href: 'https://www.linkedin.com/company/sembrandoperu/' },
  { label: 'YouTube', image: socialYoutube, className: 'youtube', href: 'https://www.youtube.com/results?search_query=Sembrando+Peru' },
]

function ContactHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="contact-header">
        <a className="contact-header__brand" href="/" aria-label="Sembrando Perú, inicio">
          <img src={logo} alt="Sembrando Perú" />
        </a>
        <button
          className="contact-header__menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="contact-navigation"
          aria-label={t(menuOpen ? 'Cerrar menú' : 'Abrir menú')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`contact-navigation${menuOpen ? ' contact-navigation--open' : ''}`}
          id="contact-navigation"
        >
          <a href="/" onClick={closeMenu}>{t('Inicio')}</a>
          <a href="/nosotros" onClick={closeMenu}>{t('Nosotros')}</a>
          <a href="/blog" onClick={closeMenu}>{t('Blog')}</a>
          <a className="contact-navigation__active" href="/contacto" onClick={closeMenu}>
            {t('Contáctanos')} <img src={greenLine} alt="" />
          </a>
          <a className="contact-navigation__mobile-donate" href="/donacion" onClick={closeMenu}>
            {t('Donar Ahora')} <img src={arrowRight} alt="" />
          </a>
          <LanguageSwitcher className="contact-navigation__language-mobile" />
        </nav>
        <LanguageSwitcher className="contact-header__language" />
        <a className="contact-header__donate" href="/donacion">{t('Donación')}</a>
      </header>
      <section className="contact-hero" aria-labelledby="contact-title">
        <img className="contact-hero__image" src={heroImage} alt="Voluntarios plantando un árbol" />
        <h1 id="contact-title">{t('COMUNÍCATE CON NOSOTROS')}</h1>
        <SocialLinks />
      </section>
    </>
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="contact-name">{t('Nombre')} <em>*</em></label>
        <input id="contact-name" name="name" placeholder={t('Nombre')} autoComplete="name" required />
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-email">{t('Correo')} <em>*</em></label>
        <input id="contact-email" name="email" type="email" placeholder={t('Correo')} autoComplete="email" required />
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-phone">{t('Teléfono')} <em>*</em></label>
        <input id="contact-phone" name="phone" type="tel" placeholder={t('Teléfono')} autoComplete="tel" required />
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-country">{t('País')} <em>*</em></label>
        <select id="contact-country" name="country" defaultValue="Perú" required>
          <option>Perú</option>
          <option>Bolivia</option>
          <option>Brasil</option>
          <option>Colombia</option>
          <option>Ecuador</option>
          <option>{t('Otro')}</option>
        </select>
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-city">{t('Ciudad')} <em>*</em></label>
        <select id="contact-city" name="city" defaultValue="" required>
          <option value="" disabled>{t('Seleccione')}</option>
          <option>Lima</option>
          <option>Madre de Dios</option>
          <option>Cusco</option>
          <option>{t('Otra')}</option>
        </select>
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-attendees">{t('Número de personas asistentes (Opcional)')}</label>
        <input id="contact-attendees" name="attendees" type="number" min="1" placeholder={t('Número de personas asistentes')} />
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-company-zone">{t('Zona donde está tu empresa (Opcional)')}</label>
        <input id="contact-company-zone" name="companyZone" placeholder={t('Zona donde está tu empresa')} />
      </div>
      <div className="contact-form__field contact-form__field--message">
        <label htmlFor="contact-message">{t('Mensaje')}</label>
        <textarea id="contact-message" name="message" placeholder={t('Mensaje')} rows={4} />
      </div>
      <label className="contact-form__check">
        <input type="checkbox" name="whatsapp" />
        <span>{t('Contactarme por Whatsapp')}</span>
      </label>
      <label className="contact-form__check contact-form__check--privacy">
        <input type="checkbox" name="privacy" required />
        <span>{t('Acepto políticas de privacidad de datos')}</span>
      </label>
      <button className="contact-form__submit" type="submit">{t('Enviar')}</button>
      {submitted && <p className="contact-form__status" role="status">{t('Gracias. Recibimos tu mensaje.')}</p>}
    </form>
  )
}

function CommunitySignup() {
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
        <input name="signupEmail" type="email" placeholder={`${t('Correo electrónico')}*`} autoComplete="email" required />
      </label>
      <label>
        <span>{t('País/Región')} <em>{t('(Requerido)')}</em></span>
        <select name="signupCountry" defaultValue="" required>
          <option value="" disabled>{t('Seleccione país o región*')}</option>
          <option>Perú</option>
          <option>Bolivia</option>
          <option>Ecuador</option>
          <option>{t('Otro')}</option>
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

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="contact-page">
      <ContactHeader />
      <main>
        <section className="contact-form-section" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title"><span>{t('Completa el')}</span> {t('siguiente formulario')}</h2>
          <div className="contact-form-section__ornament" aria-hidden="true">
            <span />
            <span className="contact-form-section__logo-crop">
              <img src={logo} alt="" />
            </span>
            <span />
          </div>
          <ContactForm />
        </section>
        <section className="community-section contact-community" id="unete" aria-labelledby="community-title">
          <div className="community-section__inner contact-community__inner">
            <h2 id="community-title">{t('ÚNETE A LA COMUNIDAD')}</h2>
            <p className="community-section__description">
              {t('Recibe avances mensuales sobre nuestras jornadas de plantación, historias de impacto en nuestras comunidades y noticias sobre cómo estamos protegiendo nuestros ecosistemas.')}
            </p>
            <CommunitySignup />
          </div>
        </section>
        <section className="contact-office" aria-labelledby="contact-office-title">
          <div className="contact-office__inner">
            <h2 id="contact-office-title">{t('EN PERÚ:')}</h2>
            <div className="contact-office__details">
              <h3>{t('Oficina Lima (sede principal)')}</h3>
              <p>Av. Arequipa 2447 – Office 409, Lince District, Lima, Peru</p>
              <a href="tel:+51921462828">{t('Tel: +51 921 462 828')}</a>
              <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
            </div>
            <img className="contact-office__image" src={officeImage} alt="Una planta joven en la oficina de Sembrando Perú" />
          </div>
        </section>
        <section className="contact-social" id="redes" aria-labelledby="contact-social-title">
            <h2 id="contact-social-title">{t('EN REDES SOCIALES')}</h2>
          <div className="contact-social__grid">
            {socialLinks.map((social) => (
              <a className={`contact-social__link contact-social__link--${social.className}`} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} key={social.label}>
                <img src={social.image} alt="" />
              </a>
            ))}
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}