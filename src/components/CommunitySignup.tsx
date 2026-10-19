import { useRef, useState, type FormEvent } from 'react'
import { useLanguage } from './LanguageContext'
import Turnstile from './Turnstile'
import { joinProductionOrigin } from '../lib/submitJoin'
import { submitCommunity } from '../lib/submitCommunity'

export function CommunitySignupForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaReset, setCaptchaReset] = useState(0)
  const sending = useRef(false)
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? ''
  const onProductionDomain = window.location.origin === joinProductionOrigin
  const { t } = useLanguage()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current || submitted || !onProductionDomain) return
    if (!captchaToken) {
      setErrorMessage(t('Completa la verificación de seguridad antes de enviar.'))
      return
    }
    sending.current = true
    setLoading(true)
    setErrorMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    try {
      await submitCommunity(formData, captchaToken)
      setSubmitted(true)
      form.reset()
    } catch (error) {
      setErrorMessage(t(error instanceof Error && error.message === 'captcha_invalid'
        ? 'La verificación venció o no es válida. Complétala nuevamente.'
        : 'Hubo un error al procesar tu solicitud. Inténtalo nuevamente.'))
    } finally {
      setLoading(false)
      sending.current = false
      setCaptchaToken('')
      setCaptchaReset(value => value + 1)
    }
  }

  return (
    <form className="community-form" onSubmit={handleSubmit} aria-busy={loading}>
      <label htmlFor="community-first-name">
        <span>{t('Nombre')} <em>{t('(Requerido)')}</em></span>
        <input id="community-first-name" name="firstName" placeholder={`${t('Nombre')}*`} autoComplete="given-name" required maxLength={120} />
      </label>
      <label htmlFor="community-last-name">
        <span>{t('Apellido')} <em>{t('(Requerido)')}</em></span>
        <input id="community-last-name" name="lastName" placeholder={`${t('Apellido')}*`} autoComplete="family-name" required maxLength={120} />
      </label>
      <label htmlFor="community-email">
        <span>{t('Correo electrónico')} <em>{t('(Requerido)')}</em></span>
        <input id="community-email" name="email" type="email" placeholder={`${t('Correo electrónico')}*`} autoComplete="email" required maxLength={180} />
      </label>
      <label htmlFor="community-country">
        <span>{t('País/Región')} <em>{t('(Requerido)')}</em></span>
        <select id="community-country" name="country" defaultValue="" required>
          <option value="" disabled>{t('Seleccione país o región*')}</option>
          <option value="Perú">{t('Perú')}</option>
          <option value="Bolivia">{t('Bolivia')}</option>
          <option value="Ecuador">{t('Ecuador')}</option>
          <option value="Otro">{t('Otro')}</option>
        </select>
      </label>
      <label className="community-form__consent">
        <input type="checkbox" name="consent" required />
        <span>
          {t('Quiero recibir noticias por correo sobre proyectos de siembra, avances de impacto y eventos de voluntariado de Sembrando Perú.')}
        </span>
      </label>
      {!submitted && <div className="community-form__captcha">
        {onProductionDomain ? <>
          <p>{t('Verificación de seguridad')}</p>
          <Turnstile siteKey={siteKey} resetKey={captchaReset} onToken={setCaptchaToken} action="community" />
        </> : <p>{t('El envío de solicitudes está disponible en nuestro sitio oficial.')} <a href={`${joinProductionOrigin}${window.location.pathname}#unete`}>{t('Ir al sitio oficial')}</a></p>}
      </div>}
      <div className="community-form__submit">
        <button className="button button--green" type="submit" disabled={loading || submitted || !onProductionDomain || !captchaToken}>
          {loading ? t('Enviando...') : t('Unirme al cambio')}
        </button>
        {submitted && <p role="status">{t('Gracias por unirte a nuestra comunidad.')}</p>}
        {errorMessage && <p role="alert" className="error-text">{errorMessage}</p>}
      </div>
    </form>
  )
}

export function PeruOfficeInfo({
  heading = 'EN PERÚ:',
  headingId,
}: {
  heading?: string
  headingId?: string
}) {
  const { t } = useLanguage()

  return (
    <>
      <h3 id={headingId}>{t(heading)}</h3>
      <div className="community-section__office">
        <h4>{t('Oficina Lima (sede principal)')}</h4>
        <p>Av. Arequipa 2447 – Office 409, Lince District, Lima, Peru</p>
        <a href="tel:+51921462828">{t('Tel: +51 921 462 828')}</a>
        <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
      </div>
    </>
  )
}
