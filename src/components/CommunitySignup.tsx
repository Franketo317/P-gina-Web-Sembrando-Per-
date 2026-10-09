import { useState, type FormEvent } from 'react'
import { useLanguage } from './LanguageContext'

export function CommunitySignupForm() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="community-form" onSubmit={handleSubmit}>
      <label htmlFor="community-first-name">
        <span>{t('Nombre')} <em>{t('(Requerido)')}</em></span>
        <input id="community-first-name" name="firstName" placeholder={`${t('Nombre')}*`} autoComplete="given-name" required />
      </label>
      <label htmlFor="community-last-name">
        <span>{t('Apellido')} <em>{t('(Requerido)')}</em></span>
        <input id="community-last-name" name="lastName" placeholder={`${t('Apellido')}*`} autoComplete="family-name" required />
      </label>
      <label htmlFor="community-email">
        <span>{t('Correo electrónico')} <em>{t('(Requerido)')}</em></span>
        <input id="community-email" name="email" type="email" placeholder={`${t('Correo electrónico')}*`} autoComplete="email" required />
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
      <div className="community-form__submit">
        <button className="button button--green" type="submit">{t('Unirme al cambio')}</button>
        {submitted && <p role="status">{t('Gracias por unirte a nuestra comunidad.')}</p>}
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
