import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { imagenSimpsons } from '../../utils/imagenes';
import './CharacterCard.css';

function CharacterCard({ personaje }) {
  // tarjeta sencilla para mostrar un personaje con su imagen y nombre
  if (!personaje) return null;
  return (
    <Card className="card-personaje fade-in">
      <CardActionArea component={Link} to={`/personaje/${personaje.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={imagenSimpsons('character', personaje)}
          alt={personaje.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {personaje.name}
          </Typography>
          {personaje.occupation && (
            <Typography variant="body2" color="text.secondary">
              Ocupación: {personaje.occupation}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CharacterCard;
