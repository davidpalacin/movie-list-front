import './Dashboard.css';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { useUserStore } from '../../store/userStore';
import MovieGrid from './MovieGrid/MovieGrid';



function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user, loadUserFromStorage } = useUserStore();

    useEffect(() => {
        loadUserFromStorage();
    }, []);

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

                <h1 className="dashboard-title">Hola, {user?.name}</h1>
                <MovieGrid />
            </div>
        </div>
    );
}

export default Dashboard;
