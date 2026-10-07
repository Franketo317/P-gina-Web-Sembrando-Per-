import { useEffect, useId, useRef, useState } from 'react'
import LanguageIcon, { LanguageChevron } from './LanguageIcon'
import { useLanguage } from './LanguageContext'

type Props = {
  className: string
}

export default function LanguageSwitcher({ className }: Props) {
  const { language, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const switcherRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !switcherRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [menuOpen])

  function selectLanguage(selectedLanguage: 'es' | 'en') {
    if (language !== selectedLanguage) toggleLanguage()
    setMenuOpen(false)
  }

  return (
    <div
      className={`language-switcher-wrapper ${className}`}
      ref={switcherRef}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setMenuOpen(false)
      }}
    >
      <button
        className="language-switcher"
        type="button"
        aria-label={language === 'en' ? 'Cambiar idioma a español' : 'Cambiar idioma a inglés'}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <LanguageIcon />
        <span className="language-switcher__label">
          {language === 'es' ? 'ES | Español' : 'EN | English'}
        </span>
        <LanguageChevron />
      </button>
      {menuOpen && (
        <div className="language-switcher__menu" id={menuId} role="menu">
          <button
            className="language-switcher__option"
            type="button"
            role="menuitem"
            aria-current={language === 'es' ? 'true' : undefined}
            onClick={() => selectLanguage('es')}
          >
            ES | Español
          </button>
          <button
            className="language-switcher__option"
            type="button"
            role="menuitem"
            aria-current={language === 'en' ? 'true' : undefined}
            onClick={() => selectLanguage('en')}
          >
            EN | English
          </button>
        </div>
      )}
    </div>
  )
}
