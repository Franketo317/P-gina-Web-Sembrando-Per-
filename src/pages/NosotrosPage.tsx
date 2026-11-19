import aboutHero from '../assets/figma/q3.JPG'
import storyCard from '../assets/figma/RETO2.JPG'
import educationImage from '../assets/figma/q2.jpg'
import healthImage from '../assets/figma/q1.jpg'
import aboutPhotoFour from '../assets/figma/q4.JPG'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import greenLine from '../assets/figma/imgGreenLine.svg'
import { BlogFooter } from './BlogPage'
import './NosotrosPage.css'

const peruPillars = [
  {
    title: 'Protección del medioambiente',
    description: 'Restauramos los bosques, protegemos la biodiversidad y promovemos el cuidado responsable del territorio.',
    image: aboutPhotoFour,
    imageAlt: 'Sendero rodeado de árboles en el bosque',
  },
  {
    title: 'Educación para el desarrollo',
    description: 'Impulsamos el aprendizaje y la alfabetización para ampliar las oportunidades de niñas, niños y comunidades rurales.',
    image: educationImage,
    imageAlt: 'Actividad educativa para niñas y niños',
  },
  {
    title: 'Bienestar y salud infantil',
    description: 'Acompañamos a las familias con acciones de prevención y promoción de la salud integral de la niñez.',
    image: healthImage,
    imageAlt: 'Niñas y niños sostienen un cartel de Sembrando Perú',
  },
]

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
        <div className="about-pillars" aria-label={t('Nuestros tres pilares')}>
          {peruPillars.map(({ title, description, image, imageAlt }) => (
            <article className="about-pillar" key={title}>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
              <div
                className={`about-pillar__image${title === 'Bienestar y salud infantil' ? ' about-pillar__image--health' : ''}`}
                role="img"
                aria-label={t(imageAlt)}
                style={{ backgroundImage: `url(${image})` }}
              />
            </article>
          ))}
        </div>
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
