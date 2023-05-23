import React from "react";
import './Blog.css'
import {Link, useParams} from "react-router-dom";
import posts from '../../data/posts.json'


function Blog() {
    const {blogId} = useParams();

    const blog = posts.find((blog) => {
        return blog.id === blogId
    });

    return (
        <main>
            <div className="main-container">
                <h1>{blog.title} </h1>
                <h2>{blog.date}</h2>
                <p>{blog.content}</p>
                <p className="blog-link"><Link to="/">Terug naar Home</Link></p>
            </div>
        </main>
    )
}

export default Blog;