import { useEffect, useRef, useState } from 'react'
import { ChevronRight, Home, Info, LockKeyhole, Mountain, Sprout, TreePine } from 'lucide-react'
import heroImage from '../assets/figma/donacion.jpg'
import impactImage from '../assets/figma/5.jpeg'
import reforestationImage from '../assets/figma/blog-article-reforestation.jpg'
import educationImage from '../assets/figma/imgBlogImage4.png'
import communityImage from '../assets/figma/blog-article-community.jpg'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import { BlogFooter } from './BlogPage'
import './DonationPage.css'

const impactAreas = [
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

function DonationHero() {
  const formSlotRef = useRef<HTMLDivElement>(null)
  const pinnedTopRef = useRef<number | null>(null)
  const [isFormPinned, setIsFormPinned] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
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
      const mainBounds = main.getBoundingClientRect()
      const minimumPinnedTop = headerBounds.height + 16
      if (pinnedTopRef.current === null || pinnedTopRef.current < minimumPinnedTop) {
        pinnedTopRef.current = Math.max(minimumPinnedTop, formSlotBounds.top)
      }
      const stickyTop = pinnedTopRef.current
      formSlot.style.setProperty('--donation-form-sticky-top', `${stickyTop}px`)
      const shouldPinForm = window.innerWidth >= 621
        && mainBounds.bottom > stickyTop + formBounds.height + 16
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
    return () => {
      window.removeEventListener('scroll', updateDonateButtonVisibility)
      window.removeEventListener('resize', updateDonateButtonVisibility)
    }
  }, [])

  return (
    <section className={`donation-hero${isFormPinned ? ' is-form-pinned' : ''}`} aria-labelledby="donation-hero-title">
      <img className="donation-hero__image" src={heroImage} alt="Manos plantando un árbol joven" />
      <div className="donation-hero__shade" />
      <SocialLinks />
      <div className="donation-hero__content">
        <h1 id="donation-hero-title">{t('ÚNETE AL CAMBIO,')} {t('DONA HOY!')}</h1>
        <p>Tu donación hace posible más acciones de reforestación, educación y desarrollo sostenible en las comunidades del Perú.</p>
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

function DonationBreadcrumbs() {
  const { t } = useLanguage()

  return (
    <nav className="donation-breadcrumbs" aria-label={t('Ruta de navegación')}>
      <ol>
        <li>
          <a href="/" aria-label={t('Inicio')}>
            <Home aria-hidden="true" />
          </a>
        </li>
        <li><ChevronRight aria-hidden="true" /><a href="/donacion">{t('Donación')}</a></li>
        <li><ChevronRight aria-hidden="true" /><span aria-current="page">{t('Donación general')}</span></li>
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
        {impactAreas.map((area) => (
          <article className="donation-impact-card" key={area.title}>
            <img src={area.image} alt={area.alt} />
            <div><h3>{t(area.title)}</h3><p>{t(area.description)}</p></div>
          </article>
        ))}
      </div>
    </CollapsibleSection>
  )
}

function DonationFaq() {
  const [openQuestion, setOpenQuestion] = useState(0)
  const [isExpanded, setIsExpanded] = useState(true)
  const { t } = useLanguage()

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
          <div className="donation-faq__list">
            {questions.map((item, index) => (
              <details key={item.question} open={openQuestion === index} onToggle={(event) => {
                if ((event.currentTarget as HTMLDetailsElement).open) setOpenQuestion(index)
              }}>
                <summary>{t(item.question)}<span aria-hidden="true">{openQuestion === index ? '−' : '+'}</span></summary>
                {openQuestion === index && <p>{t(item.answer)}</p>}
              </details>
            ))}
          </div>
          <a href="#donation-faq-title">{t('Ver más preguntas')}</a>
        </div>
      )}
    </section>
  )
}

export default function DonationPage() {
  const { t } = useLanguage()

  return (
    <div className="donation-page">
      <SiteHeader />
      <main>
        <DonationHero />
        <DonationBreadcrumbs />
        <CollapsibleSection
          title={t('¿POR QUÉ DONAR A SEMBRANDO PERÚ?')}
          titleId="donation-about-title"
          sectionClassName="donation-about"
        >
          <p>{t('Sembrando Perú trabaja para proteger y recuperar nuestros bosques, fortalecer a las comunidades mediante la reforestación, la educación ambiental y el fortalecimiento de las capacidades locales. Tu donación financia directamente la siembra de árboles, el mantenimiento de viveros y el desarrollo de un entorno más verde y saludable para todos.')}</p>
        </CollapsibleSection>
        <CollapsibleSection
          title={t('¿CÓMO CONTRIBUYES CON TU DONACIÓN A SEMBRANDO PERÚ?')}
          titleId="donation-how-title"
          sectionClassName="donation-how"
        >
          <div className="donation-how__copy">
            <p>{t('Tu donación se destina directamente a nuestras jornadas de reforestación, la producción de plantines en viveros y talleres de educación ambiental. Cada aporte asegura la transparencia y continuidad de nuestros proyectos en las comunidades.')}</p>
          </div>
          <img className="donation-how__image" src={impactImage} alt="Integrantes de Sembrando Perú trabajando junto a la comunidad" />
        </CollapsibleSection>
        <ImpactAreas />
        <DonationFaq />
      </main>
      <BlogFooter />
    </div>
  )
}
