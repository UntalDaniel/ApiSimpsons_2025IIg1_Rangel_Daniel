
import { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Episodios = () => {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    // traer episodios desde la API
    fetch('https://thesimpsonsapi.com/api/episodes')
      .then(respuesta => respuesta.json())
      .then(datos => {
        const lista = Array.isArray(datos) ? datos : (datos && datos.results ? datos.results : []);
        setEpisodios(lista);
      })
      .catch(() => { setEpisodios([]); });
  }, []);

  return (
    <Grid container spacing={2}>
      {episodios.map(episodio => (
        <Grid item xs={12} sm={6} md={4} key={episodio.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={episodio && episodio.image_path && episodio.image_path.startsWith('http') ? episodio.image_path : `https://thesimpsonsapi.com${(episodio && episodio.image_path) ? episodio.image_path : ''}`}
              alt={episodio.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {episodio.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Temporada: {episodio.season} - Episodio: {episodio.episode_number}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Episodios;


