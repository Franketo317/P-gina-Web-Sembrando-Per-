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
        <h1 id="complaints-title">
          <span>{t('Mecanismo de')}</span>
          <span>{t('quejas')}</span>
        </h1>
        <SocialLinks placement="banner" />
      </section>
      <main className="institutional-content institutional-content--complaints">
        <section className="complaints-content">
          <div className="complaints-content__intro">
            <p>
              {t('En Sembrando Perú buscamos mantener altos estándares de profesionalismo, integridad y ética en nuestros proyectos y actividades. Esperamos que las organizaciones aliadas, proveedores y personas que colaboran con nosotros compartan estos principios:')}
            </p>
          </div>

          <section className="complaints-content__section" aria-label={t('Nuestros compromisos')}>
            <div className="complaints-content__section-copy">
              <ol className="complaints-content__principles">
                <li>{t('Respetar los derechos humanos, promover la inclusión social y adoptar medidas de protección para las comunidades, con especial atención a las personas en situación de vulnerabilidad y a los pueblos indígenas.')}</li>
                <li>{t('Cumplir las leyes y normas aplicables en el Perú y promover una conducta íntegra en nuestras actividades y alianzas.')}</li>
                <li>{t('Administrar con responsabilidad y transparencia los fondos y bienes confiados a Sembrando Perú; prevenir, detectar y atender posibles usos indebidos, y comunicar estas expectativas a colaboradores, proveedores y aliados.')}</li>
                <li>{t('Promover espacios seguros y prevenir la discriminación, el acoso, el abuso de poder, la desigualdad de género y cualquier forma de explotación o abuso sexual.')}</li>
                <li>{t('Respetar los derechos laborales, incluida la salud y seguridad, la remuneración justa, los beneficios, las jornadas razonables, la libertad de asociación y la protección frente al trabajo forzoso e infantil, de acuerdo con la legislación peruana y los principios de la OIT.')}</li>
              </ol>
            </div>
          </section>

          <section className="complaints-content__section" aria-labelledby="complaints-social-title">
            <h3 id="complaints-social-title">{t('Nuestros compromisos sociales')}</h3>
            <div className="complaints-content__section-copy">
              <p>{t('Estos compromisos guían nuestro trabajo con las comunidades y las organizaciones aliadas:')}</p>
              <ul>
                <li>{t('Respeto de los derechos humanos y la dignidad de todas las personas.')}</li>
                <li>{t('Inclusión y respeto a las comunidades locales y los pueblos indígenas.')}</li>
                <li>{t('Igualdad de género y prevención de la discriminación y la violencia.')}</li>
              </ul>
              <a className="complaints-content__policies-link" href="/como-trabajamos">
                {t('Conoce nuestras políticas sociales')}
              </a>
            </div>
          </section>

          <section className="complaints-content__section" aria-labelledby="complaints-who-title">
            <h3 id="complaints-who-title">{t('¿Quién puede presentar una queja?')}</h3>
            <div className="complaints-content__section-copy">
              <p>{t('Puede presentar una queja cualquier persona, comunidad, grupo u organización local o indígena que considere que pudo o puede verse afectada por un proyecto, actividad o interacción con Sembrando Perú.')}</p>
              <p>{t('Buscaremos revisar cada comunicación de manera imparcial, confidencial y oportuna, y dar un trato justo a las personas involucradas.')}</p>
            </div>
          </section>

          <section className="complaints-content__section" aria-labelledby="complaints-send-title">
            <h3 id="complaints-send-title">{t('Comunicación de una queja')}</h3>
            <div className="complaints-content__section-copy">
              <p>{t('Puedes comunicar una queja o preocupación a Sembrando Perú mediante estos canales:')}</p>
              <div className="complaints-content__channels">
                <a href="mailto:contacto@sembrandoperu.org">contacto@sembrandoperu.org</a>
                <a href="tel:+51921462828">+51 921 462 828</a>
              </div>
              <p>{t('Actualmente no contamos con un formulario de quejas en línea. Si necesitas especial cuidado con tus datos, indícalo al comunicarte.')}</p>
            </div>
          </section>

          <section className="complaints-content__section" aria-labelledby="complaints-guide-title">
            <h3 id="complaints-guide-title">{t('Contenido de la queja')}</h3>
            <div className="complaints-content__section-copy">
              <p>{t('Para ayudarnos a comprender y revisar la situación, puedes compartir:')}</p>
              <ol className="complaints-content__details" type="a">
                <li>{t('Tu nombre y un medio de contacto.')}</li>
                <li>{t('Si presentas la queja en representación de otra persona o grupo, cómo estás vinculado/a o autorizado/a para hacerlo.')}</li>
                <li>{t('Qué ocurrió y cuál es la preocupación; menciona el proyecto o actividad, si corresponde.')}</li>
                <li>{t('El lugar y la fecha aproximada de los hechos.')}</li>
                <li>{t('Cualquier información o documento que ayude a comprender lo sucedido, y si ya lo conversaste con alguien de Sembrando Perú.')}</li>
                <li>{t('Qué solución o respuesta esperas, si tienes alguna propuesta.')}</li>
                <li>{t('Si solicitas que tratemos tu información con especial confidencialidad.')}</li>
              </ol>
              <p>{t('Comparte únicamente la información con la que te sientas cómodo/a.')}</p>
            </div>
          </section>

          <section className="complaints-content__section" aria-labelledby="complaints-non-retaliation-title">
            <h3 id="complaints-non-retaliation-title">{t('No represalias')}</h3>
            <div className="complaints-content__section-copy">
              <p>{t('Sembrando Perú no acepta represalias contra quienes presenten de buena fe una queja o preocupación. Si consideras que podrías estar en riesgo de sufrir una represalia, comunícanoslo por los canales indicados para que podamos tratar tu situación con cuidado.')}</p>
            </div>
          </section>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
