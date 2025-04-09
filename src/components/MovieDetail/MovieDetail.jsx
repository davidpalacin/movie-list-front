import './MovieDetail.css';
import { useParams, useLocation } from 'wouter';
import { fakeMovies } from '../../data/fakeMovies';
import { useState } from 'react';

function MovieDetail() {
    const { id } = useParams();
    const [, navigate] = useLocation();
    const [showDropdown, setShowDropdown] = useState(false);

    const movie = fakeMovies.find((m) => m.id === parseInt(id));

    const handleListClick = (listName) => {
        // Aquí se podrá añadir la lógica con Zustand más adelante
        console.log(`Añadida a la lista: ${listName}`);
        setShowDropdown(false);
    };

    if (!movie) {
        return (
            <div className="movie-detail not-found">
                <h2>Película no encontrada</h2>
                <button onClick={() => navigate('/dashboard')}>Volver al inicio</button>
            </div>
        );
    }

    return (
        <div className="movie-detail">
            <div className="top-bar">
                <button className="back-button" onClick={() => navigate('/dashboard')}>
                    ⬅ Volver
                </button>
            </div>

            <div className="movie-detail-poster">
                <img src={movie.poster} alt={movie.title} />
            </div>

            <div className="movie-detail-info">
                <h1>{movie.title}</h1>
                <p className="movie-meta">
                    {movie.year} · ⭐ {movie.rating}
                </p>
                <p className="movie-genres">{movie.genres.join(', ')}</p>
                <p className="movie-description">
                    Esta es una sinopsis ficticia de prueba para la película. Más adelante
                    se podrá cargar una descripción real desde una API como TMDB.
                </p>

                <div className="movie-buttons">
                    <button className="trailer-button">🎬 Ver Tráiler</button>

                    <div className="add-to-list">
                        <button
                            className="add-button"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            ➕ Añadir a lista
                        </button>

                        {showDropdown && (
                            <ul className="list-dropdown">
                                <li onClick={() => handleListClick('Favoritas')}>⭐ Favoritas</li>
                                <li onClick={() => handleListClick('Vistas')}>✅ Vistas</li>
                                <li onClick={() => handleListClick('Pendientes')}>📌 Pendientes</li>
                                <li onClick={() => handleListClick('Abandonadas')}>❌ Abandonadas</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
