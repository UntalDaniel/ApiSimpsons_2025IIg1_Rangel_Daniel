import './NavBAR.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav">
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/personajes">Personajes</Link></li>
            <li><Link to="/episodios">Episodios</Link></li>
            <li><Link to="/lugares">Lugares</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar