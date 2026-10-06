import arrowRight from '../assets/figma/imgArrowRight.svg'
import blogReforestation from '../assets/figma/blog-article-reforestation.jpg'
import blogCommunity from '../assets/figma/blog-article-community.jpg'
import blogHealth from '../assets/figma/blog-article-health.jpg'
import blogFeatureForest from '../assets/figma/blog-featured-forest.jpg'
import blogFeatureCommunity from '../assets/figma/blog-featured-community.jpg'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter, BlogHeader } from './BlogPage'
import './BlogPage.css'

const articleDetails = {
  'sembrando-futuro-juntos-por-nuestros-bosques': {
    category: 'MEDIO AMBIENTE',
    date: 'Marzo 12, 2026',
    title: 'Sembrando futuro: juntos por nuestros bosque',
    image: blogFeatureForest,
    alt: 'Niñas plantando árboles en la Amazonía',
    introduction: 'Recuperar un bosque es un trabajo colectivo que comienza con una semilla y crece con el compromiso de quienes habitan y cuidan el territorio. En Sembrando Perú impulsamos acciones de reforestación junto a las comunidades para proteger la Amazonía y su biodiversidad.',
    sections: [
      { heading: 'Restaurar con especies nativas', paragraphs: ['Cada jornada parte de conocer el lugar: sus suelos, sus fuentes de agua y las especies que forman parte del ecosistema. La elección de plantas nativas ayuda a que la restauración responda a las condiciones locales y contribuya a recuperar hábitats.', 'La producción de plantines y el trabajo en viveros permiten acompañar el proceso desde sus primeras etapas. Familias y voluntarios preparan el terreno y plantan con cuidado, fortaleciendo también el conocimiento compartido sobre el bosque.'] },
      { heading: 'Cuidar el bosque después de plantar', paragraphs: ['La siembra es el comienzo, no el final. El mantenimiento, el monitoreo y la protección de los plantones son necesarios para que puedan desarrollarse y formar parte de un bosque saludable.', 'Con la participación de las comunidades, cada acción suma a un objetivo común: conservar la biodiversidad, cuidar los recursos naturales y dejar un entorno más sostenible para las próximas generaciones.'] },
    ],
  },
  'transformando-vidas-comunidades': {
    category: 'COMUNIDAD',
    date: 'Enero 15, 2026',
    title: 'Transformando vidas en nuestras comunidades',
    image: blogFeatureCommunity,
    alt: 'Mujeres de una comunidad amazónica trabajando juntas',
    introduction: 'El desarrollo sostenible se construye escuchando a las comunidades y trabajando junto a ellas. Las iniciativas de Sembrando Perú buscan fortalecer capacidades locales y acompañar proyectos que respondan a las prioridades de cada territorio.',
    sections: [
      { heading: 'Proyectos que nacen del trabajo conjunto', paragraphs: ['La colaboración con familias, líderes y organizaciones locales permite reconocer los retos y oportunidades de cada comunidad. A partir de ese diálogo, se impulsan acciones relacionadas con el cuidado ambiental, la educación y el bienestar.', 'Los espacios de aprendizaje e intercambio ayudan a que las personas compartan sus experiencias, desarrollen nuevas habilidades y participen activamente en las decisiones que afectan su entorno.'] },
      { heading: 'Oportunidades para crecer en comunidad', paragraphs: ['Fortalecer capacidades locales significa acompañar procesos que puedan continuar en el tiempo. La educación ambiental, la organización comunitaria y el cuidado de la salud contribuyen a crear mejores oportunidades para niñas, niños y familias.', 'Cada avance es resultado de la colaboración. Al unir conocimientos y esfuerzos, las comunidades pueden proteger sus ecosistemas y construir un futuro con más bienestar y posibilidades.'] },
    ],
  },
  'jornada-reforestacion-madre-de-dios': {
    category: 'VOLUNTARIADO',
    date: '12 Oct, 2024',
    title: 'Jornada de reforestación en Madre de Dios',
    image: blogReforestation,
    alt: 'Jornada comunitaria de reforestación en la Amazonía',
    introduction: 'Un fin de semana lleno de esfuerzo y esperanza reunió a voluntarios y familias de Madre de Dios para recuperar espacios degradados y fortalecer el vínculo de la comunidad con su bosque.',
    sections: [
      { heading: 'Sembrar en comunidad', paragraphs: ['La jornada comenzó con el reconocimiento del terreno y la selección de especies nativas adecuadas para las condiciones locales. Vecinas, vecinos y voluntarios trabajaron en equipo para preparar cada espacio y plantar nuevos árboles.', 'Cada plantón representa un compromiso compartido: cuidar el suelo, proteger las fuentes de agua y recuperar poco a poco el hábitat de numerosas especies.'] },
      { heading: 'Un compromiso que continúa', paragraphs: ['La reforestación no termina al colocar una planta en la tierra. El seguimiento, el riego y el mantenimiento de los plantones son fundamentales para que puedan crecer y adaptarse.', 'Por eso, el equipo coordina con las familias y organizaciones locales las próximas visitas de monitoreo. Así, el esfuerzo de la jornada se convierte en un proceso duradero de restauración.'] },
    ],
  },
  'guardianas-del-bosque': {
    category: 'COMUNIDAD',
    date: '05 Oct, 2024',
    title: 'Guardianas del bosque: historias locales',
    image: blogCommunity,
    alt: 'Equipo comunitario trabajando en un vivero',
    introduction: 'En distintas comunidades amazónicas, mujeres lideran iniciativas que cuidan el bosque y comparten conocimientos esenciales para las nuevas generaciones.',
    sections: [
      { heading: 'Conocimiento que nace del territorio', paragraphs: ['Su trabajo reúne experiencia local, observación de los ciclos naturales y una profunda relación con el territorio. Desde los viveros hasta las actividades educativas, cada acción transmite prácticas de cuidado y colaboración.', 'Las guardianas impulsan espacios donde niñas, niños y jóvenes pueden aprender sobre especies nativas, biodiversidad y el valor de conservar los ecosistemas que sostienen la vida comunitaria.'] },
      { heading: 'Liderazgo para un futuro sostenible', paragraphs: ['Fortalecer estas iniciativas significa reconocer el liderazgo de las mujeres y acompañar sus propuestas con recursos, formación y redes de colaboración.', 'Cuando el conocimiento local ocupa un lugar central, las soluciones se adaptan mejor a las necesidades de cada comunidad y tienen más posibilidades de mantenerse en el tiempo.'] },
    ],
  },
  'prevencion-anemia-nuevos-enfoques': {
    category: 'SALUD',
    date: '28 Sep, 2024',
    title: 'Prevención de anemia: nuevos enfoques',
    image: blogHealth,
    alt: 'Jornada de atención de salud en una comunidad',
    introduction: 'La prevención de la anemia infantil requiere acompañamiento cercano, información clara y trabajo coordinado con las familias y los servicios de salud locales.',
    sections: [
      { heading: 'Acompañamiento cercano a las familias', paragraphs: ['Las jornadas comunitarias acercan orientación y seguimiento a las familias, con especial atención al bienestar de niñas y niños. Los espacios de conversación ayudan a resolver dudas y a reconocer señales que requieren consulta profesional.', 'El trabajo conjunto con agentes locales facilita que la información responda a la realidad de cada comunidad y que las familias sepan dónde encontrar apoyo.'] },
      { heading: 'Hábitos saludables y continuidad', paragraphs: ['La alimentación variada, los controles periódicos y la orientación del personal de salud son parte importante de la prevención. Cada familia necesita información práctica y acompañamiento constante para incorporar estos hábitos.', 'Sembrando Perú continúa articulando acciones educativas y comunitarias que contribuyen a una infancia más saludable y a mejores oportunidades para el futuro.'] },
    ],
  },
}

const relatedArticles = [
  { slug: 'sembrando-futuro-juntos-por-nuestros-bosques', category: 'MEDIO AMBIENTE', date: 'Marzo 12, 2026', title: 'Sembrando futuro: juntos por nuestros bosque', image: blogFeatureForest, alt: 'Niñas plantando árboles en la Amazonía' },
  { slug: 'transformando-vidas-comunidades', category: 'COMUNIDAD', date: 'Enero 15, 2026', title: 'Transformando vidas en nuestras comunidades', image: blogFeatureCommunity, alt: 'Mujeres de una comunidad amazónica' },
  { slug: 'jornada-reforestacion-madre-de-dios', category: 'VOLUNTARIADO', date: '12 Oct, 2024', title: 'Jornada de reforestación en Madre de Dios', image: blogReforestation, alt: 'Voluntarios reforestando en Madre de Dios' },
  { slug: 'guardianas-del-bosque', category: 'COMUNIDAD', date: '05 Oct, 2024', title: 'Guardianas del bosque: historias locales', image: blogCommunity, alt: 'Equipo comunitario cuidando el bosque' },
  { slug: 'prevencion-anemia-nuevos-enfoques', category: 'SALUD', date: '28 Sep, 2024', title: 'Prevención de anemia: nuevos enfoques', image: blogHealth, alt: 'Jornada de salud comunitaria' },
]

type Props = { slug: string }

export default function BlogArticlePage({ slug }: Props) {
  const { t } = useLanguage()
  const article = articleDetails[slug as keyof typeof articleDetails]
  const related = relatedArticles.filter((item) => item.slug !== slug)

  return (
    <div className="blog-page blog-article-page">
      <BlogHeader showMasthead={false} />
      {article ? (
        <main className="blog-article">
          <a className="blog-article__back" href="/blog#articulos">{t('← Volver a Últimos artículos')}</a>
          <article>
            <header className="blog-article__header">
              <div className="blog-meta"><span>{t(article.category)}</span><i /><time>{article.date}</time></div>
              <h1>{t(article.title)}</h1>
            </header>
            <img className="blog-article__hero" src={article.image} alt={article.alt} />
            <div className="blog-article__body">
              <p className="blog-article__introduction">{t(article.introduction)}</p>
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{t(section.heading)}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{t(paragraph)}</p>)}
                </section>
              ))}
            </div>
          </article>
          <section className="blog-related" aria-labelledby="blog-related-title">
            <div className="blog-section-heading"><h2 id="blog-related-title">{t('Artículos relacionados')}</h2></div>
            <div className="blog-related__grid">
              {related.map((item) => (
                <article className="blog-related-card" key={item.slug}>
                  <a className="blog-related-card__image-link" href={`/blog/articulo/${item.slug}`} aria-label={`${t('Leer')} ${t(item.title)}`}>
                    <img src={item.image} alt={item.alt} />
                  </a>
                  <div className="blog-related-card__content">
                    <div className="blog-meta"><span>{t(item.category)}</span><i /><time>{item.date}</time></div>
                    <h3>{t(item.title)}</h3>
                    <a href={`/blog/articulo/${item.slug}`}>{t('Leer artículo')} <img src={arrowRight} alt="" /></a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      ) : (
        <main className="blog-article blog-article--not-found">
          <h1>{t('Artículo no encontrado')}</h1>
          <a className="blog-article__back" href="/blog#articulos">{t('Volver a Últimos artículos')}</a>
        </main>
      )}
      <BlogFooter />
    </div>
  )
}
