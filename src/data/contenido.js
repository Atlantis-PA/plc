// Contenido editable del sitio.
// Regla: no publicar cifras, eventos, aliados ni testimonios sin fuente y aprobación.
// PLC está en formación: cada texto debe poder sostenerse con evidencia.

export const navegacion = [
  { to: '/participa',     label: 'Participa' },
  { to: '/organizadores', label: 'Organizadores' },
  { to: '/comunidades',   label: 'Comunidades' },
  { to: '/nosotros',      label: 'Nosotros' },
  { to: '/aliados',       label: 'Aliados' },
];

// Pilares de la propuesta de valor (Notion: «Panamá Coding»).
export const pilares = [
  { valor: 'Acceso',        etiqueta: 'a la tecnología',     detalle: 'Para que la edad, los ingresos o el punto de partida no decidan quién aprende.' },
  { valor: 'Habilidades',   etiqueta: 'digitales',           detalle: 'Programación, datos y herramientas para crear, no solo para consumir.' },
  { valor: 'Oportunidades', etiqueta: 'para todo Panamá',    detalle: 'Proyectos, redes y caminos para crecer junto a tu comunidad.' },
];

export const tarjetasAccion = [
  {
    titulo: 'Organiza con PLC',
    texto: 'Apoyo administrativo, guías y recursos para comunidades que organizan talleres, encuentros y eventos tech.',
    to: '/organizadores',
    cta: 'Conoce el apoyo',
    tono: 'azul',
  },
  {
    titulo: 'Alíate con PLC',
    texto: 'Empresas, universidades e instituciones que quieren impulsar el talento tecnológico de Panamá.',
    to: '/aliados',
    cta: 'Hablemos',
    tono: 'rojo',
  },
];

// Programas de Python Panamá. La comunidad conserva su identidad y liderazgo.
export const programasComunidad = [
  { nombre: 'Python Route', detalle: 'Ruta de aprendizaje de Python.' },
  { nombre: 'PyCon Panamá', detalle: 'Conferencia de la comunidad Python.', url: 'https://pycon.pa' },
  { nombre: 'PyCafé',       detalle: 'Encuentros abiertos para conversar y aprender.' },
];

export const comunidades = [
  {
    nombre: 'Python Panamá',
    descripcion: 'Comunidad de personas que usan, enseñan y aprenden Python en Panamá. Conserva su identidad, liderazgo y gestión comunitaria; PLC la acompaña en lo administrativo.',
    url: 'https://pythonpanama.org',
    programas: programasComunidad,
  },
];

// Rutas en diseño (PLC-23 y PLC-24). No anunciar fechas ni cupos sin aprobación.
export const rutas = [
  {
    titulo: 'Programación',
    texto: 'Desde tus primeras líneas de código hasta construir proyectos propios, con mentoría y práctica guiada.',
  },
  {
    titulo: 'Proyectos colaborativos',
    texto: 'Equipos que resuelven un problema real, con mentoría, entregable y reflexión final.',
  },
  {
    titulo: 'Código para la vida',
    texto: 'Comprender los sistemas, reglas y decisiones que influyen en tu vida, tu trabajo y tu comunidad.',
  },
];

export const etapasRuta = [
  { paso: '01', titulo: 'Aprende',   texto: 'Talleres y recursos para empezar desde cero o profundizar.' },
  { paso: '02', titulo: 'Construye', texto: 'Proyectos en equipo con un problema real y acompañamiento.' },
  { paso: '03', titulo: 'Presenta',  texto: 'Comparte lo que hiciste y lo que aprendiste con la comunidad.' },
  { paso: '04', titulo: 'Continúa',  texto: 'Mentoría, comunidades y nuevas oportunidades para seguir creciendo.' },
];

// Referentes estudiados (Notion: «REFERENCIAS para formar Atlantis, apoyo e ideas»).
// Mencionarlos no implica relación, alianza ni respaldo.
export const referentes = [
  { nombre: 'Canada Learning Code', pais: 'Canadá',  idea: 'Educación digital accesible a escala nacional.',        url: 'https://www.canadalearningcode.ca/' },
  { nombre: 'Community Tech Network', pais: 'EE. UU.', idea: 'Equidad digital y acompañamiento a quienes empiezan.', url: 'https://www.communitytechnetwork.org/about/' },
  { nombre: 'Open Culture Foundation', pais: 'Taiwán', idea: 'Apoyo a comunidades de tecnología abierta.',            url: 'https://ocf.tw/en/' },
  { nombre: 'Citizen Lab',             pais: 'Canadá', idea: 'Investigación y formación en tecnología y derechos.',   url: 'https://citizenlab.ca/' },
  { nombre: 'Asociación Python España', pais: 'España', idea: 'Una asociación que da soporte a comunidades locales.', url: 'https://es.python.org/asociacion' },
  { nombre: 'TechSoup',                pais: 'Global', idea: 'Acceso a tecnología con descuentos para ONG.',           url: 'https://www.techsoup.org/' },
];

// Novedades verificables. Actualizar con fecha real y enlace cuando exista.
export const novedades = [
  {
    fecha: 'NOV 2026',
    categoria: 'institucional',
    titulo: 'PLC se prepara para constituirse como organización sin fines de lucro',
    texto: 'Ordenamos la ruta de personería, la gobernanza y los controles antes de recibir recursos.',
  },
  {
    fecha: 'NOV 2026',
    categoria: 'programas',
    titulo: 'Diseñamos rutas de aprendizaje junto a las comunidades',
    texto: 'Aprender, construir, presentar y continuar: una ruta que respeta la autonomía de cada comunidad.',
  },
  {
    fecha: 'NOV 2026',
    categoria: 'transparencia',
    titulo: 'Gestión abierta: lo que es propuesta se publica como propuesta',
    texto: 'Ninguna alianza, cifra o programa se anuncia antes de estar aprobado y documentado.',
  },
];

export const pie = [
  {
    titulo: 'Participa',
    enlaces: [
      { to: '/participa', label: 'Cómo participar' },
      { to: '/participa#rutas', label: 'Rutas de aprendizaje' },
      { to: '/comunidades', label: 'Comunidades' },
    ],
  },
  {
    titulo: 'Organizadores',
    enlaces: [
      { to: '/organizadores', label: 'Organiza con PLC' },
      { to: '/organizadores#solicitud', label: 'Solicita apoyo' },
    ],
  },
  {
    titulo: 'Sobre PLC',
    enlaces: [
      { to: '/nosotros', label: 'Propósito' },
      { to: '/nosotros#referentes', label: 'Referentes' },
      { to: '/aliados', label: 'Aliados' },
      { to: '/aliados#contacto', label: 'Contacto' },
    ],
  },
];
