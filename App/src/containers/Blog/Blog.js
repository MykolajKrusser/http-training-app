import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';
import './Blog.css';

class Blog extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts').then(respons => {
            this.setState({post: respons.data})
        })
    }

    render () {
        const posts = this.state.post.map(post =>{
            return <Post 
                key={post.id}
                title={post.title}
                />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;