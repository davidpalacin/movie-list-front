import { useLocation } from "wouter";
import "./Sidebar.css";

function Sidebar({ isOpen }) {
    const [, navigate] = useLocation();

    return (
        <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
            <h2 className="sidebar-title desktop-only" onClick={() => navigate('/')}>
                <span className="brand-white">My</span>
                <span className="brand-color">MovieList</span>
            </h2>

            <nav className="sidebar-nav">
                <ul>
                    <li onClick={() => navigate('/dashboard')}>Inicio</li>
                    <li onClick={() => navigate('/dashboard/lists')}>Mis listas</li>
                    <li onClick={() => navigate('/dashboard/explore')}>Explorar</li>
                    <li onClick={() => navigate('/dashboard/profile')}>Perfil</li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
