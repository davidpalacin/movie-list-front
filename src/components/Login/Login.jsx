import './Login.css';
import { useLocation } from 'wouter';


function Login() {
    const [, navigate] = useLocation();

    return (
        <div className="login-container">
            <div className="login-background"></div>

            <div className="login-content">
                <h1 className="login-brand">
                    <span className="brand-white">My</span>
                    <span className="brand-color">MovieList</span>
                </h1>


                <div className="login-box">
                    <h2 className="login-title">Inicia sesión</h2>
                    <form className="login-form">
                        <input type="email" placeholder="Correo electrónico" className="login-input" />
                        <input type="password" placeholder="Contraseña" className="login-input" />
                        <button type="submit" className="login-button">Entrar</button>

                        <p className="login-register-text">
                            ¿No tienes cuenta?{" "}
                            <span className="login-register-link" onClick={() => navigate('/register')}>
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
