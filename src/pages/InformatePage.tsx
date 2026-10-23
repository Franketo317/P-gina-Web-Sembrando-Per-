import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { articles, BlogFooter, BlogHero } from './BlogPage'
import forestImage from '../assets/figma/imgBlogImage5.png'
import educationImage from '../assets/figma/imgBlogImage4.png'
import healthImage from '../assets/figma/imgBlogImage3.png'
import './InformatePage.css'

const campaigns = [
  {
    title: 'SEMBRANDO ÁRBOLES',
    description: 'Trabajamos para restaurar los árboles extraídos de manera injusta en la Amazonía, protegiendo bosques y la biodiversidad.',
    image: forestImage,
    alt: 'Trabajo de reforestación en la Amazonía',
    href: '/reforestacion',
  },
  {
    title: 'SEMBRANDO EDUCACIÓN',
    description: 'Promovemos la igualdad social a través de procesos de alfabetización.',
    image: educationImage,
    alt: 'Niños participando en actividades educativas',
    href: '/educacion',
  },
  {
    title: 'SEMBRANDO SALUD',
    description: 'Trabajamos para prevenir la anemia infantil en niños de las regiones de Selva y Sierra, mejorando su salud y bienestar.',
    image: healthImage,
    alt: 'Atención de salud para niños y familias',
    href: '/salud',
  },
]

type InformateItem = {
  title: string
  description: string
  image: string
  alt: string
  href: string
  category?: string
  date?: string
}

export default function InformatePage({ section }: { section: 'noticias' | 'campanas' }) {
  const { t } = useLanguage()
  const isNews = section === 'noticias'
  const items: InformateItem[] = isNews
    ? articles.map((article) => ({ ...article, href: `/publicaciones/articulo/${article.slug}` }))
    : campaigns

  return (
    <div className="blog-page">
      <SiteHeader />
      <main>
        <BlogHero title={isNews ? 'NOTICIAS' : 'CAMPAÑAS'} />
        <section className="informate-content" aria-labelledby="informate-title">
          <div className="blog-section-heading">
            <h2 id="informate-title">{t(isNews ? 'Últimas noticias' : 'Nuestras iniciativas')}</h2>
          </div>
          <div className="informate-grid">
            {items.map((item) => (
              <article className="informate-card" key={item.href}>
                <a href={item.href} tabIndex={-1} aria-hidden="true">
                  <img className="informate-card__image" src={item.image} alt={t(item.alt)} />
                </a>
                <div className="informate-card__body">
                  {item.date && item.category && <div className="blog-meta"><span>{t(item.category)}</span><i /><time>{t(item.date)}</time></div>}
                  <h3><a href={item.href}>{t(item.title)}</a></h3>
                  <p>{t(item.description)}</p>
                  <a className="informate-card__link" href={item.href}>{t(isNews ? 'Leer más' : 'Conoce esta iniciativa')} <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
