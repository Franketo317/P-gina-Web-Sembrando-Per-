import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import ProgramVolunteerCta from '../components/ProgramVolunteerCta'
import learningImage from '../assets/figma/principios.JPG'
import classroomImage from '../assets/figma/imgBlogImage4.png'
import communityImage from '../assets/figma/blog-featured-community.jpg'
import plantingImage from '../assets/figma/blog-featured-forest.jpg'
import './ReforestationPage.css'
import './EducationPage.css'

const actions = [
  { title: 'Alfabetización', text: 'Promovemos la lectura y la escritura para ampliar las oportunidades de aprendizaje en las comunidades.' },
  { title: 'Educación comunitaria', text: 'Fomentamos espacios de aprendizaje participativo donde niños y familias fortalecen sus capacidades.' },
  { title: 'Educación ambiental', text: 'Impulsamos el aprendizaje sobre el cuidado de los árboles, los bosques y los recursos naturales.' },
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
    description: 'Descubre cómo conectamos la educación comunitaria con la conservación y el bienestar infantil.',
    image: classroomImage,
    alt: 'Niños y voluntarios compartiendo una actividad educativa',
  },
  {
    href: '/blog/articulo/sembrando-futuro-juntos-por-nuestros-bosques',
    title: 'Aprender a cuidar nuestros bosques',
    description: 'La participación en actividades de reforestación permite acercar el cuidado de la naturaleza a las familias.',
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
          <p className="reforestation-hero__subtitle">{t('Aprender hoy, transformar el mañana.')}</p>
          <SocialLinks placement="banner" />
        </section>

        <section className="reforestation-intro education-intro" aria-label={t('Educación y comunidades')}>
          <p>{t('En Sembrando Perú promovemos la alfabetización, el aprendizaje comunitario y la educación ambiental para contribuir al desarrollo de niños y familias en las comunidades rurales.')}</p>
        </section>

        <section className="reforestation-threats education-challenges" aria-labelledby="education-challenges-title">
          <img className="reforestation-threats__image" src={classroomImage} alt={t('Niños y voluntarios compartiendo una actividad educativa')} loading="lazy" />
          <div className="reforestation-threats__inner">
            <div className="reforestation-threats__panel">
              <h2 id="education-challenges-title">{t('La educación abre caminos')}</h2>
              <p>{t('Las comunidades rurales enfrentan desafíos relacionados con el analfabetismo y las dificultades de acceso a una educación de calidad. Estas brechas limitan las oportunidades de aprendizaje y desarrollo de niños y familias.')}</p>
            </div>
          </div>
        </section>

        <img className="reforestation-panorama" src={communityImage} alt={t('Familias de una comunidad de Sembrando Perú')} loading="lazy" />

        <section className="reforestation-actions" aria-labelledby="education-actions-title">
          <div className="reforestation-actions__copy">
            <h2 id="education-actions-title">{t('¿Cómo contribuimos a la educación?')}</h2>
            <ul>{actions.map((action) => <li key={action.title}><strong>{t(action.title)}:</strong> {t(action.text)}</li>)}</ul>
          </div>
        </section>

        <img className="reforestation-panorama reforestation-panorama--after-actions" src={plantingImage} alt={t('Actividad de plantación y cuidado del entorno')} loading="lazy" />

        <section className="program-conclusion" aria-labelledby="education-conclusion-title">
          <h2 id="education-conclusion-title">{t('Aprender también es cuidar nuestro entorno')}</h2>
          <p>{t('La educación y la conservación ambiental están conectadas. A través del aprendizaje, buscamos que las nuevas generaciones comprendan la importancia de proteger los bosques y participen en su cuidado.')}</p>
          <p>{t('Tu tiempo y tus conocimientos pueden contribuir a generar nuevas oportunidades de aprendizaje en las comunidades rurales.')}</p>
        </section>

        <section className="reforestation-stories" aria-labelledby="education-stories-title">
          <div className="reforestation-stories__inner">
            <h2 id="education-stories-title">{t('Historias y experiencias')}</h2>
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
            <ProgramVolunteerCta description="Tu tiempo y tus conocimientos pueden contribuir a generar nuevas oportunidades de aprendizaje en las comunidades rurales." />
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
