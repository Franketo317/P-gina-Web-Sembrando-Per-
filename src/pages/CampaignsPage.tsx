import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import heroImage from '../assets/figma/campañas.jpg'
import { campaigns } from './campaigns'
import './CampaignsPage.css'

export default function CampaignsPage() {
  const { t } = useLanguage()

  return (
    <div className="blog-page campaigns-page">
      <SiteHeader />
      <main>
        <section className="campaigns-hero" style={{ backgroundImage: `url(${heroImage})` }} aria-labelledby="campaigns-title">
          <SocialLinks />
          <div className="campaigns-hero__inner"><h1 id="campaigns-title">{t('CAMPAÑAS')}</h1></div>
        </section>
        <section className="campaigns-directory" aria-label={t('Explora nuestras campañas')}>
          <ul className="campaigns-directory__grid">
            {campaigns.map((campaign) => (
              <li key={campaign.slug}>
                <a className={`campaign-link campaign-link--${campaign.theme}`} href={`/campanas/${campaign.slug}`}>
                  <span className="campaign-link__image"><img src={campaign.image} alt="" loading="lazy" /></span>
                  <span className="campaign-link__label">{t(campaign.title)}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
