import React from "react";
import './App.css';

//functions react
// import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'

//components
import Navigation from './components/navigation/Navigation';

//pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Blogposts from './pages/blogposts/Blogposts';
import Blog from './pages/blog/Blog';


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    // const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/blogposts" element={<Blogposts/>}/>
                <Route path="/blogposts/:blogId" element={<Blog/>}></Route>
            </Routes>
        </>
    );
}

export default App;