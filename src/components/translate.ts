import { translations } from './translations'

const normalize = (text: string) => text.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('es')
const normalizedTranslations = new Map(Object.entries(translations).map(([source, english]) => [normalize(source), english]))

export function translateText(text: string, language: 'es' | 'en'): string {
  if (language === 'es') return text
  const exact = translations[text]
  if (exact !== undefined) return exact
  const translated = normalizedTranslations.get(normalize(text))
  if (translated === undefined) return text
  return text === text.toLocaleUpperCase('es') ? translated.toLocaleUpperCase('en') : translated
}
