export function imagenSimpsons(tipo, item) {
  const path = (item && (item.portrait_path || item.image_path)) || '';
  if (typeof path === 'string' && path.startsWith('http')) return path;
  if (typeof path === 'string' && path) return `https://thesimpsonsapi.com${path}`;
  if (item && item.id) return `https://cdn.thesimpsonsapi.com/500/${tipo}/${item.id}.webp`;
  return 'https://via.placeholder.com/500x500?text=Sin+imagen';
}
