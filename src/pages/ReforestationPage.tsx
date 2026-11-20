import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import ProgramVolunteerCta from '../components/ProgramVolunteerCta'
import forestImage from '../assets/figma/reforestacion1.jpg'
import nurseryImage from '../assets/figma/reforestacion3.JPG'
import communityPanorama from '../assets/figma/reforestacion4.jpg'
import plantingStoryImage from '../assets/figma/reforestacion5.jpg'
import communityImage from '../assets/figma/reforestacion6.jpg'
import './ReforestationPage.css'

const actions = [
  {
    title: 'Restauramos áreas degradadas',
    text: 'Impulsamos iniciativas de reforestación con especies nativas para contribuir a la recuperación de bosques degradados y favorecer la conservación de la biodiversidad. Mediante estas acciones, buscamos restaurar los ecosistemas afectados, fortalecer su equilibrio natural y proteger los recursos forestales para las futuras generaciones.',
  },
  {
    title: 'Trabajamos junto a las comunidades',
    text: 'Involucramos a agricultores y familias locales en las jornadas de plantación y el cuidado de los árboles, promoviendo su participación activa en las actividades de reforestación. El trabajo colaborativo permite compartir responsabilidades, fortalecer el vínculo con el entorno natural y fomentar prácticas sostenibles que contribuyan a su bienestar.',
  },
  {
    title: 'Fomentamos la educación ambiental',
    text: 'Compartimos conocimientos sobre la importancia de los bosques, la biodiversidad y el uso responsable de los recursos naturales mediante actividades de sensibilización y educación ambiental. De esta manera, buscamos desarrollar una mayor conciencia ecológica, promover hábitos responsables y motivar la participación de las comunidades en el cuidado de los ecosistemas.',
  },
]

const stories = [
  { slug: 'sembrando-futuro-juntos-por-nuestros-bosques', title: 'Sembrando futuro: juntos por nuestros bosques', image: plantingStoryImage, alt: 'Participación comunitaria en una jornada de plantación', text: 'Conoce cómo la participación de las familias acompaña la recuperación de los bosques.' },
  { slug: 'transformando-vidas-comunidades', title: 'Comunidades que construyen su futuro', image: communityImage, alt: 'Familias de una comunidad de Sembrando Perú', text: 'El trabajo colectivo une la conservación ambiental con nuevas oportunidades.' },
  { slug: 'jornada-reforestacion-madre-de-dios', title: 'Una jornada para volver a sembrar', image: forestImage, alt: 'Bosque de la Amazonía en recuperación', text: 'Descubre el valor de sumar esfuerzos y compartir conocimientos.' },
]

export default function ReforestationPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page reforestation-page">
      <SiteHeader />
      <main>
        <section className="reforestation-hero" style={{ backgroundImage: `url(${forestImage})` }} aria-labelledby="reforestation-title">
          <h1 id="reforestation-title">{t('REFORESTACIÓN')}</h1>
          <p className="reforestation-hero__subtitle">{t('Recuperamos los bosques de la Amazonía junto a las comunidades, promoviendo la restauración de los ecosistemas y la conservación de nuestra biodiversidad.')}</p>
          <SocialLinks placement="banner" />
        </section>

        <section className="reforestation-intro" aria-label={t('Bosques y comunidades')}>
          <p>{t('En Sembrando Perú promovemos la recuperación de áreas degradadas de la Amazonía peruana mediante iniciativas de reforestación con especies nativas. Trabajamos junto a agricultores, familias y comunidades locales para contribuir a la restauración de los ecosistemas y fomentar prácticas sostenibles que fortalezcan el cuidado de nuestros bosques.')}</p>
        </section>

        <section className="reforestation-threats" aria-labelledby="reforestation-threats-title">
          <div className="reforestation-threats__inner">
            <div className="reforestation-threats__panel">
              <h2 id="reforestation-threats-title">{t('Nuestros bosques nos necesitan')}</h2>
              <p>{t('La tala indiscriminada y la degradación forestal amenazan la biodiversidad, deterioran los ecosistemas y afectan el bienestar de las comunidades que dependen de ellos. Frente a esta realidad, impulsamos la recuperación de áreas degradadas y el cuidado de nuestros recursos naturales para las futuras generaciones.')}</p>
            </div>
          </div>
        </section>

        <img className="reforestation-panorama" src={nurseryImage} alt={t('Vivero de plantas para la reforestación de Sembrando Perú')} loading="lazy" />

        <section className="reforestation-actions" aria-labelledby="reforestation-actions-title">
          <h2 id="reforestation-actions-title">{t('Cómo contribuimos')}</h2>
          <ul className="reforestation-actions__list" role="list">
            {actions.map(({ title, text }) => (
              <li className="reforestation-actions__card" key={title}>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="reforestation-conclusion" aria-labelledby="reforestation-conclusion-title">
          <img className="reforestation-conclusion__image" src={communityPanorama} alt={t('Familias de una comunidad participando en actividades de Sembrando Perú')} loading="lazy" />
          <div className="reforestation-conclusion__panel">
            <h2 id="reforestation-conclusion-title">{t('Sembramos juntos, construimos futuro')}</h2>
            <p>{t('Cada árbol representa una oportunidad para recuperar nuestros bosques y fortalecer el vínculo entre las comunidades y la naturaleza.')}</p>
          </div>
        </section>

        <section className="reforestation-stories" aria-labelledby="reforestation-stories-title">
          <div className="reforestation-stories__inner">
            <h2 id="reforestation-stories-title">{t('HISTORIAS DE NUESTRO TRABAJO')}</h2>
            <div className="reforestation-stories__grid">
              {stories.map((story) => (
                <article className="reforestation-story" key={story.slug}>
                  <a href={`/blog/articulo/${story.slug}`}>
                    <img src={story.image} alt={t(story.alt)} loading="lazy" />
                    <div className="reforestation-story__body">
                      <h3>{t(story.title)}</h3>
                      <p>{t(story.text)}</p>
                      <span className="reforestation-story__link">{t('Leer historia')} <span aria-hidden="true">→</span></span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
            <ProgramVolunteerCta
              description="Tu tiempo y tus conocimientos pueden contribuir al cuidado de los bosques junto a las comunidades."
              buttonLabel="Súmate al voluntariado"
            />
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
