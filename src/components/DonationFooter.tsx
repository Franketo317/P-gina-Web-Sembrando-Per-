import logo from '../assets/figma/imgImage4.png'
import SocialLinks from './SocialLinks'
import { useLanguage } from './LanguageContext'
import './DonationFooter.css'

export default function DonationFooter({ showJoinOptions = false }: { showJoinOptions?: boolean }) {
  const { t } = useLanguage()
  return (
    <footer className="donation-footer">
      {showJoinOptions && <nav className="donation-footer__join-options" aria-label={t('Otras formas de apoyar a Sembrando Perú')}>
        <a className="donation-footer__join-option donation-footer__join-option--sumate" href="/sumate#participar">
          <h2>{t('SÚMATE')}</h2>
          <p>{t('Comparte tu tiempo, tus ideas y tus conocimientos para apoyar a nuestras comunidades y cuidar la naturaleza.')}</p>
        </a>
        <a className="donation-footer__join-option donation-footer__join-option--membership" href="/membresia">
          <h2>{t('MEMBRESÍA')}</h2>
          <p>{t('Forma parte de una comunidad comprometida con la reforestación, la educación y el bienestar de las familias del Perú.')}</p>
        </a>
      </nav>}
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
