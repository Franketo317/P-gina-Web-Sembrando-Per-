import { useEffect, useRef } from 'react'
import { useLanguage } from './LanguageContext'

const paragraphs = [
  'Podemos recopilar datos personales básicos como nombre, correo electrónico, mensajes enviados, así como información técnica como la dirección IP y el agente del navegador, únicamente para fines de comunicación, seguridad del sitio y prevención de spam. En el caso de los comentarios, esta información se utiliza exclusivamente para su moderación. Si el usuario utiliza el servicio Gravatar, se enviará un hash de su correo electrónico conforme a su política de privacidad.',
  'Utilizamos cookies técnicas y funcionales para mejorar la experiencia de navegación, recordar preferencias y mantener sesiones activas. Las cookies no almacenan información sensible y pueden ser desactivadas o eliminadas desde la configuración del navegador.',
  'Nuestro sitio web puede incluir contenido incrustado de terceros, como videos, formularios o imágenes. Estos servicios externos pueden recopilar datos personales y utilizar cookies de acuerdo con sus propias políticas de privacidad.',
  'Los datos personales se conservan únicamente durante el tiempo necesario para cumplir con la finalidad para la cual fueron recopilados o por obligaciones legales. Sembrando Perú adopta medidas razonables de seguridad para proteger la información frente a accesos no autorizados, pérdida o uso indebido.',
  'El usuario puede solicitar en cualquier momento el acceso, rectificación, exportación o eliminación de sus datos personales, salvo aquellos que deban conservarse por razones legales, administrativas o de seguridad.',
  'Sembrando Perú no vende ni comercializa datos personales. La información solo se comparte cuando es estrictamente necesario para servicios técnicos, seguridad del sitio web o procesos como el restablecimiento de contraseñas.',
]

export default function PrivacyPolicy() {
  const { t, language } = useLanguage()
  const policyRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    let frame = 0
    function revealPolicy() {
      if (window.location.hash !== '#privacidad' || !policyRef.current) return
      policyRef.current.open = true
      frame = requestAnimationFrame(() => policyRef.current?.scrollIntoView({ block: 'start' }))
    }
    revealPolicy()
    window.addEventListener('hashchange', revealPolicy)
    return () => {
      window.removeEventListener('hashchange', revealPolicy)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="contact-privacy" aria-labelledby="privacy-title">
      <details className="contact-privacy__details" id="privacidad" ref={policyRef}>
        <summary><h2 id="privacy-title">{t('Políticas de privacidad')}</h2><span aria-hidden="true" className="contact-privacy__toggle" /></summary>
        <div className="contact-privacy__content" lang={language}>
          <p>{t('En Sembrando Perú respetamos y protegemos la privacidad de las personas que visitan nuestro sitio web')}{' '}<a href="https://sembrandoperu.org">https://sembrandoperu.org</a>{' '}{t('y participan en nuestras actividades.')}</p>
          {paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}
        </div>
      </details>
    </section>
  )
}
