import aboutHero from '../assets/figma/Nuestros.jpg'
import communityWorkImage from '../assets/figma/principios1.jpg'
import SocialLinks from '../components/SocialLinks'
import SiteHeader from '../components/SiteHeader'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import './HowWeWorkPage.css'

const workMethodCards = [
  {
    title: 'TRABAJAMOS JUNTO A LAS COMUNIDADES',
    label: 'PARTICIPACIÓN LOCAL',
    text:
      'Los programas de reforestación de Sembrando Perú involucran activamente a las comunidades locales, especialmente a agricultores y sus familias. Su participación en las jornadas de plantación fortalece el compromiso con la conservación de la Amazonía y los bosques peruanos.',
    href: '/#programas',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 46c0-6.6 4.4-12 10-12s10 5.4 10 12M22 26c0-4.2 3.4-7.6 7.6-7.6S37.2 21.8 37.2 26 33.8 33.6 29.6 33.6 22 30.2 22 26Zm12.6-9.8c2.5 0 4.6-2 4.6-4.6S37.1 7 34.6 7s-4.6 2-4.6 4.6 2.1 4.6 4.6 4.6Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'IMPULSAMOS ACCIONES EN EL TERRITORIO',
    label: 'REFORESTACIÓN',
    text:
      'Las jornadas de plantación contribuyen a restaurar bosques degradados de la Amazonía y proteger su biodiversidad.',
    href: '/#programas',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 54V30m0 0 12-12M32 30 20 18M32 54l-12-12m12 12 12-12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 18h24v24H20z" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: 'BUSCAMOS UN IMPACTO DURADERO',
    label: 'DESARROLLO SOSTENIBLE',
    text:
      'Integramos la conservación ambiental y el desarrollo de las comunidades rurales para contribuir al bienestar de las familias.',
    href: '/#programas',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 12v28M18 26c0-9 6-14 14-14s14 5 14 14-6 14-14 14-14-5-14-14Zm0 10h28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function HowWeWorkPage() {
  const { t } = useLanguage()

  return (
    <div className="home-page how-we-work-page">
      <SiteHeader />
      <section
        className="work-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
        aria-labelledby="work-title"
      >
        <h1 id="work-title">{t('NUESTROS PRINCIPIOS')}</h1>
        <SocialLinks placement="banner" />
      </section>
      <main>
        <section className="work-intro" aria-label={t('Sobre nuestro enfoque')}>
          <p>
            {t('Protegemos la Amazonía peruana y promovemos el desarrollo sostenible junto a las comunidades rurales. A través de la reforestación activa con especies nativas, no solo restauramos ecosistemas degradados, sino que empoderamos a las familias locales creando economías verdes y sostenibles. Trabajamos mano a mano con la población para asegurar que el cuidado de la biodiversidad vaya alineado con la seguridad alimentaria, la educación y la erradicación de la anemia infantil, transformando el futuro de nuestra selva desde sus raíces.')}
          </p>
        </section>
        <section
          className="work-community"
          style={{ backgroundImage: `url(${communityWorkImage})` }}
          aria-label={t('Nuestro trabajo junto a las comunidades')}
        >
          <div className="work-community__message">
            <p>{t('Nuestro trabajo se construye junto a las comunidades rurales: restauramos ecosistemas, promovemos la educación y acompañamos iniciativas de salud para fortalecer el bienestar local.')}</p>
          </div>
        </section>
        <section className="work-areas work-areas--single" aria-label={t('Nuestras áreas de trabajo')}>
          <div className="work-areas__grid">
            {workMethodCards.map((item) => (
              <article className="work-areas__item" key={item.title}>
                <h2 className="work-areas__title">{t(item.title)}</h2>

                <div className="work-areas__circle" aria-label={t(item.label)}>
                  {item.icon}
                  <span>{t(item.label)}</span>
                </div>

                <p className="work-areas__text">{t(item.text)}</p>

                {item.href ? (
                  <a className="work-areas__button" href={item.href}>
                    {t('CONOCE MÁS')}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
