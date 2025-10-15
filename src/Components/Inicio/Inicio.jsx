import React, { useState, useEffect } from 'react';
import './Inicio.css';
import { imagenSimpsons } from '../../utils/imagenes';

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
                        src={imagenSimpsons('character', personaje)}
                        alt={personaje && personaje.name ? personaje.name : 'personaje'}
                        onError={(e) => {
                            if (personaje && personaje.id) {
                                e.currentTarget.src = `https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp`;
                            }
                        }}
                    />
                    <h2>{personaje.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Inicio;