export const productionOrigin = 'https://sembrando-peru-oficial.vercel.app'
type Config = { secret: string; supabaseUrl: string; serviceKey: string }

export function createCommunityHandler(config: Config, requestFetch: typeof fetch = fetch) {
  return async (request: Request): Promise<Response> => {
    const allowed = request.headers.get('origin') === productionOrigin
    const headers: Record<string, string> = { 'Content-Type': 'application/json', Vary: 'Origin' }
    if (allowed) {
      headers['Access-Control-Allow-Origin'] = productionOrigin
      headers['Access-Control-Allow-Headers'] = 'content-type, apikey, authorization, x-client-info'
      headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
    }
    const reply = (status: number, body: unknown) => new Response(JSON.stringify(body), { status, headers })
    if (!allowed) return reply(403, { code: 'origin_not_allowed' })
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers })
    if (request.method !== 'POST') return reply(405, { code: 'method_not_allowed' })
    if (!config.secret || !config.supabaseUrl || !config.serviceKey) return reply(503, { code: 'service_unavailable' })
    if (!request.headers.get('content-type')?.includes('application/json')) return reply(415, { code: 'invalid_content_type' })

    let payload: Record<string, unknown>
    try {
      const reader = request.body?.getReader()
      if (!reader) return reply(400, { code: 'invalid_body' })
      const chunks: Uint8Array[] = []
      let size = 0
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        size += value.length
        if (size > 16384) { await reader.cancel(); return reply(413, { code: 'body_too_large' }) }
        chunks.push(value)
      }
      const bytes = new Uint8Array(size)
      let offset = 0
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length }
      const parsed = JSON.parse(new TextDecoder().decode(bytes))
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return reply(400, { code: 'invalid_body' })
      payload = parsed
    } catch { return reply(400, { code: 'invalid_body' }) }

    for (const field of ['firstName', 'lastName', 'email', 'country', 'consent']) {
      if (typeof payload[field] !== 'string') return reply(400, { code: 'invalid_fields' })
    }
    const value = (name: string) => String(payload[name] ?? '').trim()
    if (!value('firstName') || value('firstName').length > 120
      || !value('lastName') || value('lastName').length > 120
      || value('email').length > 180 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))
      || !['Perú', 'Bolivia', 'Ecuador', 'Otro'].includes(value('country'))
      || payload.consent !== 'on') return reply(400, { code: 'invalid_fields' })
    if (typeof payload.captchaToken !== 'string' || !payload.captchaToken || payload.captchaToken.length > 2048) {
      return reply(400, { code: 'captcha_invalid' })
    }

    try {
      const verification = await requestFetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: config.secret, response: payload.captchaToken }),
        signal: AbortSignal.timeout(10000),
      })
      if (!verification.ok) return reply(503, { code: 'verification_unavailable' })
      const result = await verification.json()
      if (result.success !== true || result.action !== 'community' || result.hostname !== new URL(productionOrigin).hostname) {
        return reply(400, { code: 'captcha_invalid' })
      }
      const saved = await requestFetch(`${config.supabaseUrl.replace(/\/$/, '')}/rest/v1/comunidad_registros`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', apikey: config.serviceKey, Authorization: `Bearer ${config.serviceKey}`, Prefer: 'return=minimal' },
        body: JSON.stringify({
          first_name: value('firstName'), last_name: value('lastName'), email: value('email').toLowerCase(),
          country: value('country'), consent: true, tipo_formulario: 'registro_comunidad',
        }),
        signal: AbortSignal.timeout(10000),
      })
      if (!saved.ok) return reply(503, { code: 'save_failed' })
      return reply(201, { success: true })
    } catch { return reply(503, { code: 'service_unavailable' }) }
  }
}
