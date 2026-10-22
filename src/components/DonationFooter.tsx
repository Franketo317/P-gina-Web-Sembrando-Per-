import logo from '../assets/figma/imgImage4.png'
import SocialLinks from './SocialLinks'
import { useLanguage } from './LanguageContext'
import './DonationFooter.css'

export default function DonationFooter() {
  const { t } = useLanguage()
  return (
    <footer className="donation-footer">
      <div className="donation-footer__main">
        <a className="donation-footer__brand" href="/" aria-label={t('Sembrando Perú, inicio')}>
          <img src={logo} alt={t('Sembrando Perú')} />
        </a>
        <nav className="donation-footer__links" aria-label={t('Enlaces útiles')}>
          <div>
            <a href="/contacto">{t('Contáctanos')}</a>
            <a href="/trabaja-con-nosotros">{t('Bolsa laboral')}</a>
          </div>
          <div>
            <a href="/contacto#privacidad">{t('Políticas')}</a>
            <a href="/mecanismo-de-quejas">{t('Mecanismo de quejas')}</a>
          </div>
        </nav>
        <div className="donation-footer__social"><SocialLinks /></div>
      </div>
      <p className="donation-footer__copyright">{t('© 2026 Sembrando. Todos los derechos reservados.')}</p>
    </footer>
  )
}
