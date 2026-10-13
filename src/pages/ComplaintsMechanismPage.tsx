import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './InstitutionalPages.css'

export default function ComplaintsMechanismPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page institutional-page">
      <SiteHeader />
      <section className="institutional-hero institutional-hero--complaints" aria-labelledby="complaints-title">
        <h1 id="complaints-title">{t('Mecanismo de quejas')}</h1>
        <SocialLinks placement="banner" />
      </section>
      <main className="institutional-content">
        <section className="complaints-content" aria-labelledby="complaints-heading">
          <div className="complaints-content__intro">
            <p className="complaints-content__eyebrow">{t('Escucha y diálogo')}</p>
            <h2 id="complaints-heading">{t('Queremos conocer tu experiencia')}</h2>
            <p>
              {t('En Sembrando Perú valoramos la confianza de las comunidades, participantes y organizaciones con quienes trabajamos. Si algo relacionado con nuestras actividades te preocupa, puedes hacérnoslo saber para que podamos entenderlo y orientarlo.')}
            </p>
          </div>

          <div className="complaints-content__grid">
            <section className="complaints-content__card" aria-labelledby="complaints-who-title">
              <h3 id="complaints-who-title">{t('¿Quién puede escribirnos?')}</h3>
              <p>
                {t('Cualquier persona o grupo que tenga una inquietud vinculada con un proyecto, actividad o interacción con Sembrando Perú, incluyendo integrantes de comunidades, voluntariado, aliados y proveedores.')}
              </p>
            </section>
            <section className="complaints-content__card complaints-content__card--topics" aria-labelledby="complaints-topics-title">
              <h3 id="complaints-topics-title">{t('¿Qué situaciones puedes compartir?')}</h3>
              <ul>
                <li>{t('Una preocupación sobre cómo se desarrolla una actividad o proyecto.')}</li>
                <li>{t('Un trato o una conducta que consideres inadecuados.')}</li>
                <li>{t('Una inquietud sobre el uso de recursos o el cuidado del entorno.')}</li>
              </ul>
            </section>
          </div>

          <section className="complaints-content__steps" aria-labelledby="complaints-send-title">
            <div>
              <p className="complaints-content__eyebrow">{t('Cómo comunicarla')}</p>
              <h3 id="complaints-send-title">{t('Cuéntanos lo que ocurrió')}</h3>
              <p>
                {t('Por ahora no contamos con un formulario en línea. Puedes escribirnos o llamarnos usando los canales de atención de Sembrando Perú.')}
              </p>
              <div className="complaints-content__channels">
                <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
                <a href="tel:+51921462828">+51 921 462 828</a>
              </div>
            </div>
            <aside className="complaints-content__guide" aria-labelledby="complaints-guide-title">
              <h4 id="complaints-guide-title">{t('Información que puede ayudar')}</h4>
              <ul>
                <li>{t('Dónde y cuándo sucedió.')}</li>
                <li>{t('Qué pasó y quiénes estuvieron involucrados, si lo sabes.')}</li>
                <li>{t('Cómo podemos contactarte y qué resultado esperas.')}</li>
                <li>{t('Cualquier detalle o documento que ayude a comprender la situación.')}</li>
              </ul>
              <p>{t('Comparte únicamente la información con la que te sientas cómodo/a. Si necesitas que tengamos especial cuidado con tus datos, indícalo en tu mensaje.')}</p>
            </aside>
          </section>

          <p className="complaints-content__notice">
            {t('Revisaremos la información para comprender mejor la situación. Si necesitamos aclarar algún punto, podremos contactarte con los datos que nos compartas.')}
          </p>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
