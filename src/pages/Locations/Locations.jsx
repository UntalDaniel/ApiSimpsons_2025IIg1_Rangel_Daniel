
import { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { imagenSimpsons } from '../../utils/imagenes';

const Lugares = () => {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    // traer lugares desde la API
    fetch('https://thesimpsonsapi.com/api/locations')
      .then(respuesta => respuesta.json())
      .then(datos => {
        const lista = Array.isArray(datos) ? datos : (datos && datos.results ? datos.results : []);
        setLugares(lista);
      })
      .catch(() => { setLugares([]); });
  }, []);

  return (
    <Grid container spacing={2}>
      {lugares.map(lugar => (
        <Grid item xs={12} sm={6} md={4} key={lugar.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={imagenSimpsons('location', lugar)}
              alt={lugar.name}
              onError={(e) => {
                if (lugar && lugar.id) {
                  e.currentTarget.src = `https://cdn.thesimpsonsapi.com/500/location/${lugar.id}.webp`;
                }
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {lugar.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Uso: {lugar.use}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Lugares;


