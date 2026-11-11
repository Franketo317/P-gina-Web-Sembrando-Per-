import SiteHeader from '../components/SiteHeader'
import PrivacyPolicy from '../components/PrivacyPolicy'
import ComplaintsMechanismContent from '../components/ComplaintsMechanismContent'
import { useLanguage } from '../components/LanguageContext'
import { ArrowRight, CircleAlert, ChevronDown, Leaf, Mail, MapPin, Phone } from 'lucide-react'
import heroImage from '../assets/figma/contact-hero.png'
import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialInstagram from '../assets/figma/imgSocialIcons1.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'
import { BlogFooter } from './BlogPage'
import './ContactPage.css'
import './InstitutionalPages.css'

const socialLinks = [
  { label: 'Facebook', image: socialFacebook, className: 'facebook', href: 'https://www.facebook.com/PeruSembrando' },
  { label: 'Instagram', image: socialInstagram, className: 'instagram', href: 'https://www.instagram.com/sembrando_peru/' },
  { label: 'X', image: socialX, className: 'x', href: 'https://x.com/PeruSembrando' },
  { label: 'YouTube', image: null, className: 'youtube', href: 'https://www.youtube.com/results?search_query=Sembrando+Peru' },
  { label: 'TikTok', image: socialTiktok, className: 'tiktok', href: 'https://www.tiktok.com/@sembrando_peru' },
  { label: 'LinkedIn', image: socialLinkedin, className: 'linkedin', href: 'https://www.linkedin.com/company/sembrandoperu/' },
]

function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="contact-hero" aria-labelledby="contact-title">
      <img className="contact-hero__image" src={heroImage} alt="" />
      <div className="contact-hero__content">
        <h1 id="contact-title">{t('¡Conversemos!')}</h1>
        <p>{t('¿Tienes una consulta, propuesta o deseas conocer más sobre nuestros proyectos? Escríbenos y con gusto te responderemos.')}</p>
      </div>
    </section>
  )
}

function ContactChannels() {
  const { t } = useLanguage()
  return (
    <section className="contact-channels" aria-labelledby="contact-channels-title">
      <div className="contact-channels__intro">
        <span className="contact-channels__leaf"><Leaf size={31} aria-hidden="true" /></span>
        <div>
          <h2 id="contact-channels-title">{t('Nuestros canales de contacto')}</h2>
          <p>{t('Estamos aquí para escucharte. Puedes encontrarnos en nuestra oficina, por teléfono, correo o redes sociales.')}</p>
        </div>
      </div>
      <div className="contact-channels__list">
        <article className="contact-channel">
          <span className="contact-channel__icon"><MapPin aria-hidden="true" /></span>
          <div><h3>{t('Oficina Lima (sede principal)')}</h3><p>{t('Av. Arequipa 2447 – Oficina 409, Lince, Lima, Perú')}</p></div>
        </article>
        <article className="contact-channel">
          <span className="contact-channel__icon"><Phone aria-hidden="true" /></span>
          <div><h3>{t('Teléfono / WhatsApp')}</h3><p><a href="tel:+51921462828">+51 921 462 828</a><span aria-hidden="true"> · </span><a href="https://wa.me/51921462828" target="_blank" rel="noreferrer">WhatsApp</a></p></div>
        </article>
        <a className="contact-channel" href="mailto:contacto@sembrandoperu.org">
          <span className="contact-channel__icon"><Mail aria-hidden="true" /></span>
          <div><h3>{t('Correo electrónico')}</h3><p>contacto@sembrandoperu.org</p></div>
        </a>
      </div>
    </section>
  )
}

function ComplaintsDisclosure() {
  const { t } = useLanguage()
  return (
    <section className="contact-complaints" aria-labelledby="complaints-disclosure-title">
      <details className="contact-disclosure">
        <summary>
          <span className="contact-disclosure__icon"><CircleAlert aria-hidden="true" /></span>
          <h2 id="complaints-disclosure-title">{t('Mecanismo de quejas')}</h2>
          <ChevronDown className="contact-disclosure__chevron" aria-hidden="true" />
        </summary>
        <div className="contact-disclosure__content">
          <ComplaintsMechanismContent />
        </div>
      </details>
    </section>
  )
}

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="contact-page">
      <SiteHeader />
      <ContactHero />
      <main>
        <ContactChannels />
        <section className="contact-social" id="redes" aria-labelledby="contact-social-title">
          <h2 id="contact-social-title">{t('Síguenos en nuestras redes')}</h2>
          <div className="contact-social__grid">
            {socialLinks.map((social) => (
              <a
                className={`contact-social__link contact-social__link--${social.className}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                key={social.label}
              >
                {social.image ? (
                  <img src={social.image} alt="" />
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 6.75v10.5L17 12 9 6.75Z" fill="currentColor" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </section>
        <PrivacyPolicy />
        <ComplaintsDisclosure />
      </main>
      <BlogFooter />
    </div>
  )
}
