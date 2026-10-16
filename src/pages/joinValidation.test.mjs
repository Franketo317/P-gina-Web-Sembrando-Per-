import test from 'node:test'
import assert from 'node:assert/strict'
import { validateJoinForm } from './joinValidation.ts'

const valid = { name: 'María José Pérez', email: 'maria@example.com', city: 'Lima, Perú', area: 'Salud', availability: 'Fines de semana', consent: 'on' }
function validate(overrides = {}) {
  const data = new FormData()
  for (const [key, value] of Object.entries({ ...valid, ...overrides })) data.set(key, value)
  return validateJoinForm(data)
}

test('accepts accented names, international phones and empty optional fields', () => {
  assert.deepEqual(validate(), {})
  assert.deepEqual(validate({ name: "Ana-María O’Neill", phone: '+51 (921) 462-828' }), {})
  assert.deepEqual(validate({ name: '李 明', city: 'São Paulo / Brasil' }), {})
})

test('requires contact details, selected options and consent', () => {
  for (const field of ['name', 'email', 'city', 'area', 'availability', 'consent']) {
    assert.ok(validate({ [field]: '   ' })[field], field)
  }
})

test('rejects malformed names, emails, phone numbers and city entries', () => {
  for (const name of ['Ana123 Pérez', '12345', 'Ana', '<script> Pérez']) assert.ok(validate({ name }).name)
  for (const email of ['hola', 'ana@correo', 'ana@@correo.com', 'ana@correo/com.org', 'ana..perez@correo.com', '.ana@correo.com']) assert.ok(validate({ email }).email)
  for (const phone of ['123', '+1234567890123456', '921ABC828', '++51921462828']) assert.ok(validate({ phone }).phone)
  for (const city of ['1', '@@@L', '<Lima>']) assert.ok(validate({ city }).city)
})

test('rejects unlisted selections and enforces length limits', () => {
  assert.ok(validate({ area: 'otra' }).area)
  assert.ok(validate({ availability: 'otra' }).availability)
  assert.ok(validate({ message: 'a'.repeat(1001) }).message)
  assert.equal(validate({ message: 'a'.repeat(1000) }).message, undefined)
  assert.ok(validate({ name: 'Ana ' + 'a'.repeat(120) }).name)
  assert.ok(validate({ city: 'a'.repeat(121) }).city)
})
