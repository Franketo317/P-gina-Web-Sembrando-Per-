import forestImage from '../assets/figma/blog-article-reforestation.jpg'
import forestLandscape from '../assets/figma/blog-featured-forest.jpg'
import educationImage from '../assets/figma/imgBlogImage4.png'
import educationActivity from '../assets/figma/educacion.JPG?url'
import healthImage from '../assets/figma/imgBlogImage3.png'
import healthActivity from '../assets/figma/2.jpg'
import volunteersImage from '../assets/figma/vol4.JPG?url'
import communityImage from '../assets/figma/campañas.jpg'

export const campaigns = [
  {
    slug: 'sembrando-arboles', title: 'SEMBRANDO ÁRBOLES', theme: 'forest',
    image: forestImage, imageAlt: 'Jornada comunitaria de reforestación', secondaryImage: forestLandscape,
    headline: 'SEMBRAMOS ÁRBOLES, CULTIVAMOS FUTURO',
    intro: 'Cada árbol es una oportunidad para recuperar la vida de nuestros bosques. Sembrando Árboles conecta a familias, agricultores y voluntarios con el cuidado de la Amazonía peruana.',
    description: 'La recuperación de un bosque empieza con una semilla y continúa con el compromiso de quienes lo cuidan. Esta campaña invita a participar en la restauración de espacios degradados y a reconocer el valor de la naturaleza en la vida de las comunidades.',
    invitation: 'Ayúdanos a sembrar un futuro más verde.',
    contextTitle: 'EL BOSQUE TAMBIÉN ES NUESTRO HOGAR',
    context: 'Los bosques conectan la vida de las personas con la biodiversidad. Cuidarlos significa pensar en el agua, el suelo y el entorno que compartirán las próximas generaciones.',
    pillars: ['Recuperación de espacios naturales con participación local.', 'Aprendizaje sobre el cuidado de los árboles y su entorno.', 'Compromiso comunitario más allá de la jornada de plantación.'],
    challengeTitle: 'PLANTAR ES SOLO EL COMIENZO',
    challenge: 'La pérdida de cobertura forestal y la degradación del territorio son retos que requieren continuidad. Una jornada de plantación necesita acompañarse de cuidado, aprendizaje y organización local.',
    actionsTitle: 'UN ESFUERZO QUE CRECE EN COMUNIDAD',
    actions: ['Sumar a familias y voluntarios a las actividades de reforestación.', 'Promover el cuidado de los árboles y el respeto por la biodiversidad.', 'Vincular la educación ambiental con acciones cotidianas en el territorio.'],
    closing: 'Un árbol puede ser el inicio. Una comunidad comprometida puede hacer que ese cambio perdure.',
    programHref: '/reforestacion', programLabel: 'Conoce nuestro trabajo en reforestación',
    faq: [
      { question: '¿Cómo puedo participar?', answer: 'Escríbenos desde la página de contacto e indica tu interés en Sembrando Árboles. Consulta las actividades disponibles, la ubicación y los requisitos antes de organizar tu participación.' },
      { question: '¿Puedo apoyar sin asistir a una jornada?', answer: 'Sí. Puedes conocer las opciones de donación o contactar al equipo para proponer una colaboración desde tu comunidad, institución o empresa.' },
    ],
  },
  {
    slug: 'sembrando-educacion', title: 'SEMBRANDO EDUCACIÓN', theme: 'education',
    image: educationImage, imageAlt: 'Voluntarios y niños compartiendo materiales educativos', secondaryImage: educationActivity,
    headline: 'APRENDER HOY, TRANSFORMAR EL MAÑANA',
    intro: 'Aprender abre caminos. Sembrando Educación reúne a niños, familias y voluntarios alrededor de la alfabetización, el aprendizaje compartido y la igualdad de oportunidades.',
    description: 'Queremos acercar el conocimiento a la vida cotidiana de las comunidades rurales. Leer, descubrir y compartir saberes fortalece la participación de las personas y su capacidad para construir un futuro con más oportunidades.',
    invitation: 'Comparte tu tiempo y ayuda a abrir nuevas oportunidades.',
    contextTitle: 'EL APRENDIZAJE NOS CONECTA',
    context: 'La educación se construye en comunidad. Las experiencias de las familias y el conocimiento del territorio también forman parte de un aprendizaje cercano y significativo.',
    pillars: ['Alfabetización e igualdad de oportunidades.', 'Participación de niños y familias en el aprendizaje.', 'Educación ambiental conectada con el entorno local.'],
    challengeTitle: 'ACERCAR OPORTUNIDADES',
    challenge: 'Las brechas educativas y las dificultades de acceso a materiales limitan las oportunidades de aprendizaje. Acompañar a las comunidades implica escuchar sus necesidades y reconocer sus saberes.',
    actionsTitle: 'JUNTOS HACEMOS DEL APRENDIZAJE UNA OPORTUNIDAD',
    actions: ['Promover espacios de aprendizaje participativo con niños y familias.', 'Acercar la lectura y la alfabetización a la vida cotidiana.', 'Integrar el cuidado de la naturaleza y el bienestar en las actividades educativas.'],
    closing: 'Cada aprendizaje compartido puede abrir un camino para toda una comunidad.',
    programHref: '/educacion', programLabel: 'Conoce nuestro trabajo en educación',
    faq: [
      { question: '¿Necesito ser docente para colaborar?', answer: 'Contacta al equipo y cuéntanos tus habilidades e intereses. Las oportunidades y los requisitos dependen de cada actividad; el equipo te orientará sobre cómo puedes aportar.' },
      { question: '¿Puedo colaborar con materiales educativos?', answer: 'Antes de reunir o enviar materiales, consulta con el equipo cuáles se necesitan y cómo coordinar su entrega. Así tu apoyo responderá a las necesidades de la actividad.' },
    ],
  },
  {
    slug: 'sembrando-salud', title: 'SEMBRANDO SALUD', theme: 'health',
    image: healthImage, imageAlt: 'Participación comunitaria en una actividad de salud', secondaryImage: healthActivity,
    headline: 'CUIDAR LA INFANCIA ES SEMBRAR BIENESTAR',
    intro: 'El bienestar infantil se construye con las familias. Sembrando Salud impulsa la educación comunitaria y la participación para contribuir a la prevención de la anemia infantil en la Selva y la Sierra.',
    description: 'Esta campaña conecta el cuidado de las personas con el desarrollo de sus comunidades. Buscamos sumar esfuerzos alrededor de la prevención, el aprendizaje y el acompañamiento a las familias.',
    invitation: 'Suma tu apoyo al bienestar de niños y familias.',
    contextTitle: 'EL BIENESTAR EMPIEZA EN COMUNIDAD',
    context: 'Escuchar a las familias y comprender su realidad es parte de una respuesta cercana. La educación y la participación comunitaria ayudan a poner el bienestar de la infancia en el centro.',
    pillars: ['Educación comunitaria sobre salud y bienestar.', 'Participación de las familias en el cuidado infantil.', 'Articulación del bienestar con la educación y el entorno.'],
    challengeTitle: 'UNA INFANCIA CON MÁS OPORTUNIDADES',
    challenge: 'La anemia infantil y las brechas de acceso a la salud motivan nuestro compromiso con las comunidades rurales. Abordar estos desafíos requiere colaboración y una mirada integral a las necesidades de las familias.',
    actionsTitle: 'UN COMPROMISO COMPARTIDO CON EL CUIDADO',
    actions: ['Promover la educación comunitaria vinculada al bienestar infantil.', 'Sumar esfuerzos para contribuir a la prevención de la anemia.', 'Conectar las iniciativas de salud con el aprendizaje y la participación de las familias.'],
    closing: 'Cuando una comunidad se une para cuidar a su infancia, también cuida su futuro.',
    programHref: '/salud', programLabel: 'Conoce nuestro trabajo en salud',
    faq: [
      { question: '¿Cómo puedo apoyar esta campaña?', answer: 'Puedes consultar las opciones de donación o escribir al equipo para conocer las formas de colaboración disponibles en Sembrando Salud.' },
      { question: '¿Soy profesional de salud, puedo participar?', answer: 'Cuéntanos tu especialidad y disponibilidad desde la página de contacto. El equipo podrá informarte sobre las actividades y los requisitos de participación.' },
    ],
  },
  {
    slug: 'voluntariado', title: 'SÚMATE AL VOLUNTARIADO', theme: 'volunteers',
    image: volunteersImage, imageAlt: 'Voluntarios de Sembrando Perú trabajando en equipo', secondaryImage: communityImage,
    headline: 'TU TIEMPO PUEDE SEMBRAR UN CAMBIO',
    intro: 'Las grandes transformaciones empiezan con personas que deciden participar. El voluntariado de Sembrando Perú une el compromiso con la naturaleza, la educación y el bienestar de las comunidades.',
    description: 'Aportar tu tiempo y tus habilidades es una forma de construir en equipo. Queremos conectar a quienes desean colaborar con iniciativas que reconocen a las comunidades como protagonistas de su propio desarrollo.',
    invitation: 'Cuéntanos qué te mueve y cómo te gustaría aportar.',
    contextTitle: 'MUCHAS FORMAS DE SUMAR',
    context: 'Cada persona tiene algo que compartir. El trabajo en equipo, la escucha y el respeto por el territorio son el punto de partida de una participación responsable.',
    pillars: ['Naturaleza: colaborar con el cuidado del entorno.', 'Educación: compartir conocimientos y aprender en comunidad.', 'Bienestar: apoyar iniciativas para niños y familias.'],
    challengeTitle: 'PARTICIPAR CON COMPROMISO',
    challenge: 'El voluntariado necesita preparación y continuidad. Antes de participar, es fundamental conocer los objetivos de la actividad, las condiciones del lugar y las indicaciones del equipo organizador.',
    actionsTitle: 'DEL INTERÉS A LA ACCIÓN',
    actions: ['Explora nuestras campañas y elige la causa con la que te identificas.', 'Escríbenos indicando tus habilidades, intereses y disponibilidad.', 'Coordina con el equipo los requisitos y las oportunidades disponibles antes de asistir.'],
    closing: 'Compartir lo que sabes, escuchar y trabajar en equipo también es una forma de sembrar futuro.',
    programHref: '/como-trabajamos', programLabel: 'Conoce cómo trabajamos',
    faq: [
      { question: '¿Cómo me sumo al voluntariado?', answer: 'Usa el botón de contacto y cuéntanos tu interés en participar, tu disponibilidad y las habilidades que quieres compartir. El equipo te orientará sobre las oportunidades disponibles.' },
      { question: '¿Hay actividades abiertas en este momento?', answer: 'Consulta directamente al equipo. La participación, las fechas y los requisitos se coordinan según cada actividad; esta página no confirma una convocatoria ni una inscripción.' },
    ],
  },
]

export function getCampaign(slug: string) {
  return campaigns.find((campaign) => campaign.slug === slug)
}
