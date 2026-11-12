import { ArrowRight, UsersRound } from 'lucide-react'
import teamBanner from '../assets/figma/equipo.jpeg'
import carlosPhoto from '../assets/figma/team-carlos.png'
import andreaPhoto from '../assets/figma/team-andrea.png'
import ricardoPhoto from '../assets/figma/team-ricardo.png'
import solancePhoto from '../assets/figma/team-solance.png'
import josePhoto from '../assets/figma/team-jose.png'
import volunteerMariana from '../assets/figma/volunteer-mariana.png'
import volunteerDiego from '../assets/figma/volunteer-diego.png'
import volunteerLucia from '../assets/figma/volunteer-lucia.png'
import SocialLinks from '../components/SocialLinks'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './InstitutionalPages.css'

const teamMembers = [
  {
    name: 'Carlos Vélez',
    role: 'Dirección General',
    description: 'Lidera la estrategia de la organización y la gestión de alianzas para impulsar nuestras iniciativas.',
    photo: carlosPhoto,
    portraitPosition: '68% 48%',
  },
  {
    name: 'Andrea Tuesta',
    role: 'Dirección General',
    description: 'Participa en la planificación institucional y el desarrollo de las líneas de acción de Sembrando Perú.',
    photo: andreaPhoto,
    portraitPosition: 'center 42%',
  },
  {
    name: 'Ricardo Garcés',
    role: 'Coordinación General',
    description: 'Contribuye a la coordinación de programas y actividades junto a las comunidades.',
    photo: ricardoPhoto,
    portraitPosition: '56% 40%',
  },
  {
    name: 'Solance Vargas',
    role: 'Coordinación General',
    description: 'Apoya la organización y el seguimiento de las iniciativas de Sembrando Perú.',
    photo: solancePhoto,
    portraitPosition: 'center 38%',
  },
  {
    name: 'José Vásquez',
    role: 'Dirección de Comunicaciones',
    description: 'Contribuye a la comunicación institucional y a la difusión de las iniciativas de la organización.',
    photo: josePhoto,
    portraitPosition: 'center 38%',
  },
  {
    name: 'NOMBRE APELLIDO',
    role: 'Área por definir',
    description: 'Información del integrante por completar.',
    photo: volunteerMariana,
    portraitPosition: 'center 38%',
  },
]

const volunteerVoices = [
  {
    name: 'Mariana López',
    role: 'Voluntaria en reforestación',
    quote: 'Ser parte de Sembrando Perú me permitió conocer de cerca la realidad de las comunidades y aportar al cuidado de sus bosques.',
    photo: volunteerMariana,
  },
  {
    name: 'Diego Ramírez',
    role: 'Voluntario en educación',
    quote: 'Aprendí mucho sobre conservación y educación ambiental, y viví una experiencia muy enriquecedora con la comunidad.',
    photo: volunteerDiego,
  },
  {
    name: 'Lucía Torres',
    role: 'Voluntaria en salud comunitaria',
    quote: 'Participar en las actividades de Sembrando Perú reforzó mi compromiso con el ambiente y me motivó a seguir involucrándome.',
    photo: volunteerLucia,
  },
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
          {t('Las personas detrás de nuestro compromiso con los bosques y las comunidades.')}
        </p>
      </section>
      <main className="institutional-content">
        <section className="team-overview" aria-labelledby="team-overview-title">
          <h2 id="team-overview-title">
            {t('UN EQUIPO QUE TRABAJA POR LAS COMUNIDADES Y LA NATURALEZA')}
          </h2>
          <p>
            {t('En Sembrando Perú contamos con un equipo comprometido con la protección de los bosques y el bienestar de las comunidades rurales. Desde distintas áreas, trabajamos para impulsar iniciativas de conservación ambiental, educación y salud.')}
          </p>
        </section>
        <section className="team-roster" aria-labelledby="team-roster-title">
          <h2 id="team-roster-title">{t('Dirección y coordinación')}</h2>
          <div className="team-roster__areas">
            <section className="team-roster__area" aria-labelledby="team-leadership-title">
              <h3 id="team-leadership-title"><span>{t('Dirección General')}</span></h3>
              <ul className="team-roster__cards">
                {teamMembers.slice(0, 2).map((member) => (
                  <li className="team-card" key={member.name}>
                    <div className="team-card__portrait">
                      <img src={member.photo} alt={t(member.name)} style={{ objectPosition: member.portraitPosition }} loading="lazy" />
                    </div>
                    <div className="team-card__content">
                      <h4>{t(member.name)}</h4>
                      <span className="team-card__role">{t(member.role)}</span>
                      <p>{t(member.description)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="team-roster__area" aria-labelledby="team-coordination-title">
              <h3 id="team-coordination-title"><span>{t('Coordinación General')}</span></h3>
              <ul className="team-roster__cards team-roster__cards--coordination">
                {teamMembers.slice(2).map((member) => (
                  <li className="team-card" key={member.name}>
                    <div className="team-card__portrait">
                      <img
                        className={member.name === 'José Vásquez' ? 'team-card__portrait-image--jose' : undefined}
                        src={member.photo}
                        alt={t(member.name)}
                        style={{ objectPosition: member.portraitPosition }}
                        loading="lazy"
                      />
                    </div>
                    <div className="team-card__content">
                      <h4>{t(member.name)}</h4>
                      <span className="team-card__role">{t(member.role)}</span>
                      <p>{t(member.description)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
        <section className="team-volunteer-callout" aria-labelledby="team-volunteer-title">
          <div className="team-volunteer-callout__inner">
            <UsersRound className="team-volunteer-callout__icon" aria-hidden="true" />
            <div className="team-volunteer-callout__copy">
              <h2 id="team-volunteer-title">{t('Voluntarios que impulsan nuestra misión')}</h2>
              <p>{t('Personas comprometidas con la protección del medioambiente y el bienestar de las comunidades, que contribuyen con su tiempo, conocimientos y compromiso en nuestras distintas iniciativas.')}</p>
            </div>
            <a className="team-volunteer-callout__button" href="/voluntariado">
              {t('¡Súmate al voluntariado!')} <ArrowRight aria-hidden="true" size={22} />
            </a>
          </div>
        </section>
        <section className="team-volunteer-voices" aria-labelledby="team-volunteer-voices-title">
          <div className="team-volunteer-voices__heading">
            <h2 id="team-volunteer-voices-title">{t('Voces de nuestros voluntarios')}</h2>
            <p>{t('Experiencias que nos inspiran y reflejan el impacto de nuestro trabajo.')}</p>
          </div>
          <div className="team-volunteer-voices__grid">
            {volunteerVoices.map((voice) => (
              <article className="team-voice-card" key={voice.name}>
                <img src={voice.photo} alt={t(voice.name)} loading="lazy" />
                <div className="team-voice-card__content">
                  <span className="team-voice-card__quote" aria-hidden="true">“</span>
                  <p>{t(voice.quote)}</p>
                  <h3>{t(voice.name)}</h3>
                  <span className="team-voice-card__role">{t(voice.role)}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
