export const joinProductionOrigin = 'https://sembrando-peru-oficial.vercel.app'

export async function submitJoin(data: FormData, captchaToken: string) {
  if (window.location.origin !== joinProductionOrigin) throw new Error('origin_not_allowed')
  const url = import.meta.env.VITE_SUPABASE_URL?.trim()
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()
  if (!url || !key) throw new Error('service_unavailable')
  const response = await fetch(`${url.replace(/\/$/, '')}/functions/v1/submit-join`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', apikey: key },
    body: JSON.stringify({ ...Object.fromEntries(data), captchaToken }),
    signal: AbortSignal.timeout(30000),
  })
  const result = await response.json()
  if (!response.ok || result.success !== true) {
    throw new Error(result.code === 'captcha_invalid' ? 'captcha_invalid' : 'submission_failed')
  }
}
