import './Welcome.css';
import { useLocation } from 'wouter';


function Welcome() {
    const [, navigate] = useLocation();

    return (
        <div className="welcome-container">
            <div className="welcome-overlay">
                <div className="welcome-hero">
                    <h1 className="welcome-title">
                        <span className="brand-white">My</span>
                        <span className="brand-color">MovieList</span>
                    </h1>

                    <p className="welcome-subtitle">Organiza y descubre tus películas favoritas</p>
                    <button className="welcome-button" onClick={() => navigate('/login')}>
                        Empezar
                    </button>
                </div>

                <div className="welcome-features">
                    <div className="feature">🎬 Organiza tus películas</div>
                    <div className="feature">⭐ Puntúa las que has visto</div>
                    <div className="feature">🔍 Descubre nuevas historias</div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
