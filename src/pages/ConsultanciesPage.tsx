import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import heroImage from '../assets/figma/imgBuildingBlocks169.jpg'
import { consultancies, consultancySource, consultancyExampleNotice } from './consultancies'
import './ConsultanciesPage.css'

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const emptyFilters = { keyword: '', month: '', year: '' }

function normalize(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().trim()
}

export default function ConsultanciesPage() {
  const { t, language } = useLanguage()
  const [filters, setFilters] = useState(emptyFilters)
  const [appliedFilters, setAppliedFilters] = useState(emptyFilters)
  const [visibleCount, setVisibleCount] = useState(3)
  const [currentYear] = useState(() => new Date().getFullYear())
  const years = [...new Set([currentYear, currentYear - 1, currentYear - 2, ...consultancies.map(item => Number(item.publishedAt.slice(0, 4)))])].sort((a, b) => b - a)
  const results = consultancies.filter(item => {
    const [year, month] = item.publishedAt.split('-')
    return normalize(`${t(item.title)} ${t(item.description)}`).includes(normalize(appliedFilters.keyword))
      && (!appliedFilters.month || Number(month) === Number(appliedFilters.month))
      && (!appliedFilters.year || year === appliedFilters.year)
  }).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  const hasFilters = Object.values(appliedFilters).some(Boolean)

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAppliedFilters({ ...filters, keyword: filters.keyword.trim() })
    setVisibleCount(3)
  }

  function clearFilters() {
    setFilters(emptyFilters)
    setAppliedFilters(emptyFilters)
    setVisibleCount(3)
  }

  return (
    <div className="home-page consultancies-page">
      <SiteHeader />
      <section className="consultancies-hero" style={{ backgroundImage: `url(${heroImage})` }} aria-labelledby="consultancies-title">
        <SocialLinks placement="banner" />
        <h1 id="consultancies-title"><span>{t('CONVOCATORIA')}</span><span>{t('CONSULTORÍAS')}</span></h1>
      </section>
      <main className="consultancies-main">
        <form className="consultancies-filters" onSubmit={search} role="search" aria-label={t('Buscar consultorías')}>
          <label>
            <span className="visually-hidden">{t('Busca por palabra clave')}</span>
            <input type="search" placeholder={t('Busca por palabra clave')} value={filters.keyword} onChange={event => setFilters({ ...filters, keyword: event.target.value })} />
          </label>
          <label>
            <span className="visually-hidden">{t('Filtra por meses')}</span>
            <select value={filters.month} onChange={event => setFilters({ ...filters, month: event.target.value })}>
              <option value="">- {t('Filtra por meses')} -</option>
              {months.map((month, index) => <option key={month} value={index + 1}>{t(month)}</option>)}
            </select>
          </label>
          <label>
            <span className="visually-hidden">{t('Filtra por años')}</span>
            <select value={filters.year} onChange={event => setFilters({ ...filters, year: event.target.value })}>
              <option value="">- {t('Filtra por años')} -</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </label>
          <button type="submit">{t('Buscar')}</button>
        </form>
        <a className="consultancies-subscribe" href="/#unete"><Mail size={16} aria-hidden="true" />{t('Recibe noticias y convocatorias')}</a>
        {hasFilters && <button className="consultancies-clear" type="button" onClick={clearFilters}>{t('Limpiar filtros')}</button>}
        <section className="consultancies-results" aria-label={t('Convocatoria consultorías')}>
          <p className="visually-hidden" role="status">{results.length} {t('consultorías encontradas')}</p>
          {results.length ? results.slice(0, visibleCount).map(item => (
            <article className="consultancy-card" key={item.slug}>
              <a href={`/convocatoria-consultorias/${item.slug}`} tabIndex={-1} aria-hidden="true"><img src={item.image} alt="" loading="lazy" /></a>
              <div>
                <h2><a href={`/convocatoria-consultorias/${item.slug}`}>{t(item.title)}</a></h2>
                <time dateTime={item.publishedAt}>{new Intl.DateTimeFormat(language === 'es' ? 'es-PE' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${item.publishedAt}T12:00:00`))} · {t('Fecha referencial')}</time>
              </div>
            </article>
          )) : (
            <div className="consultancies-empty">
              <h2>{t(hasFilters ? 'No se encontraron consultorías con esos filtros' : 'Aún no hay consultorías publicadas en esta sección')}</h2>
              <p>{t('Consulta a nuestro equipo para conocer las oportunidades de consultoría y sus requisitos.')}</p>
              <div className="consultancies-empty__actions">
                {hasFilters && <button type="button" onClick={clearFilters}>{t('Limpiar filtros')}</button>}
                <a href="/contacto">{t('Contáctanos')}</a>
              </div>
            </div>
          )}
        </section>
        {visibleCount < results.length && <button className="consultancies-more" type="button" onClick={() => setVisibleCount(count => count + 3)}>{t('VER MÁS')}</button>}
      </main>
      <BlogFooter />
    </div>
  )
}

export function ConsultancyDetailPage({ slug }: { slug: string }) {
  const { t } = useLanguage()
  const item = consultancies.find(consultancy => consultancy.slug === slug)

  return (
    <div className="home-page consultancies-page">
      <SiteHeader />
      <main className="consultancy-detail">
        <a className="consultancy-detail__back" href="/convocatoria-consultorias">← {t('Convocatoria consultorías')}</a>
        {item ? (
          <>
            <p className="consultancies-notice">{t(consultancyExampleNotice)}</p>
            <h1>{t(item.title)}</h1>
            <img className="consultancy-detail__image" src={item.image} alt={t(item.alt)} />
            <section><h2>{t('Objetivo de la propuesta')}</h2><p>{t(item.description)}</p></section>
            <section><h2>{t('Perfil sugerido')}</h2><p>{t(item.profile)}</p></section>
            <section><h2>{t('Entregables propuestos')}</h2><ul>{item.deliverables.map(deliverable => <li key={deliverable}>{t(deliverable)}</li>)}</ul></section>
            <p className="consultancy-detail__source">{t('Propuesta inspirada en las áreas de trabajo de la organización.')}{' '}<a href={consultancySource} target="_blank" rel="noreferrer">{t('Conoce el trabajo de Sembrando Perú')}</a></p>
            <a className="consultancy-detail__contact" href="/contacto">{t('Consultar oportunidades reales')}</a>
          </>
        ) : <><h1>{t('Consultoría no encontrada')}</h1><p>{t('Consulta el listado de propuestas disponibles.')}</p></>}
      </main>
      <BlogFooter />
    </div>
  )
}
