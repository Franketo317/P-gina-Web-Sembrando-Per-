import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import learningImage from '../assets/figma/principios.jpg'
import classroomImage from '../assets/figma/imgBlogImage4.png'
import communityImage from '../assets/figma/blog-featured-community.jpg'
import plantingImage from '../assets/figma/blog-featured-forest.jpg'
import './ReforestationPage.css'
import './EducationPage.css'

const actions = [
  'Promovemos la alfabetización como parte de nuestro compromiso con la igualdad de oportunidades en las comunidades rurales.',
  'Impulsamos la educación comunitaria, trabajando de manera participativa con niños y familias.',
  'Acercamos la educación ambiental al cuidado de los árboles, los bosques y el entorno donde viven las comunidades.',
  'Integramos el aprendizaje con la conservación ambiental y la prevención en salud, reconociendo que el bienestar de las familias requiere un enfoque integral.',
]

const stories = [
  {
    href: '/blog/articulo/transformando-vidas-comunidades',
    title: 'Aprender y crecer en comunidad',
    description: 'Conoce cómo el aprendizaje y la participación de las familias forman parte del desarrollo de las comunidades.',
    image: communityImage,
    alt: 'Familias de una comunidad de Sembrando Perú',
  },
  {
    href: '/estrategias-conservacion/sostenibilidad-integral',
    title: 'Educación, naturaleza y bienestar',
    description: 'Descubre el enfoque que conecta la educación comunitaria con la conservación y el bienestar infantil.',
    image: classroomImage,
    alt: 'Niños y voluntarios compartiendo una actividad educativa',
  },
  {
    href: '/blog/articulo/sembrando-futuro-juntos-por-nuestros-bosques',
    title: 'Aprender a cuidar nuestros bosques',
    description: 'La participación en la reforestación fortalece el vínculo entre las familias y el entorno que comparten.',
    image: plantingImage,
    alt: 'Actividad de plantación y cuidado del entorno',
  },
]

export default function EducationPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page reforestation-page education-page">
      <SiteHeader />
      <main>
        <section className="reforestation-hero education-hero" style={{ backgroundImage: `url(${learningImage})` }} aria-labelledby="education-title">
          <h1 id="education-title">{t('EDUCACIÓN')}</h1>
          <SocialLinks placement="banner" />
        </section>

        <section className="reforestation-intro education-intro" aria-label={t('Educación y comunidades')}>
          <p>{t('La educación abre oportunidades para las personas y fortalece el futuro de las comunidades. En Sembrando Perú promovemos la alfabetización y el aprendizaje en las zonas rurales, como parte de nuestro compromiso con el desarrollo sostenible y la igualdad social.')}</p>
          <p>{t('Trabajamos con niños y familias desde una visión que conecta el conocimiento con la vida cotidiana. La educación comunitaria y ambiental acompaña el cuidado de los bosques y el bienestar de quienes habitan estos territorios.')}</p>
          <p>{t('Nuestro propósito es contribuir a que las nuevas generaciones crezcan con oportunidades de aprender, participar y cuidar su entorno. Este esfuerzo se integra con nuestras iniciativas de conservación y prevención en salud.')}</p>
        </section>

        <section className="reforestation-threats education-challenges" style={{ backgroundImage: `url(${classroomImage})` }} aria-labelledby="education-challenges-title">
          <div className="reforestation-threats__inner">
            <div className="reforestation-threats__panel">
              <h2 id="education-challenges-title">{t('RETOS EDUCATIVOS')}</h2>
              <p>{t('El analfabetismo y las brechas de acceso a una educación de calidad son parte de los desafíos que afrontan las comunidades rurales. Atender estas necesidades significa reconocer la realidad de las familias y fortalecer sus oportunidades de aprendizaje.')}</p>
              <p>{t('Para Sembrando Perú, la educación forma parte de una respuesta integral: aprender, cuidar la naturaleza y promover el bienestar son compromisos que se construyen con la participación de las comunidades.')}</p>
            </div>
          </div>
        </section>

        <section className="reforestation-actions" aria-labelledby="education-actions-title">
          <div className="reforestation-actions__copy">
            <h2 id="education-actions-title">{t('¿QUÉ HACEMOS POR LA EDUCACIÓN?')}</h2>
            <p>{t('Acompañamos el desarrollo de las comunidades con iniciativas que vinculan el aprendizaje y el bienestar. Nuestro enfoque reúne estos ejes:')}</p>
            <ul>{actions.map((action) => <li key={action}>{t(action)}</li>)}</ul>
          </div>
          <img src={learningImage} alt={t('Actividad de aprendizaje con materiales educativos y participación comunitaria')} loading="lazy" />
        </section>

        <section className="reforestation-stories" aria-labelledby="education-stories-title">
          <div className="reforestation-stories__inner">
            <h2 id="education-stories-title">{t('APRENDIZAJE QUE NOS CONECTA')}</h2>
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
