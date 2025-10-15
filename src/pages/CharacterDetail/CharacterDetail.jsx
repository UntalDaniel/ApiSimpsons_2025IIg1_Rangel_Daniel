import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imagenSimpsons } from '../../utils/imagenes';

function CharacterDetail() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);
    fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
      .then(r => r.json())
      .then(d => {
        setPersonaje(d || null);
      })
      .catch(() => setError('No se pudo cargar el personaje'))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!personaje) return <p>No hay datos para mostrar.</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>{personaje.name}</h2>
      <img
        src={imagenSimpsons('character', personaje)}
        alt={personaje.name}
        style={{ maxWidth: 300, borderRadius: 8 }}
        onError={(e) => {
          if (personaje && personaje.id) {
            e.currentTarget.src = `https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp`;
          }
        }}
      />
      <p>Ocupación: {personaje.occupation || 'N/D'}</p>
      <p>Estado: {personaje.status || 'N/D'}</p>
      {Array.isArray(personaje.phrases) && personaje.phrases.length > 0 && (
        <div>
          <p>Frase célebre:</p>
          <blockquote style={{ fontStyle: 'italic' }}>{personaje.phrases[0]}</blockquote>
        </div>
      )}
    </div>
  );
}

export default CharacterDetail;
