import teamImage from '../assets/figma/imgBlogImage1.png'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './InstitutionalPages.css'

export default function OurTeamPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page institutional-page">
      <SiteHeader />
      <section className="institutional-hero" aria-labelledby="team-title">
        <h1 id="team-title">{t('Nuestro equipo')}</h1>
      </section>
      <main className="institutional-content">
        <section className="team-content">
          <img
            className="team-content__image"
            src={teamImage}
            alt={t('Equipo de Sembrando Perú en un bosque')}
          />
          <div className="team-content__copy">
            <h2>{t('Un equipo comprometido con las comunidades')}</h2>
            <p>
              {t('El equipo de Sembrando Perú trabaja junto a comunidades rurales de la Amazonía y los Andes en iniciativas de restauración de ecosistemas, educación y salud infantil.')}
            </p>
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
