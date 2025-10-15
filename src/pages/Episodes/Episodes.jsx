import { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { imagenSimpsons } from '../../utils/imagenes';
import Loader from '../../components/Loader/Loader';

const Episodios = () => {
  const [episodios, setEpisodios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [temporadaFiltro, setTemporadaFiltro] = useState('');

  useEffect(() => {
    // traer episodios desde la API
    setCargando(true);
    setError(null);
    fetch('https://thesimpsonsapi.com/api/episodes')
      .then(respuesta => respuesta.json())
      .then(datos => {
        const lista = Array.isArray(datos) ? datos : (datos && datos.results ? datos.results : []);
        setEpisodios(lista);
      })
      .catch(() => { setEpisodios([]); setError('No se pudo cargar. Intenta más tarde.'); })
      .finally(() => setCargando(false));
  }, [])

  // sacar temporadas únicas para el filtro y crear la lista filtrada
  const temporadas = Array.from(new Set(episodios.map(e => e.season).filter(Boolean))).sort((a,b)=>a-b);
  const listaFiltrada = temporadaFiltro ? episodios.filter(e => e.season === temporadaFiltro) : episodios;

  return (
    <div>
      {cargando && <Loader />}
      {error && !cargando && <p style={{ textAlign: 'center' }}>{error}</p>}

      {!cargando && !error && (
        <div style={{ marginBottom: 16 }}>
          <FormControl size="small">
            <InputLabel id="temporada-label">Temporada</InputLabel>
            <Select
              labelId="temporada-label"
              label="Temporada"
              value={temporadaFiltro}
              onChange={(e) => setTemporadaFiltro(e.target.value)}
              style={{ minWidth: 140 }}
            >
              <MenuItem value="">Todas</MenuItem>
              {temporadas.map(t => (
                <MenuItem key={t} value={t}>{t}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}

      {!cargando && !error && (
      <Grid container spacing={2}>
        {listaFiltrada.map(episodio => (
          <Grid item xs={12} sm={6} md={4} key={episodio.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={imagenSimpsons('episode', episodio)}
                alt={episodio.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {episodio.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Temporada: {episodio.season} - Episodio: {episodio.episode_number}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fecha: {episodio.airdate || 'N/D'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      )}
    </div>
  )
}

export default Episodios;
