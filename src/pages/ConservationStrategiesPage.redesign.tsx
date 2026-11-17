import { Award, BarChart3, Leaf } from 'lucide-react'
import retoHero from '../assets/figma/q2.jpg'
import retoForest from '../assets/figma/RETO2.JPG'
import impactPhotoOne from '../assets/figma/q4.JPG'
import impactPhotoTwo from '../assets/figma/q5.JPG'
import impactPhotoThree from '../assets/figma/sumate1.JPG'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './ConservationStrategiesPage.redesign.css'

const impactSteps = [
  { title: 'Tu empresa aporta', text: 'Conversa con nuestro equipo para definir el aporte y las condiciones de colaboración.' },
  { title: 'Reforestamos', text: 'Contribuimos a recuperar áreas degradadas de la Selva Central junto a las comunidades.' },
  { title: 'Educamos', text: 'Fortalecemos el aprendizaje de los niños y las comunidades de la zona.' },
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
      <section className="reto-hero" style={{ backgroundImage: `url(${retoHero})` }} aria-labelledby="strategies-title">
        <div className="reto-hero__copy"><h1 id="strategies-title">{t('Reto 300')}</h1></div>
        <SocialLinks placement="banner" />
      </section>
      <div className="reto-banner"><p>{t('Reforesta y educa con nosotros.')}</p></div>

      <main className="reto-main">
        <section className="reto-intro" aria-labelledby="reto-intro-title">
          <div className="reto-intro__copy">
            <h2 id="reto-intro-title">{t('¿Qué es el Reto 300 Empresas?')}</h2>
            <p>{t('Es un programa de Sembrando Perú que suma el compromiso del sector privado para generar un impacto ambiental, educativo y social en la Selva Central.')}</p>
          </div>
        </section>

        <section className="reto-goal" style={{ backgroundImage: `url(${retoForest})` }} aria-label={t('Nuestra meta')}>
          <div className="reto-goal__panel">
            <p>{t('Nuestra meta')}</p>
            <strong>300 {t('hectáreas')}</strong>
            <span>{t('reforestadas al')} 2027</span>
          </div>
        </section>

        <section className="reto-impact" aria-labelledby="reto-steps-title">
          <div className="reto-impact__inner">
            <h2 className="reto-section-title" id="reto-steps-title">{t('¿Cómo genera impacto tu empresa?')}</h2>
            <div className="reto-steps__grid">
              {impactSteps.map(({ title, text }, index) => (
                <article className="reto-step" key={title}>
                  <span className="reto-step__number">0{index + 1}</span>
                  <div className="reto-step__body"><h3>{t(title)}</h3><p>{t(text)}</p></div>
                </article>
              ))}
            </div>
            <div className="reto-gallery" aria-label={t('Imágenes de Sembrando Perú')}>
              {[impactPhotoOne, impactPhotoTwo, impactPhotoThree].map((photo) => (
                <img key={photo} src={photo} alt={t('Sembrando Perú trabaja junto a las comunidades')} loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        <section className="reto-donation" aria-labelledby="reto-donation-title">
          <div className="reto-donation__inner">
            <h2 className="reto-section-title" id="reto-donation-title">{t('¿Cuánto puede aportar tu empresa?')}</h2>
            <p className="reto-donation__proposal">{t('Conversemos sobre una propuesta')}</p>
            <p className="reto-donation__note">{t('El aporte se define según la propuesta y las condiciones acordadas.')}</p>
          </div>
        </section>

        <section className="reto-benefits" aria-labelledby="reto-benefits-title">
          <div className="reto-benefits__inner">
            <h2 className="reto-section-title" id="reto-benefits-title">{t('Beneficios para tu empresa')}</h2>
            <div className="reto-benefits__grid">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article className="reto-benefit" key={title}>
                  <Icon className="reto-benefit__icon" aria-hidden="true" />
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reto-cta" aria-labelledby="reto-cta-title">
          <div className="reto-cta__inner">
            <h2 id="reto-cta-title">{t('Súmate al Reto 300')}</h2>
            <p>{t('Tu empresa puede contribuir a recuperar los bosques y fortalecer el aprendizaje en la Selva Central.')}</p>
            <a className="reto-button" href="/alianzas#conversemos">{t('Quiero sumar a mi empresa')}</a>
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
