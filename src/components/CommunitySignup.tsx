import { useRef, useState, type FormEvent } from 'react'
import { useLanguage } from './LanguageContext'
import Turnstile from './Turnstile'
import { joinProductionOrigin } from '../lib/submitJoin'
import { supabase } from '../supabaseClient' // 👈 Verifica que la ruta hacia supabaseClient sea correcta

export function CommunitySignupForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaReset, setCaptchaReset] = useState(0)
  const sending = useRef(false)
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? ''

  // Detecta si se está ejecutando localmente o en el dominio de producción
  const isDev = import.meta.env.DEV || window.location.hostname === 'localhost'
  const onProductionDomain = window.location.origin === joinProductionOrigin || isDev
  const { t } = useLanguage()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current || submitted) return

    // Exige Captcha solo en producción si no es entorno de desarrollo local
    if (!isDev && !captchaToken) {
      setErrorMessage(t('Completa la verificación de seguridad antes de enviar.'))
      return
    }

    sending.current = true
    setLoading(true)
    setErrorMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      // Inserción directa en la tabla comunidad_registros de Supabase
      const { error } = await supabase.from('comunidad_registros').insert([
        {
          first_name: formData.get('firstName') as string,
          last_name: formData.get('lastName') as string,
          email: formData.get('email') as string,
          country: formData.get('country') as string,
          consent: formData.get('consent') === 'on',
          tipo_formulario: 'registro_comunidad'
        }
      ])

      if (error) {
        console.error('Detalle del error de Supabase:', JSON.stringify(error, null, 2))
        throw error
      }

      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setErrorMessage(
        t('Hubo un error al procesar tu solicitud. Inténtalo nuevamente.')
      )
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
        <input 
          id="community-first-name" 
          name="firstName" 
          autoComplete="given-name"
          placeholder={`${t('Nombre')}*`} 
          required 
          maxLength={120} 
        />
      </label>

      <label htmlFor="community-last-name">
        <span>{t('Apellido')} <em>{t('(Requerido)')}</em></span>
        <input 
          id="community-last-name" 
          name="lastName" 
          autoComplete="family-name"
          placeholder={`${t('Apellido')}*`} 
          required 
          maxLength={120} 
        />
      </label>

      <label htmlFor="community-email">
        <span>{t('Correo electrónico')} <em>{t('(Requerido)')}</em></span>
        <input 
          id="community-email" 
          name="email" 
          type="email" 
          autoComplete="email"
          placeholder={`${t('Correo electrónico')}*`} 
          required 
          maxLength={180} 
        />
      </label>

      <label htmlFor="community-country">
        <span>{t('País/Región')} <em>{t('(Requerido)')}</em></span>
        <select 
          id="community-country" 
          name="country" 
          autoComplete="country-name"
          defaultValue="" 
          required
        >
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

      {!submitted && (
        <div className="community-form__captcha">
          {!isDev && onProductionDomain ? (
            <>
              <p>{t('Verificación de seguridad')}</p>
              <Turnstile siteKey={siteKey} resetKey={captchaReset} onToken={setCaptchaToken} action="community" />
            </>
          ) : !isDev ? (
            <p>
              {t('El envío de solicitudes está disponible en nuestro sitio oficial.')}{' '}
              <a href={`${joinProductionOrigin}${window.location.pathname}#unete`}>
                {t('Ir al sitio oficial')}
              </a>
            </p>
          ) : null}
        </div>
      )}

      <div className="community-form__submit">
        <button
          className="button button--green"
          type="submit"
          disabled={loading || submitted || (!isDev && (!onProductionDomain || !captchaToken))}
        >
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