import './App.css';

//functions react
import React, {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

//components
import Navigation from './components/navigation/Navigation';

//pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Blogposts from './pages/blogposts/Blogposts';
import Blog from './pages/blog/Blog';


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    console.log(isAuthenticated)

    return (
        <>
            <Navigation isAuth={isAuthenticated}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route  path="/login" element={<Login setIsAuth={setIsAuthenticated} isAuth={isAuthenticated}/>}/>
                <Route path="/blogposts" element={ isAuthenticated ? <Blogposts/> : <Navigate to="/login"/>}/>
                <Route path="/blogposts/:blogId" element={<Blog/>}></Route>
            </Routes>
        </>
    );
}

export default App;