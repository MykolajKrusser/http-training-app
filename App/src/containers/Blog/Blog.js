import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class Blog extends Component {
    
    render () {
        return (
            <div>
                <nav className="Nav">
                    <ul>
                        <li><NavLink to="/posts" exact activeClassName="myActive">Posts</NavLink></li>
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
               
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts/" component={Posts}/>
                    <Redirect from='/' to='/posts'/>
                    {/* <Route path="/" component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;