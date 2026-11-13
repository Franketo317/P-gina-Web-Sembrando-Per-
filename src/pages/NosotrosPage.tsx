import aboutHero from '../assets/figma/q1.jpg'
import storyCard from '../assets/figma/q2.jpg'
import aboutPhotoThree from '../assets/figma/q3.JPG'
import aboutPhotoFour from '../assets/figma/q4.JPG'
import aboutPhotoFive from '../assets/figma/q5.JPG'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import greenLine from '../assets/figma/imgGreenLine.svg'
import { BlogFooter } from './BlogPage'
import './NosotrosPage.css'

function AboutHero() {
  const { t } = useLanguage()

  return (
    <>
      <section
        className="about-hero"
        id="historia"
        style={{ backgroundImage: `url(${aboutHero})` }}
        aria-labelledby="about-title"
      >
        <div className="about-hero__content">
          <h1 id="about-title">{t('QUIÉNES SOMOS')}</h1>
          <p>{t('Protegemos los bosques, sembramos oportunidades')}</p>
        </div>
        <SocialLinks placement="banner" />
      </section>
    </>
  )
}

function OrganizationStory() {
  const { t } = useLanguage()

  return (
    <>
      <div className="about-mission-strip">
        <p>{t('Sembrando Perú es una organización sin fines de lucro comprometida con la protección de la Amazonía peruana y el desarrollo sostenible de las comunidades rurales.')}</p>
      </div>
      <section className="about-story" id="quienes-somos" aria-labelledby="about-story-title">
        <div className="about-story__history">
          <h2 id="about-story-title">{t('QUIÉNES SOMOS')}</h2>
          <img className="about-story__rule" src={greenLine} alt="" />
          <p>
            {t('Sembrando Perú nació con el propósito de responder a tres desafíos que afectan a las comunidades rurales del país: la deforestación de los bosques nativos, las brechas en el acceso a la educación y la anemia infantil. Nuestra labor surge de la necesidad de conectar la conservación ambiental con el desarrollo humano, reconociendo que la protección de los recursos naturales y la mejora de la calidad de vida de las personas son fundamentales para construir un futuro sostenible.')}
          </p>
        </div>
      </section>
      <section
        className="about-fact"
        style={{ backgroundImage: `url(${storyCard})` }}
        aria-labelledby="about-fact-title"
      >
        <div className="about-fact__content">
          <h2 id="about-fact-title">{t('Nuestros compromisos')}</h2>
          <p>{t('Protección del medioambiente, educación para el desarrollo y bienestar y salud infantil: creemos que el bienestar de las comunidades y el cuidado de la naturaleza deben avanzar juntos.')}</p>
        </div>
      </section>
      <section className="about-peru" aria-labelledby="about-peru-title">
        <div className="about-peru__content">
          <h2 id="about-peru-title">{t('EN EL PERÚ')}</h2>
          <img className="about-story__rule" src={greenLine} alt="" />
          <p>{t('Trabajamos con comunidades rurales de la Amazonía y los Andes mediante acciones de restauración de ecosistemas, educación ambiental, alfabetización y prevención en salud, junto a agricultores y familias locales.')}</p>
        </div>
      </section>
      <section className="about-photo-gallery" aria-label={t('Imágenes de Sembrando Perú')}>
        {[aboutPhotoThree, aboutPhotoFour, aboutPhotoFive].map((photo, index) => (
          <img key={photo} src={photo} alt={t('Sembrando Perú trabaja junto a las comunidades')} loading="lazy" />
        ))}
      </section>
    </>
  )
}

function AboutFooter() {
  return <BlogFooter />
}

export default function NosotrosPage() {
  return (
    <div className="about-page">
      <SiteHeader />
      <AboutHero />
      <main>
        <OrganizationStory />
      </main>
      <AboutFooter />
    </div>
  )
}
