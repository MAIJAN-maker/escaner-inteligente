import { ProfileItem, IdentifiedSymptom } from '../types';

export const METABOLIC_PROFILES: ProfileItem[] = [
  {
    id: 'inflamatorio',
    name: 'Perfil Inflamatorio',
    subtitle: 'Sensibilidad celular y respuesta del organismo',
    description: 'En esta etapa, leves cambios en la respuesta inflamatoria celular pueden influir en la energía diaria y en cómo el cuerpo procesa los nutrientes.',
    keySigns: ['Sensación de pesadez', 'Rigidez matutina leve', 'Cambios en la digestión'],
    focusArea: 'Enfoque en nutrientes antioxidantes y descanso regenerativo',
    iconName: 'Flame'
  },
  {
    id: 'cortisol',
    name: 'Perfil Cortisol / Estrés',
    subtitle: 'Eje HPA y hormonas de respuesta al estrés',
    description: 'El estrés crónico o las fluctuaciones de cortisol influyen directamente en la distribución de la grasa abdominal y el cansancio por las tardes.',
    keySigns: ['Cansancio por la tarde', 'Mente acelerada de noche', 'Grasa localizada en el abdomen'],
    focusArea: 'Higiene del sueño, pausas activas y modulación del sistema nervioso',
    iconName: 'Activity'
  },
  {
    id: 'insulina',
    name: 'Perfil Resistencia a la Insulina',
    subtitle: 'Manejo de la glucosa y picos de energía',
    description: 'Las variaciones de estrógenos pueden alterar la sensibilidad a la insulina, generando antojos dulces y bajones repentinos de energía.',
    keySigns: ['Antojos dulces tras comer', 'Somnolencia postprandial', 'Dificultad para mantener energía constante'],
    focusArea: 'Ordenamiento en el consumo de macronutrientes y caminatas poscomida',
    iconName: 'Zap'
  },
  {
    id: 'sueno',
    name: 'Perfil Sueño',
    subtitle: 'Ritmo circadiano y recuperación nocturna',
    description: 'Los microdespertares o el sueño no reparador descompensan la leptina y grelina, afectando el apetito y la vitalidad del día siguiente.',
    keySigns: ['Despertares entre 2:00 y 4:00 AM', 'Fatiga al despertar', 'Irritabilidad leve'],
    focusArea: 'Ambiente térmico adecuado, iluminación tenue nocturna y ritmos circadianos',
    iconName: 'Moon'
  },
  {
    id: 'muscular',
    name: 'Perfil Masa Muscular',
    subtitle: 'Tasa metabólica basal y masa magra',
    description: 'A partir de los 40 años, la pérdida gradual de masa magra disminuye el gasto calórico en reposo sin que te des cuenta.',
    keySigns: ['Pérdida de firmeza', 'Metabolismo que se siente "lento"', 'Fatiga ante esfuerzos cotidianos'],
    focusArea: 'Estímulo muscular progresivo y requerimiento proteico adecuado',
    iconName: 'Dumbbell'
  }
];

export const SYMPTOMS_LIST: IdentifiedSymptom[] = [
  {
    id: 'peso',
    text: 'Subes de peso fácilmente.',
    icon: 'TrendingUp',
    explanation: 'Un cambio sutil en el equilibrio hormonal puede modificar la forma en que tu cuerpo procesa las calorías.'
  },
  {
    id: 'grasa',
    text: 'La grasa abdominal no desaparece.',
    icon: 'Target',
    explanation: 'Durante la perimenopausia, la distribución del tejido adiposo suele migrar naturalmente hacia la zona central.'
  },
  {
    id: 'cansancio',
    text: 'Te sientes cansada.',
    icon: 'BatteryLow',
    explanation: 'El cansancio persistente no es falta de ganas, es una señal de que tu energía cellular necesita otro enfoque.'
  },
  {
    id: 'sueno',
    text: 'Duermes mal.',
    icon: 'Moon',
    explanation: 'Interrupciones nocturnas que impiden alcanzar el sueño profundo restaurador para el metabolismo.'
  },
  {
    id: 'antojos',
    text: 'Tienes antojos frecuentes.',
    icon: 'Cookie',
    explanation: 'Picos hormonales y fluctuaciones de glucosa que se manifiestan como necesidad súbita de carbohidratos.'
  },
  {
    id: 'nada',
    text: 'Nada parece funcionar.',
    icon: 'RefreshCw',
    explanation: 'Lo que antes daba resultados a los 20 o 30 años deja de funcionar porque las prioridades metabólicas han cambiado.'
  }
];

export const WHAT_YOU_GET = [
  {
    title: 'Evaluación interactiva',
    description: '10 preguntas guiadas para mapear tus señales fisiológicas en menos de 5 minutos.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Resultado personalizado',
    description: 'Identificación clara de tu perfil metabólico predominante de los 5 existentes.',
    icon: 'UserCheck'
  },
  {
    title: 'Explicación sencilla',
    description: 'Sin modismos médicos indescifrables. Lenguaje claro, directo y empático.',
    icon: 'BookOpen'
  },
  {
    title: 'Recomendaciones iniciales',
    description: 'Pautas prácticas de hábitos, nutrición y descanso alineados a tu perfil específico.',
    icon: 'Sparkles'
  },
  {
    title: 'Acceso a conocer tu perfil metabólico',
    description: 'Documento digital interactivo de consulta permanente para leer a tu ritmo.',
    icon: 'ShieldCheck'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 'Paso 1',
    title: 'Responde 10 preguntas',
    description: 'Cuestionario breve y libre de juicios diseñado para identificar tus señales cotidianas.'
  },
  {
    step: 'Paso 2',
    title: 'Obtén tu Perfil Metabólico',
    description: 'El sistema calcula en segundos tu patrón predominante entre los 5 perfiles evaluados.'
  },
  {
    step: 'Paso 3',
    title: 'Recibe recomendaciones iniciales',
    description: 'Accede a una guía concisa con acciones de estilo de vida para empezar a entender tu cuerpo.'
  }
];

export const FOR_WHOM = [
  'Tienes entre 40 y 60 años.',
  'Estás en perimenopausia o menopausia.',
  'Sientes cambios en tu metabolismo.',
  'Quieres entender mejor tu cuerpo.'
];
