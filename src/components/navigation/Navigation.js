import React from "react";
import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation({isAuth}) {
    return (
        <nav>
            <div className="nav-container">
                <h3>Awesome Blogpage</h3>

                <ul>
                    <li><NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'default-nav-link'} to="/">Home</NavLink></li>
                    {isAuth && <li><NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'default-nav-link'} to="/blogposts">Blog overzicht</NavLink></li>}
                    <li><NavLink className={({isActive}) => isActive ? 'active-nav-link' : 'default-nav-link'} to="/login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;