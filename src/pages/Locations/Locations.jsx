
import { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { imagenSimpsons } from '../../utils/imagenes';
import Loader from '../../components/Loader/Loader';

const Lugares = () => {
  const [lugares, setLugares] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // traer lugares desde la API
    setCargando(true);
    setError(null);
    fetch('https://thesimpsonsapi.com/api/locations')
      .then(respuesta => respuesta.json())
      .then(datos => {
        const lista = Array.isArray(datos) ? datos : (datos && datos.results ? datos.results : []);
        setLugares(lista);
      })
      .catch(() => { setLugares([]); setError('No se pudo cargar. Intenta más tarde.'); })
      .finally(() => setCargando(false));
  }, []);

  return (
    <div>
      {cargando && <Loader />}
      {error && !cargando && <p style={{ textAlign: 'center' }}>{error}</p>}

      {!cargando && !error && (
      <Grid container spacing={2}>
        {lugares.map(lugar => (
          <Grid item xs={12} sm={6} md={4} key={lugar.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={imagenSimpsons('location', lugar)}
                alt={lugar.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {lugar.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uso: {lugar.use}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descripción: {lugar.description || 'N/D'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      )}
    </div>
  );
};

export default Lugares;


