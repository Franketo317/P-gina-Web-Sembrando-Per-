import SiteHeader from '../components/SiteHeader'
import PublicationCover from '../components/PublicationCover'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import { getPublications } from './publications'
import './PublicationDetailPage.css'

export default function PublicationDetailPage({ slug }: { slug: string }) {
  const { language, t } = useLanguage()
  const publications = getPublications(language)
  const publication = publications.find((item) => item.slug === slug)
  if (!publication) return null
  const locale = language === 'en' ? 'en-GB' : 'es-PE'

  return (
    <div className="blog-page publication-detail-page">
      <SiteHeader />
      <main className="publication-detail">
        <a className="blog-article__back" href="/publicaciones#articulos">{t('← Volver a Publicaciones')}</a>
        <article>
          <header className="publication-detail__header">
            <div className="blog-meta"><span>{publication.format}</span><i /><time dateTime={publication.publishedAt}>{new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${publication.publishedAt}T12:00:00Z`))}</time></div>
            <h1>{publication.title}</h1>
            <p className="publication-library-note">{t('Contenido de ejemplo para la biblioteca de Sembrando Perú.')}</p>
          </header>
          <div className="publication-detail__layout">
            <aside className="publication-detail__aside" aria-label={t('Portada de la publicación')}>
              <PublicationCover title={publication.title} category={t(publication.category)} year={publication.publishedAt.slice(0, 4)} image={publication.image} variant={publication.variant} />
              <nav className="publication-detail__contents" aria-label={t('Contenido de la publicación')}>
                <h2>{t('En esta publicación')}</h2>
                {publication.sections.map((section, index) => <a href={`#seccion-${index + 1}`} key={section.heading}>{section.heading}</a>)}
              </nav>
            </aside>
            <div className="blog-article__body publication-detail__body">
              <p className="blog-article__introduction">{publication.introduction}</p>
              {publication.sections.map((section, index) => (
                <section id={`seccion-${index + 1}`} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}
            </div>
          </div>
        </article>
        <section className="publication-detail__related" aria-labelledby="related-publications">
          <h2 id="related-publications">{t('Otras publicaciones')}</h2>
          <div>
            {publications.filter((item) => item.slug !== slug).slice(0, 3).map((item) => <a href={`/publicaciones/articulo/${item.slug}`} key={item.slug}><span>{item.format}</span><strong>{item.title}</strong><span aria-hidden="true">→</span></a>)}
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
