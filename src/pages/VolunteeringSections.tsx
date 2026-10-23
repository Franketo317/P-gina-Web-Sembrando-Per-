import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import communityPhoto from '../assets/figma/equipo2.jpg'
import forestPhoto from '../assets/figma/blog-article-reforestation.jpg'
import educationPhoto from '../assets/figma/imgBlogImage4.png'
import healthPhoto from '../assets/figma/blog-article-health.jpg'
import organizationPhoto from '../assets/figma/equipo.jpeg'
import plantingPhoto from '../assets/figma/imgBlogImage5.png'
import actionPhoto from '../assets/figma/5.jpeg'
import logo from '../assets/figma/imgImage4.png'
import naturePhoto from '../assets/figma/about-values-background.png'
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
          <a className="volunteer-feature__button" href="#participar">{t('QUIERO PARTICIPAR')} <ArrowRight size={28} aria-hidden="true" /></a>
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
      <section className="volunteer-context" aria-label={t('El valor de tu participación')}>
        <p>{t('El cuidado de los bosques y el bienestar de las comunidades necesitan del compromiso de todos. En Sembrando Perú conectamos la reforestación, la educación y la salud para acompañar a las familias y promover el cuidado de su entorno. Cada actividad es una oportunidad para aprender, compartir conocimientos y trabajar juntos.')}</p>
        <p>{t('Tu compromiso puede ser parte del cambio. Súmate al voluntariado de Sembrando Perú y aporta tu tiempo para construir, junto a las comunidades, un futuro más sostenible.')}</p>
      </section>
      <section className="volunteer-hours" aria-labelledby="volunteer-hours-title">
        <img src={actionPhoto} alt={t('Participación comunitaria en una jornada de Sembrando Perú')} loading="lazy" />
        <div className="volunteer-hours__inner">
          <div className="volunteer-hours__panel">
            <h2 id="volunteer-hours-title">{t('Cada hora cuenta')}</h2>
            <p>{t('El tiempo que compartes puede convertirse en una oportunidad para cuidar la naturaleza, acompañar a las familias o impulsar el aprendizaje. Cuéntanos tus intereses y tu disponibilidad para explorar cómo puedes participar.')}</p>
          </div>
        </div>
      </section>
      <section className="volunteer-how" aria-labelledby="volunteer-how-title">
        <h2 id="volunteer-how-title">{t('¿CÓMO FUNCIONA EL VOLUNTARIADO?')}</h2>
        <ol>
          <li>{t('Explora nuestras iniciativas de reforestación, educación y salud.')}</li>
          <li>{t('Elige cómo te gustaría colaborar y qué tiempo puedes compartir.')}</li>
          <li>{t('Registra tu interés para coordinar tu participación según las oportunidades disponibles.')}</li>
        </ol>
        <a href="#participar">{t('REGISTRA TU INTERÉS AQUÍ')} <ArrowRight size={20} aria-hidden="true" /></a>
      </section>
    </>
  )
}

export function VolunteeringToolkitIntro() {
  const { t } = useLanguage()
  return (
    <>
      <h2 id="join-form-title">{t('¡SÚMATE AL VOLUNTARIADO DE SEMBRANDO PERÚ!')}</h2>
      <p className="volunteer-toolkit__subtitle">{t('Completa este formulario y participa en nuestras iniciativas.')}</p>
      <div className="volunteer-toolkit__intro">
        <div>
          <p>{t('Comparte tu tiempo y tus habilidades en acciones de reforestación, educación o bienestar familiar.')}</p>
          <p>{t('¡Juntos es posible!')}</p>
        </div>
        <img src={logo} alt={t('Sembrando Perú')} loading="lazy" />
      </div>
    </>
  )
}

export function VolunteeringClosing() {
  const { t } = useLanguage()
  return (
    <>
      <section className="volunteer-story volunteer-story--why" aria-labelledby="volunteer-why-title">
        <img src={naturePhoto} alt={t('Reforestación')} loading="lazy" />
        <div className="volunteer-story__inner">
          <div className="volunteer-story__panel">
            <h2 id="volunteer-why-title">{t('¿Por qué ser parte del voluntariado?')}</h2>
            <p>{t('Porque cada acción cuenta. Porque juntos podemos cuidar los bosques, compartir conocimientos y acompañar el bienestar de las comunidades. Tu tiempo puede ser parte de ese cambio.')}</p>
          </div>
        </div>
      </section>
      <section className="volunteer-story volunteer-story--movement" aria-labelledby="volunteer-movement-title">
        <img src={communityPhoto} alt={t('Integrantes de Sembrando Perú trabajando junto a la comunidad')} loading="lazy" />
        <div className="volunteer-story__inner">
          <div className="volunteer-story__panel">
            <h2 id="volunteer-movement-title">{t('Un movimiento de compromiso y acción')}</h2>
            <p>{t('En Sembrando Perú conectamos el cuidado de la naturaleza con la educación y el bienestar de las familias. Súmate con tus ideas, tus conocimientos y tu disposición para trabajar junto a las comunidades.')}</p>
            <a href="#participar">{t('¡SÚMATE AL VOLUNTARIADO!')} <ArrowRight size={22} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
      <section className="volunteer-story volunteer-story--connect" aria-labelledby="volunteer-connect-title">
        <img src={actionPhoto} alt={t('Participación comunitaria en una jornada de Sembrando Perú')} loading="lazy" />
        <div className="volunteer-story__inner">
          <div className="volunteer-story__panel">
            <h2 id="volunteer-connect-title">{t('Actúa y conecta con otros')}</h2>
            <p>{t('Inspira a tu comunidad, comparte tus ideas y suma tu esfuerzo al de otras personas comprometidas con la naturaleza y el bienestar de las familias.')}</p>
          </div>
        </div>
      </section>
      <section className="volunteer-social" aria-labelledby="volunteer-social-title">
        <h2 id="volunteer-social-title">{t('SIGUE CONECTADO CON SEMBRANDO PERÚ A TRAVÉS DE REDES SOCIALES PARA MÁS NOTICIAS Y ACTIVIDADES:')}</h2>
        <SocialLinks />
      </section>
      <section className="volunteer-inspiration" aria-labelledby="volunteer-inspiration-title">
        <img src={educationPhoto} alt={t('Niños participando en actividades educativas')} loading="lazy" />
        <h2 id="volunteer-inspiration-title">{t('¡TU TIEMPO PUEDE INSPIRAR UN CAMBIO DURADERO!')}</h2>
      </section>
      <section className="volunteer-final" aria-labelledby="volunteer-final-title">
        <p>{t('Comparte tu compromiso, participa y construyamos juntos un futuro más sostenible para nuestras comunidades.')}</p>
        <h2 id="volunteer-final-title">{t('LA HORA DE ACTUAR ES AHORA. TU PARTICIPACIÓN PUEDE MARCAR LA DIFERENCIA.')}</h2>
      </section>
    </>
  )
}

export function VolunteeringResources() {
  const { t } = useLanguage()
  const resources = [
    { title: 'Formulario de inscripción', description: 'Registra tu interés y cuéntanos cómo te gustaría participar.', href: '#participar', image: communityPhoto },
    { title: 'Reforestación', description: 'Conoce nuestras acciones para cuidar los bosques.', href: '/reforestacion', image: forestPhoto },
    { title: 'Educación', description: 'Descubre cómo acompañamos el aprendizaje comunitario.', href: '/educacion', image: educationPhoto },
    { title: 'Salud', description: 'Conoce nuestro trabajo por el bienestar de las familias.', href: '/salud', image: healthPhoto },
    { title: 'Publicaciones', description: 'Explora historias e iniciativas de nuestras comunidades.', href: '/publicaciones', image: plantingPhoto },
  ]
  return (
    <>
      <section className="join-section volunteer-resources" id="volunteer-resources" aria-labelledby="volunteer-resources-title">
        <h2 id="volunteer-resources-title">{t('OTROS RECURSOS QUE TE AYUDAN A ACTUAR')}</h2>
        <p className="volunteer-resources__subtitle">{t('CONOCE LOS RECURSOS E INICIATIVAS DE SEMBRANDO PERÚ:')}</p>
        <div className="volunteer-resources__grid">
          {resources.map(resource => (
            <a key={resource.href} href={resource.href}>
              <img src={resource.image} alt="" loading="lazy" />
              <div><h3>{t(resource.title)}</h3><p>{t(resource.description)}</p></div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
