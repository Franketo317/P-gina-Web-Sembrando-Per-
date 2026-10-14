import { useState, type FormEvent } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import PublicationCover from '../components/PublicationCover'
import { getPublications } from './publications'
import { useLanguage } from '../components/LanguageContext'
import { articles, featuredArticles, BlogFooter } from './BlogPage'
import forestImage from '../assets/figma/about-values-background.png'
import publicationsImage from '../assets/figma/blog-featured-forest.jpg'
import './NewsPage.css'

const news = [...featuredArticles, ...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
const pageSize = 3
const emptyFilters = { keyword: '', month: '', year: '' }
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export function ArticleListingPage({ section }: { section: 'noticias' | 'publicaciones' }) {
  const isPublications = section === 'publicaciones'
  const { language, t } = useLanguage()
  const items = isPublications ? getPublications(language) : news
  const years = [...new Set(items.map((article) => article.publishedAt.slice(0, 4)))].sort().reverse()
  const [filters, setFilters] = useState(emptyFilters)
  const [appliedFilters, setAppliedFilters] = useState(emptyFilters)
  const [visibleCount, setVisibleCount] = useState(pageSize)
  const locale = language === 'en' ? 'en-GB' : 'es-PE'
  const resultsId = `${section}-results`
  const filteredNews = items.filter((article) => {
    const terms = normalize(appliedFilters.keyword).trim().split(/\s+/).filter(Boolean)
    const text = normalize(`${t(article.title)} ${t(article.description)} ${t(article.category)}`)
    return terms.every((term) => text.includes(term))
      && (!appliedFilters.month || article.publishedAt.slice(5, 7) === appliedFilters.month)
      && (!appliedFilters.year || article.publishedAt.startsWith(appliedFilters.year))
  })
  const hasFilters = Object.values(appliedFilters).some(Boolean)

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAppliedFilters({ ...filters })
    setVisibleCount(pageSize)
  }

  function clearFilters() {
    setFilters(emptyFilters)
    setAppliedFilters(emptyFilters)
    setVisibleCount(pageSize)
  }

  return (
    <div className={`blog-page news-page${isPublications ? ' publications-page' : ''}`}>
      <SiteHeader />
      <main>
        <section className="news-hero" style={{ backgroundImage: `url(${isPublications ? publicationsImage : forestImage})` }} aria-labelledby="news-title">
          <SocialLinks />
          <div className="news-hero__inner"><h1 id="news-title">{t(isPublications ? 'PUBLICACIONES' : 'NOTICIAS')}</h1></div>
        </section>

        <div className="news-banner"><p>{t(isPublications ? 'Encuentra las últimas publicaciones de Sembrando Perú.' : 'Las novedades de Sembrando Perú en un solo lugar.')}</p></div>

        {!isPublications && <section className="news-intro" aria-label={t('Acerca de nuestras noticias')}>
          <p>{t('Conoce las últimas noticias de nuestras acciones de reforestación, educación y salud junto a las comunidades del Perú.')}</p>
          <p>{t('Si deseas recibir nuestras novedades, suscríbete a')} <a href="/#unete">{t('nuestro boletín')}</a>.</p>
          <p>{t('¡Gracias por ser parte del cambio!')}</p>
        </section>}

        <section className="news-content" id={isPublications ? 'articulos' : undefined} aria-label={t(isPublications ? 'Explorar publicaciones' : 'Explorar noticias')}>
          {isPublications && <p className="publication-library-note">{t('Biblioteca de contenidos de ejemplo sobre nuestras líneas de trabajo.')}</p>}
          <form className="news-search" onSubmit={handleSearch} role="search" aria-label={t(isPublications ? 'Buscar publicaciones' : 'Buscar noticias')}>
            <label className="news-search__keyword">
              <span className="news-visually-hidden">{t('Busca por palabra clave')}</span>
              <input type="search" placeholder={t('Busca por palabra clave')} value={filters.keyword} onChange={(event) => setFilters({ ...filters, keyword: event.target.value })} />
            </label>
            <label>
              <span className="news-visually-hidden">{t('Filtra por meses')}</span>
              <select value={filters.month} onChange={(event) => setFilters({ ...filters, month: event.target.value })}>
                <option value="">{t('Todos los meses')}</option>
                {Array.from({ length: 12 }, (_, index) => (
                  <option value={String(index + 1).padStart(2, '0')} key={index}>{new Intl.DateTimeFormat(locale, { month: 'long', timeZone: 'UTC' }).format(new Date(Date.UTC(2024, index, 1)))}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="news-visually-hidden">{t('Filtra por años')}</span>
              <select value={filters.year} onChange={(event) => setFilters({ ...filters, year: event.target.value })}>
                <option value="">{t('Todos los años')}</option>
                {years.map((year) => <option value={year} key={year}>{year}</option>)}
              </select>
            </label>
            <button className="news-search__submit" type="submit">{t('BUSCAR')} <Search size={18} aria-hidden="true" /></button>
          </form>

          <div className="news-results-status" role="status" aria-live="polite">
            <span>{filteredNews.length} {t(isPublications ? (filteredNews.length === 1 ? 'publicación encontrada' : 'publicaciones encontradas') : (filteredNews.length === 1 ? 'noticia encontrada' : 'noticias encontradas'))}</span>
            {hasFilters && <button type="button" onClick={clearFilters}>{t('Limpiar filtros')}</button>}
          </div>

          <div className="news-list" id={resultsId}>
            {filteredNews.slice(0, visibleCount).map((article) => (
              <article className="news-item" key={article.slug}>
                <a className="news-item__image" href={`/publicaciones/articulo/${article.slug}`} tabIndex={-1} aria-hidden="true">
                  {isPublications ? (
                    <PublicationCover
                      title={t(article.title)}
                      category={t(article.category)}
                      year={article.publishedAt.slice(0, 4)}
                      image={article.image}
                      variant={'variant' in article ? article.variant : 'forest'}
                    />
                  ) : <img src={article.image} alt="" loading="lazy" />}
                </a>
                <div className="news-item__body">
                  {'format' in article && <span className="publication-format">{article.format}</span>}
                  <h2><a href={`/publicaciones/articulo/${article.slug}`}>{t(article.title)}</a></h2>
                  <p>{t(article.description)}</p>
                  <time dateTime={article.publishedAt}>{new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${article.publishedAt}T12:00:00Z`))}</time>
                </div>
              </article>
            ))}
            {filteredNews.length === 0 && <div className="news-empty"><p>{t(isPublications ? 'No encontramos publicaciones con estos filtros.' : 'No encontramos noticias con estos filtros.')}</p><button type="button" onClick={clearFilters}>{t(isPublications ? 'Ver todas las publicaciones' : 'Ver todas las noticias')}</button></div>}
          </div>

          {visibleCount < filteredNews.length && <div className="news-more"><button type="button" aria-controls={resultsId} onClick={() => setVisibleCount((count) => count + pageSize)}>{t('VER MÁS')} <ArrowRight size={20} aria-hidden="true" /></button></div>}
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}

export default function NewsPage() {
  return <ArticleListingPage section="noticias" />
}
