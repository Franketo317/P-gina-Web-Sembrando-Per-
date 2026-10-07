import { useLanguage } from './LanguageContext'
import childrenImage from '../assets/figma/imgBlogImage5.png'
import learningImage from '../assets/figma/imgBlogImage4.png'
import forestImage from '../assets/figma/imgBlogImage1.png'
import './ValuesSection.css'

export const valuesData = [
  {
    title: 'SOSTENIBILIDAD',
    description:
      'Compromiso con el uso responsable de los recursos naturales, promoviendo soluciones que respeten el equilibrio ecológico y favorezcan la conservación a largo plazo.',
  },
  {
    title: 'COMPROMISO SOCIAL',
    description:
      'Prioridad en la mejora de la calidad de vida de las comunidades rurales, centrándose en soluciones que aborden la educación, la salud y el bienestar de las personas más vulnerables.',
  },
  {
    title: 'INNOVACIÓN',
    description:
      'Apertura a nuevas ideas y métodos creativos para resolver problemas medioambientales, educativos y sanitarios, buscando soluciones prácticas y eficaces como el uso de contenedores o cajas de semillas.',
  },
]

export default function ValuesSection() {
  const { t } = useLanguage()

  return (
    <section className="about-values" id="valores" aria-labelledby="values-title">
      <div className="about-values__layout">
        <div className="about-values__gallery" aria-label={t('Acciones de Sembrando Perú')}>
          <div className="about-values__photo about-values__photo--wide">
            <img src={childrenImage} alt="Niños participando en actividades educativas" />
            <span>{t(valuesData[0].title)}</span>
          </div>
          <div className="about-values__photo">
            <img src={learningImage} alt="Jornada comunitaria de salud" />
            <span>{t(valuesData[1].title)}</span>
          </div>
          <div className="about-values__photo">
            <img src={forestImage} alt="Equipo de Sembrando Perú en un bosque" />
            <span>{t(valuesData[2].title)}</span>
          </div>
        </div>
        <div className="about-values__copy">
          <h2 id="values-title">{t('Valores')}</h2>
          {valuesData.map((value) => (
            <article key={value.title}>
              <h3>{t(value.title)}</h3>
              <p>{t(value.description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
