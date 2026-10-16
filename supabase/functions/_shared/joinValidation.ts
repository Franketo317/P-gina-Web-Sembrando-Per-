export const joinAreas = ['Reforestación', 'Educación', 'Salud', 'Comunicación', 'Por definir']
export const joinAvailability = ['Entre semana', 'Fines de semana', 'Actividades puntuales', 'Por coordinar']
export const joinFields = ['name', 'email', 'phone', 'city', 'area', 'availability', 'message', 'consent'] as const
export type JoinField = typeof joinFields[number]
export type JoinErrors = Partial<Record<JoinField, string>>

export function validateJoinForm(data: FormData): JoinErrors {
  const value = (field: JoinField) => String(data.get(field) ?? '').trim()
  const errors: JoinErrors = {}
  const name = value('name')
  if (!name) errors.name = 'Ingresa tu nombre completo.'
  else if (name.length > 120 || !/^[\p{L}\p{M}]+(?:[\s'’.-]+[\p{L}\p{M}]+)+$/u.test(name)) {
    errors.name = 'Escribe tu nombre y apellido usando letras, sin números ni símbolos especiales.'
  }

  const email = value('email')
  if (!email) errors.email = 'Ingresa tu correo electrónico.'
  else if (email.length > 180 || !/^[a-z\d.!#$%&'*+/=?^_`{|}~-]+@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z]{2,}$/i.test(email)
    || email.startsWith('.') || email.includes('..') || email.includes('.@')) {
    errors.email = 'Ingresa un correo válido, por ejemplo: nombre@correo.com.'
  }

  const phone = value('phone')
  if (phone && (!/^\+?[\d\s().-]+$/.test(phone) || !/^\d{7,15}$/.test(phone.replace(/\D/g, '')))) {
    errors.phone = 'Ingresa entre 7 y 15 dígitos. Puedes incluir +, espacios, guiones o paréntesis.'
  }

  const city = value('city')
  if (!city) errors.city = 'Ingresa tu ciudad o país.'
  else if (city.length < 2 || city.length > 120 || !/\p{L}/u.test(city)
    || !/^[\p{L}\p{M}\d\s,.'’()/-]+$/u.test(city) || /[\r\n]/.test(city)) {
    errors.city = 'Ingresa una ciudad o país válido, por ejemplo: Lima, Perú.'
  }
  if (!joinAreas.includes(value('area'))) errors.area = 'Selecciona un área de interés.'
  if (!joinAvailability.includes(value('availability'))) errors.availability = 'Selecciona tu disponibilidad.'
  if (value('message').length > 1000) errors.message = 'Tu mensaje debe tener como máximo 1000 caracteres.'
  if (data.get('consent') !== 'on') errors.consent = 'Debes autorizar el uso de tus datos para continuar.'
  return errors
}
