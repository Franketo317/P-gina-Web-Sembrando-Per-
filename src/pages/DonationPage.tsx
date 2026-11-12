import { useEffect, useRef, useState } from 'react'
import { ChevronRight, Home, Info, LockKeyhole, BookOpen, Sprout, TreePine, UsersRound, ArrowRight, CreditCard, MousePointer2 } from 'lucide-react'
import heroImage from '../assets/figma/DONAR1.jpg'
import membershipHeroImage from '../assets/figma/membresia-hero.png'
import impactImage from '../assets/figma/5.jpeg'
import reforestationImage from '../assets/figma/blog-article-reforestation.jpg'
import educationImage from '../assets/figma/imgBlogImage4.png'
import communityImage from '../assets/figma/blog-article-community.jpg'
import donationOptionOneImage from '../assets/figma/DONAR2.jpg'
import donationOptionFiveImage from '../assets/figma/DONAR3.JPG'
import donationOptionFifteenImage from '../assets/figma/DONAR4.JPG'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import DonationFooter from '../components/DonationFooter'
import './DonationPage.css'

export const donationImpactAreas = [
  {
    title: 'Reforestación de ecosistemas',
    description: 'Contribuye a la recuperación de áreas degradadas y al cuidado de los bosques.',
    image: reforestationImage,
    alt: 'Jornada de reforestación en la Amazonía',
  },
  {
    title: 'Trabajo con comunidades',
    description: 'Apoya iniciativas que involucran a familias y comunidades locales.',
    image: educationImage,
    alt: 'Niños participando en una actividad educativa',
  },
  {
    title: 'Educación ambiental',
    description: 'Promueve el aprendizaje y el cuidado del medioambiente.',
    image: impactImage,
    alt: 'Voluntarios participando en una jornada de siembra',
  },
]

const questions = [
  {
    question: '¿Cómo puedo donar?',
    answer: 'Revisa las opciones disponibles en PayPal antes de confirmar tu aporte.',
  },
  {
    question: '¿En qué se utiliza mi donación?',
    answer: 'Tu aporte puede contribuir a la reforestación de ecosistemas, al trabajo con comunidades y a la educación ambiental.',
  },
  {
    question: '¿Es seguro realizar mi aporte?',
    answer: 'La plataforma de pago muestra las opciones disponibles antes de que confirmes una contribución.',
  },
  {
    question: '¿Puedo solicitar una constancia de donación?',
    answer: 'Escríbenos a contacto@sembrandoperu.org para consultar sobre constancias de donación.',
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
        <p className="donation-form__tree-caption">{t('árboles sembrados por voluntarios y aliados en todo el Perú.')}</p>
      </div>
      <section className="donation-form__examples" aria-labelledby="donation-form-impact-title">
        <h3 id="donation-form-impact-title">{t('Elige tu aporte')}</h3>
        <p className="donation-form__modalities">{t('Modalidad: Pago único | Pago mensual')}</p>
        <ul>
          <li>
            <span className="donation-form__impact-icon"><Sprout aria-hidden="true" /></span>
            <strong>{t('1 árbol')}</strong>
            <span className="donation-form__amount">US$ 7</span>
          </li>
          <li>
            <span className="donation-form__impact-icon"><TreePine aria-hidden="true" /></span>
            <strong>{t('5 árboles')}</strong>
            <span className="donation-form__amount">US$ 35</span>
          </li>
          <li>
            <span className="donation-form__impact-icon"><BookOpen aria-hidden="true" /></span>
            <strong>{t('15 árboles')}</strong>
            <span className="donation-form__amount">US$ 105</span>
          </li>
        </ul>
      </section>
      <div className="donation-form__secure-note">
        <LockKeyhole aria-hidden="true" />
        <p>{t('Pago seguro con PayPal. Al continuar eliges el tipo de pago y el monto de tu aporte.')}</p>
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

function DonationJourney() {
  const { t } = useLanguage()
  const choices = [
    { title: '1 árbol – US$ 7', description: 'Tu primer paso hacia un Perú más verde. Contribuyes a la siembra y recuperación de nuestros bosques.', image: donationOptionOneImage, icon: Sprout },
    { title: '5 árboles – US$ 35', description: 'Multiplica tu impacto. Apoyas la siembra de cinco árboles y el cuidado de ecosistemas locales.', image: donationOptionFiveImage, icon: BookOpen },
    { title: '15 árboles – US$ 105', description: 'Haz crecer el cambio. Contribuyes a la siembra de quince árboles y al fortalecimiento de nuestros proyectos de reforestación.', image: donationOptionFifteenImage, icon: TreePine },
  ]
  const impact = [
    { title: 'Reforestación', description: 'Recuperamos y conservamos nuestros bosques.', icon: Sprout },
    { title: 'Comunidades', description: 'Fortalecemos capacidades y generamos oportunidades.', icon: UsersRound },
    { title: 'Educación ambiental', description: 'Promovemos conciencia y acción por la naturaleza.', icon: BookOpen },
  ]
  const steps = [
    { title: 'Elige tu aporte', description: 'Revisa las opciones de aporte disponibles.', icon: MousePointer2 },
    { title: 'Realiza tu pago', description: 'Continúa con PayPal o tarjeta.', icon: CreditCard },
    { title: 'Genera impacto', description: 'Tu donación impulsa más árboles, educación y comunidades resilientes.', icon: Sprout },
  ]

  return (
    <>
      <section className="donation-choices" aria-labelledby="donation-choices-title">
        <div className="donation-journey__heading">
          <h2 id="donation-choices-title">{t('Elige cómo quieres dejar huella')}</h2>
          <p>{t('Con tu aporte, contribuyes directamente a la reforestación y al cuidado de nuestros bosques.')}</p>
        </div>
        <div className="donation-choices__grid">
          {choices.map(({ title, description, image, icon: Icon }) => (
            <a className="donation-choice" href="#aportar" key={title}>
              <img src={image} alt="" loading="lazy" />
              <div className="donation-choice__body">
                <span className="donation-choice__icon"><Icon size={23} aria-hidden="true" /></span>
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="donation-impact-summary" aria-labelledby="donation-impact-summary-title">
        <h2 id="donation-impact-summary-title">{t('¿Qué logra tu donación?')}</h2>
        <p>{t('Tu aporte se destina directamente a nuestras jornadas de reforestación, la producción de plantines en viveros y talleres de educación ambiental, generando un impacto real y duradero.')}</p>
        <div className="donation-impact-summary__grid">
          {impact.map(({ title, description, icon: Icon }) => (
            <article key={title}>
              <span><Icon size={27} aria-hidden="true" /></span>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="donation-steps" aria-labelledby="donation-steps-title">
        <h2 id="donation-steps-title">{t('¿Cómo donar?')}</h2>
        <ol>
          {steps.map(({ title, description, icon: Icon }, index) => (
            <li key={title}>
              <span className="donation-step__icon"><Icon size={24} aria-hidden="true" /></span>
              <span className="donation-step__number">0{index + 1}</span>
              <div><h3>{t(title)}</h3><p>{t(description)}</p></div>
              {index < steps.length - 1 && <ArrowRight className="donation-step__arrow" size={24} aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <div className="donation-closing">
          <span className="donation-closing__trees"><TreePine size={40} aria-hidden="true" /></span>
          <h3>{t('Tu aporte siembra futuro')}</h3>
          <p>{t('Juntos podemos recuperar nuestros bosques y construir un Perú más verde y sostenible.')}</p>
          <a href="#aportar">{t('Quiero donar')} <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </section>
    </>
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
        {!isMembership && <DonationJourney />}
        {isMembership && <>
        <CollapsibleSection
          title={t(isMembership ? '¿POR QUÉ SER MIEMBRO DE SEMBRANDO PERÚ?' : '¿POR QUÉ DONAR A SEMBRANDO PERÚ?')}
          titleId="donation-about-title"
          sectionClassName="donation-about"
        >
          <p>{t(isMembership ? 'Al hacerte miembro de Sembrando Perú, te sumas a una comunidad comprometida con el bienestar de las personas y el cuidado de la naturaleza. Tu apoyo acompaña iniciativas de reforestación, educación y salud junto a comunidades rurales.' : 'Tu aporte contribuye al trabajo de Sembrando Perú en reforestación, educación ambiental y trabajo con las comunidades rurales. Cada árbol que sembramos hoy es una oportunidad para el mañana.')}</p>
        </CollapsibleSection>
        <CollapsibleSection
          title={t('¿CÓMO CONTRIBUYES CON TU DONACIÓN A SEMBRANDO PERÚ?')}
          titleId="donation-how-title"
          sectionClassName="donation-how"
        >
          <div className="donation-how__copy">
            <p>{t('Tu aporte puede contribuir a la recuperación de áreas degradadas, al trabajo con comunidades locales y a la educación ambiental.')}</p>
          </div>
          <img className="donation-how__image" src={impactImage} alt={t("Integrantes de Sembrando Perú trabajando junto a la comunidad")} />
        </CollapsibleSection>
        <DonationWelcome />
        <ImpactAreas />
        <DonationPurpose />
        </>}
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
