import { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { imagenSimpsons } from '../../utils/imagenes';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';

const Personajes = () => {
  // lista de personajes y pagina actual
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const porPagina = 10;
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // traer personajes desde la API
    setCargando(true);
    setError(null);
    fetch('https://thesimpsonsapi.com/api/characters')
      .then(respuesta => respuesta.json())
      .then(datos => {
        const lista = Array.isArray(datos) ? datos : (datos && datos.results ? datos.results : []);
        setPersonajes(lista);
      })
      .catch(() => { setPersonajes([]); setError('No se pudo cargar. Intenta más tarde.'); })
      .finally(() => setCargando(false));
  }, []);

  // calculo de paginación local (simple)
  const totalPaginas = Math.max(1, Math.ceil(personajes.length / porPagina));
  const inicio = (pagina - 1) * porPagina;
  const visibles = personajes.slice(inicio, inicio + porPagina);

  return (
    <div>
      {cargando && <Loader />}
      {error && !cargando && <p style={{ textAlign: 'center' }}>{error}</p>}

      {!cargando && !error && (
      <Grid container spacing={2}>
        {visibles.map(personaje => (
          <Grid item xs={12} sm={6} md={4} key={personaje.id}>
            <CharacterCard personaje={personaje} />
          </Grid>
        ))}
      </Grid>
      )}

      {!cargando && !error && (
        <Pagination
          pagina={pagina}
          totalPaginas={totalPaginas}
          alAnterior={() => setPagina(p => Math.max(1, p - 1))}
          alSiguiente={() => setPagina(p => Math.min(totalPaginas, p + 1))}
        />
      )}
    </div>
  );
};

export default Personajes;



