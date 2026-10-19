import { ArrowRight, ChevronRight, Globe, Handshake, Home, Landmark, Sprout, Users } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../components/LanguageContext'
import { BlogFooter } from './BlogPage'
import { CollapsibleSection } from './DonationPage'
import heroImage from '../assets/figma/alianzas3.jpg'
import communityImage from '../assets/figma/blog-article-community.jpg'
import './AlliancesPage.css'

const copy = {
  es: {
    title: 'JUNTOS SEMBRAMOS', titleEnd: 'MÁS OPORTUNIDADES',
    lead: 'Unimos comunidades, voluntariado e instituciones para impulsar la reforestación, la educación y la salud en el Perú.',
    alliances: 'Alianzas', invitation: 'SEAMOS ALIADOS',
    invitationText: 'Tu organización puede aportar conocimientos, asistencia técnica, recursos o apoyo logístico a nuestras iniciativas comunitarias.',
    action: 'Proponer una alianza',
    about: 'ALIANZAS QUE TRANSFORMAN COMUNIDADES',
    aboutText: 'Sembrando Perú es una organización sin fines de lucro que promueve el desarrollo integral de comunidades rurales. Nuestra estrategia de intervención articula saberes locales, participación ciudadana y cooperación institucional en la Amazonía y los Andes.',
    community: 'ALIANZAS ESTRATÉGICAS COMUNITARIAS',
    communityIntro: 'El trabajo directo con las comunidades es el motor de nuestras acciones. Construimos cada iniciativa junto a quienes conocen y cuidan su territorio.',
    farmers: 'Comunidades nativas y agricultores locales',
    farmersText: 'En la Amazonía y los Andes, los comuneros aportan su conocimiento del terreno y su trabajo. Sembrando Perú acompaña con asistencia técnica y plantones para la reforestación con especies nativas.',
    families: 'Familias y líderes comunales rurales',
    familiesText: 'Las familias y los líderes locales son esenciales para la alfabetización y las campañas contra la anemia infantil. Las madres de familia acompañan el seguimiento del cuidado nutricional de los niños en las comunidades intervenidas.',
    networks: 'REDES DE VOLUNTARIADO NACIONAL E INTERNACIONAL',
    networksIntro: 'Las plataformas de participación social permiten conectar nuestros proyectos con talento profesional, apoyo técnico y personas que quieren contribuir desde el Perú y otros países.',
    proa: 'PROA · Plataforma de Voluntariado en Perú',
    proaText: 'Un espacio para difundir convocatorias y conectar con psicólogos, docentes, agrónomos, médicos y personas que brindan soporte corporativo en Lima y provincias.',
    proaLink: 'Conocer el perfil en PROA',
    idealist: 'Idealist · Red de Impacto Social',
    idealistText: 'Una red internacional que da visibilidad a nuestros proyectos ante cooperantes de otros países y facilita el encuentro con especialistas, voluntarios y donantes independientes.',
    idealistLink: 'Conocer el perfil en Idealist',
    institutions: 'ALIANZAS INSTITUCIONALES Y FINANCIAMIENTO COLECTIVO',
    institutionsIntro: 'La articulación institucional y la coordinación territorial fortalecen la continuidad de las iniciativas y las oportunidades de cooperación.',
    apci: 'APCI · Agencia Peruana de Cooperación Internacional',
    apciText: 'La inscripción de la organización en APCI sirve como respaldo institucional y puente hacia oportunidades de cooperación internacional con embajadas y organismos multilaterales enfocados en el cuidado de la Amazonía.',
    local: 'Gobiernos locales y municipalidades distritales',
    localText: 'Coordinamos en las regiones de intervención el uso de espacios públicos, la logística para campañas de salud infantil y la articulación con centros educativos rurales.',
    how: '¿CÓMO PUEDE SUMARSE TU ORGANIZACIÓN?',
    howText: 'Cuéntanos quiénes son, en qué región trabajan y cómo les gustaría colaborar. El equipo de Sembrando Perú podrá conocer su propuesta y coordinar las posibilidades de trabajo conjunto.',
    sources: 'Conoce más sobre nuestro trabajo', official: 'Quiénes somos', programs: 'Nuestros programas',
    heroAlt: 'Camino rodeado de un bosque en las montañas del Perú',
    communityAlt: 'Participación comunitaria en las iniciativas de Sembrando Perú',
  },
  en: {
    title: 'TOGETHER WE GROW', titleEnd: 'MORE OPPORTUNITIES',
    lead: 'We bring communities, volunteers and institutions together to support reforestation, education and health in Peru.',
    alliances: 'Partnerships', invitation: 'BECOME A PARTNER',
    invitationText: 'Your organization can contribute knowledge, technical assistance, resources or logistical support to our community initiatives.',
    action: 'Propose a partnership',
    about: 'PARTNERSHIPS THAT TRANSFORM COMMUNITIES',
    aboutText: 'Sembrando Perú is a nonprofit organization promoting the integral development of rural communities. Our approach brings together local knowledge, citizen participation and institutional cooperation in the Amazon and Andes.',
    community: 'STRATEGIC COMMUNITY PARTNERSHIPS',
    communityIntro: 'Working directly with communities drives our activities. We build each initiative alongside the people who know and care for their land.',
    farmers: 'Native communities and local farmers',
    farmersText: 'In the Amazon and Andes, community members contribute their knowledge of the land and their work. Sembrando Perú provides technical assistance and seedlings for reforestation with native species.',
    families: 'Rural families and community leaders',
    familiesText: 'Families and local leaders are essential to literacy initiatives and campaigns against childhood anemia. Mothers help monitor children’s nutritional care in the communities we work with.',
    networks: 'NATIONAL AND INTERNATIONAL VOLUNTEER NETWORKS',
    networksIntro: 'Social participation platforms connect our projects with professional talent, technical support and people who want to contribute from Peru and abroad.',
    proa: 'PROA · Peru’s Volunteering Platform',
    proaText: 'A space to share opportunities and connect with psychologists, teachers, agronomists, doctors and people providing corporate support in Lima and other regions.',
    proaLink: 'View our PROA profile',
    idealist: 'Idealist · Social Impact Network',
    idealistText: 'An international network that showcases our projects to supporters in other countries and connects us with specialists, volunteers and independent donors.',
    idealistLink: 'View our Idealist profile',
    institutions: 'INSTITUTIONAL PARTNERSHIPS AND COLLECTIVE FUNDING',
    institutionsIntro: 'Institutional cooperation and local coordination strengthen the continuity of our initiatives and create opportunities to work together.',
    apci: 'APCI · Peruvian Agency for International Cooperation',
    apciText: 'The organization’s registration with APCI provides institutional backing and a bridge to international cooperation opportunities with embassies and multilateral organizations focused on caring for the Amazon.',
    local: 'Local governments and district municipalities',
    localText: 'In the regions where we work, we coordinate access to public spaces, logistics for child health campaigns and collaboration with rural schools.',
    how: 'HOW CAN YOUR ORGANIZATION GET INVOLVED?',
    howText: 'Tell us who you are, which region you work in and how you would like to contribute. The Sembrando Perú team can learn about your proposal and discuss opportunities to work together.',
    sources: 'Learn more about our work', official: 'About us', programs: 'Our programs',
    heroAlt: 'A path surrounded by forest in the mountains of Peru',
    communityAlt: 'Community participation in Sembrando Perú initiatives',
  },
}

export default function AlliancesPage() {
  const { language, t } = useLanguage()
  const text = copy[language]
  const groups = [
    { id: 'community', title: text.community, intro: text.communityIntro, cards: [
      { title: text.farmers, description: text.farmersText, icon: Sprout },
      { title: text.families, description: text.familiesText, icon: Users },
    ] },
    { id: 'networks', title: text.networks, intro: text.networksIntro, cards: [
      { title: text.proa, description: text.proaText, icon: Handshake, href: 'https://proa.pe/ong/sembrando-peru', link: text.proaLink },
      { title: text.idealist, description: text.idealistText, icon: Globe, href: 'https://www.idealist.org/es/ong/311152b33b934fbda03929e1cec60dbe-sembrando-peru-lince', link: text.idealistLink },
    ] },
    { id: 'institutions', title: text.institutions, intro: text.institutionsIntro, cards: [
      { title: text.apci, description: text.apciText, icon: Landmark },
      { title: text.local, description: text.localText, icon: Handshake },
    ] },
  ]

  return (
    <div className="donation-page alliances-page">
      <SiteHeader />
      <main>
        <section className="donation-hero alliances-hero" aria-labelledby="alliances-title">
          <img className="donation-hero__image" src={heroImage} alt={text.heroAlt} />
          <div className="donation-hero__shade" />
          <SocialLinks />
          <div className="donation-hero__content">
            <h1 id="alliances-title">{text.title}<br />{text.titleEnd}</h1>
            <p>{text.lead}</p>
          </div>
          <aside className="alliances-invitation">
            <Handshake aria-hidden="true" />
            <h2>{text.invitation}</h2>
            <p>{text.invitationText}</p>
            <a className="alliances-action" href="/contacto">{text.action}<ArrowRight aria-hidden="true" /></a>
          </aside>
        </section>
        <nav className="donation-breadcrumbs" aria-label={t('Ruta de navegación')}>
          <ol>
            <li><a href="/" aria-label={t('Inicio')}><Home aria-hidden="true" /></a></li>
            <li><ChevronRight aria-hidden="true" /><span aria-current="page">{text.alliances}</span></li>
          </ol>
        </nav>
        <CollapsibleSection title={text.about} titleId="alliances-about" sectionClassName="donation-about">
          <p>{text.aboutText}</p>
        </CollapsibleSection>
        {groups.map((group) => (
          <CollapsibleSection key={group.id} title={group.title} titleId={`alliances-${group.id}`} sectionClassName="donation-impact alliances-group">
            <p className="donation-impact__intro">{group.intro}</p>
            <div className="alliances-grid">
              {group.cards.map((card) => (
                <article className="alliances-card" key={card.title}>
                  <span className="alliances-card__icon"><card.icon aria-hidden="true" /></span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  {'href' in card && <a href={card.href} target="_blank" rel="noopener noreferrer">{card.link}<ArrowRight aria-hidden="true" /><span className="alliances-sr-only"> ({t('Se abre en otra pestaña')})</span></a>}
                </article>
              ))}
            </div>
          </CollapsibleSection>
        ))}
        <CollapsibleSection title={text.how} titleId="alliances-how" sectionClassName="donation-how alliances-how">
          <div className="donation-how__copy"><p>{text.howText}</p></div>
          <img className="donation-how__image" src={communityImage} alt={text.communityAlt} loading="lazy" />
          <a className="alliances-action" href="/contacto">{text.action}<ArrowRight aria-hidden="true" /></a>
        </CollapsibleSection>
        <nav className="alliances-sources" aria-label={text.sources}>
          <p>{text.sources}</p>
          <a href="https://sembrandoperu.org.pe/about/" target="_blank" rel="noopener noreferrer">{text.official}</a>
          <a href="https://sembrandoperu.org.pe/services/" target="_blank" rel="noopener noreferrer">{text.programs}</a>
        </nav>
      </main>
      <BlogFooter />
    </div>
  )
}
