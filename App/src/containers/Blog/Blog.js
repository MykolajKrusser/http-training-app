import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';
import './Blog.css';

class Blog extends Component {
    state = {
        post: [],
        selectedPostId: null
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts').then(respons => {
            const posts = respons.data.slice(0, 4)
            const updatedPosts = posts.map(post =>{
                return{
                    ...post, author: 'Nick'
                }
            })
            this.setState({post: updatedPosts})
        })
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId: id})
    }

    render () {
        const posts = this.state.post.map(post =>{
            return <Post 
                clicked={()=>this.postSelectedHandler(post.id)}
                key={post.id}
                title={post.title}
                author={post.author}
                />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;