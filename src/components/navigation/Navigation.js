import React from "react";
import './Navigation.css';
import {NavLink, useNavigate} from "react-router-dom";

function Navigation({isAuth, setIsAuth}) {
    const navigate = useNavigate();
    function logout() {
        setIsAuth(!isAuth)
        navigate("/")
    }

    return (
        <nav>
            <div className="nav-container">
                <h3>Awesome Blogpage</h3>

                <ul>
                    <li><NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'default-nav-link'} to="/">Home</NavLink></li>
                    {isAuth && <li><NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'default-nav-link'} to="/blogposts">Blog overzicht</NavLink></li>}
                    {!isAuth && <li><NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'default-nav-link'} to="/login">Login</NavLink></li>}
                    {isAuth && <li><button type="button" className="logout-button" onClick={logout}>Uitloggen</button></li>}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;