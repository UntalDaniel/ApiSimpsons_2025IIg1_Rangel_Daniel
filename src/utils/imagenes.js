// Helper sencillo para armar la URL de imagen usando SIEMPRE el CDN
// tipo puede ser: 'character' | 'location' | 'episode'
export function imagenSimpsons(tipo, item) {
  if (item && item.id) {
    return `https://cdn.thesimpsonsapi.com/500/${tipo}/${item.id}.webp`;
  }
  // si no hay id, devuelvo un placeholder
  return 'https://via.placeholder.com/500x500?text=Sin+imagen';
}
