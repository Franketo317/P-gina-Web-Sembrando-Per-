import reforestation from '../assets/figma/blog-article-reforestation.jpg'
import education from '../assets/figma/imgBlogImage4.png'
import health from '../assets/figma/blog-article-health.jpg'
import nursery from '../assets/figma/imgBuildingBlocks169.jpg'
import community from '../assets/figma/blog-article-community.jpg'
import forest from '../assets/figma/imgBlogImage1.png'

// Editorial examples requested for the website; these are not official vacancies.
// Dates are illustrative and are labelled as such in the interface.
export const consultancies = [
  {
    slug: 'restauracion-ecologica-especies-nativas',
    title: 'Consultoría: “Servicio de asistencia técnica para la restauración de bosques con especies nativas y participación comunitaria”',
    description: 'Diseño de una propuesta de restauración ecológica que articule el cuidado del bosque con la participación de agricultores y familias de comunidades rurales.',
    publishedAt: '2026-10-20',
    image: reforestation,
    alt: 'Participación comunitaria en una jornada de reforestación',
    area: 'Reforestación',
    profile: 'Profesionales de ingeniería forestal, agronomía o ciencias ambientales con experiencia en restauración ecológica y trabajo participativo con comunidades.',
    deliverables: ['Diagnóstico participativo de las áreas a restaurar.', 'Propuesta de especies nativas, manejo y mantenimiento.', 'Plan de seguimiento de la supervivencia de plantones.'],
  },
  {
    slug: 'alfabetizacion-educacion-ambiental',
    title: 'Consultoría: “Diseño de un programa de alfabetización y educación ambiental para comunidades rurales”',
    description: 'Elaboración de una propuesta educativa que conecte lectura, escritura y cuidado del entorno mediante materiales adaptados a la realidad local.',
    publishedAt: '2026-10-16',
    image: education,
    alt: 'Actividad educativa con niñas y niños de una comunidad',
    area: 'Educación',
    profile: 'Profesionales de educación o ciencias sociales con experiencia en alfabetización, diseño de materiales y metodologías interculturales.',
    deliverables: ['Diagnóstico de necesidades de aprendizaje.', 'Guía de sesiones y materiales educativos contextualizados.', 'Herramientas de evaluación y acompañamiento a facilitadores.'],
  },
  {
    slug: 'educacion-nutricional-salud-infantil',
    title: 'Consultoría: “Diseño de una estrategia de educación nutricional y acompañamiento comunitario para la prevención de la anemia infantil”',
    description: 'Propuesta de educación y articulación comunitaria para apoyar el bienestar infantil, en coordinación con profesionales y servicios de salud.',
    publishedAt: '2026-10-12',
    image: health,
    alt: 'Jornada comunitaria de atención de salud',
    area: 'Salud',
    profile: 'Profesionales de nutrición, salud pública o educación para la salud con experiencia en promoción comunitaria y trabajo con familias.',
    deliverables: ['Diagnóstico de necesidades de educación nutricional.', 'Materiales educativos para familias y facilitadores.', 'Plan de coordinación con servicios de salud y seguimiento de actividades.'],
  },
  {
    slug: 'viveros-comunitarios',
    title: 'Consultoría: “Fortalecimiento de viveros comunitarios y producción de plantones para iniciativas de reforestación”',
    description: 'Propuesta técnica y formativa para acompañar a comunidades en la producción, el cuidado y el registro de plantones de especies nativas.',
    publishedAt: '2026-09-28',
    image: nursery,
    alt: 'Plantas y especies nativas en un vivero de Sembrando Perú',
    area: 'Reforestación',
    profile: 'Profesionales de agronomía o ingeniería forestal con conocimientos en viveros y capacitación de productores locales.',
    deliverables: ['Evaluación de condiciones del vivero.', 'Manual práctico de producción y cuidado de plantones.', 'Plan de capacitación y registro de producción.'],
  },
  {
    slug: 'capacidades-liderazgo-comunitario',
    title: 'Consultoría: “Programa de fortalecimiento de capacidades y liderazgo comunitario para proyectos socioambientales”',
    description: 'Diseño de herramientas participativas para impulsar la organización local y el involucramiento de familias en iniciativas ambientales y educativas.',
    publishedAt: '2026-09-15',
    image: community,
    alt: 'Integrantes de una comunidad participando en actividades locales',
    area: 'Comunidad',
    profile: 'Profesionales de ciencias sociales, educación o gestión de proyectos con experiencia en facilitación y desarrollo comunitario.',
    deliverables: ['Mapeo participativo de actores y capacidades.', 'Programa de talleres de liderazgo y organización.', 'Propuesta de acuerdos y seguimiento comunitario.'],
  },
  {
    slug: 'monitoreo-impacto-socioambiental',
    title: 'Consultoría: “Diseño de un sistema de monitoreo de resultados para iniciativas de reforestación, educación y salud comunitaria”',
    description: 'Propuesta de indicadores y herramientas sencillas para documentar actividades y aprender de los resultados de iniciativas socioambientales.',
    publishedAt: '2026-08-24',
    image: forest,
    alt: 'Bosque y actividades de conservación ambiental',
    area: 'Monitoreo',
    profile: 'Profesionales de gestión de proyectos, ciencias ambientales o ciencias sociales con experiencia en indicadores y evaluación participativa.',
    deliverables: ['Matriz de resultados e indicadores por área.', 'Formatos de registro y criterios de calidad de datos.', 'Modelo de reporte de avances y aprendizajes.'],
  },
]

export const consultancySource = 'https://sembrandoperu.org.pe/services/'
export const consultancyExampleNotice = 'Propuestas de ejemplo: no son convocatorias oficiales. Las fechas y los alcances son referenciales.'
