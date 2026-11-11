import { useRef, useState, type FormEvent } from 'react'
import Turnstile from '../components/Turnstile'
import { useLanguage } from '../components/LanguageContext'
import { joinProductionOrigin, submitJoin } from '../lib/submitJoin'
import { joinAvailability, joinFields, validateJoinForm, type JoinErrors, type JoinField } from './joinValidation'

const areas = ['Reforestación', 'Educación', 'Salud', 'Comunicación', 'Por definir']

export default function JoinParticipationForm() {
  const { t } = useLanguage()
  const [errors, setErrors] = useState<JoinErrors>({})
  const [attempted, setAttempted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaReset, setCaptchaReset] = useState(0)
  const sending = useRef(false)
  const onProductionDomain = window.location.origin === joinProductionOrigin
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? ''

  function fieldError(field: JoinField) {
    return errors[field] ? <span className="join-form__error" id={`sumate-${field}-error`}>{t(errors[field]!)}</span> : null
  }

  function validateField(target: EventTarget, form: HTMLFormElement) {
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) return
    const field = target.name as JoinField
    if (!joinFields.includes(field)) return
    const nextErrors = validateJoinForm(new FormData(form))
    setErrors(previous => ({ ...previous, [field]: nextErrors[field] }))
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
      const input = form.elements.namedItem(firstInvalid)
      if (input instanceof HTMLElement) input.focus()
      return
    }
    if (!onProductionDomain || !captchaToken || !siteKey) {
      setSubmissionError('Para enviar tu solicitud, completa la verificación en el sitio oficial de Sembrando Perú.')
      return
    }

    sending.current = true
    setSubmitting(true)
    try {
      await submitJoin(data, captchaToken)
      setSubmitted(true)
      form.reset()
      setErrors({})
      setAttempted(false)
    } catch {
      setSubmissionError('No pudimos registrar tu solicitud. Intenta nuevamente o escríbenos a contacto@sembrandoperu.org.')
    } finally {
      sending.current = false
      setSubmitting(false)
      setCaptchaToken('')
      setCaptchaReset(value => value + 1)
    }
  }

  return (
    <section className="sumate-form-section" id="participacion" aria-labelledby="sumate-form-title">
      <div className="sumate-form-section__heading">
        <h2 id="sumate-form-title">{t('Formulario de participación')}</h2>
        <p>{t('Cuéntanos un poco sobre ti para conocer tus intereses y disponibilidad.')}</p>
      </div>
      <form className="join-form sumate-form" noValidate onSubmit={handleSubmit} aria-busy={submitting}
        onBlur={event => validateField(event.target, event.currentTarget)}
        onChange={event => { setSubmitted(false); setSubmissionError(''); if (attempted) validateField(event.target, event.currentTarget) }}>
        <label>{t('Nombres y apellidos')} *<input name="name" autoComplete="name" required maxLength={120} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'sumate-name-error' : undefined} />{fieldError('name')}</label>
        <label>{t('Correo electrónico')} *<input name="email" type="email" autoComplete="email" required maxLength={180} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'sumate-email-error' : undefined} />{fieldError('email')}</label>
        <label>{t('Teléfono')} *<input name="phone" type="tel" autoComplete="tel" required maxLength={30} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'sumate-phone-error' : undefined} />{fieldError('phone')}</label>
        <label>{t('Ciudad / región')} *<input name="city" autoComplete="address-level2" required maxLength={120} aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? 'sumate-city-error' : undefined} />{fieldError('city')}</label>
        <label>{t('Área de interés')} *<select name="area" defaultValue="" required aria-invalid={Boolean(errors.area)} aria-describedby={errors.area ? 'sumate-area-error' : undefined}><option value="" disabled>{t('Selecciona un área')}</option>{areas.map(area => <option key={area} value={area}>{t(area)}</option>)}</select>{fieldError('area')}</label>
        <label>{t('Disponibilidad')} *<select name="availability" defaultValue="" required aria-invalid={Boolean(errors.availability)} aria-describedby={errors.availability ? 'sumate-availability-error' : undefined}><option value="" disabled>{t('Selecciona tu disponibilidad')}</option>{joinAvailability.map(value => <option key={value} value={value}>{t(value)}</option>)}</select>{fieldError('availability')}</label>
        <div className="join-form__wide">
          <label className="join-form__consent"><input type="checkbox" name="consent" required aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'sumate-consent-error' : undefined} /><span>{t('Autorizo el tratamiento de mis datos personales según la Política de Privacidad.')} *</span></label>
          <a className="join-form__privacy-link" href="/contacto#privacidad" target="_blank" rel="noopener noreferrer">{t('Política de Privacidad')} ({t('Se abre en otra pestaña')})</a>
          {fieldError('consent')}
        </div>
        {attempted && Object.values(errors).some(Boolean) && <p className="join-form__error join-form__wide" role="alert">{t('Revisa los campos señalados antes de continuar.')}</p>}
        {!submitted && <div className="join-form__wide sumate-form__captcha">
          {onProductionDomain && siteKey ? <><p>{t('Verificación de seguridad')}</p><Turnstile siteKey={siteKey} resetKey={captchaReset} onToken={setCaptchaToken} /></> : <p>{t('Vista previa del formulario. Para enviar tu solicitud, visita el sitio oficial:')} <a href={`${joinProductionOrigin}/sumate#participacion`}>{t('Ir a Súmate')}</a></p>}
        </div>}
        {submissionError && <p className="join-form__error join-form__wide" role="alert">{t(submissionError)}</p>}
        <div className="join-form__wide">
          <button className="join-button" type="submit" disabled={submitting || submitted || (onProductionDomain && (!siteKey || !captchaToken))}>
            {t(submitting ? 'ENVIANDO…' : 'Quiero sumarme')} <span aria-hidden="true">→</span>
          </button>
        </div>
        {submitted && <p className="join-form__status" role="status">{t('Tu solicitud se registró correctamente. Gracias por tu interés en sumarte a Sembrando Perú.')}</p>}
      </form>
    </section>
  )
}
