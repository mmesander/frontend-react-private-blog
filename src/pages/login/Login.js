import React from "react";
import './Login.css';
import {useNavigate} from "react-router-dom";

function Login({isAuth, setIsAuth}) {
    const navigate = useNavigate();

    function login() {
        setIsAuth(!isAuth)
        navigate("/blogposts")
    }

    return (
        <main>
            <div className="main-container">
                <h1>Login pagina</h1>
                <p>Druk op de knop om in te loggen!</p>
                <button type="button" className="login-button" onClick={login}>Inloggen</button>
            </div>
        </main>
    )
}

export default Login;