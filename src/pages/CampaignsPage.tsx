import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import heroImage from '../assets/figma/campañas.jpg'
import forestImage from '../assets/figma/blog-article-reforestation.jpg'
import educationImage from '../assets/figma/imgBlogImage4.png'
import healthImage from '../assets/figma/imgBlogImage3.png'
import volunteerImage from '../assets/figma/vol4.JPG?url'
import './CampaignsPage.css'

const campaigns = [
  { title: 'SEMBRANDO ÁRBOLES', image: forestImage, href: '/reforestacion', theme: 'forest' },
  { title: 'SEMBRANDO EDUCACIÓN', image: educationImage, href: '/educacion', theme: 'education' },
  { title: 'SEMBRANDO SALUD', image: healthImage, href: '/salud', theme: 'health' },
  { title: 'SÚMATE AL VOLUNTARIADO', image: volunteerImage, href: '/contacto', theme: 'volunteers' },
]

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
              <li key={campaign.href}>
                <a className={`campaign-link campaign-link--${campaign.theme}`} href={campaign.href}>
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
