import './Dashboard.css';
import Sidebar from './Sidebar';
import { useState } from 'react';

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dashboard">
            <Sidebar isOpen={sidebarOpen} />

            <div className="dashboard-content">
                <div className="dashboard-header">
                    <span className="dashboard-logo">
                        <span className="brand-white">My</span>
                        <span className="brand-color">MovieList</span>
                    </span>

                    <button
                        className="hamburger-button"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        ☰
                    </button>
                </div>

                <button
                    className="hamburger-button"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    ☰
                </button>

                <h1 className="dashboard-title">Bienvenido a tu espacio</h1>
                {/* Aquí irá el contenido */}
            </div>
        </div>
    );
}

export default Dashboard;
