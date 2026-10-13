import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './InstitutionalPages.css'

export default function ComplaintsMechanismPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page institutional-page">
      <SiteHeader />
      <section className="institutional-hero" aria-labelledby="complaints-title">
        <h1 id="complaints-title">{t('Mecanismo de quejas')}</h1>
        <SocialLinks placement="banner" />
      </section>
      <main className="institutional-content">
        <section className="complaints-content" aria-labelledby="complaints-heading">
          <h2 id="complaints-heading">{t('Canal de atención')}</h2>
          <p>
            {t('Si deseas comunicar una queja o preocupación, puedes ponerte en contacto con Sembrando Perú a través de los canales de atención publicados.')}
          </p>
          <p className="complaints-content__notice">
            {t('Actualmente no hay un formulario o sistema de envío de quejas en este sitio.')}
          </p>
          <div className="complaints-content__channels">
            <a href="mailto:contacto@sembrandoperu.org">
              contacto@sembrandoperu.org
            </a>
            <a href="tel:+51921462828">+51 921 462 828</a>
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
