
import { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    // traer personajes desde la API
    fetch('https://thesimpsonsapi.com/api/characters')
      .then(respuesta => respuesta.json())
      .then(datos => {
        const lista = Array.isArray(datos) ? datos : (datos && datos.results ? datos.results : []);
        setPersonajes(lista);
      })
      .catch(() => { setPersonajes([]); });
  }, []);

  return (
    <Grid container spacing={2}>
      {personajes.map(personaje => (
        <Grid item xs={12} sm={6} md={4} key={personaje.id}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={personaje && personaje.portrait_path && personaje.portrait_path.startsWith('http') ? personaje.portrait_path : `https://thesimpsonsapi.com${(personaje && personaje.portrait_path) ? personaje.portrait_path : ''}`}
              alt={personaje.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {personaje.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ocupación: {personaje.occupation}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Personajes;


