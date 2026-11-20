import { Mail } from 'lucide-react'
import logo from '../assets/figma/imgImage4.png'
import { useLanguage } from '../components/LanguageContext'
import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialInstagramReal from '../assets/figma/imgSocialIcons1.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'
import './BlogFooter.css'

const socials = [
  { label: 'Facebook', image: socialFacebook, href: 'https://www.facebook.com/PeruSembrando' },
  { label: 'Instagram', image: socialInstagramReal, href: 'https://www.instagram.com/sembrando_peru/' },
  { label: 'X', image: socialX, href: 'https://x.com/PeruSembrando' },
  { label: 'LinkedIn', image: socialLinkedin, href: 'https://www.linkedin.com/company/sembrandoperu/' },
  { label: 'TikTok', image: socialTiktok, href: 'https://www.tiktok.com/@sembrando_peru' },
]

export function BlogFooter() {
  const { t, language, toggleLanguage } = useLanguage()

  return (
    <footer className="blog-footer" id="contacto">
      <div className="blog-footer__main">
        <div className="blog-footer__content">
          <div className="blog-footer__brand">
            <a href="/" aria-label={t("Sembrando Perú, inicio")}>
              <div className="blog-footer__logo-horizontal">
                <img src={logo} alt={t("Sembrando Perú Icon")} />
                <span className="blog-footer__logo-text">SEMBRANDO<br/>PERÚ</span>
              </div>
            </a>
            <p className="blog-footer__tagline">{t('Esperanza para un futuro mejor')}</p>
          </div>
          <nav className="blog-footer__actions" aria-label={t('Involúcrate')}>
            <a href="/reforestacion">{t('Reforestación')}</a>
            <a href="/educacion">{t('Educación')}</a>
            <a href="/salud">{t('Salud')}</a>
            <a href="/mecanismo-de-quejas">{t('Mecanismo de quejas')}</a>
          </nav>
        </div>
      </div>
      <div className="blog-footer__socialbar">
        <div className="blog-footer__bottom">
          <div className="blog-footer__follow">
            <a href="mailto:contacto@sembrandoperu.org" aria-label={t('Contacto')}><Mail aria-hidden="true" /></a>
            {socials.map((social) => <a href={social.href ?? '#redes'} target={social.href ? '_blank' : undefined} rel={social.href ? 'noreferrer' : undefined} aria-label={social.label} key={social.label}><img src={social.image} alt="" /></a>)}
          </div>
          <div className="blog-footer__details">
            <nav className="blog-footer__links" aria-label={t('Navegación')}>
              <button type="button" onClick={toggleLanguage} lang={language === 'es' ? 'en' : 'es'}>{language === 'es' ? 'English' : 'Español'}</button>
              <a href="/contacto">{t('Contáctanos')}</a>
              <a href="/contacto#privacidad">{t('Políticas')}</a>
              <a href="/mecanismo-de-quejas">{t('Quejas')}</a>
            </nav>
            <p className="blog-footer__copyright">{t('© 2026 Sembrando. Todos los derechos reservados.')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
