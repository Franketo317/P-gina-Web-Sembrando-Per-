import { useState } from 'react'
import logo from '../assets/figma/imgImage4.png'
import heroImage from '../assets/figma/donacion.jpg'
import impactImage from '../assets/figma/5.jpeg'
import reforestationImage from '../assets/figma/blog-article-reforestation.jpg'
import educationImage from '../assets/figma/imgBlogImage4.png'
import healthImage from '../assets/figma/blog-article-health.jpg'
import communityImage from '../assets/figma/blog-article-community.jpg'
import greenLine from '../assets/figma/imgGreenLine.svg'
import { BlogFooter } from './BlogPage'
import './DonationPage.css'

const impactAreas = [
  {
    title: 'REFORESTACIÓN Y RESTAURACIÓN ECOLÓGICA',
    description: 'Restauramos los bosques amazónicos con especies nativas y protegemos la biodiversidad de nuestro territorio.',
    image: reforestationImage,
    alt: 'Jornada de reforestación en la Amazonía',
  },
  {
    title: 'CONSERVACIÓN DE BIODIVERSIDAD Y FAUNA NATIVA',
    description: 'Promovemos la conservación de los ecosistemas y de las especies que habitan nuestros bosques.',
    image: communityImage,
    alt: 'Comunidad local participando en acciones de conservación',
  },
  {
    title: 'EDUCACIÓN Y CONCIENCIA AMBIENTAL',
    description: 'Impulsamos aprendizajes que fortalecen el cuidado del ambiente y crean nuevas oportunidades.',
    image: educationImage,
    alt: 'Niños participando en una actividad educativa',
  },
  {
    title: 'SALUD Y BIENESTAR EN COMUNIDADES',
    description: 'Acompañamos a familias con iniciativas de salud, nutrición y desarrollo comunitario.',
    image: healthImage,
    alt: 'Jornada de salud en una comunidad',
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

function DonationHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="donation-header">
      <a className="donation-header__brand" href="/" aria-label="Sembrando Perú, inicio">
        <img src={logo} alt="Sembrando Perú" />
      </a>
      <button
        className="donation-header__toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="donation-navigation"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
      <nav className={`donation-navigation${menuOpen ? ' donation-navigation--open' : ''}`} id="donation-navigation">
        <a href="/">INICIO</a>
        <a href="/nosotros">NOSOTROS</a>
        <a href="/blog">BLOG</a>
        <a className="donation-navigation__active" href="/donacion">DONACIONES<img src={greenLine} alt="" /></a>
      </nav>
      <div className="donation-header__language" aria-label="Idioma: español">◎ &nbsp; ES &nbsp;|&nbsp; Español &nbsp;⌄</div>
      <a className="donation-header__button" href="#aportar">DONACIÓN</a>
    </header>
  )
}

function DonationForm() {
  const [amount, setAmount] = useState('30')
  const [frequency, setFrequency] = useState('Mensual')
  const [customAmount, setCustomAmount] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const donationAmount = customAmount || amount
    window.location.href = `mailto:contacto@sembrandoperu.org?subject=${encodeURIComponent('Donación a Sembrando Perú')}&body=${encodeURIComponent(`Quiero realizar una donación ${frequency.toLowerCase()} de S/ ${donationAmount}.`)}`
  }

  return (
    <form className="donation-form" id="aportar" onSubmit={handleSubmit}>
      <h2>TU CONTRIBUCIÓN</h2>
      <div className="donation-form__frequency" role="group" aria-label="Frecuencia de donación">
        {['Mensual', 'Única'].map((option) => (
          <button
            className={frequency === option ? 'is-selected' : ''}
            type="button"
            key={option}
            onClick={() => setFrequency(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <fieldset>
        <legend>Elige el monto</legend>
        {['10', '30', '50', '100'].map((value) => (
          <label className={amount === value && !customAmount ? 'is-selected' : ''} key={value}>
            <input
              type="radio"
              name="donationAmount"
              value={value}
              checked={amount === value && !customAmount}
              onChange={() => { setAmount(value); setCustomAmount('') }}
            />
            <span>S/ {value}</span>
          </label>
        ))}
      </fieldset>
      <label className="donation-form__custom">
        <span>Otro monto</span>
        <span className="donation-form__custom-input"><span>S/</span><input aria-label="Otro monto en soles" type="number" min="1" value={customAmount} onChange={(event) => setCustomAmount(event.target.value)} placeholder="0" /></span>
      </label>
      <button className="donation-form__submit" type="submit">DONAR</button>
      <p>Tu aporte transforma vidas y protege nuestros bosques.</p>
    </form>
  )
}

function DonationHero() {
  return (
    <section className="donation-hero" aria-labelledby="donation-hero-title">
      <img className="donation-hero__image" src={heroImage} alt="Manos plantando un árbol joven" />
      <div className="donation-hero__shade" />
      <div className="donation-hero__content">
        <h1 id="donation-hero-title">ÚNETE AL CAMBIO,<br />DONA HOY!</h1>
        <p>Tu donación hace posible más acciones de reforestación, educación y desarrollo sostenible en las comunidades del Perú.</p>
      </div>
      <DonationForm />
    </section>
  )
}

function ImpactAreas() {
  return (
    <section className="donation-impact" aria-labelledby="donation-impact-title">
      <h2 id="donation-impact-title">SEMBREMOS UN FUTURO SOSTENIBLE PARA EL PERÚ</h2>
      <p className="donation-impact__intro">Tus aportes impulsan el trabajo integral de Sembrando Perú, promoviendo iniciativas ecológicas y comunitarias en nuestras regiones clave.</p>
      <div className="donation-impact__grid">
        {impactAreas.map((area) => (
          <article className="donation-impact-card" key={area.title}>
            <img src={area.image} alt={area.alt} />
            <div><h3>{area.title}</h3><p>{area.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

function DonationFaq() {
  const [openQuestion, setOpenQuestion] = useState(0)

  return (
    <section className="donation-faq" aria-labelledby="donation-faq-title">
      <h2 id="donation-faq-title">PREGUNTAS FRECUENTES</h2>
      <div className="donation-faq__list">
        {questions.map((item, index) => (
          <details key={item.question} open={openQuestion === index} onToggle={(event) => {
            if ((event.currentTarget as HTMLDetailsElement).open) setOpenQuestion(index)
          }}>
            <summary>{item.question}<span aria-hidden="true">{openQuestion === index ? '−' : '+'}</span></summary>
            {openQuestion === index && <p>{item.answer}</p>}
          </details>
        ))}
      </div>
      <a href="#donation-faq-title">Ver más preguntas</a>
    </section>
  )
}

export default function DonationPage() {
  return (
    <div className="donation-page">
      <DonationHeader />
      <main>
        <DonationHero />
        <section className="donation-about" aria-labelledby="donation-about-title">
          <h2 id="donation-about-title">¿POR QUÉ DONAR A SEMBRANDO PERÚ?</h2>
          <p>Sembrando Perú trabaja para proteger y recuperar nuestros bosques, fortalecer a las comunidades mediante la reforestación, la educación ambiental y el fortalecimiento de las capacidades locales. Tu donación financia directamente la siembra de árboles, el mantenimiento de viveros y el desarrollo de un entorno más verde y saludable para todos.</p>
        </section>
        <section className="donation-how" aria-labelledby="donation-how-title">
          <h2 id="donation-how-title">¿CÓMO CONTRIBUYES CON TU DONACIÓN A SEMBRANDO PERÚ?</h2>
          <div className="donation-how__copy">
            <p>Tu donación se destina directamente a nuestras jornadas de reforestación, la producción de plantines en viveros y talleres de educación ambiental. Cada aporte asegura la transparencia y continuidad de nuestros proyectos en las comunidades.</p>
            <p>Juntos hacemos crecer oportunidades, recuperamos ecosistemas y construimos un futuro sostenible para el Perú.</p>
          </div>
          <img className="donation-how__image" src={impactImage} alt="Integrantes de Sembrando Perú trabajando junto a la comunidad" />
        </section>
        <ImpactAreas />
        <DonationFaq />
      </main>
      <BlogFooter />
    </div>
  )
}