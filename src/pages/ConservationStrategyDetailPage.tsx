import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import { strategies } from './conservationStrategies'
import './ConservationStrategiesPage.css'

export default function ConservationStrategyDetailPage({ slug }: { slug: string }) {
  const { t } = useLanguage()
  const strategy = strategies.find((item) => item.slug === slug)

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${strategy ? t(strategy.title) : t('Estrategia no encontrada')} | Sembrando Perú`
    return () => { document.title = previousTitle }
  }, [strategy, t])

  return (
    <div className="home-page conservation-strategies-page">
      <SiteHeader />
      <main>
        {strategy ? (
          <>
            <section className="strategies-hero strategy-detail__hero" style={{ backgroundImage: `url(${strategy.image})` }} aria-labelledby="strategy-title">
              <h1 id="strategy-title">{t(strategy.title)}</h1>
              <SocialLinks placement="banner" />
            </section>
            <article className="strategy-detail">
              <a className="strategy-detail__back" href="/estrategias-conservacion">← {t('Todas las estrategias')}</a>
              <p className="strategy-detail__lead">{t(strategy.description)}</p>
              {strategy.sections.map((section) => (
                <section key={section.title}>
                  <h2>{t(section.title)}</h2>
                  <p>{t(section.text)}</p>
                </section>
              ))}
            </article>
          </>
        ) : (
          <div className="strategy-detail">
            <h1>{t('Estrategia no encontrada')}</h1>
            <p>{t('Consulta las estrategias de conservación disponibles.')}</p>
            <a href="/estrategias-conservacion">← {t('Todas las estrategias')}</a>
          </div>
        )}
      </main>
      <BlogFooter />
    </div>
  )
}
