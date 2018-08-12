import React, { Component } from 'react';
import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {
    
    render () {
        return (
            <div>
                <nav className="Nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/new-post">New Post</a></li>
                    </ul>
                </nav>
                <Posts/>
            </div>
        );
    }
}

export default Blog;