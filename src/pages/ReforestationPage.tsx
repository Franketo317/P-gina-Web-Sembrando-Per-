import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import ProgramVolunteerCta from '../components/ProgramVolunteerCta'
import forestImage from '../assets/figma/reforestacion1.jpg'
import plantingImage from '../assets/figma/reforestacion2.jpg'
import nurseryImage from '../assets/figma/reforestacion3.JPG'
import communityPanorama from '../assets/figma/reforestacion4.jpg'
import plantingStoryImage from '../assets/figma/reforestacion5.jpg'
import communityImage from '../assets/figma/reforestacion6.jpg'
import './ReforestationPage.css'

const actions = [
  { title: 'Restauramos áreas degradadas', text: 'Impulsamos iniciativas de reforestación para recuperar los bosques y sus ecosistemas.' },
  { title: 'Trabajamos junto a las comunidades', text: 'Involucramos a agricultores y familias en las jornadas de plantación y el cuidado del territorio.' },
  { title: 'Fomentamos la educación ambiental', text: 'Compartimos conocimientos sobre la importancia de los bosques y su conservación.' },
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
          <p className="reforestation-hero__subtitle">{t('Recuperamos los bosques de la Amazonía junto a las comunidades.')}</p>
          <SocialLinks placement="banner" />
        </section>

        <section className="reforestation-intro" aria-label={t('Bosques y comunidades')}>
          <p>{t('En Sembrando Perú promovemos la recuperación de áreas degradadas de la Amazonía peruana mediante iniciativas de reforestación que involucran a agricultores, familias y comunidades locales.')}</p>
        </section>

        <section className="reforestation-threats" aria-labelledby="reforestation-threats-title">
          <img className="reforestation-threats__image" src={plantingImage} alt={t('Participación comunitaria en una jornada de plantación')} loading="lazy" />
          <div className="reforestation-threats__inner">
            <div className="reforestation-threats__panel">
              <h2 id="reforestation-threats-title">{t('Nuestros bosques nos necesitan')}</h2>
              <p>{t('La tala indiscriminada y la degradación forestal amenazan la biodiversidad y el bienestar de las comunidades. Protegerlos es cuidar nuestro futuro.')}</p>
            </div>
          </div>
        </section>

        <img className="reforestation-panorama" src={nurseryImage} alt={t('Vivero de plantas para la reforestación de Sembrando Perú')} loading="lazy" />

        <section className="reforestation-actions" aria-labelledby="reforestation-actions-title">
          <div className="reforestation-actions__copy">
            <h2 id="reforestation-actions-title">{t('Cómo contribuimos')}</h2>
            <ul>{actions.map((action) => <li key={action.title}><strong>{t(action.title)}:</strong> {t(action.text)}</li>)}</ul>
          </div>
        </section>

        <img className="reforestation-panorama reforestation-panorama--after-actions" src={communityPanorama} alt={t('Familias de una comunidad participando en actividades de Sembrando Perú')} loading="lazy" />

        <section className="program-conclusion" aria-labelledby="reforestation-conclusion-title">
          <h2 id="reforestation-conclusion-title">{t('Sembramos juntos, construimos futuro')}</h2>
          <p>{t('Cada árbol representa una oportunidad para recuperar nuestros bosques y fortalecer el vínculo entre las comunidades y la naturaleza.')}</p>
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
