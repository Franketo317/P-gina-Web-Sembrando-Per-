import {
  ArrowRight,
  ChartNoAxesCombined,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Leaf,
  Mail,
  PackageOpen,
  UsersRound,
} from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import heroImage from '../assets/figma/imgBlogImage5.png'
import forestImage from '../assets/figma/blog-article-reforestation.jpg'
import impactImage from '../assets/figma/blog-article-reforestation.jpg'
import './AlliancesPage.css'

const collaborationOptions = [
  {
    title: 'Apoyo económico',
    description: 'Contribuye a financiar iniciativas que generan oportunidades y bienestar en las comunidades.',
    Icon: HeartHandshake,
  },
  {
    title: 'Voluntariado corporativo',
    description: 'Involucra a tu equipo en experiencias de aprendizaje y acción junto a las comunidades.',
    Icon: UsersRound,
  },
  {
    title: 'Donaciones en especie',
    description: 'Aporta materiales, equipos o recursos que respondan a las necesidades de cada iniciativa.',
    Icon: PackageOpen,
  },
  {
    title: 'Colaboración técnica',
    description: 'Comparte conocimientos y capacidades para fortalecer nuestros proyectos.',
    Icon: GraduationCap,
  },
]

const impactAreas = [
  { title: 'Impacto ambiental', Icon: Leaf },
  { title: 'Impacto social', Icon: UsersRound },
  { title: 'Mayor alcance', Icon: ChartNoAxesCombined },
]

const partnershipSteps = [
  {
    number: '01',
    title: 'Cuéntanos tu interés',
    description: 'Escríbenos y comparte tu propuesta.',
    Icon: Mail,
  },
  {
    number: '02',
    title: 'Conversemos',
    description: 'Exploramos juntos las oportunidades de colaboración.',
    Icon: UsersRound,
  },
  {
    number: '03',
    title: 'Definamos la alianza',
    description: 'Acordamos objetivos, aportes y próximos pasos.',
    Icon: Handshake,
  },
]

export default function AlliancesPage() {
  const { t } = useLanguage()

  return (
    <div className="blog-page alliances-page">
      <SiteHeader />
      <main>
        <section
          className="alliances-hero"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-labelledby="alliances-title"
        >
          <SocialLinks />
          <div className="alliances-hero__content">
            <h1 id="alliances-title">{t('Construyamos un futuro sostenible juntos')}</h1>
            <p>{t('Invitamos a empresas e instituciones a sumar esfuerzos por la restauración de los bosques, la educación y el bienestar de las comunidades.')}</p>
            <a className="alliances-button" href="#conversemos">
              {t('Quiero ser aliado')} <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>

        <section className="alliances-why" aria-labelledby="alliances-why-title">
          <img className="alliances-why__image" src={forestImage} alt={t('Camino rodeado de bosques en una zona de conservación')} loading="lazy" />
          <div className="alliances-why__content">
            <h2 id="alliances-why-title">{t('¿Por qué unir esfuerzos?')}</h2>
            <p>{t('Las alianzas nos permiten generar un mayor impacto en las comunidades y en la conservación de la naturaleza, a través de iniciativas que promueven la reforestación, la educación y el bienestar familiar.')}</p>
            <ul className="alliances-impact-list">
              {impactAreas.map(({ title, Icon }) => (
                <li key={title}>
                  <span className="alliances-icon"><Icon aria-hidden="true" /></span>
                  <span>{t(title)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="alliances-options" aria-labelledby="alliances-options-title">
          <div className="alliances-section-heading">
            <span className="alliances-eyebrow">{t('Una causa, muchas formas de sumar')}</span>
            <h2 id="alliances-options-title">{t('Exploremos formas de colaborar')}</h2>
            <p>{t('Existen distintas maneras en las que tu empresa o institución puede sumarse a nuestra causa.')}</p>
          </div>
          <div className="alliances-options__grid">
            {collaborationOptions.map(({ title, description, Icon }) => (
              <article className="alliances-option-card" key={title}>
                <span className="alliances-icon"><Icon aria-hidden="true" /></span>
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="alliances-spotlight" aria-labelledby="alliances-spotlight-title">
          <img src={impactImage} alt="" loading="lazy" />
          <div className="alliances-spotlight__content">
            <span>{t('Conoce el')}</span>
            <h2 id="alliances-spotlight-title">{t('Reto 300')}</h2>
            <p>{t('Nuestra meta es restaurar 300 hectáreas en la Selva Central durante el 2027.')}</p>
            <a href="mailto:contacto@sembrandoperu.org?subject=Reto%20300">{t('Conoce cómo sumarte')} <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
        </section>

        <section className="alliances-process" aria-labelledby="alliances-process-title">
          <div className="alliances-section-heading">
            <h2 id="alliances-process-title">{t('¿Cómo construir una alianza?')}</h2>
          </div>
          <ol className="alliances-process__steps">
            {partnershipSteps.map(({ number, title, description, Icon }) => (
              <li className="alliances-step" key={number}>
                <span className="alliances-step__number">{number}</span>
                <span className="alliances-icon"><Icon aria-hidden="true" /></span>
                <div>
                  <h3>{t(title)}</h3>
                  <p>{t(description)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="alliances-contact" id="conversemos" aria-labelledby="alliances-contact-title">
          <span className="alliances-icon"><Mail aria-hidden="true" /></span>
          <div className="alliances-contact__title">
            <h2 id="alliances-contact-title">{t('¡Hablemos de tu propuesta!')}</h2>
            <p>{t('Escríbenos y conversemos sobre cómo trabajar juntos.')}</p>
          </div>
          <a className="alliances-button" href="mailto:contacto@sembrandoperu.org?subject=Alianzas%20empresariales">
            {t('Contactar al equipo')} <ArrowRight aria-hidden="true" size={18} />
          </a>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
