import teamBanner from '../assets/figma/equipo.jpeg'
import teamWorkPhoto from '../assets/figma/equipo2.jpg'
import SocialLinks from '../components/SocialLinks'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './InstitutionalPages.css'

type TeamArea = {
  name: string
  members: {
    name: string
    role: string
  }[]
}

const teamAreas: TeamArea[] = []

export default function OurTeamPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page institutional-page">
      <SiteHeader />
      <section
        className="institutional-hero institutional-hero--team"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 67, 46, 0.48), rgba(0, 67, 46, 0.48)), url(${teamBanner})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        aria-labelledby="team-title"
      >
        <h1 id="team-title">{t('Nuestro equipo')}</h1>
        <SocialLinks placement="banner" />
      </section>
      <section className="team-intro-strip" aria-label={t('Sobre nuestro equipo')}>
        <p>
          {t('Somos un equipo comprometido con la protección de la Amazonía y el desarrollo sostenible de las comunidades rurales.')}
        </p>
      </section>
      <main className="institutional-content">
        <section className="team-overview" aria-labelledby="team-overview-title">
          <h2 id="team-overview-title">
            {t('UN EQUIPO QUE TRABAJA POR LAS COMUNIDADES Y LA NATURALEZA')}
          </h2>
          <p>
            {t('En Sembrando Perú, unimos esfuerzos para proteger los bosques y contribuir al bienestar de las comunidades rurales. Nuestro trabajo conecta la restauración de los bosques con la educación y la salud infantil, junto con la participación de familias y agricultores locales. Así impulsamos iniciativas que responden a las necesidades de cada comunidad y promueven un desarrollo sostenible.')}
          </p>
        </section>
        <section
          className="team-quote"
          style={{
            backgroundImage: `url(${teamWorkPhoto})`,
          }}
          aria-label={t('Actividad de reforestación en la Amazonía')}
        >
          <blockquote>
            {t('Cuidar los bosques y fortalecer a las comunidades es un trabajo que construimos juntos.')}
          </blockquote>
        </section>
        <section className="team-roster" aria-labelledby="team-roster-title">
          <h2 id="team-roster-title">{t('Equipo de Sembrando Perú')}</h2>
          {teamAreas.length > 0 ? (
            <div className="team-roster__areas">
              {teamAreas.map((area) => (
                <section className="team-roster__area" key={area.name} aria-label={t(area.name)}>
                  <h3>{t(area.name)}</h3>
                  <ul>
                    {area.members.map((member) => (
                      <li key={`${member.name}-${member.role}`}>
                        <span className="team-roster__name">{member.name}</span>
                        <span className="team-roster__role">{t(member.role)}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <p className="team-roster__empty">
              {t('La información de integrantes y áreas se agregará cuando esté confirmada.')}
            </p>
          )}
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
