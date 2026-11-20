import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import ProgramVolunteerCta from '../components/ProgramVolunteerCta'
import healthHero from '../assets/figma/salud1.jpeg'
import healthImage from '../assets/figma/salud2.JPG'
import healthChallengesImage from '../assets/figma/salud.jpeg'
import communityImage from '../assets/figma/saluld3.jpg'
import healthImageFive from '../assets/figma/salud5.jpeg'
import './ReforestationPage.css'
import './HealthPage.css'

const actions = [
  { title: 'Prevención en salud', text: 'Impulsamos acciones de prevención y sensibilización orientadas al bienestar de los niños y las familias de las comunidades rurales. A través de nuestras iniciativas, buscamos compartir información sobre el cuidado de la salud, fomentar prácticas preventivas y generar mayor conciencia sobre la importancia de prevenir la anemia infantil.' },
  { title: 'Educación en salud y nutrición', text: 'Promovemos la educación comunitaria sobre alimentación saludable, nutrición y hábitos de cuidado que favorezcan el crecimiento y desarrollo de los niños. Mediante actividades de sensibilización y aprendizaje, buscamos brindar información útil a las familias para que puedan incorporar prácticas saludables en su vida cotidiana.' },
  { title: 'Participación de las familias', text: 'Trabajamos junto a las familias para que participen activamente en las iniciativas de salud comunitaria y compartan experiencias sobre el cuidado infantil. Con su involucramiento, buscamos promover la colaboración, el intercambio de conocimientos y la adopción de hábitos que favorezcan entornos saludables para los niños.' },
]

const stories = [
  {
    href: '/blog/articulo/prevencion-anemia-nuevos-enfoques',
    title: 'Prevención de la anemia: un compromiso compartido',
    description: 'Conoce la importancia del acompañamiento a las familias y la educación comunitaria para el bienestar infantil.',
    image: healthImage,
    alt: 'Actividad comunitaria relacionada con la salud',
  },
  {
    href: '/blog/articulo/transformando-vidas-comunidades',
    title: 'Familias que construyen un futuro con bienestar',
    description: 'El desarrollo de las comunidades reúne la participación local, el aprendizaje y el cuidado de las personas.',
    image: communityImage,
    alt: 'Familias de una comunidad de Sembrando Perú',
  },
  {
    href: '/estrategias-conservacion/sostenibilidad-integral',
    title: 'Salud, educación y naturaleza conectadas',
    description: 'Descubre cómo nuestro enfoque integral vincula el bienestar de las comunidades con la protección de su entorno.',
    image: healthImageFive,
    alt: 'Participación de familias en una actividad comunitaria',
  },
]

export default function HealthPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page reforestation-page health-page">
      <SiteHeader />
      <main>
        <section className="reforestation-hero health-hero" style={{ backgroundImage: `url(${healthHero})` }} aria-labelledby="health-title">
          <h1 id="health-title">{t('SALUD')}</h1>
          <SocialLinks placement="banner" />
        </section>

        <section className="reforestation-intro health-intro" aria-label={t('Salud y bienestar en las comunidades')}>
          <p>{t('En Sembrando Perú trabajamos para contribuir a la prevención de la anemia infantil y fortalecer la salud en las zonas rurales de la Selva y la Sierra. A través de iniciativas de prevención, educación y participación comunitaria, buscamos promover hábitos saludables, ampliar los conocimientos de las familias y favorecer el bienestar y desarrollo de los niños.')}</p>
        </section>

        <section className="reforestation-threats health-challenges" aria-labelledby="health-challenges-title">
          <img className="reforestation-threats__image" src={healthChallengesImage} alt={t('Equipo de salud y familias de la comunidad durante una jornada de atención')} loading="lazy" />
          <div className="reforestation-threats__inner">
            <div className="reforestation-threats__panel">
              <h2 id="health-challenges-title">{t('Retos para el bienestar infantil')}</h2>
              <p>{t('La anemia infantil y las necesidades de salud de las comunidades rurales son desafíos que motivan nuestro trabajo. Abordarlos requiere una mirada cercana a la realidad de los niños y sus familias, a través de la prevención y la educación comunitaria.')}</p>
            </div>
          </div>
        </section>

        <section className="reforestation-actions" aria-labelledby="health-actions-title">
          <div className="reforestation-actions__copy">
            <h2 id="health-actions-title">{t('¿Qué hacemos por la salud?')}</h2>
            <ul>{actions.map((action) => <li key={action.title}><strong>{t(action.title)}:</strong> {t(action.text)}</li>)}</ul>
          </div>
        </section>

        <section
          className="health-conclusion-feature"
          style={{ backgroundImage: `url(${communityImage})` }}
          aria-labelledby="health-conclusion-title"
          aria-label={t('Familias de una comunidad de Sembrando Perú')}
        >
          <div className="health-conclusion-feature__copy">
            <h2 id="health-conclusion-title">{t('Cuidar su salud es sembrar su futuro')}</h2>
          </div>
        </section>

        <section className="reforestation-stories" aria-labelledby="health-stories-title">
          <div className="reforestation-stories__inner">
            <h2 id="health-stories-title">{t('Historias y experiencias')}</h2>
            <div className="reforestation-stories__grid">
              {stories.map((story) => (
                <article className="reforestation-story" key={story.href}>
                  <a href={story.href}>
                    <img src={story.image} alt={t(story.alt)} loading="lazy" />
                    <div className="reforestation-story__body">
                      <h3>{t(story.title)}</h3>
                      <p>{t(story.description)}</p>
                      <span className="reforestation-story__link">{t('Conoce más')} <span aria-hidden="true">→</span></span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
            <ProgramVolunteerCta
              description="Tu tiempo y tus conocimientos pueden contribuir al bienestar y la salud de las comunidades rurales."
              buttonLabel="Súmate al voluntariado"
            />
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
