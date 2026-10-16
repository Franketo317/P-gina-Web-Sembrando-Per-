import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './LanguageContext'

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  remove: (id: string) => void
}
declare global { interface Window { turnstile?: TurnstileApi } }
let scriptPromise: Promise<TurnstileApi> | undefined

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  if (!scriptPromise) {
    scriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
      const script = document.createElement('script')
      const timeout = window.setTimeout(fail, 15000)
      function fail() {
        window.clearTimeout(timeout)
        script.remove()
        scriptPromise = undefined
        reject(new Error('turnstile_unavailable'))
      }
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.onerror = fail
      script.onload = () => {
        window.clearTimeout(timeout)
        if (window.turnstile) resolve(window.turnstile)
        else fail()
      }
      document.head.appendChild(script)
    })
  }
  return scriptPromise
}

export default function Turnstile({ siteKey, resetKey, onToken }: {
  siteKey: string; resetKey: number; onToken: (token: string) => void
}) {
  const container = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)
  const [retry, setRetry] = useState(0)
  const { t, language } = useLanguage()
  useEffect(() => {
    let disposed = false
    let widget: string | undefined
    let api: TurnstileApi | undefined
    onToken('')
    if (!siteKey) return
    loadTurnstile().then(loaded => {
      if (disposed || !container.current) return
      api = loaded
      widget = loaded.render(container.current, {
        sitekey: siteKey, action: 'join', language, size: 'flexible',
        callback: (token: string) => { if (!disposed) { setFailed(false); onToken(token) } },
        'expired-callback': () => { if (!disposed) onToken('') },
        'error-callback': () => { if (!disposed) { onToken(''); setFailed(true) } },
      })
    }).catch(() => { if (!disposed) setFailed(true) })
    return () => { disposed = true; if (api && widget !== undefined) api.remove(widget) }
  }, [siteKey, resetKey, retry, onToken, language])
  return <div className="join-captcha">
    <div ref={container} />
    {(!siteKey || failed) && <p role="alert">{t('La verificación no está disponible en este momento. Intenta nuevamente más tarde.')}</p>}
    {failed && <button type="button" onClick={() => { setFailed(false); setRetry(value => value + 1) }}>{t('Reintentar verificación')}</button>}
  </div>
}
