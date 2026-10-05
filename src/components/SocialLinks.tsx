import socialFacebook from '../assets/figma/imgPlatformFacebookColorNegative.svg'
import socialInstagram from '../assets/figma/imgSocialIcons1.svg'
import socialLinkedin from '../assets/figma/imgPlatformLinkedInColorNegative.svg'
import socialTiktok from '../assets/figma/imgPlatformTikTokColorNegative.svg'
import socialX from '../assets/figma/imgPlatformXTwitterColorNegative.svg'

const socialLinks = [
  { label: 'Facebook', image: socialFacebook, href: 'https://www.facebook.com/PeruSembrando'},
  { label: 'Instagram', image: socialInstagram, href: 'https://www.instagram.com/sembrando_peru/' },
  { label: 'X', image: socialX, href: 'https://x.com/PeruSembrando' },
  { label: 'LinkedIn', image: socialLinkedin, href: 'https://www.linkedin.com/company/sembrandoperu/' },
  { label: 'TikTok', image: socialTiktok, href: 'https://www.tiktok.com/@sembrando_peru' },
]

export default function SocialLinks() {
  return (
    <div className="hero-socials" aria-label="Redes sociales">
      {socialLinks.map((social) => (
        <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} key={social.label}>
          <img src={social.image} alt="" />
        </a>
      ))}
    </div>
  )
}