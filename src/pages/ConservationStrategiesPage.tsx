import forestBanner from '../assets/figma/blog-featured-forest.jpg'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './ConservationStrategiesPage.css'

import { strategies } from './conservationStrategies'

export default function ConservationStrategiesPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page conservation-strategies-page">
      <SiteHeader />
      <section
        className="strategies-hero strategies-hero--overview"
        style={{ backgroundImage: `url(${forestBanner})` }}
        aria-labelledby="strategies-title"
      >
        <h1 id="strategies-title">{t('ESTRATEGIAS DE TRABAJO DE SEMBRANDO PERÚ')}</h1>
        <SocialLinks placement="banner" />
      </section>

      <main>
        <section className="strategies-intro">
          <p>
            {t('Las comunidades rurales y los bosques del Perú enfrentan desafíos que requieren soluciones integrales. Sembrando Perú trabaja para proteger la Amazonía y contribuir al desarrollo sostenible de las familias que viven en estas zonas. La organización promueve la restauración de bosques y la reforestación con participación de agricultores y comunidades locales. Complementa este trabajo con iniciativas de educación y alfabetización, además de acciones para fortalecer la salud infantil y prevenir la anemia. Para impulsar estos cambios, Sembrando Perú articula la conservación ambiental con el bienestar de las comunidades. Su enfoque busca que las familias participen en las iniciativas y que el cuidado de los ecosistemas también contribuya a mejorar su calidad de vida.')}
          </p>
        </section>

        <section className="strategies-section" aria-label={t('Nuestras estrategias')}>
          <div className="strategies-section__inner">
            <div className="strategies-grid">
              {strategies.map((strategy, index) => (
                <article className="strategy" key={strategy.title}>
                  <img
                    className="strategy__image"
                    src={strategy.image}
                    alt={t(strategy.alt)}
                    loading="lazy"
                  />
                  <div className="strategy__content">
                    <h2>
                      <a href={`/estrategias-conservacion/${strategy.slug}`}>
                        {t('Estrategia')} {index + 1}: {t(strategy.title)} <span aria-hidden="true">›</span>
                      </a>
                    </h2>
                    <p>{t(strategy.description)}</p>
                    <a className="strategy__more" href={`/estrategias-conservacion/${strategy.slug}`} aria-label={`${t('Conoce más sobre')} ${t(strategy.title)}`}>
                      {t('Conoce la estrategia')} <span aria-hidden="true">→</span>
                    </a>
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
