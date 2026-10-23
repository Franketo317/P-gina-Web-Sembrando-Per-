import { translateText } from './translate'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'es' | 'en'

type LanguageContextValue = {
  language: Language
  toggleLanguage: () => void
  t: (text: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function initialLanguage(): Language {
  if (typeof window === 'undefined') return 'es'
  return window.localStorage.getItem('sembrando-language') === 'en' ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    window.localStorage.setItem('sembrando-language', language)
    document.documentElement.lang = language
  }, [language])

  function toggleLanguage() {
    setLanguage((currentLanguage) => currentLanguage === 'es' ? 'en' : 'es')
  }

  function t(text: string) {
    return translateText(text, language)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
