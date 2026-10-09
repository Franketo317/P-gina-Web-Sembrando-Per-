import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { CommunitySignupForm, PeruOfficeInfo } from '../components/CommunitySignup'
import heroImage from '../assets/figma/contact-hero.png'
import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialInstagram from '../assets/figma/imgSocialIcons1.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'
import socialYoutube from '../assets/figma/imgSocialYoutube.svg'
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

function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="contact-hero" aria-labelledby="contact-title">
      <img className="contact-hero__image" src={heroImage} alt="" />
      <div className="contact-hero__content">
        <h1 id="contact-title">{t('CONTÁCTANOS')}</h1>
      </div>
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
        <section className="community-section contact-community" id="unete" aria-labelledby="community-title">
          <div className="community-section__inner contact-community__inner">
            <h2 id="community-title">{t('ÚNETE A LA COMUNIDAD')}</h2>
            <p className="community-section__description">
              {t('Recibe avances mensuales sobre nuestras jornadas de plantación, historias de impacto en nuestras comunidades y noticias sobre cómo estamos protegiendo nuestros ecosistemas.')}
            </p>
            <CommunitySignupForm />
          </div>
        </section>
        <section className="contact-office" aria-labelledby="contact-office-title">
          <div className="contact-office__inner">
            <div className="community-section__info">
              <PeruOfficeInfo heading="EN PERÚ" headingId="contact-office-title" />
            </div>
          </div>
        </section>
        <section className="contact-social" id="redes" aria-labelledby="contact-social-title">
          <h2 id="contact-social-title">{t('EN REDES SOCIALES')}</h2>
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
