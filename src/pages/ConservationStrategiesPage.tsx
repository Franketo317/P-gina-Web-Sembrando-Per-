import { ArrowRight, BookOpen, Handshake, Leaf, Sprout, TreePine, Award, BarChart3 } from 'lucide-react'
import retoHero from '../assets/figma/reto-300-hero.png'
import retoForest from '../assets/figma/reto-300-forest.png'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './ConservationStrategiesPage.css'

const impactSteps = [
  { icon: Handshake, title: 'Tu empresa aporta', text: 'Realiza una donación desde S/ 6,000.' },
  { icon: Sprout, title: 'Reforestamos', text: 'Recuperamos áreas de la Selva Central con 300 árboles (0,5 ha).' },
  { icon: BookOpen, title: 'Educamos', text: 'Fortalecemos el aprendizaje de los niños y las comunidades de la zona.' },
]

const benefits = [
  { icon: Leaf, title: 'Impacto ambiental y social', text: 'Contribuye a la recuperación de los bosques y al desarrollo de las comunidades.' },
  { icon: Award, title: 'Reconocimiento como empresa aliada', text: 'Visibilizamos tu compromiso en nuestros canales oficiales.' },
  { icon: BarChart3, title: 'Resultados y transparencia', text: 'Conoce el avance y el impacto real de tu participación.' },
]

export default function ConservationStrategiesPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page conservation-strategies-page">
      <SiteHeader />
      <section className="strategies-hero strategies-hero--overview reto-hero" style={{ backgroundImage: `url(${retoHero})` }} aria-labelledby="strategies-title">
        <div className="reto-hero__copy">
          <h1 id="strategies-title">{t('Reto 300')}</h1>
          <p className="reto-hero__lead">{t('Reforesta y educa con nosotros.')}</p>
        </div>
        <SocialLinks placement="banner" />
      </section>

      <main className="reto-main">
        <section className="reto-intro" aria-labelledby="reto-intro-title">
          <div className="reto-intro__copy">
            <h2 id="reto-intro-title">{t('¿Qué es el Reto 300 Empresas?')}</h2>
          <p>{t('Es un programa de Sembrando Perú que suma el compromiso del sector privado para generar un impacto ambiental, educativo y social en la Selva Central.')}</p>
          </div>
          <div className="reto-intro__visuals">
            <img className="reto-intro__image" src={retoForest} alt={t('Vista de un bosque verde en la Selva Central del Perú')} loading="lazy" />
            <div className="reto-goal" aria-label={t('Nuestra meta')}>
              <div className="reto-goal__icon"><TreePine size={48} strokeWidth={1.7} aria-hidden="true" /></div>
              <div><p>{t('Nuestra meta')}</p><strong>300 {t('hectáreas')}</strong><span>{t('reforestadas al')} <b>2027</b></span></div>
            </div>
          </div>
        </section>

        <section className="reto-steps" aria-labelledby="reto-steps-title">
          <h2 id="reto-steps-title">{t('¿Cómo genera impacto tu empresa?')}</h2>
          <div className="reto-steps__grid">
            {impactSteps.map(({ icon: Icon, title, text }, index) => (
              <article className="reto-step" key={title}>
                <div className="reto-step__icon"><Icon size={32} strokeWidth={1.8} aria-hidden="true" /></div>
                <div className="reto-step__body"><h3>{t(title)}</h3><p>{t(text)}</p></div>
                {index < impactSteps.length - 1 && <ArrowRight className="reto-step__arrow" size={25} aria-hidden="true" />}
              </article>
            ))}
          </div>
        </section>

        <section className="reto-donation" aria-label={t('Aporte empresarial')}>
          <p>{t('¿Cuánto puede aportar tu empresa?')}<small className="reto-donation__note">{t('Contribución referencial')}</small></p>
          <strong><small>{t('Desde')}</small>S/ 6,000</strong>
          <span className="reto-donation__equals">=</span>
          <div className="reto-donation__area"><TreePine size={38} aria-hidden="true" /><b>0.5 {t('hectárea')}<small>(300 {t('árboles')})</small></b></div>
        </section>

        <section className="reto-benefits" aria-labelledby="reto-benefits-title">
          <h2 id="reto-benefits-title">{t('Beneficios para tu empresa')}</h2>
          <div className="reto-benefits__grid">
            {benefits.map(({ icon: Icon, title, text }) => <article className="reto-benefit" key={title}>
              <span className="reto-benefit__icon"><Icon size={27} aria-hidden="true" /></span><div><h3>{t(title)}</h3><p>{t(text)}</p></div>
            </article>)}
          </div>
        </section>

        <section className="reto-cta">
          <div className="reto-cta__badge"><Leaf size={38} aria-hidden="true" /><Award size={21} aria-hidden="true" /></div>
          <p><strong>{t('Súmate al Reto 300')}</strong><br />{t('Tu empresa puede contribuir a recuperar los bosques y fortalecer el aprendizaje en la Selva Central.')}</p>
          <a className="reto-button reto-button--light" href="/donacion">{t('Quiero sumar a mi empresa')} <ArrowRight size={19} aria-hidden="true" /></a>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
