import type { Item } from '../types';
export const ITEMS: Item[] = [
  { id: '1', name: 'Fundación Manos Unidas', description: 'Educación para la infancia.', mission: 'Educación para la infancia', category: 'Educación', city: 'Bogotá', impact: '320 niños' },
  { id: '2', name: 'Huellas de Esperanza', description: 'Rescate y bienestar animal.', mission: 'Rescate y bienestar animal', category: 'Animales', city: 'Medellín', impact: '180 rescates' },
  { id: '3', name: 'Verde Futuro', description: 'Restauración de ecosistemas.', mission: 'Restauración de ecosistemas', category: 'Ambiente', city: 'Cali', impact: '2.400 árboles' },
  { id: '4', name: 'Red de Alimentos', description: 'Seguridad alimentaria.', mission: 'Seguridad alimentaria', category: 'Ayuda social', city: 'Barranquilla', impact: '1.200 familias' },
  { id: '5', name: 'Casa Abierta', description: 'Salud comunitaria.', mission: 'Salud comunitaria', category: 'Salud', city: 'Pereira', impact: '740 consultas' },
];
export const FAVORITES = [ITEMS[0], ITEMS[2], ITEMS[4]];
