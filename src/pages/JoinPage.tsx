import { useRef, useState, type FormEvent } from 'react'
import { BookOpen, HeartHandshake, Megaphone, Sprout, ArrowRight, ChevronRight, ChevronUp, Home } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import DonationFooter from '../components/DonationFooter'
import Turnstile from '../components/Turnstile'
import { joinProductionOrigin } from '../lib/submitJoin'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import { BlogFooter } from './BlogPage'
import heroImage from '../assets/figma/5.jpeg'
import donationHeroImage from '../assets/figma/donacion.jpg'
import volunteerHero from '../assets/figma/imgBlogImage4.png'
import reforestationImage from '../assets/figma/blog-article-reforestation.jpg'
import educationImage from '../assets/figma/educacion.JPG'
import healthImage from '../assets/figma/blog-article-health.jpg'
import communicationImage from '../assets/figma/equipo2.jpg'
import communityImage from '../assets/figma/blog-article-community.jpg'
import { VolunteeringIntroduction, VolunteeringParticipation, VolunteeringResources, VolunteeringToolkitIntro, VolunteeringClosing } from './VolunteeringSections'
import { CollapsibleSection, donationImpactAreas } from './DonationPage'
import { joinAvailability, joinFields, validateJoinForm, type JoinErrors, type JoinField } from './joinValidation'
import { supabase } from '../supabaseClient' // 👈 Ajusta la ruta a tu cliente si está en otro nivel
import './JoinPage.css'

const areas = [
  { title: 'Reforestación', description: 'Participa en el cuidado de nuestros bosques y comparte tu interés por la naturaleza.', icon: Sprout, image: reforestationImage },
  { title: 'Educación', description: 'Comparte conocimientos y acompaña iniciativas de aprendizaje comunitario.', icon: BookOpen, image: educationImage },
  { title: 'Salud', description: 'Aporta a la prevención y la promoción del bienestar de niños y familias.', icon: HeartHandshake, image: healthImage },
  { title: 'Comunicación', description: 'Ayúdanos a contar historias y dar a conocer nuestras iniciativas.', icon: Megaphone, image: communicationImage },
]

const questions = [
  {
    question: '¿Cómo puedo sumarme a Sembrando Perú?',
    answer: 'Completa el formulario con tus datos, intereses y disponibilidad, realiza la verificación de seguridad y pulsa “Enviar mi solicitud”. Verás una confirmación cuando tu solicitud se haya registrado.',
  },
  {
    question: '¿Necesito experiencia previa para participar?',
    answer: 'Puedes presentar tu interés aunque no tengas experiencia previa. Cuéntanos qué te gustaría aprender o aportar; los conocimientos y requisitos necesarios dependen de cada actividad.',
  },
  {
    question: '¿En qué áreas puedo colaborar?',
    answer: 'Puedes indicar tu interés en reforestación, educación, salud o comunicación. Si todavía no sabes qué elegir, selecciona “Quiero conocer las opciones” en el formulario.',
  },
  {
    question: '¿Cuánto tiempo debo dedicar?',
    answer: 'Indica si puedes participar entre semana, los fines de semana o en actividades puntuales. La dedicación se coordina según tu disponibilidad y las necesidades de cada iniciativa.',
  },
  {
    question: '¿Puedo participar desde otra ciudad o a distancia?',
    answer: 'Cuéntanos desde dónde te gustaría colaborar y si buscas participar a distancia. La posibilidad de hacerlo dependerá de las tareas y actividades disponibles; se coordina con el equipo antes de empezar.',
  },
  {
    question: '¿Completar el formulario confirma mi participación?',
    answer: 'El formulario registra tu interés en participar. Esto no reserva una plaza ni confirma una incorporación: la participación se coordina según las oportunidades disponibles.',
  },
  {
    question: '¿Qué hago si no puedo enviar el formulario?',
    answer: 'Escríbenos directamente a contacto@sembrandoperu.org con el asunto “Quiero sumarme a Sembrando Perú”. Incluye tu nombre, ciudad o país, área de interés y disponibilidad para que el equipo conozca tu propuesta.',
  },
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
      <CollapsibleSection
        title={t('¿POR QUÉ SUMARTE A SEMBRANDO PERÚ?')}
        titleId="join-about-title"
        sectionClassName="donation-about"
      >
        <div className="join-about-options">
          <article className="join-about-option">
            <img src={communityImage} alt={t('Integrantes de Sembrando Perú trabajando junto a la comunidad')} loading="lazy" />
            <div className="join-about-option__content">
              <h3>{t('PARA MÍ')}</h3>
              <p>{t('Al sumarte a Sembrando Perú, te unes a una comunidad comprometida con el bienestar de las personas y el cuidado de la naturaleza. Tu participación nos ayuda a impulsar iniciativas de reforestación, educación y salud junto a comunidades de todo el Perú.')}</p>
              <a href="/voluntariado#participar">{t('Quiero sumarme')}</a>
            </div>
          </article>
          <article className="join-about-option">
            <img src={heroImage} alt={t('Voluntarios de Sembrando Perú participando en una actividad comunitaria')} loading="lazy" />
            <div className="join-about-option__content">
              <h3>{t('PARA UN AMIGO O FAMILIAR')}</h3>
              <p>{t('Invita a alguien especial a compartir su tiempo y sus ideas para apoyar a nuestras comunidades y cuidar la naturaleza.')}</p>
              <a href={`mailto:?subject=${encodeURIComponent(t('Súmate a Sembrando Perú'))}&body=${encodeURIComponent(t('Te invito a conocer cómo sumarte a Sembrando Perú: '))}${encodeURIComponent(`${window.location.origin}/voluntariado#participar`)}`}>{t('Invitar a alguien')}</a>
            </div>
          </article>
        </div>
      </CollapsibleSection>
      <CollapsibleSection
        title={t('¿CÓMO PUEDES CONTRIBUIR A SEMBRANDO PERÚ?')}
        titleId="join-how-title"
        sectionClassName="donation-how"
      >
        <div className="join-how-layout">
          <img className="donation-how__image" src={heroImage} alt={t('Integrantes de Sembrando Perú trabajando junto a la comunidad')} loading="lazy" />
          <div className="donation-how__copy">
            <p>{t('Puedes participar en jornadas de reforestación, apoyar la producción de plantines en viveros, compartir tus conocimientos y colaborar en talleres de educación ambiental. Cuéntanos tus intereses y disponibilidad para explorar oportunidades junto a las comunidades.')}</p>
          </div>
        </div>
      </CollapsibleSection>
      <JoinWelcomeSection />
      <CollapsibleSection
        title={t('SEMBREMOS UN FUTURO SOSTENIBLE PARA EL PERÚ')}
        titleId="join-impact-title"
        sectionClassName="donation-impact"
      >
        <p className="donation-impact__intro">{t('Tus aportes impulsan el trabajo integral de Sembrando Perú, promoviendo iniciativas ecológicas y comunitarias en nuestras regiones clave.')}</p>
        <div className="donation-impact__grid">
          {donationImpactAreas.map(({ title, description, image, alt }) => (
            <article className="donation-impact-card" key={title}>
              <img src={image} alt={t(alt)} loading="lazy" />
              <div><h3>{t(title)}</h3><p>{t(description)}</p></div>
            </article>
          ))}
        </div>
      </CollapsibleSection>
      <section className="donation-how donation-purpose" aria-labelledby="join-purpose-title">
        <h2 id="join-purpose-title">{t('Un propósito que nos une')}</h2>
        <p className="donation-purpose__intro">{t('En Sembrando Perú, el cuidado de la naturaleza y el bienestar de las comunidades van de la mano. Tu apoyo nos ayuda a seguir trabajando en estos compromisos:')}</p>
        <div className="donation-purpose__grid">
          <article className="donation-purpose__card">
            <p className="donation-purpose__message">{t('Cada árbol es una oportunidad para recuperar nuestros paisajes. Tu apoyo acompaña la siembra, el cuidado de plantas y el trabajo con las comunidades para proteger su entorno.')}</p>
            <h3>{t('CUIDAMOS NUESTROS BOSQUES')}</h3>
            <p className="donation-purpose__area">{t('Reforestación y naturaleza')}</p>
          </article>
          <article className="donation-purpose__card">
            <p className="donation-purpose__message">{t('Compartir conocimientos abre nuevas posibilidades. Junto a las familias, impulsamos el aprendizaje y la conciencia ambiental para que el cuidado de la naturaleza forme parte de la vida comunitaria.')}</p>
            <h3>{t('SEMBRAMOS APRENDIZAJES')}</h3>
            <p className="donation-purpose__area">{t('Educación y participación')}</p>
          </article>
          <article className="donation-purpose__card">
            <p className="donation-purpose__message">{t('El futuro también se construye cuidando a las personas. Tu aporte acompaña iniciativas de prevención, educación y participación que ponen en el centro a los niños y sus familias.')}</p>
            <h3>{t('CULTIVAMOS BIENESTAR')}</h3>
            <p className="donation-purpose__area">{t('Salud y comunidad')}</p>
          </article>
        </div>
      </section>
    </>
  )
}

function JoinWelcomeSection() {
  const { t } = useLanguage()
  const resources = [
    { title: 'FICHAS INFORMATIVAS SOBRE NUESTROS PROYECTOS', image: heroImage, href: '/publicaciones', download: false },
    { title: 'FONDOS DE PANTALLA PARA TUS DISPOSITIVOS', image: reforestationImage, href: reforestationImage, download: true },
    { title: 'SUSCRIPCIÓN AL BOLETÍN DE SEMBRANDO PERÚ', image: communityImage, href: '/#unete', download: false },
  ]

  return (
    <CollapsibleSection
      title={t('TE DAMOS LA BIENVENIDA')}
      titleId="join-welcome-title"
      sectionClassName="donation-how donation-welcome join-welcome"
    >
      <p className="donation-welcome__intro">{t('Gracias por tu interés en sumarte a Sembrando Perú. Explora estos recursos para conocer nuestros proyectos y seguir conectado con el cuidado de la naturaleza y el bienestar de las comunidades:')}</p>
      <div className="donation-welcome__grid">
        {resources.map(resource => (
          <a className="donation-welcome__card" href={resource.href} download={resource.download || undefined} key={resource.title}>
            <div className="donation-welcome__preview"><img src={resource.image} alt="" loading="lazy" /></div>
            <h3>{t(resource.title)}</h3>
          </a>
        ))}
      </div>
    </CollapsibleSection>
  )
}

export default function JoinPage({ volunteering = false }: { volunteering?: boolean }) {
  const { t } = useLanguage()
  const [faqExpanded, setFaqExpanded] = useState(true)
  const [showAllFaq, setShowAllFaq] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const sending = useRef(false)
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaReset, setCaptchaReset] = useState(0)
  const [submissionError, setSubmissionError] = useState('')
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? ''
  
  // Detección de entorno local
  const isDev = import.meta.env.DEV || window.location.hostname === 'localhost'
  const onProductionDomain = window.location.origin === joinProductionOrigin || isDev
  
  const [errors, setErrors] = useState<JoinErrors>({})
  const [touched, setTouched] = useState<Partial<Record<JoinField, boolean>>>({})
  const [attempted, setAttempted] = useState(false)

  function validateField(target: EventTarget, form: HTMLFormElement, blur = false) {
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) return
    const field = target.name as JoinField
    if (!joinFields.includes(field)) return
    if (blur) setTouched(previous => ({ ...previous, [field]: true }))
    if (blur || attempted || touched[field]) {
      const nextErrors = validateJoinForm(new FormData(form))
      setErrors(previous => ({ ...previous, [field]: nextErrors[field] }))
    }
  }

  function fieldProps(field: JoinField) {
    return {
      id: `join-${field}`,
      disabled: submitting,
      'aria-invalid': Boolean(errors[field]),
      'aria-describedby': errors[field] ? `join-${field}-error` : undefined,
    }
  }

  function fieldError(field: JoinField) {
    return errors[field] ? <span className="join-form__error" id={`join-${field}-error`}>{t(errors[field]!)}</span> : null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current || submitted) return
    
    const form = event.currentTarget
    const data = new FormData(form)
    const nextErrors = validateJoinForm(data)
    setErrors(nextErrors)
    setAttempted(true)
    setSubmissionError('')

    const firstInvalid = joinFields.find(field => nextErrors[field])
    if (firstInvalid) {
      const input = event.currentTarget.elements.namedItem(firstInvalid)
      if (input instanceof HTMLElement) input.focus()
      return
    }

    if (!isDev && (!onProductionDomain || !captchaToken)) {
      setSubmissionError('Completa la verificación de seguridad antes de enviar.')
      return
    }

    sending.current = true
    setSubmitting(true)

    try {
      // Inserción en Supabase
      const { error } = await supabase.from('solicitudes_sumate').insert([
        {
          name: data.get('name') as string,
          email: data.get('email') as string,
          phone: (data.get('phone') as string) || null,
          city: data.get('city') as string,
          area: data.get('area') as string,
          availability: data.get('availability') as string,
          message: (data.get('message') as string) || null,
          consent: data.get('consent') === 'on',
          tipo_formulario: 'solicitud_sumate'
        }
      ])

      if (error) {
        console.error('Detalle del error de Supabase:', JSON.stringify(error, null, 2))
        throw error
      }

      setSubmitted(true)
      form.reset()
      setTouched({})
      setAttempted(false)
    } catch (error) {
      console.error('Error enviando formulario de sumate:', error)
      setSubmissionError('No pudimos registrar tu solicitud. Intenta nuevamente o escríbenos a contacto@sembrandoperu.org.')
    } finally {
      sending.current = false
      setSubmitting(false)
      setCaptchaToken('')
      setCaptchaReset(value => value + 1)
    }
  }

  return (
    <div className={`home-page join-page${volunteering ? ' volunteer-page' : ''}`}>
      <SiteHeader />
      <main>
        <section className={`join-hero${!volunteering ? ' join-hero--donation' : ''}`} aria-labelledby="join-title">
          <img src={volunteering ? volunteerHero : donationHeroImage} alt={t('Participación comunitaria en una jornada de Sembrando Perú')} />
          {volunteering ? (
            <div className="volunteer-campaign">
              <div className="volunteer-campaign__identity">
                <Sprout size={140} strokeWidth={1.5} aria-hidden="true" />
                <span>{t('VOLUNTARIADO')}</span>
                <span>{t('SEMBRANDO PERÚ')}</span>
              </div>
              <div className="volunteer-campaign__message">
                <h1 id="join-title">{t('¡Llegó la hora de actuar!')}<br />{t('Dale tu tiempo a la comunidad')}</h1>
                <a href="#participar">{t('QUIERO SER VOLUNTARIO')} <ArrowRight size={20} aria-hidden="true" /></a>
              </div>
            </div>
          ) : (
          <div className="join-hero__content join-hero__content--left">
            <div className="join-hero__title-panel">
              <h1 id="join-title">{t('SÉ PARTE DE SEMBRANDO PERÚ')}</h1>
            </div>
            <p>{t('Tu tiempo, tus ideas y tus conocimientos pueden aportar al bienestar de nuestras comunidades y al cuidado de la naturaleza.')}</p>
          </div>
          )}
          {volunteering && <SocialLinks placement="banner" />}
        </section>

        {volunteering && <VolunteeringIntroduction />}

        {!volunteering && <JoinParticipationSections />}

        {volunteering && <section className="join-section join-intro volunteer-participation" aria-labelledby="join-ways">
          <h2 id="join-ways">{t('¿CÓMO PUEDES PARTICIPAR?')}</h2>
          <p>{t('Apoya campañas, comparte lo que sabes o colabora en actividades comunitarias. Cuéntanos qué te motiva y exploremos cómo puedes aportar.')}</p>
        </section>}

        {volunteering && <VolunteeringParticipation />}

        {volunteering && <section className="join-section join-registration" id="participar" aria-labelledby="join-form-title">
          <div className="join-registration__intro">
            <VolunteeringToolkitIntro />
          </div>
          <form className="join-form" noValidate onSubmit={handleSubmit} aria-busy={submitting}
            onBlur={event => validateField(event.target, event.currentTarget, true)}
            onChange={event => { setSubmitted(false); setSubmissionError(''); validateField(event.target, event.currentTarget) }}>
            <label>{t('Nombre completo')} *<input {...fieldProps('name')} name="name" autoComplete="name" required maxLength={120} />{fieldError('name')}</label>
            <label>{t('Correo electrónico')} *<input {...fieldProps('email')} name="email" type="email" autoComplete="email" required maxLength={180} />{fieldError('email')}</label>
            <label>{t('Teléfono (opcional)')}<input {...fieldProps('phone')} name="phone" type="tel" autoComplete="tel" maxLength={30} />{fieldError('phone')}</label>
            <label>{t('Ciudad / País')} *<input {...fieldProps('city')} name="city" autoComplete="address-level2" required maxLength={120} />{fieldError('city')}</label>
            <label>{t('Área de interés')} *<select {...fieldProps('area')} name="area" defaultValue="" required><option value="" disabled>{t('Selecciona un área')}</option>{areas.map(({ title }) => <option key={title} value={title}>{t(title)}</option>)}<option value="Por definir">{t('Quiero conocer las opciones')}</option></select>{fieldError('area')}</label>
            <label>{t('Disponibilidad')} *<select {...fieldProps('availability')} name="availability" defaultValue="" required><option value="" disabled>{t('Selecciona una opción')}</option>{joinAvailability.map(value => <option key={value} value={value}>{t(value)}</option>)}</select>{fieldError('availability')}</label>
            <label className="join-form__wide">{t('¿Cómo te gustaría participar? (opcional)')}<textarea {...fieldProps('message')} name="message" rows={4} maxLength={1000} placeholder={t('Cuéntanos sobre tus intereses, conocimientos o experiencia.')} />{fieldError('message')}</label>
            <div className="join-form__wide"><label className="join-form__consent"><input {...fieldProps('consent')} type="checkbox" name="consent" required /><span>{t('Autorizo a Sembrando Perú a utilizar los datos de este formulario para responder a mi solicitud y contactarme sobre oportunidades de participación.')} *</span></label><a className="join-form__privacy-link" href="/contacto#privacidad" target="_blank" rel="noopener noreferrer">{t('Políticas de privacidad')} ({t('Se abre en otra pestaña')})</a>{fieldError('consent')}</div>
            {attempted && Object.values(errors).some(Boolean) && <p className="join-form__error join-form__wide" role="alert">{t('Revisa los campos señalados antes de continuar.')}</p>}
            
            {!submitted && (
              <div className="join-form__wide">
                {!isDev && onProductionDomain ? (
                  <>
                    <p>{t('Verificación de seguridad')}</p>
                    <Turnstile siteKey={siteKey} resetKey={captchaReset} onToken={setCaptchaToken} />
                  </>
                ) : !isDev ? (
                  <p>
                    {t('El envío de solicitudes está disponible en nuestro sitio oficial.')}{' '}
                    <a href={`${joinProductionOrigin}/voluntariado#participar`}>{t('Ir al sitio oficial')}</a>
                  </p>
                ) : null}
              </div>
            )}

            {submissionError && <p className="join-form__error join-form__wide" role="alert">{t(submissionError)}</p>}
            <div className="join-form__wide">
              <button 
                className="join-button" 
                type="submit" 
                disabled={submitting || submitted || (!isDev && (!onProductionDomain || !captchaToken))}
              >
                {t(submitting ? 'ENVIANDO…' : 'ENVIAR MI SOLICITUD')} <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
            {submitted && <p className="join-form__status" role="status">{t('Tu solicitud se registró correctamente. Gracias por tu interés en sumarte a Sembrando Perú.')}</p>}
          </form>
        </section>}

        {volunteering && <VolunteeringResources />}

        {volunteering ? <VolunteeringClosing /> : <section className="join-faq" aria-labelledby="join-faq-title">
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
