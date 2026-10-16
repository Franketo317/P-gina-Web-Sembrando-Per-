import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import healthHero from '../assets/figma/salud.jpeg'
import healthImage from '../assets/figma/blog-article-health.jpg'
import communityImage from '../assets/figma/blog-featured-community.jpg'
import nutritionImage from '../assets/figma/imgBlogImage3.png'
import './ReforestationPage.css'
import './HealthPage.css'

const actions = [
  'Impulsamos acciones de prevención en salud como parte de nuestro compromiso con el bienestar de niños y familias de comunidades rurales.',
  'Promovemos la educación comunitaria vinculada a la salud y la nutrición, desde un enfoque participativo.',
  'Trabajamos con las familias para contribuir a la prevención de la anemia infantil en comunidades de la Selva y la Sierra.',
  'Conectamos las iniciativas de salud con la alfabetización y la conservación ambiental, entendiendo el desarrollo sostenible como un esfuerzo integral.',
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
    image: nutritionImage,
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
          <p>{t('El bienestar de los niños y sus familias es parte esencial del futuro de las comunidades. En Sembrando Perú trabajamos para contribuir a la prevención de la anemia infantil y fortalecer la salud en las zonas rurales de la Selva y la Sierra.')}</p>
          <p>{t('Nuestro enfoque conecta la prevención en salud con la educación comunitaria y la participación de las familias. Entendemos que el desarrollo sostenible también significa crear condiciones para que las nuevas generaciones crezcan con bienestar y oportunidades.')}</p>
        </section>

        <section className="reforestation-threats health-challenges" style={{ backgroundImage: `url(${nutritionImage})` }} aria-labelledby="health-challenges-title">
          <div className="reforestation-threats__inner">
            <div className="reforestation-threats__panel">
              <h2 id="health-challenges-title">{t('RETOS PARA EL BIENESTAR INFANTIL')}</h2>
              <p>{t('La anemia infantil y las necesidades de salud de las comunidades rurales forman parte de los desafíos que motivan nuestro trabajo. Abordarlos requiere una mirada cercana a la realidad de los niños y sus familias.')}</p>
              <p>{t('La prevención y la educación comunitaria son parte de nuestro compromiso. Buscamos articular esfuerzos que conecten el bienestar de las personas con el desarrollo de sus comunidades.')}</p>
            </div>
          </div>
        </section>

        <section className="reforestation-actions" aria-labelledby="health-actions-title">
          <div className="reforestation-actions__copy">
            <h2 id="health-actions-title">{t('¿QUÉ HACEMOS POR LA SALUD?')}</h2>
            <p>{t('Acompañamos el bienestar de las comunidades desde una visión que reúne prevención, educación y participación. Nuestro trabajo se orienta a estos ejes:')}</p>
            <ul>{actions.map((action) => <li key={action}>{t(action)}</li>)}</ul>
          </div>
          <img src={healthImage} alt={t('Participación comunitaria en una actividad de salud')} loading="lazy" />
        </section>

        <section className="reforestation-stories" aria-labelledby="health-stories-title">
          <div className="reforestation-stories__inner">
            <h2 id="health-stories-title">{t('HISTORIAS DE CUIDADO Y BIENESTAR')}</h2>
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
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
