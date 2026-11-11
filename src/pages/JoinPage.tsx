import { useState } from 'react'
import { ArrowRight, ChevronRight, ChevronUp, Home, TreePine, Handshake } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import DonationFooter from '../components/DonationFooter'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import { BlogFooter } from './BlogPage'
import sumateHeroImage from '../assets/figma/sumate-hero.png'
import volunteerHero from '../assets/figma/imgBlogImage4.png'
import { VolunteeringParticipation, VolunteeringClosing } from './VolunteeringSections'
import JoinParticipationForm from './JoinParticipationForm'
import './JoinPage.css'

const questions = [
  {
    question: '¿Cómo puedo sumarme a Sembrando Perú?',
    answer: 'Completa el formulario de participación y cuéntanos tus intereses, experiencia y disponibilidad. También puedes escribirnos a contacto@sembrandoperu.org.',
  },
  {
    question: '¿Necesito experiencia previa para participar?',
    answer: 'Puedes presentar tu interés aunque no tengas experiencia previa. Cuéntanos qué te gustaría aprender o aportar; los conocimientos y requisitos necesarios dependen de cada actividad.',
  },
  {
    question: '¿En qué áreas puedo colaborar?',
    answer: 'Puedes colaborar en reforestación, educación, salud o comunicación. Escríbenos para conocer las oportunidades disponibles en cada área.',
  },
  {
    question: '¿Cuánto tiempo debo dedicar?',
    answer: 'Indica si puedes participar entre semana, los fines de semana o con disponibilidad flexible. La dedicación se coordina según tu tiempo y las necesidades de cada iniciativa.',
  },
  {
    question: '¿Puedo participar desde otra ciudad o a distancia?',
    answer: 'Cuéntanos desde dónde te gustaría colaborar y si buscas participar a distancia. La posibilidad de hacerlo dependerá de las tareas y actividades disponibles; se coordina con el equipo antes de empezar.',
  },
  {
    question: '¿Cómo coordino mi participación?',
    answer: 'Escríbenos para compartir tu disponibilidad e intereses. La participación se coordina según las oportunidades disponibles.',
  },
  {
    question: '¿Cómo puedo comunicarme con el equipo?',
    answer: 'Escríbenos a contacto@sembrandoperu.org con tu nombre, ciudad, área de interés y disponibilidad.',
  },
]

const volunteeringQuestions = [
  questions[1],
  questions[3],
  questions[4],
  {
    question: '¿En qué actividades puedo colaborar?',
    answer: 'Puedes participar en actividades de reforestación, educación y salud, de acuerdo con las iniciativas y oportunidades disponibles.',
  },
  {
    question: '¿Cómo puedo sumarme a Sembrando Perú?',
    answer: 'Escríbenos a contacto@sembrandoperu.org y cuéntanos tus intereses, experiencia y disponibilidad. El equipo te orientará sobre las oportunidades disponibles.',
  },
  questions[2],
  questions[5],
  questions[6],
]

function JoinParticipationSections() {
  const { t } = useLanguage()

  return (
    <>
      <nav className="donation-breadcrumbs" aria-label={t('Ruta de navegación')}>
        <ol>
          <li><a href="/" aria-label={t('Inicio')}><Home aria-hidden="true" /></a></li>
          <li><ChevronRight aria-hidden="true" /><span aria-current="page">{t('Súmate')}</span></li>
        </ol>
      </nav>
      <section className="join-sumate-section" aria-labelledby="sumate-options-title">
        <div className="join-sumate-section__heading">
          <h2 id="sumate-options-title">{t('¿Cómo puedes sumarte?')}</h2>
        </div>
        <div className="join-sumate-options">
          <article className="join-sumate-option">
            <span className="join-sumate-option__icon"><TreePine size={28} aria-hidden="true" /></span>
            <h3>{t('Voluntariado')}</h3>
            <p>{t('Participa en jornadas de reforestación, educación ambiental y actividades comunitarias.')}</p>
            <a href="/voluntariado">{t('Conoce el voluntariado')} <ArrowRight size={18} aria-hidden="true" /></a>
          </article>
          <article className="join-sumate-option">
            <span className="join-sumate-option__icon"><Handshake size={28} aria-hidden="true" /></span>
            <h3>{t('Alianzas empresariales')}</h3>
            <p>{t('Suma a tu empresa a iniciativas que generan un impacto positivo en el ambiente y las comunidades.')}</p>
            <a href="/alianzas-empresariales">{t('Conoce las alianzas')} <ArrowRight size={18} aria-hidden="true" /></a>
          </article>
        </div>
      </section>
      <JoinParticipationForm />
    </>
  )
}
export default function JoinPage({ volunteering = false }: { volunteering?: boolean }) {
  const { t } = useLanguage()
  const [faqExpanded, setFaqExpanded] = useState(true)
  const [showAllFaq, setShowAllFaq] = useState(false)
  return (
    <div className={`home-page join-page${volunteering ? ' volunteer-page' : ''}`}>
      <SiteHeader />
      <main>
        <section className={`join-hero${!volunteering ? ' join-hero--donation' : ' volunteer-hero'}`} aria-labelledby="join-title">
          <img src={volunteering ? volunteerHero : sumateHeroImage} alt={t('Participación comunitaria en una jornada de Sembrando Perú')} />
          {volunteering ? (
            <div className="volunteer-hero__content">
              <span className="volunteer-hero__badge">{t('Voluntariado')}</span>
              <h1 id="join-title">{t('Tu tiempo puede transformar vidas')}</h1>
              <p>{t('Ser parte del cambio empieza con una acción. Comparte tu tiempo y tus conocimientos para acompañar a las comunidades y cuidar la naturaleza.')}</p>
              <a className="volunteer-hero__button" href="/contacto">{t('Quiero ser voluntario')} <ArrowRight size={20} aria-hidden="true" /></a>
            </div>
          ) : (
          <div className="join-hero__content join-hero__content--left">
            <div className="join-hero__title-panel">
              <h1 id="join-title">{t('Súmate')}</h1>
            </div>
            <p className="join-hero__subtitle">{t('Sé parte del cambio.')}</p>
            <p>{t('Comparte tu tiempo, tus ideas y tus conocimientos para apoyar nuestras acciones en favor de la naturaleza y las comunidades del Perú.')}</p>
          </div>
          )}
          {volunteering && <SocialLinks />}
        </section>

        {!volunteering && <JoinParticipationSections />}

        {volunteering && <VolunteeringParticipation />}

        {volunteering && <section className="volunteer-bottom" aria-label={t('Preguntas frecuentes y contacto de voluntariado')}>
        <section className="join-faq volunteer-faq" aria-labelledby="volunteer-faq-title">
          <div className="join-section">
            <div className="join-faq__heading">
              <h2 id="volunteer-faq-title">{t('Preguntas frecuentes')}</h2>
              <button className="join-faq__collapse" type="button" aria-label={t('Preguntas frecuentes')} aria-expanded={faqExpanded} aria-controls="volunteer-faq-content" onClick={() => setFaqExpanded(value => !value)}>
                <ChevronUp className={faqExpanded ? '' : 'is-collapsed'} size={24} aria-hidden="true" />
              </button>
            </div>
            <div id="volunteer-faq-content" hidden={!faqExpanded}>
              <div className="join-faq__list" id="volunteer-faq-questions">
                {volunteeringQuestions.slice(0, showAllFaq ? volunteeringQuestions.length : 4).map(({ question, answer }, index) => (
                  <details key={question} name="volunteer-faq" open={index === 0 ? true : undefined}>
                    <summary>{t(question)}<span className="join-faq__toggle" aria-hidden="true" /></summary>
                    <p>{t(answer)}</p>
                  </details>
                ))}
              </div>
              <div className="join-faq__actions">
                <button className="join-faq__more" type="button" aria-expanded={showAllFaq} aria-controls="volunteer-faq-questions" onClick={() => setShowAllFaq(value => !value)}>{t(showAllFaq ? 'Ver menos preguntas' : 'Ver más preguntas')}</button>
                <a className="join-faq__more" href="/contacto">{t('Contáctanos')}</a>
              </div>
            </div>
          </div>
        </section>
        <VolunteeringClosing />
        </section>}

        {!volunteering && <section className="join-faq" aria-labelledby="join-faq-title">
          <div className="join-section">
            <div className="join-faq__heading">
              <h2 id="join-faq-title">{t('PREGUNTAS FRECUENTES')}</h2>
              <button className="join-faq__collapse" type="button" aria-label={t('PREGUNTAS FRECUENTES')} aria-expanded={faqExpanded} aria-controls="join-faq-content" onClick={() => setFaqExpanded(value => !value)}>
                <ChevronUp className={faqExpanded ? '' : 'is-collapsed'} size={24} aria-hidden="true" />
              </button>
            </div>
            <div id="join-faq-content" hidden={!faqExpanded}>
            <div className="join-faq__list" id="join-faq-questions">
              {questions.slice(0, showAllFaq ? questions.length : 5).map(({ question, answer }, index) => (
                <details key={question} name="join-faq" open={index === 0 ? true : undefined}>
                  <summary>{t(question)}<span className="join-faq__toggle" aria-hidden="true" /></summary>
                  <p>{t(answer)}</p>
                </details>
              ))}
            </div>
            <div className="join-faq__actions">
              <button className="join-faq__more" type="button" aria-expanded={showAllFaq} aria-controls="join-faq-questions" onClick={() => setShowAllFaq(value => !value)}>{t(showAllFaq ? 'Ver menos preguntas' : 'Ver más preguntas')}</button>
            </div>
            </div>
          </div>
        </section>}
      </main>
      {volunteering ? <BlogFooter /> : <DonationFooter showJoinOptions />}
    </div>
  )
}
