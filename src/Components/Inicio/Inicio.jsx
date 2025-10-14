import React, { useState, useEffect } from 'react';
import './Inicio.css';

const Inicio = () => {
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
        <div className="character-list">
            {personajes.map(personaje => (
                <div key={personaje.id} className="character-card">
                    <img
                        src={personaje && personaje.portrait_path && personaje.portrait_path.startsWith('http') ? personaje.portrait_path : `https://thesimpsonsapi.com${(personaje && personaje.portrait_path) ? personaje.portrait_path : ''}`}
                        alt={personaje && personaje.name ? personaje.name : 'personaje'}
                    />
                    <h2>{personaje.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Inicio;