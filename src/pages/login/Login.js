import React from "react";
import './Login.css';
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/blogposts")
    }

    return (
        <main>
            <div className="main-container">
                <h1>Login pagina</h1>
                <p>Druk op de knop om in te loggen!</p>
                <button type="submit" className="login-button" onClick={handleClick}>Inloggen</button>
            </div>
        </main>
    )
}

export default Login;