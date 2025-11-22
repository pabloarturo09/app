export interface Tip {
  id: number;
  title: string;
  content: string;
  icon: string;
  color: string;
}

export const tips: Tip[] = [
  {
    id: 1,
    title: 'Distancia de Seguridad',
    content: 'Mantén una distancia mínima de 3 segundos con el vehículo de adelante.',
    icon: '🚗',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Uso de Direccionales',
    content: 'Usa direccionales siempre antes de girar o cambiar de carril.',
    icon: '↗️',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Límites de Velocidad',
    content: 'Respeta los límites de velocidad incluso cuando la vía parece despejada.',
    icon: '🚦',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Seguridad Peatonal',
    content: 'Antes de cruzar, haz contacto visual con los conductores.',
    icon: '👁️',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 5,
    title: 'No Usar Celular',
    content: 'No uses el celular mientras conduces; reduce reflejos y aumenta el riesgo.',
    icon: '📵',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 6,
    title: 'Conducción en Lluvia',
    content: 'En lluvia, reduce la velocidad y aumenta la distancia de frenado.',
    icon: '🌧️',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 7,
    title: 'Puntos Ciegos',
    content: 'Verifica espejos y puntos ciegos cada vez que cambies de carril.',
    icon: '👀',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 8,
    title: 'Seguridad en Motocicleta',
    content: 'Usa casco certificado si conduces motocicleta.',
    icon: '🏍️',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 9,
    title: 'Prioridad Peatonal',
    content: 'Los peatones siempre tienen prioridad en los cruces señalizados.',
    icon: '🚶',
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 10,
    title: 'Descanso al Conducir',
    content: 'Si estás cansado, detente; manejar con sueño es similar a manejar alcoholizado.',
    icon: '😴',
    color: 'from-pink-500 to-pink-600'
  }
];
