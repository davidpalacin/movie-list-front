import './Login.css';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { fakeUsers } from '../../data/fakeUsers';

function Login() {
    const [, navigate] = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = fakeUsers.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('loggedUser', JSON.stringify(user));
            navigate('/dashboard');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Inicia sesión</h2>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Entrar</button>

                <p className="register-link">
                    ¿Aún no tienes cuenta? <span onClick={() => navigate('/register')}>Regístrate</span>.
                </p>
            </form>
        </div>
    );
}

export default Login;
