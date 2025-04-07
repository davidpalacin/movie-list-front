import './Login.css';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { fakeUsers } from '../../data/fakeUsers';

function Login() {
    const [, navigate] = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = fakeUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            setSuccess(`¡Bienvenido, ${user.name}!`);
            setError('');

            // Aquí podrías redirigir al dashboard o guardar el estado del usuario
            const { name, email } = user;
            localStorage.setItem('user', JSON.stringify({ name, email }));

            // Por ejemplo, podrías usar navigate('/dashboard') para redirigir al usuario
            navigate('/dashboard');
        } else {
            setError('Correo o contraseña incorrectos.');
            setSuccess('');
        }
    };

    return (
        <div className="login-container">
            <div className="login-background"></div>

            <div className="login-content">
                <h1 className="login-brand" onClick={() => navigate('/')}>
                    <span className="brand-white">My</span>
                    <span className="brand-color">MovieList</span>
                </h1>

                <div className="login-box">
                    <h2 className="login-title">Inicia sesión</h2>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="login-button">
                            Entrar
                        </button>

                        {error && <p className="login-error">{error}</p>}
                        {success && <p className="login-success">{success}</p>}

                        <p className="login-register-text">
                            ¿No tienes cuenta?{' '}
                            <span
                                className="login-register-link"
                                onClick={() => navigate('/register')}
                            >
                                Regístrate
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
