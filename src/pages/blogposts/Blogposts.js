import React from "react";
import './Blogposts.css'
import blogs from '../../data/posts.json'
import {Link} from "react-router-dom";

function Blogposts() {
    return (
        <main>
            <div className='main-container'>
                <h1>Blog overzichtspagina</h1>
                <h2>Aantal blogposts: <span>{blogs.length}</span></h2>
                <ul className="blog-list">
                    {blogs.map((blog) => {
                        return (
                            <li key={blog.id}><Link to={`/blogposts/${blog.id}`}>{blog.title}</Link></li>
                        );
                    })
                    }
                </ul>
            </div>
        </main>
    )
}

export default Blogposts;