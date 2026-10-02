import LanguageIcon, { LanguageChevron } from './LanguageIcon'
import { useLanguage } from './LanguageContext'

type Props = {
  className: string
}

export default function LanguageSwitcher({ className }: Props) {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className={`language-switcher ${className}`}
      type="button"
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
      aria-pressed={language === 'en'}
      onClick={toggleLanguage}
    >
      <LanguageIcon />
      <span>{language === 'en' ? 'EN | English' : 'ES | Español'}</span>
      <LanguageChevron />
    </button>
  )
}