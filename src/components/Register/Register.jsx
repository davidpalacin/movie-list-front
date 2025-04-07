import './Register.css';
import { useState } from 'react';
import { useLocation } from 'wouter';

function Register() {
    const [, navigate] = useLocation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ name, email, password });

        setSuccess('¡Registro exitoso!');
        setTimeout(() => navigate('/login'), 1500);
    };

    return (
        <div className="register-container">
            <div className="register-background"></div>

            <div className="register-content">
                <h1 className="register-brand" onClick={() => navigate('/')}>
                    <span className="register-brand-white">My</span>
                    <span className="register-brand-color">MovieList</span>
                </h1>

                <div className="register-box">
                    <h2 className="register-title">Crea una cuenta</h2>

                    <form className="register-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="register-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="register-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="register-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="register-button">
                            Registrarse
                        </button>

                        {success && <p className="register-success">{success}</p>}

                        <p className="register-footer-text">
                            ¿Ya tienes cuenta?{' '}
                            <span
                                className="register-link"
                                onClick={() => navigate('/login')}
                            >
                                Inicia sesión
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
