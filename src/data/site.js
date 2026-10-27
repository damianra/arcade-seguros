// Contenido del sitio. Todo dato editable vive acá: los componentes no
// hardcodean textos ni links y toleran listas vacías con un fallback.

export const SITE = {
  name: 'Arcade Seguros',
  tagline: 'Coberturas de otra dimensión',
  claim: 'Protegé tu partida sin perder vidas.',
  description:
    'Seguros de hogar, auto y vida con la simpleza de un joystick y el respaldo de siempre. Sin letra chica, sin laberintos.',
};

export const NAV_LINKS = [
  { label: 'Coberturas', href: '#coberturas' },
  { label: 'Planes', href: '#planes' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Cotizador', href: '#cotizador' },
];

export const STATS = [
  { value: '35', suffix: 'años', label: 'Acompañando jugadores', icon: 'trophy' },
  { value: '120k', suffix: 'asegurados', label: 'Con partida guardada', icon: 'users' },
  { value: '24 h', suffix: 'respuesta', label: 'Promedio de atención', icon: 'zap' },
  { value: '98%', suffix: 'renuevan', label: 'Confianza nivel jefe final', icon: 'badge-check' },
];

export const SERVICES = [
  {
    icon: 'home',
    title: 'Hogar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Protegé tu base ante incendio, robo y daños por agua.',
    points: ['Incendio y robo', 'Daños por agua', 'Asistencia 24/7'],
  },
  {
    icon: 'car',
    title: 'Auto',
    description:
      'Sed do eiusmod tempor incididunt ut labore. Cobertura integral con grúa, cristales y auto sustituto.',
    points: ['Todo riesgo', 'Grúa sin límite', 'Auto sustituto'],
  },
  {
    icon: 'heart-pulse',
    title: 'Vida',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation. Un respaldo claro para tu familia en cualquier nivel.',
    points: ['Cobertura por fallecimiento', 'Invalidez total', 'Adelanto de capital'],
  },
  {
    icon: 'briefcase',
    title: 'Comercio',
    description:
      'Duis aute irure dolor in reprehenderit. Tu local protegido mientras vos te enfocás en sumar puntos.',
    points: ['Responsabilidad civil', 'Rotura de vidrios', 'Continuidad de negocio'],
  },
];

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    level: 'Nivel 1',
    tagline: 'Para arrancar la partida',
    price: 9900,
    highlighted: false,
    features: [
      'Cobertura básica de hogar',
      'Asistencia telefónica en horario comercial',
      'Gestión 100% online',
      'Un cambio de plan por año',
    ],
  },
  {
    id: 'player',
    name: 'Player',
    level: 'Nivel 2',
    tagline: 'El equilibrio justo',
    price: 17500,
    highlighted: true,
    features: [
      'Hogar + auto con franquicia reducida',
      'Asistencia 24/7 los 365 días',
      'Grúa y auto sustituto incluidos',
      'Cambios ilimitados de plan',
      'Gestor dedicado por chat',
    ],
  },
  {
    id: 'legend',
    name: 'Legend',
    level: 'Nivel 3',
    tagline: 'Modo historia completo',
    price: 29900,
    highlighted: false,
    features: [
      'Cobertura integral hogar, auto y vida',
      'Asistencia premium sin franquicia',
      'Rehabilitación y daños estéticos',
      'Cobertura en el exterior',
      'Línea directa con un asesor',
    ],
  },
];

export const STEPS = [
  {
    icon: 'joystick',
    title: 'Elegí tu personaje',
    description:
      'Lorem ipsum: contanos qué querés proteger y armamos una cobertura a medida en menos de dos minutos.',
  },
  {
    icon: 'shield-check',
    title: 'Activá la partida',
    description:
      'Consectetur adipiscing elit: firmás digital y tu cobertura queda activa al instante, sin trámites.',
  },
  {
    icon: 'trophy',
    title: 'Jugá tranquilo',
    description:
      'Sed do eiusmod tempor: si algo pasa, abrís un siniestro desde el celular y seguís el estado en vivo.',
  },
];
