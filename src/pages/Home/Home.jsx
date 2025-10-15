import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  useEffect(() => {
    // SEO basico
    document.title = 'Los Simpsons | Inicio';
    const meta = document.querySelector('meta[name="description"]');
    const texto = 'Explora personajes, episodios y lugares de Los Simpsons con una app sencilla y rápida.';
    if (meta) {
      meta.setAttribute('content', texto);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = texto;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <section className="home-contenedor">
      <div className="home-hero">
        <h2>Bienvenido a Los Simpsons App</h2>
        <p>
          Aquí puedes ver información de la serie: sus personajes, episodios y lugares más conocidos.
          Usa el menú o los accesos rápidos para empezar.
        </p>
        <div className="home-botones">
          <Link className="home-boton" to="/personajes">Ver personajes</Link>
          <Link className="home-boton" to="/episodios">Ver episodios</Link>
          <Link className="home-boton" to="/lugares">Ver lugares</Link>
        </div>
      </div>
      <div className="home-info">
        <h3>¿Qué encontrarás?</h3>
        <ul>
          <li>Listado de personajes con imagen y ocupación.</li>
          <li>Episodios con temporada y número.</li>
          <li>Lugares icónicos de Springfield.</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;