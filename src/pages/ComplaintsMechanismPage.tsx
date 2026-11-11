import SiteHeader from '../components/SiteHeader'
import ComplaintsMechanismContent from '../components/ComplaintsMechanismContent'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './InstitutionalPages.css'

export default function ComplaintsMechanismPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page institutional-page">
      <SiteHeader />
      <section className="institutional-hero institutional-hero--complaints" aria-labelledby="complaints-title">
        <h1 id="complaints-title">
          <span>{t('Mecanismo de')}</span>
          <span>{t('quejas')}</span>
        </h1>
        <SocialLinks placement="banner" />
      </section>
      <main className="institutional-content institutional-content--complaints">
        <ComplaintsMechanismContent />
      </main>
      <BlogFooter />
    </div>
  )
}
