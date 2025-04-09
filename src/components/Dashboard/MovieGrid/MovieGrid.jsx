import './MovieGrid.css';
import { useState } from 'react';
import { fakeMovies } from '../../../data/fakeMovies';
import { navigate } from 'wouter/use-hash-location';
import { Link } from 'wouter';

function MovieGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentMovies = fakeMovies.slice(start, end);

    const totalPages = Math.ceil(fakeMovies.length / itemsPerPage);

    return (
        <div className="movie-grid-wrapper">
            <div className="filters-bar">
                <input type="text" placeholder="Buscar título..." />
                <select>
                    <option>Todos los géneros</option>
                    <option>Acción</option>
                    <option>Drama</option>
                    <option>Comedia</option>
                    <option>Romance</option>
                    {/* etc... */}
                </select>
                <select>
                    <option>Año (cualquiera)</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    {/* etc... */}
                </select>
            </div>

            <div className="movie-grid">
                {currentMovies.map((movie) => (
                    <Link href={`/dashboard/movie/${movie.id}`} className={"movie-card-link"}>
                        <div key={movie.id} className="movie-card">
                            <img src={movie.poster} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>{movie.genres.join(', ')}</p>
                            <span>{movie.year} · ⭐ {movie.rating}</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}

export default MovieGrid;
