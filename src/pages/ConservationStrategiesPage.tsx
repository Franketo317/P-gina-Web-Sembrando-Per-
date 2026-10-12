import forestBanner from '../assets/figma/blog-featured-forest.jpg'
import localFamiliesImage from '../assets/figma/blog-featured-community.jpg'
import communityActivityImage from '../assets/figma/imgBlogImage4.png'
import volunteerImage from '../assets/figma/imgBlogImage5.png'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './ConservationStrategiesPage.css'

const strategies = [
  {
    title: 'Socio estratégico local',
    description:
      'Involucramos directamente a las familias rurales y a los agricultores locales en la ejecución de los proyectos. Así, la comunidad puede participar activamente y dar continuidad a las iniciativas.',
    image: localFamiliesImage,
    alt: 'Familias y agricultores de la comunidad',
  },
  {
    title: 'Sostenibilidad integral',
    description:
      'Conectamos la reforestación con la calidad de vida de las comunidades. Este enfoque articula la conservación ambiental con la educación comunitaria y la salud y nutrición, incluida la prevención de la anemia infantil.',
    image: communityActivityImage,
    alt: 'Actividad comunitaria de Sembrando Perú',
  },
  {
    title: 'Alianzas y voluntariado activo',
    description:
      'Movilizamos redes de voluntariado y articulamos esfuerzos con organizaciones del sector privado y civil para ampliar el alcance de las iniciativas y acercar capacitaciones y herramientas a comunidades de la Selva y la Sierra.',
    image: volunteerImage,
    alt: 'Voluntariado de Sembrando Perú en el bosque',
  },
]

export default function ConservationStrategiesPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page conservation-strategies-page">
      <SiteHeader />
      <section
        className="strategies-hero"
        style={{ backgroundImage: `url(${forestBanner})` }}
        aria-labelledby="strategies-title"
      >
        <h1 id="strategies-title">{t('ESTRATEGIAS DE TRABAJO DE SEMBRANDO PERÚ')}</h1>
      </section>

      <main>
        <section className="strategies-intro">
          <p>
            {t('Las comunidades rurales y los bosques del Perú enfrentan desafíos que requieren soluciones integrales. Sembrando Perú trabaja para proteger la Amazonía y contribuir al desarrollo sostenible de las familias que viven en estas zonas. La organización promueve la restauración de bosques y la reforestación con participación de agricultores y comunidades locales. Complementa este trabajo con iniciativas de educación y alfabetización, además de acciones para fortalecer la salud infantil y prevenir la anemia. Para impulsar estos cambios, Sembrando Perú articula la conservación ambiental con el bienestar de las comunidades. Su enfoque busca que las familias participen en las iniciativas y que el cuidado de los ecosistemas también contribuya a mejorar su calidad de vida.')}
          </p>
        </section>

        <section className="strategies-section" aria-labelledby="strategies-section-title">
          <div className="strategies-section__inner">
            <div className="strategies-grid">
              {strategies.map((strategy) => (
                <article className="strategy" key={strategy.title}>
                  <img
                    className="strategy__image"
                    src={strategy.image}
                    alt={t(strategy.alt)}
                    loading="lazy"
                  />
                  <div className="strategy__content">
                    <h3>{t(strategy.title)}</h3>
                    <p>{t(strategy.description)}</p>
                  </div>
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
