import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import ProgramVolunteerCta from '../components/ProgramVolunteerCta'
import healthHero from '../assets/figma/salud1.jpeg'
import healthImage from '../assets/figma/salud2.JPG'
import communityImage from '../assets/figma/saluld3.jpg'
import nutritionImage from '../assets/figma/salud4.jpeg'
import healthImageFive from '../assets/figma/salud5.jpeg'
import healthImageSix from '../assets/figma/salud6.jpeg'
import './ReforestationPage.css'
import './HealthPage.css'

const actions = [
  { title: 'Prevención en salud', text: 'Impulsamos acciones de prevención para contribuir al bienestar de niños y familias de las comunidades rurales.' },
  { title: 'Educación en salud y nutrición', text: 'Promovemos la educación comunitaria sobre salud y alimentación saludable, desde un enfoque participativo.' },
  { title: 'Participación de las familias', text: 'Trabajamos junto a las familias para prevenir la anemia infantil y fortalecer hábitos saludables en la comunidad.' },
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
          <p className="reforestation-hero__subtitle">{t('Bienestar para las niñas, niños y familias de las comunidades.')}</p>
          <SocialLinks placement="banner" />
        </section>

        <section className="reforestation-intro health-intro" aria-label={t('Salud y bienestar en las comunidades')}>
          <p>{t('En Sembrando Perú trabajamos para contribuir a la prevención de la anemia infantil y fortalecer la salud en las zonas rurales de la Selva y la Sierra, con un enfoque que conecta la prevención, la educación y la participación de las familias.')}</p>
        </section>

        <section className="reforestation-threats health-challenges" aria-labelledby="health-challenges-title">
          <img className="reforestation-threats__image" src={nutritionImage} alt={t('Participación de familias en una actividad comunitaria')} loading="lazy" />
          <div className="reforestation-threats__inner">
            <div className="reforestation-threats__panel">
              <h2 id="health-challenges-title">{t('Retos para el bienestar infantil')}</h2>
              <p>{t('La anemia infantil y las necesidades de salud de las comunidades rurales son desafíos que motivan nuestro trabajo. Abordarlos requiere una mirada cercana a la realidad de los niños y sus familias, a través de la prevención y la educación comunitaria.')}</p>
            </div>
          </div>
        </section>

        <img className="reforestation-panorama" src={healthImageSix} alt={t('Actividad comunitaria relacionada con la salud')} loading="lazy" />

        <section className="reforestation-actions" aria-labelledby="health-actions-title">
          <div className="reforestation-actions__copy">
            <h2 id="health-actions-title">{t('¿Qué hacemos por la salud?')}</h2>
            <ul>{actions.map((action) => <li key={action.title}><strong>{t(action.title)}:</strong> {t(action.text)}</li>)}</ul>
          </div>
        </section>

        <img className="reforestation-panorama reforestation-panorama--after-actions" src={communityImage} alt={t('Familias de una comunidad de Sembrando Perú')} loading="lazy" />

        <section className="program-conclusion" aria-labelledby="health-conclusion-title">
          <h2 id="health-conclusion-title">{t('Cuidar su salud es sembrar su futuro')}</h2>
          <p>{t('Con prevención, educación y el compromiso de las familias, generamos más oportunidades para que las nuevas generaciones crezcan sanas y con bienestar en sus comunidades.')}</p>
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
