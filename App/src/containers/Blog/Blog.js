import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';
import {Route, NavLink} from 'react-router-dom';

class Blog extends Component {
    
    render () {
        return (
            <div>
                <nav className="Nav">
                    <ul>
                        <li><NavLink to="/" exact activeClassName="myActive">Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}
                            activeStyle={{
                                color: "red",
                                textDecoration: "underline"
                            }}>New Post</NavLink></li>
                    </ul>
                </nav>
                {/*<Route path="/" exact render={()=><h1>Home</h1>}/>
                <Route path="/"  render={()=><h1>Home22</h1>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
                <Route path="/:id" exact component={FullPost}/>
            </div>
        );
    }
}

export default Blog;