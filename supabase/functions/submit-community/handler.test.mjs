import test from 'node:test'
import assert from 'node:assert/strict'
import { createCommunityHandler, productionOrigin } from './handler.ts'

const config = { secret: 'test-secret', supabaseUrl: 'https://example.supabase.co', serviceKey: 'test-service' }
const valid = { firstName: 'María', lastName: 'Pérez', email: 'MARIA@example.com', country: 'Perú', consent: 'on', captchaToken: 'test-token' }
const verified = { success: true, hostname: new URL(productionOrigin).hostname, action: 'community' }
function request(payload = valid, origin = productionOrigin) {
  return new Request('https://example.supabase.co/functions/v1/submit-community', {
    method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
  })
}

test('community rejects unauthorized origins without contacting services', async () => {
  const handler = createCommunityHandler(config, () => { throw new Error('unexpected call') })
  for (const origin of ['', 'http://localhost:5173', 'https://preview.vercel.app']) {
    assert.equal((await handler(request(valid, origin))).status, 403)
  }
  const response = await handler(new Request('https://example.supabase.co', { method: 'OPTIONS', headers: { origin: productionOrigin } }))
  assert.equal(response.status, 204)
  assert.equal(response.headers.get('Access-Control-Allow-Origin'), productionOrigin)
})

test('community rejects missing tokens and invalid form fields before contacting services', async () => {
  let calls = 0
  const handler = createCommunityHandler(config, () => { calls++; throw new Error('unexpected call') })
  for (const payload of [
    { ...valid, captchaToken: '' }, { ...valid, firstName: '   ' }, { ...valid, lastName: 1 },
    { ...valid, firstName: 'a'.repeat(121) }, { ...valid, email: 'invalid' },
    { ...valid, country: 'Unknown' }, { ...valid, consent: '' }, { ...valid, captchaToken: 'a'.repeat(2049) },
  ]) assert.equal((await handler(request(payload))).status, 400)
  assert.equal(calls, 0)
})

test('community rejects expired, invalid, wrong action and wrong hostname tokens without saving', async () => {
  for (const result of [
    { success: false, 'error-codes': ['timeout-or-duplicate'] },
    { ...verified, action: 'join' }, { ...verified, hostname: 'localhost' },
  ]) {
    let calls = 0
    const handler = createCommunityHandler(config, async () => { calls++; return Response.json(result) })
    assert.equal((await handler(request())).status, 400)
    assert.equal(calls, 1)
  }
})

test('community verifies before saving normalized fields and excludes tokens and secrets', async () => {
  const calls = []
  const handler = createCommunityHandler(config, async (url, init) => {
    calls.push(url)
    const body = JSON.parse(init.body)
    if (calls.length === 1) {
      assert.equal(body.response, valid.captchaToken)
      return Response.json(verified)
    }
    assert.deepEqual(body, {
      first_name: 'María', last_name: 'Pérez', email: 'maria@example.com',
      country: 'Perú', consent: true, tipo_formulario: 'registro_comunidad',
    })
    return new Response(null, { status: 201 })
  })
  assert.equal((await handler(request())).status, 201)
  assert.deepEqual(calls, ['https://challenges.cloudflare.com/turnstile/v0/siteverify', 'https://example.supabase.co/rest/v1/comunidad_registros'])
})

test('community handles verification and storage failures without reporting success', async () => {
  const unavailable = createCommunityHandler(config, async () => { throw new Error('network') })
  assert.equal((await unavailable(request())).status, 503)
  let calls = 0
  const saveFailure = createCommunityHandler(config, async () => ++calls === 1 ? Response.json(verified) : new Response(null, { status: 500 }))
  assert.equal((await saveFailure(request())).status, 503)
})

test('community rejects oversized bodies and malformed JSON', async () => {
  const handler = createCommunityHandler(config, () => { throw new Error('unexpected call') })
  assert.equal((await handler(request({ ...valid, extra: 'a'.repeat(17000) }))).status, 413)
  const malformed = new Request('https://example.supabase.co', {
    method: 'POST', headers: { origin: productionOrigin, 'Content-Type': 'application/json' }, body: '{',
  })
  assert.equal((await handler(malformed)).status, 400)
})
