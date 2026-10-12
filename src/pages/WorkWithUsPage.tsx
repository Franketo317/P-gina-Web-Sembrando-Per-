import { useState, type FormEvent } from 'react'
import opportunitiesHero from '../assets/figma/imgBuildingBlocks169.jpg'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './WorkWithUsPage.css'

type Opportunity = {
  title: string
  area: string
  description: string
  href: string
}

const opportunities: Opportunity[] = []

const opportunityAreas = ['Medio ambiente', 'Educación', 'Salud']

export default function WorkWithUsPage() {
  const { t } = useLanguage()
  const [searchText, setSearchText] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState('')

  const visibleOpportunities = opportunities.filter((opportunity) => {
    const matchesSearch = `${opportunity.title} ${opportunity.description}`
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
    const matchesArea = !selectedArea || opportunity.area === selectedArea
    return matchesSearch && matchesArea
  })

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSearchTerm(searchText.trim())
  }

  return (
    <div className="home-page work-with-us-page">
      <SiteHeader />
      <section
        className="opportunities-hero"
        style={{ backgroundImage: `url(${opportunitiesHero})` }}
        aria-labelledby="opportunities-title"
      >
        <h1 id="opportunities-title">{t('CONVOCATORIA')}</h1>
      </section>

      <main className="opportunities-main">
        <header className="opportunities-intro">
          
        </header>

        <section className="opportunities-section" aria-label={t('Convocatorias')}>
          <form className="opportunities-filters" onSubmit={handleSearch}>
            <label className="opportunities-search">
              <span className="visually-hidden">{t('Buscar convocatorias')}</span>
              <input
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.currentTarget.value)}
                placeholder={t('Buscar convocatorias')}
              />
            </label>
            <label className="opportunities-area">
              <span className="visually-hidden">{t('Área de trabajo')}</span>
              <select
                value={selectedArea}
                onChange={(event) => setSelectedArea(event.currentTarget.value)}
              >
                <option value="">{t('Todas las áreas')}</option>
                {opportunityAreas.map((area) => (
                  <option key={area} value={area}>{t(area)}</option>
                ))}
              </select>
            </label>
            <button className="opportunities-search-button" type="submit">
              {t('Buscar')}
            </button>
          </form>

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
              {t('No hay convocatorias abiertas')}
            </p>
          )}
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
