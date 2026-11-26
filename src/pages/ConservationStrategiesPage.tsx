import { ArrowRight, BookOpen, Handshake, Leaf, Sprout, TreePine, Award, BarChart3 } from 'lucide-react'
import retoHero from '../assets/figma/RETO 300.JPG'
import retoForest from '../assets/figma/RETO2.JPG'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './ConservationStrategiesPage.css'

const impactSteps = [
  {
    icon: Handshake,
    title: 'Tu empresa aporta',
    text: 'Conversa con nuestro equipo para definir una propuesta de colaboración que se adapte a los objetivos y posibilidades de tu empresa. A través de tu participación, podrás apoyar iniciativas ambientales y educativas orientadas a generar cambios positivos en la Selva Central.',
  },
  {
    icon: Sprout,
    title: 'Reforestamos',
    text: 'Contribuimos a la recuperación de áreas degradadas de la Selva Central mediante la reforestación con especies nativas y el trabajo conjunto con las comunidades locales. De esta manera, buscamos favorecer la conservación de los bosques, la biodiversidad y el equilibrio de los ecosistemas.',
  },
  {
    icon: BookOpen,
    title: 'Educamos',
    text: 'Impulsamos iniciativas educativas que fortalecen el aprendizaje de los niños y las comunidades de la zona, promoviendo el desarrollo de conocimientos y capacidades. Con estas actividades, buscamos ampliar las oportunidades educativas y fomentar una mayor conciencia sobre el cuidado del medioambiente.',
  },
]

const benefits = [
  {
    icon: Leaf,
    title: 'Impacto ambiental y social',
    text: 'Contribuye a la recuperación de bosques degradados de la Selva Central mediante iniciativas de reforestación que promueven la conservación de la biodiversidad. Asimismo, apoya actividades educativas que fortalecen el aprendizaje y buscan mejorar el bienestar de las comunidades locales.',
  },
  {
    icon: Award,
    title: 'Reconocimiento como empresa aliada',
    text: 'Fortalece el compromiso social y ambiental de tu empresa al formar parte de una iniciativa orientada a la conservación del medioambiente y el desarrollo comunitario. Además, permite dar visibilidad a su participación y colaboración mediante los canales oficiales de comunicación de Sembrando Perú.',
  },
  {
    icon: BarChart3,
    title: 'Resultados y transparencia',
    text: 'Conoce los avances y resultados de tu contribución a través de información sobre las iniciativas realizadas. De esta manera, tu empresa podrá identificar los aportes ambientales y sociales de su participación y comunicar su compromiso con el desarrollo sostenible.',
  },
]

export default function ConservationStrategiesPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page conservation-strategies-page">
      <SiteHeader />
      <section className="strategies-hero strategies-hero--overview reto-hero" style={{ backgroundImage: `url(${retoHero})` }} aria-labelledby="strategies-title">
        <div className="reto-hero__copy">
          <h1 id="strategies-title">{t('Reto 300')}</h1>
          <p className="reto-hero__lead">{t('Súmate al compromiso de restaurar los bosques de la Selva Central y transformar vidas a través de la reforestación y la educación. ¡Juntos podemos construir un futuro más sostenible!')}</p>
        </div>
        <SocialLinks placement="banner" />
      </section>

      <main className="reto-main">
        <section className="reto-intro" aria-labelledby="reto-intro-title">
          <div className="reto-intro__copy">
            <h2 id="reto-intro-title">{t('¿Qué es el Reto 300 Empresas?')}</h2>
            <p>{t('Es un programa de Sembrando Perú que suma el compromiso del sector privado para generar beneficios ambientales, educativos y sociales en la Selva Central. A través de alianzas estratégicas, buscamos contribuir a la recuperación de bosques degradados e impulsar iniciativas educativas que promuevan el bienestar de las comunidades locales.')}</p>
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
          <p>{t('¿Cuánto puede aportar tu empresa?')}</p>
          <div className="reto-donation__area"><Handshake size={38} aria-hidden="true" /><b>{t('Conversemos sobre una propuesta')}<small>{t('El aporte se define según la propuesta y las condiciones acordadas.')}</small></b></div>
        </section>

        <section className="reto-benefits" aria-labelledby="reto-benefits-title">
          <h2 id="reto-benefits-title">{t('Beneficios para tu empresa')}</h2>
          <div className="reto-benefits__grid">
            {benefits.map(({ icon: Icon, title, text }) => <article className="reto-benefit" key={title}>
              <div className="reto-benefit__heading">
                <span className="reto-benefit__icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{t(title)}</h3>
              </div>
              <p>{t(text)}</p>
            </article>)}
          </div>
        </section>

        <section className="reto-cta">
          <div className="reto-cta__badge"><Leaf size={38} aria-hidden="true" /><Award size={21} aria-hidden="true" /></div>
          <p><strong>{t('Súmate al Reto 300')}</strong>{t('Tu empresa puede contribuir a recuperar los bosques y fortalecer el aprendizaje en la Selva Central.')}</p>
          <a className="reto-button reto-button--light" href="/alianzas#conversemos">{t('Quiero sumar a mi empresa')} <ArrowRight size={19} aria-hidden="true" /></a>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
