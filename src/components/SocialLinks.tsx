import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialInstagram from '../assets/figma/imgSocialIcons1.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'

const socialLinks = [
  { label: 'Facebook', image: socialFacebook },
  { label: 'Instagram', image: socialInstagram },
  { label: 'X', image: socialX },
  { label: 'LinkedIn', image: socialLinkedin },
  { label: 'TikTok', image: socialTiktok },
]

export default function SocialLinks() {
  return (
    <div className="hero-socials" aria-label="Redes sociales">
      {socialLinks.map((social) => (
        <a href="#redes" aria-label={social.label} key={social.label}>
          <img src={social.image} alt="" />
        </a>
      ))}
    </div>
  )
}