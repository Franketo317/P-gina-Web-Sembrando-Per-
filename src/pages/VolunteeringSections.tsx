import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../components/LanguageContext'
import communityPhoto from '../assets/figma/equipo2.jpg'
import forestPhoto from '../assets/figma/blog-article-reforestation.jpg'
import educationPhoto from '../assets/figma/imgBlogImage4.png'
import healthPhoto from '../assets/figma/blog-article-health.jpg'
import organizationPhoto from '../assets/figma/equipo.jpeg'
import plantingPhoto from '../assets/figma/imgBlogImage5.png'
import './VolunteeringPage.css'

export function VolunteeringIntroduction() {
  const { t } = useLanguage()
  return (
    <>
      <section className="join-section volunteer-introduction" aria-labelledby="volunteer-intro-title">
        <h2 id="volunteer-intro-title">{t('VOLUNTARIADO - SEMBRANDO PERÚ')}</h2>
        <p className="volunteer-introduction__subtitle">{t('Tu tiempo puede marcar la diferencia')}</p>
        <p>{t('Ser parte del cambio empieza con una acción. Comparte tu tiempo y tus conocimientos para acompañar a las comunidades y cuidar la naturaleza.')}</p>
      </section>
      <div className="volunteer-panorama">
        <img src={communityPhoto} alt={t('Integrantes de Sembrando Perú trabajando junto a la comunidad')} loading="lazy" />
      </div>
      <section className="volunteer-feature" aria-labelledby="volunteer-feature-title">
        <img src={forestPhoto} alt={t('Reforestación')} loading="lazy" />
        <div>
          <h2 id="volunteer-feature-title">{t('SÚMATE AL VOLUNTARIADO')}</h2>
          <p>{t('Nuestro voluntariado conecta la reforestación, la educación y la salud. Encuentra una causa que te motive y cuéntanos cómo te gustaría colaborar.')}</p>
        </div>
      </section>
    </>
  )
}

export function VolunteeringParticipation() {
  const { t } = useLanguage()
  const audiences = [
    { title: 'Para comunidades', description: 'Organiza actividades locales de cuidado ambiental, aprendizaje y participación junto a tu comunidad.', image: communityPhoto },
    { title: 'Para organizaciones', description: 'Moviliza a tu equipo y comparte conocimientos o recursos para apoyar iniciativas comunitarias.', image: organizationPhoto },
    { title: 'Para personas', description: 'Comparte tu tiempo y tus habilidades en acciones de reforestación, educación o bienestar familiar.', image: forestPhoto },
  ]
  return (
    <>
      <section className="volunteer-audiences" aria-label={t('Formas de participar en el voluntariado')}>
        <div className="volunteer-audiences__grid">
          {audiences.map(audience => (
            <a href="#participar" className="volunteer-audience" key={audience.title}>
              <img src={audience.image} alt="" loading="lazy" />
              <div><h3>{t(audience.title)}</h3><p>{t(audience.description)}</p></div>
            </a>
          ))}
        </div>
      </section>
      <section className="volunteer-suggestions" aria-label={t('Más actividades')}>
        <p>{t('Estas son algunas formas de sumar. Conoce nuestras iniciativas y encuentra la causa que te inspira.')}</p>
        <a href="#volunteer-resources">{t('INSPÍRATE CON MÁS ACTIVIDADES')} <ArrowRight size={24} aria-hidden="true" /></a>
      </section>
      <section className="volunteer-signup-call" aria-labelledby="volunteer-signup-title">
        <h2 id="volunteer-signup-title">{t('INSCRÍBETE AHORA COMO PERSONA U ORGANIZACIÓN')}</h2>
        <p>{t('Déjanos tus datos y cuéntanos cómo te gustaría colaborar.')}</p>
        <a href="#participar">{t('REGÍSTRATE AQUÍ')} <ArrowRight size={24} aria-hidden="true" /></a>
      </section>
      <section className="volunteer-difference" aria-labelledby="volunteer-difference-title">
        <img src={plantingPhoto} alt={t('Trabajo de reforestación en la Amazonía')} loading="lazy" />
        <div><h2 id="volunteer-difference-title">{t('NUESTRA HORA PUEDE MARCAR LA DIFERENCIA')}</h2></div>
      </section>
    </>
  )
}

export function VolunteeringResources() {
  const { t } = useLanguage()
  const resources = [
    { title: 'Reforestación', description: 'Conoce nuestras acciones para cuidar los bosques.', href: '/reforestacion', image: forestPhoto },
    { title: 'Educación', description: 'Descubre cómo acompañamos el aprendizaje comunitario.', href: '/educacion', image: educationPhoto },
    { title: 'Salud', description: 'Conoce nuestro trabajo por el bienestar de las familias.', href: '/salud', image: healthPhoto },
  ]
  return (
    <>
      <section className="volunteer-impact" aria-labelledby="volunteer-impact-title">
        <div className="join-section">
          <h2 id="volunteer-impact-title">{t('TU COMPROMISO DEJA HUELLA')}</h2>
          <p>{t('Aprender, compartir y trabajar en comunidad son formas de construir un futuro más sostenible. La participación se coordina con nuestro equipo según las oportunidades disponibles.')}</p>
          <a className="join-button" href="#participar">{t('REGISTRA TU INTERÉS')} <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </section>
      <section className="join-section volunteer-resources" id="volunteer-resources" aria-labelledby="volunteer-resources-title">
        <h2 id="volunteer-resources-title">{t('CONOCE LAS CAUSAS A LAS QUE PUEDES SUMARTE')}</h2>
        <div className="volunteer-resources__grid">
          {resources.map(resource => (
            <a key={resource.href} href={resource.href}>
              <img src={resource.image} alt={t(resource.title)} loading="lazy" />
              <div><h3>{t(resource.title)}</h3><p>{t(resource.description)}</p><span>{t('Conoce más')} <ArrowRight size={18} aria-hidden="true" /></span></div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
