import { useState, type FormEvent } from 'react'
import { BookOpen, HeartHandshake, Megaphone, Sprout, ArrowRight } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import heroImage from '../assets/figma/5.jpeg'
import { joinAvailability, joinFields, validateJoinForm, type JoinErrors, type JoinField } from './joinValidation'
import './JoinPage.css'

const areas = [
  { title: 'Reforestación', description: 'Participa en el cuidado de nuestros bosques y comparte tu interés por la naturaleza.', icon: Sprout },
  { title: 'Educación', description: 'Comparte conocimientos y acompaña iniciativas de aprendizaje comunitario.', icon: BookOpen },
  { title: 'Salud', description: 'Aporta a la prevención y la promoción del bienestar de niños y familias.', icon: HeartHandshake },
  { title: 'Comunicación', description: 'Ayúdanos a contar historias y dar a conocer nuestras iniciativas.', icon: Megaphone },
]

const questions = [
  {
    question: '¿Cómo puedo sumarme a Sembrando Perú?',
    answer: 'Completa el formulario con tus datos, intereses y disponibilidad. Pulsa “Preparar mi solicitud” y envía el mensaje desde tu aplicación de correo a contacto@sembrandoperu.org.',
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
    answer: 'El formulario prepara una presentación por correo; debes enviar ese mensaje para hacer llegar tu interés al equipo. Esto no reserva una plaza ni confirma una incorporación: la participación se coordina según las oportunidades disponibles.',
  },
  {
    question: '¿Qué hago si no se abre mi aplicación de correo?',
    answer: 'Escríbenos directamente a contacto@sembrandoperu.org con el asunto “Quiero sumarme a Sembrando Perú”. Incluye tu nombre, ciudad o país, área de interés y disponibilidad para que el equipo conozca tu propuesta.',
  },
]

export default function JoinPage() {
  const { t } = useLanguage()
  const [prepared, setPrepared] = useState(false)
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
      'aria-invalid': Boolean(errors[field]),
      'aria-describedby': errors[field] ? `join-${field}-error` : undefined,
    }
  }

  function fieldError(field: JoinField) {
    return errors[field] ? <span className="join-form__error" id={`join-${field}-error`}>{t(errors[field]!)}</span> : null
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const nextErrors = validateJoinForm(data)
    setErrors(nextErrors)
    setAttempted(true)
    setPrepared(false)
    const firstInvalid = joinFields.find(field => nextErrors[field])
    if (firstInvalid) {
      const input = event.currentTarget.elements.namedItem(firstInvalid)
      if (input instanceof HTMLElement) input.focus()
      return
    }
    const body = [
      'Hola, equipo de Sembrando Perú. Me gustaría sumarme a sus iniciativas.',
      '',
      ...[
        ['Nombre', 'name'], ['Correo electrónico', 'email'], ['Teléfono', 'phone'],
        ['Ciudad / País', 'city'], ['Área de interés', 'area'], ['Disponibilidad', 'availability'],
        ['Cómo me gustaría participar', 'message'],
      ].map(([label, key]) => `${label}: ${String(data.get(key) || '').trim() || 'No indicado'}`),
      '', 'Autorizo el uso de estos datos para responder a mi solicitud de participación.',
    ].join('\n')
    window.location.href = `mailto:contacto@sembrandoperu.org?subject=${encodeURIComponent('Quiero sumarme a Sembrando Perú')}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }

  return (
    <div className="home-page join-page">
      <SiteHeader />
      <main>
        <section className="join-hero" aria-labelledby="join-title">
          <img src={heroImage} alt={t('Participación comunitaria en una jornada de Sembrando Perú')} />
          <div className="join-hero__content">
            <h1 id="join-title">{t('SÉ PARTE DE SEMBRANDO PERÚ')}</h1>
            <p>{t('Tu tiempo, tus ideas y tus conocimientos pueden aportar al bienestar de nuestras comunidades y al cuidado de la naturaleza.')}</p>
            <a className="join-button" href="#participar">{t('QUIERO SUMARME')} <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <SocialLinks placement="banner" />
        </section>

        <section className="join-section join-intro" aria-labelledby="join-ways">
          <p className="join-eyebrow">{t('JUNTOS PODEMOS HACER MÁS')}</p>
          <h2 id="join-ways">{t('ENCUENTRA TU FORMA DE PARTICIPAR')}</h2>
          <p>{t('Apoya campañas, comparte lo que sabes o colabora en actividades comunitarias. Cuéntanos qué te motiva y exploremos cómo puedes aportar.')}</p>
          <div className="join-areas">
            {areas.map(({ title, description, icon: Icon }) => (
              <article key={title}>
                <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                <h3>{t(title)}</h3><p>{t(description)}</p>
                <a href="#participar">{t('Me interesa')} <ArrowRight size={16} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="join-process" aria-labelledby="join-steps">
          <div className="join-section">
            <h2 id="join-steps">{t('¿CÓMO SUMARTE?')}</h2>
            <ol>
              <li><span aria-hidden="true">01</span><div><h3>{t('Cuéntanos sobre ti')}</h3><p>{t('Completa tus datos, intereses y disponibilidad en el formulario.')}</p></div></li>
              <li><span aria-hidden="true">02</span><div><h3>{t('Envía tu presentación')}</h3><p>{t('Se abrirá tu aplicación de correo con tu mensaje listo para enviar al equipo.')}</p></div></li>
              <li><span aria-hidden="true">03</span><div><h3>{t('Exploremos oportunidades')}</h3><p>{t('La participación se coordina según las actividades disponibles y tu perfil.')}</p></div></li>
            </ol>
          </div>
        </section>

        <section className="join-section join-registration" id="participar" aria-labelledby="join-form-title">
          <div className="join-registration__intro">
            <p className="join-eyebrow">{t('EL PRIMER PASO EMPIEZA CONTIGO')}</p>
            <h2 id="join-form-title">{t('QUIERO SUMARME')}</h2>
            <p>{t('Déjanos conocerte. No necesitas tener una propuesta definida: tu interés en participar es un buen comienzo.')}</p>
            <p>{t('Los campos con * son obligatorios. Al continuar, se abrirá tu aplicación de correo; tendrás que enviar el mensaje para completar tu solicitud.')}</p>
            <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
          </div>
          <form className="join-form" noValidate onSubmit={handleSubmit}
            onBlur={event => validateField(event.target, event.currentTarget, true)}
            onChange={event => { setPrepared(false); validateField(event.target, event.currentTarget) }}>
            <label>{t('Nombre completo')} *<input {...fieldProps('name')} name="name" autoComplete="name" required maxLength={120} />{fieldError('name')}</label>
            <label>{t('Correo electrónico')} *<input {...fieldProps('email')} name="email" type="email" autoComplete="email" required maxLength={180} />{fieldError('email')}</label>
            <label>{t('Teléfono (opcional)')}<input {...fieldProps('phone')} name="phone" type="tel" autoComplete="tel" maxLength={30} />{fieldError('phone')}</label>
            <label>{t('Ciudad / País')} *<input {...fieldProps('city')} name="city" autoComplete="address-level2" required maxLength={120} />{fieldError('city')}</label>
            <label>{t('Área de interés')} *<select {...fieldProps('area')} name="area" defaultValue="" required><option value="" disabled>{t('Selecciona un área')}</option>{areas.map(({ title }) => <option key={title} value={title}>{t(title)}</option>)}<option value="Por definir">{t('Quiero conocer las opciones')}</option></select>{fieldError('area')}</label>
            <label>{t('Disponibilidad')} *<select {...fieldProps('availability')} name="availability" defaultValue="" required><option value="" disabled>{t('Selecciona una opción')}</option>{joinAvailability.map(value => <option key={value} value={value}>{t(value)}</option>)}</select>{fieldError('availability')}</label>
            <label className="join-form__wide">{t('¿Cómo te gustaría participar? (opcional)')}<textarea {...fieldProps('message')} name="message" rows={4} maxLength={1000} placeholder={t('Cuéntanos sobre tus intereses, conocimientos o experiencia.')} />{fieldError('message')}</label>
            <div className="join-form__wide"><label className="join-form__consent"><input {...fieldProps('consent')} type="checkbox" name="consent" required /><span>{t('Autorizo a Sembrando Perú a utilizar los datos de este formulario para responder a mi solicitud y contactarme sobre oportunidades de participación.')} *</span></label>{fieldError('consent')}</div>
            {attempted && Object.values(errors).some(Boolean) && <p className="join-form__error join-form__wide" role="alert">{t('Revisa los campos señalados antes de continuar.')}</p>}
            <div className="join-form__wide"><button className="join-button" type="submit">{t('PREPARAR MI SOLICITUD')} <ArrowRight size={18} aria-hidden="true" /></button></div>
            {prepared && <p className="join-form__status" role="status">{t('Tu mensaje está preparado. Envíalo desde tu aplicación de correo para completar la solicitud. Si no se abrió, puedes escribirnos directamente a contacto@sembrandoperu.org.')}</p>}
          </form>
        </section>
        <section className="join-faq" aria-labelledby="join-faq-title">
          <div className="join-section">
            <p className="join-eyebrow">{t('RESOLVEMOS TUS DUDAS')}</p>
            <h2 id="join-faq-title">{t('PREGUNTAS FRECUENTES')}</h2>
            <div className="join-faq__list">
              {questions.map(({ question, answer }) => (
                <details key={question}>
                  <summary>{t(question)}<span className="join-faq__toggle" aria-hidden="true" /></summary>
                  <p>{t(answer)}</p>
                </details>
              ))}
            </div>
            <p className="join-faq__contact">{t('¿Tienes otra pregunta?')} <a href="mailto:contacto@sembrandoperu.org">{t('Escríbenos')}</a></p>
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
