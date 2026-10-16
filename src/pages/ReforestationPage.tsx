import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import forestImage from '../assets/figma/imgBlogImage1.png'
import plantingImage from '../assets/figma/blog-featured-forest.jpg'
import communityImage from '../assets/figma/blog-featured-community.jpg'
import reforestationImage from '../assets/figma/blog-article-reforestation.jpg'
import './ReforestationPage.css'

const actions = [
  'Impulsamos la reforestación para contribuir a la recuperación de bosques degradados de la Amazonía peruana.',
  'Involucramos a agricultores y familias en las jornadas de plantación, fortaleciendo su compromiso con el cuidado del territorio.',
  'Promovemos la educación ambiental para acercar la conservación a la vida cotidiana de las comunidades.',
  'Vinculamos el cuidado de los bosques con la educación y el bienestar de niños y familias, desde un enfoque integral de desarrollo sostenible.',
]

const stories = [
  { slug: 'sembrando-futuro-juntos-por-nuestros-bosques', title: 'Sembrando futuro: juntos por nuestros bosques', image: plantingImage, alt: 'Participación comunitaria en una jornada de plantación', text: 'Conoce cómo la participación de las familias acompaña la recuperación de los bosques y el cuidado de la Amazonía.' },
  { slug: 'transformando-vidas-comunidades', title: 'Comunidades que construyen su futuro', image: communityImage, alt: 'Familias de una comunidad de Sembrando Perú', text: 'El trabajo colectivo une la conservación ambiental con nuevas oportunidades para los niños y sus familias.' },
  { slug: 'jornada-reforestacion-madre-de-dios', title: 'Una jornada para volver a sembrar', image: reforestationImage, alt: 'Actividad de reforestación en comunidad', text: 'Descubre el valor de sumar esfuerzos y compartir conocimientos durante una jornada de reforestación.' },
]

export default function ReforestationPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page reforestation-page">
      <SiteHeader />
      <main>
        <section className="reforestation-hero" style={{ backgroundImage: `url(${forestImage})` }} aria-labelledby="reforestation-title">
          <h1 id="reforestation-title">{t('REFORESTACIÓN')}</h1>
          <SocialLinks placement="banner" />
        </section>

        <section className="reforestation-intro" aria-label={t('Bosques y comunidades')}>
          <p>{t('Los bosques son parte del futuro de las comunidades rurales. En Sembrando Perú trabajamos para recuperar áreas degradadas de la Amazonía y fortalecer el vínculo de las familias con su territorio. La reforestación reúne a agricultores y comunidades alrededor de un propósito compartido: cuidar la naturaleza y construir un entorno con más oportunidades para las próximas generaciones.')}</p>
        </section>

        <section className="reforestation-threats" style={{ backgroundImage: `url(${plantingImage})` }} aria-labelledby="reforestation-threats-title">
          <div className="reforestation-threats__inner">
            <div className="reforestation-threats__panel">
              <h2 id="reforestation-threats-title">{t('AMENAZAS')}</h2>
              <p>{t('La tala indiscriminada y la degradación de los bosques ponen en riesgo los ecosistemas y la vida de las comunidades que dependen de ellos. La pérdida de cobertura forestal también reduce los espacios donde se refugia la biodiversidad.')}</p>
              <p>{t('Recuperar estos espacios requiere continuidad y participación local. La restauración busca recuperar las funciones del ecosistema y los beneficios que brinda a la población.')}</p>
            </div>
          </div>
        </section>

        <section className="reforestation-actions" aria-labelledby="reforestation-actions-title">
          <div className="reforestation-actions__copy">
            <h2 id="reforestation-actions-title">{t('¿QUÉ HACEMOS POR NUESTROS BOSQUES?')}</h2>
            <p>{t('Trabajamos junto a quienes viven en el territorio, reconociendo que la conservación ambiental y el bienestar de las comunidades están conectados. Por eso:')}</p>
            <ul>{actions.map((action) => <li key={action}>{t(action)}</li>)}</ul>
          </div>
          <img src={reforestationImage} alt={t('Trabajo comunitario para recuperar los bosques')} loading="lazy" />
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
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
