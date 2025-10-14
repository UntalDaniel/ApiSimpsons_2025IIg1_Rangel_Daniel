
import { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

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
              image={lugar && lugar.image_path && lugar.image_path.startsWith('http') ? lugar.image_path : `https://thesimpsonsapi.com${(lugar && lugar.image_path) ? lugar.image_path : ''}`}
              alt={lugar.name}
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


