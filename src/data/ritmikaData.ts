export interface ServiceItem {
  id: string;
  title: string;
  italicLead?: string;
  description: string;
  highlights?: string[];
  accentColor: '#F29400' | '#2E7D32' | '#D9381E' | '#2B3544';
  iconName:
    | 'presentation'
    | 'compass'
    | 'award'
    | 'clipboard'
    | 'calendar'
    | 'users'
    | 'userCheck'
    | 'layers'
    | 'shieldCheck';
  featured?: boolean;
}

export interface CourseItem {
  id: string;
  title: string;
  focus: string;
}

export interface LeaderTool {
  id: string;
  titleStart: string;
  titleItalic: string;
  steps: string[];
  closingQuote?: string;
  accentLabel: string;
}

export interface TimelineStage {
  number: string;
  days: string;
  title: string;
  detail: string;
  color: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  detail: string;
}

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  bio: string;
  specialties: string[];
}

export const WHATSAPP_URL =
  'https://wa.me/524773970244?text=Hola%20R%C3%ADtmika%20Empresarial%2C%20me%20gustar%C3%ADa%20platicar%20sobre%20un%20proyecto%20para%20mi%20equipo.';
export const WHATSAPP_NUMBER_DISPLAY = '477 397 0244';
export const PHONE_DISPLAY = '(477) 355 0179';
export const PHONE_HREF = 'tel:+524773550179';
export const EMAIL_ADDRESS = 'contacto@ritmika.com.mx';
export const INSTAGRAM_URL = 'https://www.instagram.com/psic.luistrejo/';
export const LOCATION_TEXT = 'León, Guanajuato, México';

export const SERVICES: ServiceItem[] = [
  {
    id: 'capacitacion',
    title: 'Capacitación empresarial',
    description:
      'Programas prácticos enfocados en liderazgo, comunicación efectiva y trabajo en equipo para transformar conductas en el día a día.',
    accentColor: '#F29400',
    iconName: 'presentation',
  },
  {
    id: 'consultoria',
    title: 'Consultoría organizacional',
    description:
      'Alineación de cultura, estructura y procesos; definición de misión, visión y valores, y profesionalización de PyMEs.',
    accentColor: '#2E7D32',
    iconName: 'compass',
  },
  {
    id: 'desarrollo-lideres',
    title: 'Desarrollo de líderes',
    description:
      'Fortalecimiento de habilidades directivas, toma de decisiones y gestión cotidiana de equipos con seguimiento real.',
    accentColor: '#D9381E',
    iconName: 'award',
  },
  {
    id: 'dnc',
    title: 'Diagnóstico de Necesidades de Capacitación (DNC)',
    description:
      'Entrevistas con líderes, encuesta breve al equipo y un plan priorizado bajo el principio de “lo urgente primero”.',
    accentColor: '#2B3544',
    iconName: 'clipboard',
  },
  {
    id: 'planes-anuales',
    title: 'Diseño de planes anuales de capacitación',
    description:
      'Estructuración estratégica del calendario formativo alineado a metas de negocio, presupuesto y brechas de competencia.',
    accentColor: '#F29400',
    iconName: 'calendar',
  },
  {
    id: 'team-building',
    title: 'Team building',
    description:
      'Experiencias guiadas que fortalecen la confianza, la comunicación abierta y la colaboración entre áreas.',
    accentColor: '#2E7D32',
    iconName: 'users',
  },
  {
    id: 'reclutamiento',
    title: 'Reclutamiento y selección',
    description:
      'Perfil de puesto, publicación estratégica, entrevistas contextuales y pruebas situacionales. Terna o dupla con análisis comparativo, psicometría y referencias.',
    highlights: [
      '3 seguimientos mensuales con reporte ejecutivo',
      'Garantía de 90 días con 1 reemplazo sin costo de honorarios',
    ],
    accentColor: '#D9381E',
    iconName: 'userCheck',
    featured: true,
  },
  {
    id: 'proyecto-rh',
    title: 'Proyecto integral de RH',
    description:
      'Diagnóstico de Recursos Humanos, mapeo de procesos, descriptivos de puesto, modelo de gobierno de RH, administración de personal y compensación.',
    accentColor: '#2B3544',
    iconName: 'layers',
    featured: true,
  },
  {
    id: 'clima-nom035',
    title: 'Clima laboral y NOM-035',
    italicLead: '“Lo que tu empresa debe tener, según su tamaño.”',
    description:
      'Prevención de riesgos psicosociales, cumplimiento normativo y construcción de ambientes laborales saludables y sostenibles.',
    accentColor: '#2E7D32',
    iconName: 'shieldCheck',
  },
];

export const COURSES: CourseItem[] = [
  {
    id: 'liderazgo',
    title: 'Liderazgo',
    focus: 'Conductas observables de liderazgo, claridad de expectativas y responsabilidad compartida.',
  },
  {
    id: 'comunicacion',
    title: 'Comunicación',
    focus: 'Acuerdos claros, escucha activa y conversaciones difíciles sin desgastar la relación.',
  },
  {
    id: 'inteligencia-emocional',
    title: 'Inteligencia emocional',
    focus: 'Autorregulación bajo presión, empatía operativa y toma de decisiones consciente.',
  },
  {
    id: 'conflictos',
    title: 'Conflictos',
    focus: 'Herramientas prácticas para convertir fricciones entre áreas en soluciones operativas.',
  },
  {
    id: 'feedback',
    title: 'Feedback',
    focus: 'Retroalimentación oportuna, basada en hechos y orientada a mejorar el desempeño.',
  },
  {
    id: 'trabajo-equipo',
    title: 'Trabajo en equipo',
    focus: 'Coordinación interfuncional, confianza y sentido de pertenencia hacia objetivos comunes.',
  },
  {
    id: 'liderazgo-situacional',
    title: 'Liderazgo situacional',
    focus: 'Cómo adaptar el estilo de dirección y acompañamiento según la madurez de cada colaborador.',
  },
  {
    id: 'entrevistas-efectivas',
    title: 'Entrevistas efectivas para líderes',
    focus: 'Preguntas conductuales y situacionales para elegir talento con mayor certeza y menos rotación.',
  },
  {
    id: 'delegacion',
    title: 'Delegación',
    focus: 'Soltar la operación sin perder el control: criterios claros, seguimiento y autonomía.',
  },
  {
    id: 'gestion-cambio',
    title: 'Gestión del cambio',
    focus: 'Acompañamiento humano para implementar nuevos procesos, sistemas o estructuras sin resistencia paralizante.',
  },
  {
    id: 'onboarding',
    title: 'Onboarding',
    focus: 'Integración estructurada para acelerar la curva de aprendizaje y retener talento desde el día uno.',
  },
];

export const LEADER_TOOLS: LeaderTool[] = [
  {
    id: 'juntas',
    accentLabel: 'EFECTIVIDAD EN REUNIONES',
    titleStart: 'Ninguna junta termina sin',
    titleItalic: 'estas 3 respuestas.',
    steps: [
      '¿Qué decidimos?',
      '¿Quién lo hace?',
      '¿Para cuándo?',
    ],
    closingQuote: '“Si nadie se lleva una tarea, fue una plática.”',
  },
  {
    id: 'corregir',
    accentLabel: 'CONVERSACIONES DE DESARROLLO',
    titleStart: 'Antes de corregir,',
    titleItalic: 'pregunta.',
    steps: [
      '¿Cómo viste tú lo que pasó?',
      '¿Qué te faltó para lograrlo?',
      '¿Qué harás distinto la próxima vez, y cómo te ayudo?',
    ],
  },
];

export const RECRUITMENT_TIMELINE: TimelineStage[] = [
  {
    number: '01',
    days: 'Día 1–2',
    title: 'Análisis del perfil',
    detail: 'Alineamos contexto del área, competencias críticas, cultura del equipo y condiciones de la vacante.',
    color: '#F29400',
  },
  {
    number: '02',
    days: 'Día 3',
    title: 'Publicación estratégica',
    detail: 'Difusión segmentada y búsqueda directa en canales especializados según el perfil requerido.',
    color: '#2E7D32',
  },
  {
    number: '03',
    days: 'Día 4–10',
    title: 'Revisión de CVs, entrevistas y pruebas situacionales',
    detail: 'Evaluación contextual, filtros técnicos y psicométricos para validar conductas reales en el puesto.',
    color: '#D9381E',
  },
  {
    number: '04',
    days: 'Día 11',
    title: 'Envío de dupla o terna con reporte',
    detail: 'Presentamos candidatos finalistas con matriz comparativa, referencias verificadas y hallazgos clave.',
    color: '#2B3544',
  },
  {
    number: '05',
    days: 'Día 12–14',
    title: 'Entrevistas con el cliente, selección e integración',
    detail: 'Acompañamos la decisión final, la oferta y el arranque con 3 seguimientos mensuales y garantía de 90 días.',
    color: '#F29400',
  },
];

export const CLIENT_JOURNEY: JourneyStep[] = [
  {
    number: '01',
    title: 'Diagnóstico de necesidades',
    detail: 'Escuchamos a la dirección y al equipo para identificar qué está frenando el avance real.',
  },
  {
    number: '02',
    title: 'Presentación de propuesta',
    detail: 'Diseñamos una intervención a la medida, con alcance claro, tiempos definidos y prioridades ordenadas.',
  },
  {
    number: '03',
    title: 'Arranque del plan de acción',
    detail: 'Implementamos talleres, procesos o búsquedas con herramientas prácticas aplicables desde la primera semana.',
  },
  {
    number: '04',
    title: 'Seguimiento de las etapas',
    detail: 'Acompañamos la adopción en campo con reportes ejecutivos y ajustes oportunos.',
  },
  {
    number: '05',
    title: 'Nuevas oportunidades',
    detail: 'Evaluamos resultados obtenidos y proyectamos el siguiente nivel de madurez organizacional.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'cecilia',
    name: 'Cecilia Cueva',
    initials: 'CC',
    role: 'Líder de proyectos y especialista en Recursos Humanos',
    bio: 'Más de 7 años en el sector industrial y automotriz (Kasai, DENSO, Michelin): capacitación y desarrollo, gestión de talento, onboarding, desarrollo de líderes y gestión del cambio.',
    specialties: ['Sector automotriz e industrial', 'Gestión de talento', 'Desarrollo de líderes'],
  },
  {
    id: 'luis',
    name: 'Luis Trejo',
    initials: 'LT',
    role: 'Psicólogo organizacional e instructor de capacitación',
    bio: 'Especialista en clima laboral, implementación de la NOM-035, diseño de programas de formación a la medida y desarrollo de equipos de alto desempeño.',
    specialties: ['Clima laboral y NOM-035', 'Formación de equipos', 'Psicología organizacional'],
  },
  {
    id: 'abraham',
    name: 'Abraham Borja',
    initials: 'AB',
    role: 'Consultoría en desarrollo y transformación organizacional',
    bio: 'Acompaña a empresas en el diseño de sistemas de gestión, estructura, mapeo de procesos y fortalecimiento de cultura organizacional en PyMEs.',
    specialties: ['Sistemas de gestión', 'Estructura y procesos', 'Cultura en PyMEs'],
  },
];

export const SERVICE_OPTIONS: string[] = [
  'Diagnóstico de Necesidades de Capacitación (DNC)',
  'Capacitación empresarial (Catálogo de 11 cursos)',
  'Consultoría organizacional / Profesionalización de PyMEs',
  'Desarrollo de líderes',
  'Diseño de planes anuales de capacitación',
  'Team building',
  'Reclutamiento y selección (Proceso en 14 días)',
  'Proyecto integral de RH',
  'Clima laboral y NOM-035',
  'Otro requerimiento',
];
