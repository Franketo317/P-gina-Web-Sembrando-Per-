import { useEffect, useRef, useState } from 'react'
import { ChevronRight, Home, Info, LockKeyhole, Mountain, Sprout, TreePine } from 'lucide-react'
import heroImage from '../assets/figma/donacion.jpg'
import membershipHeroImage from '../assets/figma/membresia-hero.png'
import impactImage from '../assets/figma/5.jpeg'
import reforestationImage from '../assets/figma/blog-article-reforestation.jpg'
import educationImage from '../assets/figma/imgBlogImage4.png'
import communityImage from '../assets/figma/blog-article-community.jpg'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import DonationFooter from '../components/DonationFooter'
import './DonationPage.css'

export const donationImpactAreas = [
  {
    title: 'REFORESTACIÓN Y RESTAURACIÓN ECOLÓGICA',
    description: 'Los bosques y ecosistemas locales sufren constantemente debido a la deforestación y la pérdida de biodiversidad. Sembrando Perú trabaja junto a voluntarios y comunidades locales para reforestar áreas degradadas, instalar viveros comunitarios y proteger especies nativas. Estas acciones ayudan a mitigar el cambio climático y aseguran un entorno saludable para las futuras generaciones.',
    image: reforestationImage,
    alt: 'Jornada de reforestación en la Amazonía',
  },
  {
    title: 'EDUCACIÓN Y CONCIENCIA AMBIENTAL',
    description: 'El cambio duradero empieza en las aulas y comunidades. Desarrollamos talleres participativos, programas de sensibilización y proyectos de huertos escolares para formar a niños y jóvenes como agentes de cambio ecológico. Empoderamos a las comunidades con herramientas de reciclaje, conservación y gestión sostenible de sus propios recursos.',
    image: educationImage,
    alt: 'Niños participando en una actividad educativa',
  },
  {
    title: 'CONSERVACIÓN DE BIODIVERSIDAD Y FAUNA NATIVA',
    description: 'Protegemos los hábitats naturales y las especies en peligro mediante el monitoreo ambiental y la creación de corredores biológicos. En Sembrando Perú impulsamos alianzas estratégicas para resguardar la flora y fauna local, asegurando el equilibrio de los ecosistemas en nuestras zonas de intervención y promoviendo prácticas de coexistencia sostenible.',
    image: communityImage,
    alt: 'Trabajo comunitario para proteger los ecosistemas locales',
  },
  {
    title: 'VOLUNTARIADO Y GESTIÓN COMUNITARIA',
    description: 'Fomentamos la participación activa de jóvenes y familias en jornadas de siembra, limpieza de espacios naturales y organización comunitaria. Capacitamos a los líderes locales en gestión ambiental sostenible para que cada proyecto permanezca en el tiempo y genere un impacto positivo duradero en sus propias regiones.',
    image: impactImage,
    alt: 'Voluntarios participando en una jornada de siembra',
  },
]

const questions = [
  {
    question: '¿Cómo se usa mi donación para hacer una diferencia?',
    answer: 'Tu aporte ayuda a financiar directamente nuestras jornadas de reforestación, educación ambiental y trabajo comunitario en la Amazonía peruana.',
  },
  {
    question: '¿Cómo se utilizan los fondos de manera eficiente?',
    answer: 'Cada contribución se destina a los programas y actividades de Sembrando Perú, con seguimiento y evaluación de nuestros proyectos.',
  },
  {
    question: '¿El proyecto tiene beneficios para mí?',
    answer: 'Tu donación contribuye a mejorar el futuro de las comunidades y los ecosistemas. Te mantendremos al tanto de los avances e impacto.',
  },
  {
    question: '¿Sembrando Perú ofrece beneficios fiscales para mi aporte?',
    answer: 'Para consultar sobre comprobantes y beneficios aplicables, escríbenos a contacto@sembrandoperu.org.',
  },
  {
    question: '¿Puedo elegir el monto y la frecuencia de mi donación?',
    answer: 'Sí. Antes de continuar a PayPal, puedes elegir el monto y si deseas hacer una donación mensual o única.',
  },
  {
    question: '¿Qué iniciativas apoya mi donación?',
    answer: 'Tu donación apoya iniciativas de reforestación, educación ambiental y trabajo comunitario en las regiones donde trabajamos.',
  },
  {
    question: '¿Cómo puedo resolver una duda sobre mi donación?',
    answer: 'Escríbenos a contacto@sembrandoperu.org y nuestro equipo podrá orientarte.',
  },
]

const membershipQuestions = [
  {
    question: '¿Qué significa ser miembro de Sembrando Perú?',
    answer: 'Ser miembro es apoyar la continuidad de nuestras iniciativas y formar parte de una comunidad comprometida con el cuidado de la naturaleza y el bienestar de las familias del Perú.',
  },
  {
    question: '¿Cómo puedo hacerme miembro?',
    answer: 'Visita el apartado «Tu contribución» de esta página y continúa a PayPal. Allí podrás revisar el monto y las opciones de frecuencia disponibles antes de confirmar tu aporte.',
  },
  {
    question: '¿A qué se destina mi aporte como miembro?',
    answer: 'Tu contribución ayuda a sostener iniciativas de reforestación, educación y salud junto a comunidades rurales. Este apoyo permite acompañar el cuidado de los bosques y el bienestar de las familias.',
  },
  {
    question: '¿Ser miembro también me permite participar como voluntario?',
    answer: 'Puedes expresar tu interés en participar desde la sección Voluntariado. La membresía y el voluntariado son formas de apoyo complementarias; la participación en actividades se coordina con el equipo según las oportunidades disponibles.',
  },
  {
    question: '¿Puedo elegir el monto y la frecuencia de mi aporte?',
    answer: 'Sí. Antes de confirmar tu aporte en PayPal, puedes revisar y elegir el monto y la frecuencia disponibles.',
  },
  {
    question: '¿Tengo que participar en actividades para ser miembro?',
    answer: 'No. La membresía ayuda a sostener nuestras iniciativas. Si además quieres participar en actividades, puedes expresar tu interés en la sección Voluntariado.',
  },
  {
    question: '¿Dónde puedo consultar más información sobre mi aporte?',
    answer: 'Puedes escribirnos a contacto@sembrandoperu.org para resolver tus dudas sobre tu aporte y el trabajo que apoyas.',
  },
]

function DonationForm() {
  const { t } = useLanguage()

  return (
    <div className="donation-form" id="aportar">
      <h2>{t('TU CONTRIBUCIÓN')}</h2>
      <div className="donation-form__impact">
        <strong className="donation-form__tree-count">+1,200</strong>
        <p className="donation-form__tree-caption">{t('árboles sembrados por voluntarios y aliados en todo el Perú')}</p>
      </div>
      <section className="donation-form__examples" aria-labelledby="donation-form-impact-title">
        <h3 id="donation-form-impact-title">{t('Tu aporte hace esto')}</h3>
        <ul>
          <li>
            <span className="donation-form__impact-icon"><Sprout aria-hidden="true" /></span>
            <strong>S/ 10</strong>
            <span>{t('siembra 1 árbol nativo')}</span>
          </li>
          <li>
            <span className="donation-form__impact-icon"><TreePine aria-hidden="true" /></span>
            <strong>S/ 30</strong>
            <span>{t('cuida 5 plántulas durante un mes')}</span>
          </li>
          <li>
            <span className="donation-form__impact-icon"><Mountain aria-hidden="true" /></span>
            <strong>S/ 100</strong>
            <span>{t('apoya una jornada de reforestación')}</span>
          </li>
        </ul>
      </section>
      <div className="donation-form__secure-note">
        <LockKeyhole aria-hidden="true" />
        <p>{t('Pago seguro con PayPal. Al continuar eliges si tu aporte es mensual o único, y el monto.')}</p>
      </div>
      <div className="donation-form__payment-methods" aria-label={t('Métodos de pago')}>
        <a
          className="donation-form__paypal"
          href="https://www.paypal.com/donate/?hosted_button_id=CFPZV9GMT4GNU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">P</span>{t('Donar con PayPal o tarjeta')}
        </a>
      </div>
      <p>{t('Tu aporte transforma vidas y protege nuestros bosques.')}</p>
    </div>
  )
}

function DonationHero({ isMembership }: { isMembership: boolean }) {
  const formSlotRef = useRef<HTMLDivElement>(null)
  const pinnedTopRef = useRef<number | null>(null)
  const [isFormPinned, setIsFormPinned] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    let previousSearchHeight = 0
    const updateDonateButtonVisibility = () => {
      const formSlot = formSlotRef.current
      const page = formSlot?.closest('.donation-page')
      const header = page?.querySelector('.about-header')
      const main = page?.querySelector('main')
      const form = formSlot?.querySelector('.donation-form')

      if (!form || !header || !main || !formSlot) {
        setIsFormPinned(false)
        return
      }

      const headerBounds = header.getBoundingClientRect()
      const formBounds = form.getBoundingClientRect()
      const formSlotBounds = formSlot.getBoundingClientRect()
      const stopBoundary = main.querySelector('.donation-next-steps') ?? main
      const boundaryBounds = stopBoundary.getBoundingClientRect()
      const searchHeight = header.querySelector('.header-search-panel')?.getBoundingClientRect().height ?? 0
      if (searchHeight !== previousSearchHeight) {
        pinnedTopRef.current = null
        previousSearchHeight = searchHeight
      }
      const minimumPinnedTop = headerBounds.height + searchHeight + 16
      if (pinnedTopRef.current === null || pinnedTopRef.current < minimumPinnedTop) {
        pinnedTopRef.current = Math.max(minimumPinnedTop, formSlotBounds.top)
      }
      const stickyTop = pinnedTopRef.current
      formSlot.style.setProperty('--donation-form-sticky-top', `${stickyTop}px`)
      // Move the card up with the content when it reaches the full-width links.
      const bottomLimit = stopBoundary === main ? boundaryBounds.bottom : boundaryBounds.top
      const constrainedTop = Math.min(stickyTop, bottomLimit - formBounds.height - 24)
      formSlot.style.setProperty('--donation-form-offset-top', `${constrainedTop}px`)
      const shouldPinForm = window.innerWidth >= 621
        && formSlotBounds.top <= stickyTop
      const isCurrentlyPinned = formSlot.classList.contains('is-pinned')
      if (shouldPinForm) {
        formSlot.style.setProperty('--donation-form-sticky-left', `${formSlotBounds.left}px`)
        formSlot.style.setProperty('--donation-form-sticky-width', `${formSlotBounds.width}px`)
      }
      if (shouldPinForm && !isCurrentlyPinned) {
        formSlot.style.height = `${formBounds.height}px`
      } else if (!shouldPinForm && isCurrentlyPinned) {
        formSlot.style.removeProperty('--donation-form-sticky-left')
        formSlot.style.removeProperty('--donation-form-sticky-width')
        formSlot.style.height = ''
      }
      setIsFormPinned(shouldPinForm)
    }

    updateDonateButtonVisibility()
    window.addEventListener('scroll', updateDonateButtonVisibility, { passive: true })
    window.addEventListener('resize', updateDonateButtonVisibility)
    const resizeObserver = new ResizeObserver(updateDonateButtonVisibility)
    const pageMain = formSlotRef.current?.closest('.donation-page')?.querySelector('main')
    const donationForm = formSlotRef.current?.querySelector('.donation-form')
    const page = formSlotRef.current?.closest('.donation-page')
    const searchLayoutObserver = new MutationObserver(updateDonateButtonVisibility)
    if (page) searchLayoutObserver.observe(page, { attributes: true, attributeFilter: ['style'] })
    if (pageMain) resizeObserver.observe(pageMain)
    if (donationForm) resizeObserver.observe(donationForm)
    return () => {
      window.removeEventListener('scroll', updateDonateButtonVisibility)
      window.removeEventListener('resize', updateDonateButtonVisibility)
      resizeObserver.disconnect()
      searchLayoutObserver.disconnect()
    }
  }, [])

  return (
    <section className={`donation-hero${!isMembership ? ' donation-hero--compact' : ''}${isFormPinned ? ' is-form-pinned' : ''}`} aria-labelledby="donation-hero-title">
      <img className="donation-hero__image" src={isMembership ? membershipHeroImage : heroImage} alt={t("Manos plantando un árbol joven")} />
      <div className="donation-hero__shade" />
      <div className="donation-hero__content">
        {isMembership ? (
          <>
            <h1 id="donation-hero-title">{t('¡Hazte miembro de Sembrando Perú hoy!')}</h1>
            <p>{t('¡Hazte miembro de Sembrando Perú!')}</p>
          </>
        ) : (
          <>
            <h1 id="donation-hero-title">{t('ÚNETE AL CAMBIO,')}<br />{t('DONA HOY!')}</h1>
            <p>{t("Tu donación hace posible más acciones de reforestación, educación y desarrollo sostenible en las comunidades del Perú.")}</p>
          </>
        )}
      </div>
      <details className="donation-hero__photo-info">
        <summary aria-label={t('Información de la imagen')}><Info aria-hidden="true" /></summary>
        <p>{t('Manos plantando un árbol joven')}</p>
      </details>
      <div
        ref={formSlotRef}
        className={`donation-form-slot${isFormPinned ? ' is-pinned' : ''}`}
      >
        <DonationForm />
      </div>
    </section>
  )
}

function DonationBreadcrumbs({ isMembership }: { isMembership: boolean }) {
  const { t } = useLanguage()
  const sectionTitle = isMembership ? t('MEMBRESÍA') : t('Donación')

  return (
    <nav className="donation-breadcrumbs" aria-label={t('Ruta de navegación')}>
      <ol>
        <li>
          <a href="/" aria-label={t('Inicio')}>
            <Home aria-hidden="true" />
          </a>
        </li>
        <li><ChevronRight aria-hidden="true" /><a href={isMembership ? '/membresia' : '/donacion'}>{sectionTitle}</a></li>
        <li><ChevronRight aria-hidden="true" /><span aria-current="page">{t(isMembership ? 'Membresía general' : 'Donación general')}</span></li>
      </ol>
    </nav>
  )
}

export function CollapsibleSection({
  title,
  titleId,
  sectionClassName,
  children,
  defaultOpen = true,
}: {
  title: string
  titleId: string
  sectionClassName: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(defaultOpen)

  return (
    <section className={sectionClassName} aria-labelledby={titleId}>
      <div className="donation-section__header">
        <h2 id={titleId}>{title}</h2>
        <button
          className="donation-section__toggle"
          type="button"
          aria-label={title}
          aria-expanded={isExpanded}
          aria-controls={`${titleId}-content`}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          <svg className={isExpanded ? '' : 'is-collapsed'} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="m6 15 6-6 6 6" />
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div id={`${titleId}-content`} className="donation-section__content">
          {children}
        </div>
      )}
    </section>
  )
}

function ImpactAreas() {
  const { t } = useLanguage()

  return (
    <CollapsibleSection
      title={t('SEMBREMOS UN FUTURO SOSTENIBLE PARA EL PERÚ')}
      titleId="donation-impact-title"
      sectionClassName="donation-impact"
    >
      <p className="donation-impact__intro">{t('Tus aportes impulsan el trabajo integral de Sembrando Perú, promoviendo iniciativas ecológicas y comunitarias en nuestras regiones clave.')}</p>
      <div className="donation-impact__grid">
        {donationImpactAreas.map((area) => (
          <article className="donation-impact-card" key={area.title}>
            <img src={area.image} alt={t(area.alt)} />
            <div><h3>{t(area.title)}</h3><p>{t(area.description)}</p></div>
          </article>
        ))}
      </div>
    </CollapsibleSection>
  )
}

function DonationWelcome() {
  const { t } = useLanguage()
  const resources = [
    { title: 'FICHAS INFORMATIVAS SOBRE NUESTROS PROYECTOS', image: impactImage, href: '/publicaciones', download: false },
    { title: 'FONDOS DE PANTALLA PARA TUS DISPOSITIVOS', image: reforestationImage, href: reforestationImage, download: true },
    { title: 'SUSCRIPCIÓN AL BOLETÍN DE SEMBRANDO PERÚ', image: communityImage, href: '/#unete', download: false },
  ]
  return (
    <CollapsibleSection title={t('TE DAMOS LA BIENVENIDA')} titleId="donation-welcome-title" sectionClassName="donation-how donation-welcome">
      <p className="donation-welcome__intro">{t('Gracias por apoyar a Sembrando Perú. Conoce estos recursos para acercarte a nuestros proyectos y seguir conectado con el cuidado de la naturaleza y el bienestar de las comunidades:')}</p>
      <div className="donation-welcome__grid">
        {resources.map(resource => (
          <a className="donation-welcome__card" href={resource.href} download={resource.download || undefined} key={resource.title}>
            <div className="donation-welcome__preview"><img src={resource.image} alt="" loading="lazy" /></div>
            <h3>{t(resource.title)}</h3>
          </a>
        ))}
      </div>
    </CollapsibleSection>
  )
}

function DonationPurpose() {
  const { t } = useLanguage()
  const messages = [
    { title: 'CUIDAMOS NUESTROS BOSQUES', area: 'Reforestación y naturaleza', text: 'Cada árbol es una oportunidad para recuperar nuestros paisajes. Tu apoyo acompaña la siembra, el cuidado de plantas y el trabajo con las comunidades para proteger su entorno.' },
    { title: 'SEMBRAMOS APRENDIZAJES', area: 'Educación y participación', text: 'Compartir conocimientos abre nuevas posibilidades. Junto a las familias, impulsamos el aprendizaje y la conciencia ambiental para que el cuidado de la naturaleza forme parte de la vida comunitaria.' },
    { title: 'CULTIVAMOS BIENESTAR', area: 'Salud y comunidad', text: 'El futuro también se construye cuidando a las personas. Tu aporte acompaña iniciativas de prevención, educación y participación que ponen en el centro a los niños y sus familias.' },
  ]
  return (
    <section className="donation-how donation-purpose" aria-labelledby="donation-purpose-title">
      <h2 id="donation-purpose-title">{t('Un propósito que nos une')}</h2>
      <p className="donation-purpose__intro">{t('En Sembrando Perú, el cuidado de la naturaleza y el bienestar de las comunidades van de la mano. Tu apoyo nos ayuda a seguir trabajando en estos compromisos:')}</p>
      <div className="donation-purpose__grid">
        {messages.map(message => (
          <article className="donation-purpose__card" key={message.title}>
            <p className="donation-purpose__message">{t(message.text)}</p>
            <h3>{t(message.title)}</h3>
            <p className="donation-purpose__area">{t(message.area)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function DonationFaq({ isMembership = false }: { isMembership?: boolean }) {
  const [openQuestion, setOpenQuestion] = useState(0)
  const [isExpanded, setIsExpanded] = useState(true)
  const [showMoreQuestions, setShowMoreQuestions] = useState(false)
  const { t } = useLanguage()
  const allQuestions = isMembership ? membershipQuestions : questions
  const faqQuestions = allQuestions.slice(0, showMoreQuestions ? allQuestions.length : 4)

  return (
    <section className="donation-faq" aria-labelledby="donation-faq-title">
      <div className="donation-faq__heading">
        <h2 id="donation-faq-title">{t('PREGUNTAS FRECUENTES')}</h2>
        <button
          className="donation-faq__toggle"
          type="button"
          aria-label={t('PREGUNTAS FRECUENTES')}
          aria-expanded={isExpanded}
          aria-controls="donation-faq-content"
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          <svg className={isExpanded ? '' : 'is-collapsed'} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="m6 15 6-6 6 6" />
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div id="donation-faq-content">
          <div className="donation-faq__list" id="donation-faq-list">
            {faqQuestions.map((item, index) => (
              <details key={item.question} open={openQuestion === index} onToggle={(event) => {
                if ((event.currentTarget as HTMLDetailsElement).open) setOpenQuestion(index)
              }}>
                <summary>{t(item.question)}<span aria-hidden="true">{openQuestion === index ? '−' : '+'}</span></summary>
                {openQuestion === index && <p>{t(item.answer)}</p>}
              </details>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={showMoreQuestions}
            aria-controls="donation-faq-list"
            onClick={() => {
              if (showMoreQuestions && openQuestion >= 4) setOpenQuestion(0)
              setShowMoreQuestions((showing) => !showing)
            }}
          >
            {t(showMoreQuestions ? 'Ver menos preguntas' : 'Ver más preguntas')}
          </button>
        </div>
      )}
    </section>
  )
}

export default function DonationPage({ isMembership = false }: { isMembership?: boolean }) {
  const { t } = useLanguage()

  return (
    <div className="donation-page">
      <SiteHeader />
      <main>
        <DonationHero isMembership={isMembership} />
        <DonationBreadcrumbs isMembership={isMembership} />
        <CollapsibleSection
          title={t(isMembership ? '¿POR QUÉ SER MIEMBRO DE SEMBRANDO PERÚ?' : '¿POR QUÉ DONAR A SEMBRANDO PERÚ?')}
          titleId="donation-about-title"
          sectionClassName="donation-about"
        >
          <p>{t(isMembership ? 'Al hacerte miembro de Sembrando Perú, te sumas a una comunidad comprometida con el bienestar de las personas y el cuidado de la naturaleza. Tu apoyo nos ayuda a planificar y sostener iniciativas de reforestación, educación y salud junto a comunidades de todo el Perú.' : 'Sembrando Perú trabaja para proteger y recuperar nuestros bosques, fortalecer a las comunidades mediante la reforestación, la educación ambiental y el fortalecimiento de las capacidades locales. Tu donación financia directamente la siembra de árboles, el mantenimiento de viveros y el desarrollo de un entorno más verde y saludable para todos.')}</p>
        </CollapsibleSection>
        <CollapsibleSection
          title={t('¿CÓMO CONTRIBUYES CON TU DONACIÓN A SEMBRANDO PERÚ?')}
          titleId="donation-how-title"
          sectionClassName="donation-how"
        >
          <div className="donation-how__copy">
            <p>{t('Tu donación se destina directamente a nuestras jornadas de reforestación, la producción de plantines en viveros y talleres de educación ambiental. Cada aporte asegura la transparencia y continuidad de nuestros proyectos en las comunidades.')}</p>
          </div>
          <img className="donation-how__image" src={impactImage} alt={t("Integrantes de Sembrando Perú trabajando junto a la comunidad")} />
        </CollapsibleSection>
        <DonationWelcome />
        <ImpactAreas />
        <DonationPurpose />
        <DonationFaq isMembership={isMembership} />
        <nav className="donation-next-steps" aria-label={t('Otras formas de apoyar a Sembrando Perú')}>
          {isMembership ? (
            <>
              <a className="donation-next-steps__join" href="/donacion">
                <h2>{t('DONACIÓN')}</h2>
                <p>{t('Apoya nuestras iniciativas de reforestación, educación y desarrollo sostenible en las comunidades del Perú.')}</p>
              </a>
              <a className="donation-next-steps__membership" href="/sumate">
                <h2>{t('SÚMATE')}</h2>
                <p>{t('Comparte tu tiempo, tus ideas y tus conocimientos para apoyar a nuestras comunidades y cuidar la naturaleza.')}</p>
              </a>
            </>
          ) : (
            <>
              <a className="donation-next-steps__join" href="/sumate">
                <h2>{t('SÚMATE')}</h2>
                <p>{t('Comparte tu tiempo, tus ideas y tus conocimientos para apoyar a nuestras comunidades y cuidar la naturaleza.')}</p>
              </a>
              <a className="donation-next-steps__membership" href="/membresia">
                <h2>{t('MEMBRESÍA')}</h2>
                <p>{t('Forma parte de una comunidad comprometida con la reforestación, la educación y el bienestar de las familias del Perú.')}</p>
              </a>
            </>
          )}
        </nav>
      </main>
      <DonationFooter />
    </div>
  )
}
