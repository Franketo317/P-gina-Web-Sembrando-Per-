import test from 'node:test'
import assert from 'node:assert/strict'
import { createJoinHandler, productionOrigin } from './handler.ts'

const config = { secret: 'test-secret', supabaseUrl: 'https://example.supabase.co', serviceKey: 'test-service' }
const valid = { name: 'María Pérez', email: 'maria@example.com', city: 'Lima, Perú', area: 'Salud', availability: 'Por coordinar', consent: 'on', captchaToken: 'test-token' }
function request(payload = valid, origin = productionOrigin) {
  return new Request('https://example.supabase.co/functions/v1/submit-join', {
    method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
  })
}
const verified = { success: true, hostname: new URL(productionOrigin).hostname, action: 'join' }

test('rejects localhost, preview and missing origins without calling services', async () => {
  const handler = createJoinHandler(config, () => { throw new Error('unexpected external call') })
  for (const origin of ['http://localhost:5173', 'https://preview.vercel.app', '']) {
    assert.equal((await handler(request(valid, origin))).status, 403)
  }
  const preflight = await handler(new Request('https://example.supabase.co', { method: 'OPTIONS', headers: { origin: productionOrigin } }))
  assert.equal(preflight.status, 204)
  assert.equal(preflight.headers.get('Access-Control-Allow-Origin'), productionOrigin)
})

test('rejects invalid fields and missing tokens before verification', async () => {
  const handler = createJoinHandler(config, () => { throw new Error('unexpected external call') })
  for (const payload of [{ ...valid, captchaToken: '' }, { ...valid, name: 123 }, { ...valid, consent: '' }]) {
    assert.equal((await handler(request(payload))).status, 400)
  }
})

test('does not save failed, expired or wrong-hostname/action tokens', async () => {
  for (const result of [{ success: false, 'error-codes': ['timeout-or-duplicate'] }, { ...verified, hostname: 'localhost' }, { ...verified, action: 'contact' }]) {
    let calls = 0
    const handler = createJoinHandler(config, async () => { calls++; return Response.json(result) })
    assert.equal((await handler(request())).status, 400)
    assert.equal(calls, 1)
  }
})

test('saves once only after verification, without storing token or secrets', async () => {
  const calls = []
  const handler = createJoinHandler(config, async (url, init) => {
    calls.push(url)
    const payload = JSON.parse(init.body)
    if (calls.length === 1) {
      assert.equal(payload.response, valid.captchaToken)
      return Response.json(verified)
    }
    assert.equal(payload.name, valid.name)
    assert.equal(payload.captchaToken, undefined)
    assert.equal(payload.secret, undefined)
    assert.equal(payload.consent, true)
    return new Response(null, { status: 201 })
  })
  assert.equal((await handler(request())).status, 201)
  assert.deepEqual(calls, ['https://challenges.cloudflare.com/turnstile/v0/siteverify', 'https://example.supabase.co/rest/v1/join_requests'])
})

test('does not report success when Cloudflare or database fail', async () => {
  const unavailable = createJoinHandler(config, async () => { throw new Error('network') })
  assert.equal((await unavailable(request())).status, 503)
  let calls = 0
  const saveFailure = createJoinHandler(config, async () => ++calls === 1 ? Response.json(verified) : new Response(null, { status: 500 }))
  assert.equal((await saveFailure(request())).status, 503)
})
