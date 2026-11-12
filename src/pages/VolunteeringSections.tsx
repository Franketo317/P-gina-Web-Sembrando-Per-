import { ArrowRight, Sprout, BookOpen, Heart, Users, TreePine, Binoculars, Pencil, CalendarCheck, ChevronRight } from 'lucide-react'
import { useLanguage } from '../components/LanguageContext'
import communityPhoto from '../assets/figma/voluntariado2.jpg'
import forestPhoto from '../assets/figma/blog-article-reforestation.jpg'
import educationPhoto from '../assets/figma/imgBlogImage4.png'
import healthPhoto from '../assets/figma/blog-article-health.jpg'
import plantingPhoto from '../assets/figma/voluntariado3.jpg'
import './VolunteeringPage.css'

export function VolunteeringParticipation() {
  const { t } = useLanguage()
  const benefits = [
    { label: 'Comparte tus conocimientos', icon: BookOpen },
    { label: 'Conecta con las comunidades', icon: Users },
    { label: 'Contribuye al cambio', icon: Heart },
  ]
  const activities = [
    { title: 'Reforestación', description: 'Participa en jornadas de siembra y cuidado de los bosques.', image: forestPhoto, icon: TreePine, href: '/reforestacion' },
    { title: 'Educación', description: 'Apoya actividades educativas y de conciencia ambiental.', image: educationPhoto, icon: BookOpen, href: '/educacion' },
    { title: 'Salud', description: 'Contribuye al bienestar infantil y familiar.', image: healthPhoto, icon: Heart, href: '/salud' },
  ]
  const steps = [
    { title: 'Explora', text: 'Conoce nuestras iniciativas.', icon: Binoculars },
    { title: 'Elige', text: 'Indica tus intereses y disponibilidad.', icon: Pencil },
    { title: 'Inscríbete', text: 'Envía tu solicitud para coordinar tu participación.', icon: CalendarCheck },
  ]
  return (
    <>
      <section className="volunteer-why" aria-labelledby="volunteer-why-title">
        <img className="volunteer-why__photo" src={communityPhoto} alt={t('Voluntarios de Sembrando Perú reunidos con una comunidad')} loading="lazy" />
        <div className="volunteer-why__content">
          <h2 id="volunteer-why-title">{t('¿Por qué ser voluntario?')}</h2>
          <p>{t('Es una oportunidad para aprender, compartir tus habilidades y formar parte de una comunidad comprometida con el bienestar de las personas y el cuidado de la naturaleza.')}</p>
          <ul className="volunteer-benefits">
            {benefits.map(({ label, icon: Icon }) => <li key={label}><span><Icon size={24} aria-hidden="true" /></span><strong>{t(label)}</strong></li>)}
          </ul>
        </div>
      </section>
      <section className="volunteer-audiences" aria-labelledby="volunteer-activities-title">
        <div className="volunteer-activities-heading">
          <h2 id="volunteer-activities-title">{t('Encuentra tu forma de ayudar')}</h2>
          <p>{t('Descubre cómo puedes aportar a nuestras iniciativas según tus intereses y habilidades.')}</p>
        </div>
        <div className="volunteer-audiences__grid">
          {activities.map(activity => (
            <a className="volunteer-audience" href={activity.href} key={activity.title}>
              <img src={activity.image} alt="" loading="lazy" />
              <div><span className="volunteer-audience__icon"><activity.icon size={21} aria-hidden="true" /></span><h3>{t(activity.title)}</h3><p>{t(activity.description)}</p></div>
            </a>
          ))}
        </div>
      </section>
      <section className="volunteer-how" aria-labelledby="volunteer-how-title">
        <h2 id="volunteer-how-title">{t('¿Cómo puedes participar?')}</h2>
        <ol>
          {steps.map(({ title, text, icon: Icon }, index) => <li key={title}><span className="volunteer-step__number">0{index + 1}</span><span className="volunteer-step__icon"><Icon size={24} aria-hidden="true" /></span><span><strong>{t(title)}</strong><small>{t(text)}</small></span>{index < steps.length - 1 && <ChevronRight className="volunteer-step__arrow" size={24} aria-hidden="true" />}</li>)}
        </ol>
      </section>
    </>
  )
}

export function VolunteeringClosing() {
  const { t } = useLanguage()
  return (
    <section className="volunteer-final" aria-labelledby="volunteer-final-title">
      <div className="volunteer-final__card">
        <span className="volunteer-final__icon"><Sprout size={34} strokeWidth={1.8} aria-hidden="true" /></span>
        <div className="volunteer-final__copy">
          <h2 id="volunteer-final-title">{t('¡Súmate al voluntariado!')}</h2>
          <p>{t('¿Listo para dar el siguiente paso? Escríbenos y cuéntanos cómo te gustaría contribuir.')}</p>
        </div>
        <a href="/contacto">{t('Contáctanos')} <ArrowRight size={20} aria-hidden="true" /></a>
      </div>
    </section>
  )
}

export function VolunteeringResources() {
  const { t } = useLanguage()
  const resources = [
    { title: 'Contacto', description: 'Escríbenos y cuéntanos cómo te gustaría participar.', href: '/contacto', image: communityPhoto },
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
