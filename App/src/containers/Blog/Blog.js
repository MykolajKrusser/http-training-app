import React, { Component } from 'react';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost'; comment it for use asyncComponent
import './Blog.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';


import asyncComponent from '../../hoc/asyncComponent'; // lazy loading of component
const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
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
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts/" component={Posts}/>
                    {/* <Redirect from='/' to='/posts'/> */}
                    {/* <Route path="/" component={Posts}/> */}
                    <Route render={()=>(<h1 style={{textAlign: "center", margin: "50px auto"}}>Page NOT found</h1>)}/> {/*always in the end of route list, does`t work with Redirect*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;