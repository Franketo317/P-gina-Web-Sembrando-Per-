import { useState } from 'react'
import arrowRight from '../assets/figma/imgArrowRight.svg'
import aboutHero from '../assets/figma/about-hero-background.png'
import storyCard from '../assets/figma/about-story-card.png'
import logo from '../assets/figma/imgImage4.png'
import LanguageSwitcher from '../components/LanguageSwitcher'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import greenLine from '../assets/figma/imgGreenLine.svg'
import { BlogFooter } from './BlogPage'
import './NosotrosPage.css'

function AboutHero() {
  const { t } = useLanguage()

  return (
    <>
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
        aria-labelledby="about-title"
      >
        <div className="about-hero__content">
          <h1 id="about-title">{t('NUESTRA HISTORIA')}</h1>
          <p>{t('Acompañamos a comunidades rurales para proteger los bosques y construir un futuro sostenible.')}</p>
        </div>
        <SocialLinks />
      </section>
    </>
  )
}

function OrganizationStory() {
  const { t } = useLanguage()

  return (
    <>
      <div className="about-mission-strip">
        <p>{t('Sembrando Perú impulsa soluciones sostenibles para proteger la Amazonía y fortalecer el bienestar de las comunidades rurales.')}</p>
      </div>
      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-story__history">
          <h2 id="about-story-title">{t('QUIÉNES SOMOS')}</h2>
          <img className="about-story__rule" src={greenLine} alt="" />
          <p>
            {t('Sembrando Perú es una organización sin fines de lucro comprometida con la protección de la Amazonía peruana y el desarrollo sostenible de las comunidades rurales.')}
          </p>
          <p>
            {t('Sembrando Perú nació con una misión clara y profundamente social: mitigar la deforestación, contribuir a la mejora de la educación en zonas rurales y apoyar la lucha contra la anemia infantil en las comunidades más vulnerables del país. Su creación surge como respuesta a la creciente degradación de los bosques nativos, la falta de acceso a educación de calidad y los graves problemas de salud que afectan a miles de niños en áreas rurales y altoandinas.')}
          </p>
        </div>
      </section>
      <section
        className="about-fact"
        style={{ backgroundImage: `url(${storyCard})` }}
        aria-labelledby="about-fact-title"
      >
        <div className="about-fact__content">
          <h2 id="about-fact-title">{t('¿SABÍAS QUE?')}</h2>
          <p>{t('La labor de Sembrando Perú integra la protección de los bosques, la educación rural y la salud infantil para contribuir al bienestar de las comunidades.')}</p>
        </div>
      </section>
      <section className="about-peru" aria-labelledby="about-peru-title">
        <div className="about-peru__content">
          <h2 id="about-peru-title">{t('EN EL PERÚ')}</h2>
          <img className="about-story__rule" src={greenLine} alt="" />
          <p>{t('Trabajamos con comunidades rurales de la Amazonía y los Andes mediante acciones de restauración de ecosistemas, educación ambiental, alfabetización y prevención en salud, junto a agricultores y familias locales.')}</p>
        </div>
      </section>
    </>
  )
}

function AboutFooter() {
  return <BlogFooter />
}

export default function NosotrosPage() {
  return (
    <div className="about-page">
      <SiteHeader />
      <AboutHero />
      <main>
        <OrganizationStory />
      </main>
      <AboutFooter />
    </div>
  )
}