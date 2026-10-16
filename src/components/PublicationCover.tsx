import logo from '../assets/figma/imgImage4.png'
import './PublicationCover.css'

type Props = {
  title: string
  category: string
  year: string
  image: string
  variant: 'forest' | 'community' | 'health'
}

export default function PublicationCover({ title, category, year, image, variant }: Props) {
  return (
    <span className={`publication-cover publication-cover--${variant}`}>
      <span className="publication-cover__page">
        <img className="publication-cover__photo" src={image} alt="" loading="lazy" />
        <span className="publication-cover__heading">
          <span className="publication-cover__category">{category} · {year}</span>
          <span className="publication-cover__title">{title}</span>
          <span className="publication-cover__rule" />
        </span>
      </span>
      <span className="publication-cover__footer">
        <img src={logo} alt="" />
        <span>SEMBRANDO PERÚ</span>
      </span>
    </span>
  )
}
