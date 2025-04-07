import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Inicia sesión</h2>
                <form className="login-form">
                    <input type="email" placeholder="Correo electrónico" className="login-input" />
                    <input type="password" placeholder="Contraseña" className="login-input" />
                    <button type="submit" className="login-button">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
