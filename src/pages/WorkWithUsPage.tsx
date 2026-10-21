import { useEffect, useRef, useState } from 'react'
import opportunitiesHero from '../assets/figma/imgBuildingBlocks169.jpg'
import teamPhoto from '../assets/figma/equipo.jpeg'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './WorkWithUsPage.css'

type Opportunity = {
  title: string
  area: string
  location: 'remote' | 'hybrid' | 'onsite'
  description: string
  href: string
}

const opportunities: Opportunity[] = []

const locationOptions = [
  { value: 'remote', label: 'Remoto' },
  { value: 'hybrid', label: 'Híbrido' },
  { value: 'onsite', label: 'En el lugar' },
] as const

export default function WorkWithUsPage() {
  const { t } = useLanguage()
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const locationFilterRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    function closeFilter(event: PointerEvent) {
      const filter = locationFilterRef.current
      if (filter && event.target instanceof Node && !filter.contains(event.target)) filter.open = false
    }
    document.addEventListener('pointerdown', closeFilter)
    return () => document.removeEventListener('pointerdown', closeFilter)
  }, [])

  const visibleOpportunities = opportunities.filter(opportunity =>
    selectedLocations.length === 0 || selectedLocations.includes(opportunity.location)
  )
  const filterLabel = selectedLocations.length
    ? locationOptions.filter(option => selectedLocations.includes(option.value)).map(option => t(option.label)).join(', ')
    : t('Tipo de ubicación del empleo')

  function toggleLocation(value: string) {
    setSelectedLocations(current => current.includes(value)
      ? current.filter(location => location !== value)
      : [...current, value])
  }

  return (
    <div className="home-page work-with-us-page">
      <SiteHeader />
      <section
        className="opportunities-hero"
        style={{ backgroundImage: `url(${opportunitiesHero})` }}
        aria-labelledby="opportunities-title"
      >
        <h1 id="opportunities-title">{t('Sembrando Perú - Bolsa Laboral')}</h1>
      </section>

      <main className="opportunities-main">
        <section className="opportunities-intro" aria-labelledby="opportunities-intro-title">
          <div className="opportunities-intro__copy">
            <h2 id="opportunities-intro-title">{t('Bolsa laboral')}</h2>
            <p>{t('Estamos buscando personas apasionadas, profesionales e inspiradoras para unirse a nuestro equipo.')}</p>
          </div>
          <img
            className="opportunities-intro__image"
            src={teamPhoto}
            alt={t('Integrante de Sembrando Perú preparando plantas para una jornada de reforestación')}
          />
        </section>

        <section className="opportunities-section" aria-label={t('Convocatorias')}>
          <div className="opportunities-section__header">
            <h2 className="opportunities-section__title">{t('¿Quieres formar parte de nuestro equipo?')}</h2>
            <details
              className="opportunities-location"
              ref={locationFilterRef}
              onKeyDown={event => {
                if (event.key === 'Escape') {
                  event.currentTarget.open = false
                  event.currentTarget.querySelector('summary')?.focus()
                }
              }}
            >
              <summary aria-label={t('Tipo de ubicación del empleo')}>
                <span>{filterLabel}</span>
                <svg viewBox="0 0 12 8" width="12" height="8" aria-hidden="true">
                  <path d="M1 2l5 4 5-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </summary>
              <div className="opportunities-location__options" role="group" aria-label={t('Tipo de ubicación del empleo')}>
                {locationOptions.map(option => (
                  <label key={option.value}>
                    <input
                      type="checkbox"
                      checked={selectedLocations.includes(option.value)}
                      onChange={() => toggleLocation(option.value)}
                    />
                    <span>{t(option.label)}</span>
                  </label>
                ))}
              </div>
            </details>
          </div>

          {visibleOpportunities.length > 0 ? (
            <div className="opportunities-list">
              {visibleOpportunities.map((opportunity) => (
                <article className="opportunity-item" key={opportunity.title}>
                  <div>
                    <p className="opportunity-item__area">{t(opportunity.area)}</p>
                    <h3>{t(opportunity.title)}</h3>
                    <p>{t(opportunity.description)}</p>
                  </div>
                  <a className="opportunity-item__link" href={opportunity.href}>
                    {t('Ver convocatoria')}
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="opportunities-empty" role="status">
              {t('Actualmente, no hay ninguna oferta de trabajo disponible.')}
            </p>
          )}
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
