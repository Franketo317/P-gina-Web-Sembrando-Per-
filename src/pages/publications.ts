import type { Language } from '../components/LanguageContext'
import forest from '../assets/figma/blog-article-reforestation.jpg'
import classroom from '../assets/figma/imgBlogImage4.png'
import health from '../assets/figma/blog-article-health.jpg'
import volunteers from '../assets/figma/imgBlogImage5.png'
import water from '../assets/figma/about-values-background.png'
import community from '../assets/figma/blog-article-community.jpg'

type Copy = {
  title: string
  description: string
  format: string
  introduction: string
  sections: { heading: string; paragraphs: string[] }[]
}

type Entry = {
  slug: string
  publishedAt: string
  category: string
  image: string
  variant: 'forest' | 'community' | 'health'
  es: Copy
  en: Copy
}

const entries: Entry[] = [
  {
    slug: 'guia-viveros-comunitarios', publishedAt: '2026-09-18', category: 'MEDIO AMBIENTE', image: forest, variant: 'forest',
    es: {
      title: 'Del vivero al bosque: guía para cuidar plantones nativos',
      description: 'Una guía para organizar un vivero comunitario, registrar los plantones y preparar su seguimiento después de la siembra.',
      format: 'Guía práctica',
      introduction: 'Un vivero comunitario puede convertirse en un espacio de aprendizaje y cooperación. Esta guía propone una ruta de trabajo para familias y voluntarios que desean acompañar el crecimiento de árboles nativos, desde la organización del espacio hasta el cuidado posterior a la plantación.',
      sections: [
        { heading: 'Conocer el lugar antes de sembrar', paragraphs: ['Recorran el área junto a personas que conozcan el territorio y anoten las condiciones de sombra, agua y acceso. Conversen sobre qué especies crecen de forma natural en la zona y qué uso tuvo antes el terreno.', 'La selección de especies y el calendario de plantación deben definirse con orientación técnica local. Eviten extraer semillas o plantas de áreas protegidas sin la autorización correspondiente.'] },
        { heading: 'Organizar el vivero en equipo', paragraphs: ['Distribuyan tareas de riego, limpieza, revisión de recipientes y registro. Coloquen etiquetas con el nombre de la especie, su procedencia y la fecha de ingreso para identificar cada grupo de plantones.', 'Utilicen una ficha sencilla para anotar cambios visibles, incidencias y consultas pendientes. Un cuaderno compartido facilita que la siguiente persona de turno sepa qué necesita atención.'] },
        { heading: 'Acompañar el crecimiento', paragraphs: ['Antes de trasladar los plantones, acuerden quién realizará las visitas de seguimiento y cómo se comunicarán las necesidades de mantenimiento. Plantar sin un plan de cuidado puede dejar el esfuerzo incompleto.', 'En cada visita registren la fecha, el estado de las plantas y las acciones realizadas. Comparar estas observaciones ayuda al equipo a aprender y ajustar su trabajo.'] },
      ],
    },
    en: {
      title: 'From nursery to forest: caring for native seedlings', description: 'A guide to organizing a community nursery, recording seedlings and planning follow-up after planting.', format: 'Practical guide',
      introduction: 'A community nursery can be a place for learning and cooperation. This guide offers families and volunteers a practical route from organizing the nursery to caring for native trees after planting.',
      sections: [
        { heading: 'Understand the site first', paragraphs: ['Walk the site with people who know the area. Record shade, water access, accessibility and previous land use, and discuss which species grow naturally nearby.', 'Choose species and a planting schedule with local technical guidance. Do not collect seeds or plants from protected areas without the relevant authorization.'] },
        { heading: 'Organize the nursery together', paragraphs: ['Share watering, cleaning, container inspection and recordkeeping duties. Label seedlings with species, origin and arrival date.', 'Keep a shared notebook of visible changes, incidents and questions. This helps the next volunteer understand what needs attention.'] },
        { heading: 'Follow their growth', paragraphs: ['Before moving seedlings, agree who will make follow-up visits and how maintenance needs will be communicated.', 'Record visit dates, plant condition and care provided. Comparing observations helps the team learn and improve its approach.'] },
      ],
    },
  },
  {
    slug: 'cuaderno-aula-verde', publishedAt: '2026-08-24', category: 'EDUCACIÓN', image: classroom, variant: 'community',
    es: {
      title: 'Aula verde: cuaderno de actividades para aprender en comunidad', description: 'Propuestas de observación, lectura y creación para acercar a niñas y niños al cuidado de su entorno.', format: 'Cuaderno educativo',
      introduction: 'Aprender sobre el ambiente empieza por mirar lo que nos rodea. Este cuaderno reúne actividades que docentes y facilitadores pueden adaptar a la edad del grupo, a los materiales disponibles y a las lenguas de cada comunidad.',
      sections: [
        { heading: 'Un mapa de lo que nos rodea', paragraphs: ['Inviten al grupo a dibujar su escuela o espacio de encuentro y a señalar árboles, caminos, fuentes de agua y lugares que necesitan cuidado. Cada participante puede explicar un elemento de su dibujo.', 'Construyan un mapa colectivo y conversen sobre los espacios que más disfrutan. La actividad permite practicar vocabulario, orientación y escucha respetuosa.'] },
        { heading: 'Historias que conectan generaciones', paragraphs: ['Propongan una conversación con una persona de la comunidad sobre cómo era el paisaje cuando era niña. Soliciten su permiso antes de grabar o compartir su relato.', 'Después, el grupo puede escribir una historia breve, crear una ilustración o representar lo aprendido. Valoren los nombres locales de plantas y lugares, así como las distintas formas de narrar.'] },
        { heading: 'Un compromiso pequeño y posible', paragraphs: ['Elijan una acción que el grupo pueda sostener: ordenar los materiales reutilizables, cuidar una planta o preparar carteles para mantener limpio un espacio compartido.', 'Al finalizar la semana, revisen qué funcionó y qué cambiarían. El objetivo es aprender a colaborar, sin convertir la actividad en una competencia entre participantes.'] },
      ],
    },
    en: {
      title: 'Green classroom: a workbook for learning together', description: 'Observation, reading and creative activities that help children connect with their surroundings.', format: 'Learning workbook',
      introduction: 'Environmental learning begins by noticing what surrounds us. Teachers and facilitators can adapt these activities to the age group, available materials and community languages.',
      sections: [
        { heading: 'Map our surroundings', paragraphs: ['Ask participants to draw their school or meeting place and mark trees, paths, water sources and places needing care. Let each person explain part of their drawing.', 'Create a shared map and discuss favorite places. The activity develops vocabulary, orientation and respectful listening.'] },
        { heading: 'Stories across generations', paragraphs: ['Invite a community member to describe the landscape of their childhood. Ask permission before recording or sharing their story.', 'Participants can write a short story, draw or perform what they learned. Value local plant and place names and different storytelling traditions.'] },
        { heading: 'A small, achievable commitment', paragraphs: ['Choose an action the group can maintain: organizing reusable materials, caring for a plant or making signs for a shared space.', 'At the end of the week, discuss what worked and what could change. Focus on cooperation rather than competition.'] },
      ],
    },
  },
  {
    slug: 'organizar-jornadas-bienestar-familiar', publishedAt: '2026-07-16', category: 'SALUD', image: health, variant: 'health',
    es: {
      title: 'Bienestar en comunidad: cómo organizar una jornada para familias', description: 'Una herramienta de organización para coordinar espacios de orientación, recepción y participación familiar.', format: 'Manual de organización',
      introduction: 'Una jornada comunitaria necesita más que una convocatoria. Este material propone tareas de coordinación para acercar a las familias a espacios de orientación y a los servicios locales, con una atención respetuosa y una organización clara.',
      sections: [
        { heading: 'Escuchar y coordinar', paragraphs: ['Conversen con representantes de las familias sobre horarios, accesibilidad y necesidades de comunicación. Coordinen con el establecimiento de salud qué profesionales y servicios pueden participar.', 'Definan las responsabilidades del equipo organizador y del personal de salud. Las consultas clínicas, evaluaciones y recomendaciones individuales corresponden a profesionales habilitados.'] },
        { heading: 'Preparar un recorrido sencillo', paragraphs: ['Organicen un punto de bienvenida, un espacio de espera y áreas que permitan conversar con privacidad. Señalicen el recorrido con mensajes claros y consideren a quienes necesitan apoyo para desplazarse.', 'Informen qué actividades están disponibles y qué información es necesario brindar. Soliciten únicamente los datos indispensables y expliquen para qué se usarán.'] },
        { heading: 'Cerrar con acuerdos claros', paragraphs: ['Al terminar, compartan los canales de contacto de los servicios participantes y las indicaciones de seguimiento que estos hayan definido. El equipo voluntario puede ayudar con la orientación logística.', 'Reúnan comentarios sobre la organización sin exponer información personal. Identificar barreras de acceso permite preparar una próxima jornada más inclusiva.'] },
      ],
    },
    en: {
      title: 'Community well-being: organizing a family outreach day', description: 'An organizational tool for coordinating information spaces, reception and family participation.', format: 'Organizing handbook',
      introduction: 'A community outreach day takes more than an invitation. This handbook outlines coordination tasks for connecting families with local services through respectful support and clear organization.',
      sections: [
        { heading: 'Listen and coordinate', paragraphs: ['Discuss timing, accessibility and communication needs with family representatives. Coordinate available professionals and services with the local health facility.', 'Clarify the roles of organizers and health staff. Clinical consultations, assessments and individual recommendations belong to qualified professionals.'] },
        { heading: 'Make the visit easy to navigate', paragraphs: ['Prepare a welcome point, waiting area and private conversation spaces. Use clear signs and consider visitors who need mobility support.', 'Explain available activities and required information. Collect only essential data and explain how it will be used.'] },
        { heading: 'Close with clear next steps', paragraphs: ['Share contact channels for participating services and any follow-up arrangements they provide. Volunteers can help with logistical guidance.', 'Gather feedback on organization without exposing personal information. Understanding access barriers helps make future events more inclusive.'] },
      ],
    },
  },
  {
    slug: 'manual-voluntariado-responsable', publishedAt: '2026-06-05', category: 'VOLUNTARIADO', image: volunteers, variant: 'forest',
    es: {
      title: 'Voluntariado responsable: antes, durante y después de una jornada', description: 'Acuerdos de convivencia, preparación del equipo y cuidado del territorio para participar con responsabilidad.', format: 'Manual de voluntariado',
      introduction: 'Participar como voluntario significa escuchar, colaborar y respetar los acuerdos de quienes reciben al equipo. Este manual propone una preparación básica para actividades ambientales y educativas en comunidad.',
      sections: [
        { heading: 'Prepararse antes de salir', paragraphs: ['Confirmen el lugar de encuentro, los contactos de coordinación y las tareas previstas. Consulten qué materiales llevar y qué condiciones del terreno deben tener en cuenta.', 'Distribuyan funciones según la experiencia de cada persona. Revisen con la coordinación el uso de herramientas y el procedimiento para comunicar incidentes antes de iniciar la actividad.'] },
        { heading: 'Participar con respeto', paragraphs: ['Escuchen las indicaciones de las personas anfitrionas y pidan permiso antes de fotografiar o compartir imágenes. La presencia del equipo debe adaptarse al ritmo y a las decisiones de la comunidad.', 'Eviten dejar residuos, extraer plantas o acercarse a fauna silvestre. Si una tarea no puede realizarse con las condiciones acordadas, deténganse y consulten a la coordinación.'] },
        { heading: 'Dejar todo listo para continuar', paragraphs: ['Devuelvan herramientas, ordenen los materiales y registren las tareas pendientes. Un cierre cuidadoso facilita el trabajo del siguiente equipo.', 'Compartan aprendizajes y propuestas de mejora. La colaboración se fortalece cuando el equipo reconoce tanto los logros como las dificultades de la jornada.'] },
      ],
    },
    en: {
      title: 'Responsible volunteering: before, during and after an activity', description: 'Shared agreements, team preparation and respect for the territory when volunteering.', format: 'Volunteer handbook',
      introduction: 'Volunteering means listening, cooperating and respecting the agreements of the host community. This handbook offers basic preparation for community environmental and educational activities.',
      sections: [
        { heading: 'Prepare before leaving', paragraphs: ['Confirm the meeting point, coordination contacts and planned tasks. Ask what materials to bring and what terrain conditions to expect.', 'Assign roles according to experience. Review tool use and incident reporting with the coordinator before starting.'] },
        { heading: 'Participate respectfully', paragraphs: ['Follow host guidance and ask permission before taking or sharing photographs. Adapt to the community’s pace and decisions.', 'Leave no litter, do not remove plants and keep away from wildlife. Stop and consult the coordinator if a task cannot be completed under the agreed conditions.'] },
        { heading: 'Prepare for continuity', paragraphs: ['Return tools, organize materials and record unfinished tasks. A careful closing helps the next team.', 'Share lessons and improvements. Cooperation grows when the team acknowledges both achievements and difficulties.'] },
      ],
    },
  },
  {
    slug: 'fichas-cuidado-agua-suelo', publishedAt: '2026-04-22', category: 'MEDIO AMBIENTE', image: water, variant: 'forest',
    es: {
      title: 'Agua y suelo: fichas para observar y cuidar nuestro entorno', description: 'Actividades participativas para reconocer puntos de acumulación de residuos y proponer acciones de cuidado.', format: 'Fichas de trabajo',
      introduction: 'Observar el entorno en grupo ayuda a reconocer problemas y a organizar respuestas. Estas fichas proponen recorridos de observación y acuerdos de cuidado que pueden adaptarse a un barrio, una escuela o una comunidad.',
      sections: [
        { heading: 'Recorrer sin alterar', paragraphs: ['Elijan una ruta accesible y registren desde un lugar seguro dónde hay vegetación, acumulación de residuos o suelo expuesto. No ingresen a cursos de agua ni manipulen materiales desconocidos.', 'Dibujen lo observado y anoten la fecha y ubicación aproximada. Las observaciones visuales sirven para conversar sobre el entorno, pero no determinan si el agua es apta para consumo.'] },
        { heading: 'Priorizar una acción posible', paragraphs: ['Agrupen las observaciones y elijan una situación que puedan abordar en coordinación con responsables locales. Puede ser mejorar la señalización, organizar materiales reutilizables o solicitar el recojo de residuos.', 'Definan una tarea, una persona responsable y una fecha de revisión. Si encuentran residuos peligrosos, informen a la autoridad correspondiente y eviten intervenir por cuenta propia.'] },
        { heading: 'Revisar lo que cambió', paragraphs: ['Regresen al lugar y comparen sus registros. Anoten qué se mantuvo, qué mejoró y qué necesita apoyo adicional.', 'Compartan los aprendizajes mediante un mural o una conversación abierta. Un registro sencillo permite dar continuidad a los acuerdos de cuidado.'] },
      ],
    },
    en: {
      title: 'Water and soil: observation and care activity sheets', description: 'Participatory activities for identifying waste accumulation and proposing environmental care actions.', format: 'Activity sheets',
      introduction: 'Observing surroundings together helps identify problems and organize responses. Adapt these observation walks and care agreements to a neighborhood, school or community.',
      sections: [
        { heading: 'Observe without disturbing', paragraphs: ['Choose an accessible route and observe vegetation, waste accumulation and exposed soil from a safe place. Do not enter waterways or handle unknown materials.', 'Draw observations and note the date and approximate location. Visual observations support discussion but cannot establish whether water is safe to drink.'] },
        { heading: 'Choose an achievable action', paragraphs: ['Group observations and select a situation to address with local coordinators: better signs, reusable material organization or a waste collection request.', 'Agree a task, responsible person and review date. Report hazardous waste to the appropriate authority rather than intervening independently.'] },
        { heading: 'Review what changed', paragraphs: ['Revisit the site and compare records. Note what remained the same, improved or needs further support.', 'Share lessons through a mural or open conversation. Simple records help sustain care agreements.'] },
      ],
    },
  },
  {
    slug: 'herramientas-proyectos-comunitarios', publishedAt: '2026-03-08', category: 'COMUNIDAD', image: community, variant: 'community',
    es: {
      title: 'Ideas que crecen: herramientas para diseñar proyectos comunitarios', description: 'Un recorrido para convertir una necesidad compartida en objetivos, tareas y acuerdos de seguimiento.', format: 'Caja de herramientas',
      introduction: 'Una buena idea necesita un plan que las personas puedan comprender y sostener. Esta caja de herramientas acompaña la formulación de pequeñas iniciativas comunitarias, desde la conversación inicial hasta la revisión de los acuerdos.',
      sections: [
        { heading: 'Empezar por una necesidad compartida', paragraphs: ['Reúnan distintas voces y describan el problema con ejemplos concretos. Pregunten a quién afecta, qué intentos se han realizado y qué recursos ya existen en la comunidad.', 'Eviten elegir una solución antes de escuchar. Un mapa de actores puede ayudar a identificar personas, organizaciones y servicios que deberían participar en la conversación.'] },
        { heading: 'Convertir la idea en un plan', paragraphs: ['Escriban un objetivo alcanzable y divídanlo en tareas. Para cada tarea, acuerden responsables, materiales, costos previstos y un plazo realista.', 'Revisen qué autorizaciones o alianzas podrían necesitar. Incluyan una alternativa por si cambian las condiciones y mantengan los acuerdos disponibles para todo el grupo.'] },
        { heading: 'Aprender del proceso', paragraphs: ['Elijan señales sencillas de avance: tareas completadas, reuniones realizadas o materiales preparados. Registren también dificultades y decisiones, sin confundir actividades con resultados de impacto.', 'Cierren cada etapa con una conversación sobre lo aprendido. Un proyecto puede ajustarse cuando el grupo cuenta con información clara y participa en las decisiones.'] },
      ],
    },
    en: {
      title: 'Growing ideas: tools for designing community projects', description: 'A path from a shared need to clear objectives, tasks and follow-up agreements.', format: 'Community toolkit',
      introduction: 'A good idea needs a plan people can understand and sustain. This toolkit supports small community initiatives from the first conversation to reviewing shared agreements.',
      sections: [
        { heading: 'Start with a shared need', paragraphs: ['Bring different voices together and describe the problem with concrete examples. Ask who is affected, what has been tried and which resources already exist.', 'Listen before choosing a solution. Mapping stakeholders helps identify people, organizations and services to include in the conversation.'] },
        { heading: 'Turn the idea into a plan', paragraphs: ['Write an achievable objective and break it into tasks. Agree responsibilities, materials, expected costs and realistic deadlines.', 'Check which permissions or partnerships may be needed. Prepare alternatives for changing conditions and make agreements available to the whole group.'] },
        { heading: 'Learn from the process', paragraphs: ['Choose simple progress indicators such as completed tasks, meetings held or materials prepared. Record difficulties and decisions without confusing activities with impact outcomes.', 'Close each stage by discussing lessons. Projects can adapt when the group has clear information and participates in decisions.'] },
      ],
    },
  },
]

export function getPublications(language: Language) {
  return entries.map(({ es, en, ...entry }) => ({ ...entry, ...(language === 'en' ? en : es) }))
}

export function isPublicationSlug(slug: string) {
  return entries.some((entry) => entry.slug === slug)
}

export type Publication = ReturnType<typeof getPublications>[number]
