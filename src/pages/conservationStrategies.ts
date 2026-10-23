import localFamiliesImage from '../assets/figma/blog-featured-community.jpg'
import communityActivityImage from '../assets/figma/imgBlogImage4.png'
import volunteerImage from '../assets/figma/imgBlogImage5.png'

export const strategies = [
  {
    slug: 'socio-estrategico-local',
    title: 'Socio estratégico local',
    description: 'Trabajamos con agricultores y familias en la reforestación y el cuidado de los bosques, fortaleciendo el compromiso de las comunidades con el futuro de la Amazonía.',
    image: localFamiliesImage,
    alt: 'Familias y agricultores de la comunidad',
    sections: [
      { title: 'La conservación empieza con las comunidades', text: 'Las familias rurales son parte esencial de la protección de los bosques. Nuestro enfoque reconoce su vínculo con el territorio y promueve su participación en las iniciativas de conservación.' },
      { title: 'Reforestar juntos', text: 'Los programas de reforestación involucran a agricultores y sus familias en jornadas de plantación. Esta participación acerca el cuidado de los ecosistemas a la vida cotidiana de las comunidades.' },
      { title: 'Un compromiso que continúa', text: 'Buscamos que la participación local fortalezca un compromiso duradero con los bosques. La conservación forma parte de una visión que vincula el bienestar de las familias con el futuro de la Amazonía.' },
    ],
    source: 'https://sembrandoperu.org.pe/',
  },
  {
    slug: 'sostenibilidad-integral',
    title: 'Sostenibilidad integral',
    description: 'Unimos la restauración de bosques, la educación y la prevención en salud para cuidar la naturaleza y crear más oportunidades para los niños y las familias rurales.',
    image: communityActivityImage,
    alt: 'Actividad comunitaria de Sembrando Perú',
    sections: [
      { title: 'Un enfoque que conecta ambiente y bienestar', text: 'La deforestación, las brechas educativas y la anemia infantil forman parte de los desafíos que aborda Sembrando Perú. Nuestra estrategia reúne conservación ambiental y desarrollo humano en una misma visión.' },
      { title: 'Tres ejes que se complementan', text: 'Combinamos reforestación y educación ambiental con alfabetización y prevención en salud. Trabajamos con agricultores, niños y familias de comunidades rurales de la Amazonía y de zonas altoandinas.' },
      { title: 'Construir un futuro sostenible', text: 'Buscamos que el cuidado de los ecosistemas acompañe las oportunidades de aprendizaje y el bienestar infantil. La continuidad de estas acciones orienta nuestro compromiso con las generaciones presentes y futuras.' },
    ],
    source: 'https://sembrandoperu.org.pe/services/',
  },
  {
    slug: 'alianzas-y-voluntariado-activo',
    title: 'Alianzas y voluntariado activo',
    description: 'Conectamos a voluntarios y organizaciones para compartir conocimientos y herramientas con las comunidades rurales e impulsar la conservación, la educación y el bienestar.',
    image: volunteerImage,
    alt: 'Voluntariado en una actividad de plantación',
    sections: [
      { title: 'Sumar esfuerzos por las comunidades', text: 'Esta estrategia reúne el compromiso de personas voluntarias y organizaciones del sector privado y civil. Su propósito es ampliar el alcance de las iniciativas y acompañar a las comunidades de la Selva y la Sierra.' },
      { title: 'Conocimientos y herramientas compartidos', text: 'Las alianzas y el voluntariado permiten articular esfuerzos alrededor de la conservación, la educación comunitaria y el bienestar. El intercambio de capacidades acompaña la participación de las familias en las iniciativas.' },
      { title: 'Cómo puedes participar', text: 'Si quieres aportar tu tiempo, conocimientos o el apoyo de tu organización, comunícate con Sembrando Perú. Conoce las oportunidades de participación y coordina cómo contribuir a sus iniciativas.' },
    ],
    source: 'https://sembrandoperu.org.pe/about/',
  },
]
