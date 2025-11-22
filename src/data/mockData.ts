import { Article, Guide, EducationalContent, Quiz } from '../types';

export const articles: Article[] = [
  {
    id: 1,
    title: 'Artículo 1: Objeto del Reglamento',
    content: 'Este reglamento tiene por objeto establecer las normas a que deben sujetarse los usuarios de la vía pública, así como los vehículos que en ella circulan, con el fin de garantizar la seguridad vial y el orden del tránsito.',
    imageUrl: 'https://images.unsplash.com/photo-1760985665148-a26c1844f74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwc2lnbnMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDIwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Artículo 2: Definiciones Generales',
    content: 'Para efectos de este reglamento se entiende por vía pública: todo espacio de uso común destinado al tránsito de peatones y vehículos, incluyendo calles, avenidas, calzadas y ciclovías.',
    imageUrl: 'https://images.unsplash.com/photo-1739782967361-b68b3e90687f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2FmZXR5JTIwcGVkZXN0cmlhbnxlbnwxfHx8fDE3NjM0MjA4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Artículo 3: Prioridad de Peatones',
    content: 'Los peatones tienen prioridad de paso en todas las intersecciones señalizadas, cruces peatonales y zonas escolares. Los conductores deben ceder el paso y extremar precauciones.',
    imageUrl: 'https://images.unsplash.com/photo-1739782967361-b68b3e90687f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2FmZXR5JTIwcGVkZXN0cmlhbnxlbnwxfHx8fDE3NjM0MjA4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Artículo 4: Límites de Velocidad',
    content: 'En zonas urbanas el límite general es de 50 km/h. En zonas escolares y hospitalarias el límite es de 20 km/h. Los conductores deben ajustar su velocidad a las condiciones del tránsito.',
    imageUrl: 'https://images.unsplash.com/photo-1726379806422-a928f9b12ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNpdmUlMjBkcml2aW5nfGVufDF8fHx8MTc2MzQyMDgxNnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    title: 'Artículo 5: Uso del Cinturón de Seguridad',
    content: 'Es obligatorio el uso del cinturón de seguridad para todos los ocupantes del vehículo. Los menores de 12 años deben viajar en el asiento trasero con sistemas de retención apropiados.',
    imageUrl: 'https://images.unsplash.com/photo-1650172101138-c0bb7bc32ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDIwODE2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    title: 'Artículo 6: Conducción bajo Influencia',
    content: 'Queda estrictamente prohibido conducir bajo los efectos del alcohol o sustancias tóxicas. El límite permitido es de 0.08% de alcohol en sangre para conductores particulares.',
    imageUrl: 'https://images.unsplash.com/photo-1650172101138-c0bb7bc32ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDIwODE2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 7,
    title: 'Artículo 7: Señales de Tránsito',
    content: 'Todos los usuarios de la vía pública están obligados a respetar y obedecer las señales de tránsito, tanto verticales como horizontales, así como las indicaciones del personal de tránsito.',
    imageUrl: 'https://images.unsplash.com/photo-1760985665148-a26c1844f74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwc2lnbnMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDIwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 8,
    title: 'Artículo 8: Estacionamiento',
    content: 'Está prohibido estacionarse en zonas restringidas, entradas de vehículos, rampas para personas con discapacidad, paradas de transporte público y a menos de 5 metros de esquinas.',
    imageUrl: 'https://images.unsplash.com/photo-1760985665148-a26c1844f74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwc2lnbnMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDIwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export const guides: Guide[] = [
  {
    id: 1,
    title: 'Señalamientos de Tránsito',
    topic: 'Señales',
    content: 'Las señales de tránsito se clasifican en tres tipos: preventivas (amarillas, advierten peligros), restrictivas (rojas y blancas, indican prohibiciones) e informativas (azules y verdes, orientan al conductor). Es fundamental conocerlas para una conducción segura.',
    imageUrl: 'https://images.unsplash.com/photo-1760985665148-a26c1844f74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwc2lnbnMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDIwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    completed: false
  },
  {
    id: 2,
    title: 'Seguridad Peatonal',
    topic: 'Peatones',
    content: 'Como peatón, cruza siempre por las esquinas o pasos peatonales. Mira a ambos lados antes de cruzar. Usa ropa visible en la noche. Respeta los semáforos peatonales y nunca cruces con luz roja.',
    imageUrl: 'https://images.unsplash.com/photo-1739782967361-b68b3e90687f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2FmZXR5JTIwcGVkZXN0cmlhbnxlbnwxfHx8fDE3NjM0MjA4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    completed: false
  },
  {
    id: 3,
    title: 'Conducción Responsable',
    topic: 'Conducción',
    content: 'Mantén siempre la distancia de seguridad con el vehículo de adelante. Usa las direccionales con anticipación. No uses el teléfono celular mientras conduces. Revisa tus espejos constantemente.',
    imageUrl: 'https://images.unsplash.com/photo-1726379806422-a928f9b12ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNpdmUlMjBkcml2aW5nfGVufDF8fHx8MTc2MzQyMDgxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    completed: false
  },
  {
    id: 4,
    title: 'Ciclistas en la Vía',
    topic: 'Ciclovías',
    content: 'Los ciclistas deben circular por las ciclovías cuando estén disponibles. Usa casco protector en todo momento. Señaliza tus movimientos con las manos. Respeta los semáforos y señales de tránsito.',
    imageUrl: 'https://images.unsplash.com/photo-1739782967361-b68b3e90687f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2FmZXR5JTIwcGVkZXN0cmlhbnxlbnwxfHx8fDE3NjM0MjA4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    completed: false
  },
  {
    id: 5,
    title: 'Mantenimiento del Vehículo',
    topic: 'Vehículos',
    content: 'Verifica regularmente los niveles de aceite, líquido de frenos y refrigerante. Revisa la presión de los neumáticos semanalmente. Asegúrate que todas las luces funcionen correctamente. Realiza servicio cada 5,000 km.',
    imageUrl: 'https://images.unsplash.com/photo-1650172101138-c0bb7bc32ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDIwODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    completed: false
  },
  {
    id: 6,
    title: 'Conducción en Condiciones Adversas',
    topic: 'Seguridad',
    content: 'En lluvia, reduce tu velocidad y aumenta la distancia de frenado. Enciende las luces bajas. Evita frenadas bruscas. Si hay neblina, usa luces antiniebla. Nunca uses las luces altas en neblina.',
    imageUrl: 'https://images.unsplash.com/photo-1726379806422-a928f9b12ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNpdmUlMjBkcml2aW5nfGVufDF8fHx8MTc2MzQyMDgxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    completed: false
  }
];

export const educationalContent: EducationalContent[] = [
  {
    id: 1,
    title: 'Buenas Prácticas al Volante',
    description: 'Aprende las mejores prácticas para ser un conductor responsable y seguro.',
    content: 'Las buenas prácticas al volante incluyen mantener ambas manos en el volante, revisar constantemente los espejos, anticipar las acciones de otros conductores y mantener la calma en situaciones de estrés vial. Un buen conductor siempre está atento a su entorno y respeta las normas de tránsito.',
    imageUrl: 'https://images.unsplash.com/photo-1650172101138-c0bb7bc32ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDIwODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    examples: [
      'Ajusta los espejos antes de iniciar la marcha',
      'Mantén una distancia de al menos 2 segundos con el vehículo de adelante',
      'Planifica tu ruta antes de salir',
      'Descansa cada 2 horas en viajes largos'
    ],
    progressRegistered: false
  },
  {
    id: 2,
    title: 'Manejo Defensivo',
    description: 'Técnicas de conducción defensiva para prevenir accidentes.',
    content: 'El manejo defensivo consiste en anticipar situaciones de riesgo y tomar decisiones preventivas. Implica mantener una actitud vigilante, reducir velocidad en zonas de riesgo, y estar preparado para reaccionar ante acciones imprudentes de otros conductores. La clave es no confiar en que otros respetarán las reglas.',
    imageUrl: 'https://images.unsplash.com/photo-1726379806422-a928f9b12ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNpdmUlMjBkcml2aW5nfGVufDF8fHx8MTc2MzQyMDgxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    examples: [
      'Escanea constantemente el ambiente alrededor de tu vehículo',
      'Identifica rutas de escape en todo momento',
      'Asume que otros conductores pueden cometer errores',
      'Mantén tu vehículo en óptimas condiciones'
    ],
    progressRegistered: false
  },
  {
    id: 3,
    title: 'Ética del Conductor',
    description: 'Principios éticos para una convivencia vial armoniosa.',
    content: 'La ética del conductor va más allá del cumplimiento de las leyes. Incluye cortesía, respeto por otros usuarios de la vía, ceder el paso cuando es apropiado, no bloquear intersecciones y mantener la paciencia. Un conductor ético contribuye a un ambiente vial más seguro y agradable para todos.',
    imageUrl: 'https://images.unsplash.com/photo-1739782967361-b68b3e90687f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2FmZXR5JTIwcGVkZXN0cmlhbnxlbnwxfHx8fDE3NjM0MjA4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    examples: [
      'Cede el paso a peatones, ciclistas y motociclistas',
      'No uses el claxon de forma innecesaria o agresiva',
      'Permite que otros vehículos se incorporen al tráfico',
      'Respeta los espacios para personas con discapacidad'
    ],
    progressRegistered: false
  }
];

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: 'Señales de Tránsito Básicas',
    topic: 'Señalamientos',
    questions: [
      {
        id: 1,
        question: '¿Qué indica una señal triangular de color amarillo?',
        options: [
          'Prohibición',
          'Información',
          'Prevención o advertencia',
          'Obligación'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: '¿Qué significa una señal circular con borde rojo?',
        options: [
          'Información turística',
          'Restricción o prohibición',
          'Prevención de peligro',
          'Dirección obligatoria'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: '¿De qué color son las señales informativas?',
        options: [
          'Rojas y blancas',
          'Amarillas y negras',
          'Azules y verdes',
          'Naranjas'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: '¿Cuál es la prioridad de las señales de tránsito?',
        options: [
          'Señales horizontales, luego verticales',
          'Agente de tránsito, semáforo, señales verticales',
          'Semáforo siempre tiene prioridad',
          'Las señales verticales tienen máxima prioridad'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: '¿Qué indica un semáforo en luz ámbar?',
        options: [
          'Acelerar para pasar rápido',
          'Prevención, prepararse para alto',
          'Continuar sin reducir velocidad',
          'Cambio de carril permitido'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: 'Normas de Circulación',
    topic: 'Reglamento',
    questions: [
      {
        id: 1,
        question: '¿Cuál es el límite de velocidad en zonas escolares?',
        options: [
          '50 km/h',
          '40 km/h',
          '30 km/h',
          '20 km/h'
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: '¿Quién tiene prioridad en un cruce peatonal?',
        options: [
          'El vehículo más grande',
          'Siempre el peatón',
          'El que llegó primero',
          'El vehículo motorizado'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: '¿A qué distancia mínima debe estacionarse de una esquina?',
        options: [
          '2 metros',
          '3 metros',
          '5 metros',
          '10 metros'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: '¿Es obligatorio el uso del cinturón de seguridad?',
        options: [
          'Solo en carretera',
          'Solo el conductor',
          'Solo adelante',
          'Para todos los ocupantes'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: '¿Está permitido usar el celular mientras se conduce?',
        options: [
          'Sí, con manos libres',
          'No, en ningún caso',
          'Solo para emergencias',
          'Solo en semáforos'
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 3,
    title: 'Seguridad Vial',
    topic: 'Seguridad',
    questions: [
      {
        id: 1,
        question: '¿Qué debes hacer en caso de neblina?',
        options: [
          'Usar luces altas',
          'Usar luces antiniebla y reducir velocidad',
          'Seguir de cerca al vehículo de adelante',
          'Aumentar la velocidad para salir rápido'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: '¿Cada cuánto tiempo se recomienda descansar en viajes largos?',
        options: [
          'Cada hora',
          'Cada 2 horas',
          'Cada 4 horas',
          'No es necesario'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: '¿Qué hacer si tu vehículo comienza a derrapar?',
        options: [
          'Frenar bruscamente',
          'Girar el volante en dirección contraria',
          'Girar hacia donde quieres ir y no frenar bruscamente',
          'Acelerar para recuperar control'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: '¿Cuál es la distancia de seguridad recomendada?',
        options: [
          'Medio metro',
          '1 segundo de separación',
          'Al menos 2 segundos de separación',
          '5 metros exactos'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: '¿Dónde deben viajar los menores de 12 años?',
        options: [
          'Adelante, con cinturón',
          'Atrás, sin restricción',
          'Atrás, con sistema de retención apropiado',
          'En cualquier lugar'
        ],
        correctAnswer: 2
      }
    ]
  }
];
