import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import { campaigns, getCampaign } from './campaigns'
import './CampaignDetailPage.css'

export default function CampaignDetailPage({ slug }: { slug: string }) {
  const campaign = getCampaign(slug)
  const { t } = useLanguage()

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${t(campaign?.title ?? 'Campaña no encontrada')} | Sembrando Perú`
    return () => { document.title = previousTitle }
  }, [campaign, t])

  if (!campaign) return (
    <div className="home-page campaign-detail"><SiteHeader /><main className="campaign-detail__intro">
      <h1>{t('Campaña no encontrada')}</h1>
      <a href="/campanas">{t('Volver a campañas')}</a>
    </main><BlogFooter /></div>
  )

  return (
    <div className={`home-page campaign-detail campaign-detail--${campaign.theme}`}>
      <SiteHeader />
      <main>
        <section className="campaign-detail__hero" aria-labelledby="campaign-title">
          <img src={campaign.image} alt={t(campaign.imageAlt)} fetchPriority="high" />
          <SocialLinks placement="banner" />
          <div className="campaign-detail__hero-content">
            <a href="/campanas" className="campaign-detail__back">{t('← Volver a campañas')}</a>
            <p>{t(campaign.title)}</p>
            <h1 id="campaign-title">{t(campaign.headline)}</h1>
            <a className="campaign-detail__button" href="#participa">{t('Quiero participar')} <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="campaign-detail__intro" aria-label={t('Acerca de la campaña')}>
          <p className="campaign-detail__lead">{t(campaign.intro)}</p>
          <p>{t(campaign.description)}</p>
        </section>

        <section className="campaign-detail__invitation" aria-labelledby="campaign-invitation">
          <h2 id="campaign-invitation">{t('¿TÚ TAMBIÉN QUIERES FORMAR PARTE DEL CAMBIO?')}</h2>
          <p>{t(campaign.invitation)}</p>
          <a className="campaign-detail__button" href="#participa">{t('Súmate')} <span aria-hidden="true">→</span></a>
        </section>

        <section className="campaign-detail__split" aria-labelledby="campaign-context">
          <div className="campaign-detail__copy">
            <p className="campaign-detail__eyebrow">{t(campaign.title)}</p>
            <h2 id="campaign-context">{t(campaign.contextTitle)}</h2>
            <p>{t(campaign.context)}</p>
            <ul>{campaign.pillars.map((pillar) => <li key={pillar}>{t(pillar)}</li>)}</ul>
          </div>
        </section>

        <section className="campaign-detail__challenge" aria-labelledby="campaign-challenge">
          <img src={campaign.image} alt={t(campaign.imageAlt)} loading="lazy" />
          <div className="campaign-detail__challenge-strip">
            <div>
              <p className="campaign-detail__eyebrow">{t('El reto que nos une')}</p>
              <h2 id="campaign-challenge">{t(campaign.challengeTitle)}</h2>
              <p>{t(campaign.challenge)}</p>
            </div>
          </div>
        </section>

        <section className="campaign-detail__split" aria-labelledby="campaign-actions">
          <div className="campaign-detail__copy">
            <p className="campaign-detail__eyebrow">{t('Nuestra respuesta')}</p>
            <h2 id="campaign-actions">{t(campaign.actionsTitle)}</h2>
            <ol>{campaign.actions.map((action) => <li key={action}>{t(action)}</li>)}</ol>
            <a className="campaign-detail__text-link" href={campaign.programHref}>{t(campaign.programLabel)} <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="campaign-detail__together" aria-labelledby="campaign-together">
          <h2 id="campaign-together">{t('JUNTOS ES POSIBLE')}</h2>
          <p>{t(campaign.closing)}</p>
        </section>

        <section className="campaign-detail__participate" id="participa" aria-labelledby="campaign-participate">
          <p className="campaign-detail__eyebrow">{t('Da el siguiente paso')}</p>
          <h2 id="campaign-participate">{t('TU APOYO ES ESENCIAL')}</h2>
          <p>{t(campaign.invitation)}</p>
          <div className="campaign-detail__buttons">
            <a className="campaign-detail__button" href="/contacto#contact-office-title">{t('Contáctanos para participar')} <span aria-hidden="true">→</span></a>
            <a className="campaign-detail__button campaign-detail__button--outline" href="/donacion">{t('Apoya con una donación')}</a>
          </div>
          <div className="campaign-detail__faq">
            <h3>{t('Preguntas frecuentes')}</h3>
            {campaign.faq.map((item) => <details key={item.question}><summary>{t(item.question)}</summary><p>{t(item.answer)}</p></details>)}
          </div>
        </section>

        <nav className="campaign-detail__related" aria-label={t('Otras campañas')}>
          <h2>{t('SIGUE SEMBRANDO CON NOSOTROS')}</h2>
          <div>{campaigns.filter((item) => item.slug !== slug).map((item) => (
            <a href={`/campanas/${item.slug}`} key={item.slug}>
              <img src={item.image} alt="" loading="lazy" /><span>{t(item.title)} <span aria-hidden="true">→</span></span>
            </a>
          ))}</div>
        </nav>
      </main>
      <BlogFooter />
    </div>
  )
}
