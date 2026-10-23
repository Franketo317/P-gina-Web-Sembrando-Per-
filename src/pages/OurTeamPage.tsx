import teamBanner from '../assets/figma/equipo.jpeg'
import teamWorkPhoto from '../assets/figma/equipo2.jpg'
import SocialLinks from '../components/SocialLinks'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './InstitutionalPages.css'

const teamMembers = [
  { name: 'Carlos Velez', role: 'Dirección General' },
  { name: 'Andrea Tuesta', role: 'Dirección General' },
  { name: 'Ricardo Garces', role: 'Coordinación General' },
  { name: 'Solance Vargas', role: 'Coordinación General' },
]

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
          <ul className="team-roster__members">
            {teamMembers.map((member) => (
              <li key={member.name}>{member.name} | {t(member.role)}</li>
            ))}
          </ul>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
