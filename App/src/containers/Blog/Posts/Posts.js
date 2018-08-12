import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get('/posts')
        .then(respons => {
            const posts = respons.data.slice(0, 8)
            const updatedPosts = posts.map(post =>{
                return{
                    ...post, author: 'Nick'
                }
            })
            this.setState({post: updatedPosts})
        })
        .catch(
            error=>{
                //console.log(error)
                //this.setState({error: true})
            }
        )
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId: id})
    }

    render(){
        let posts = <p style={{textAlign: "center", color: "red"}}>Somthing goes wrong</p>
        if(!this.state.error){
            posts = this.state.post.map(post =>{
                return <Post 
                        clicked={()=>this.postSelectedHandler(post.id)}
                        key={post.id}
                        title={post.title}
                        author={post.author}
                    />
            })
        }
        return(
            <section className="Posts">
                    {posts}
            </section>
        );
    }
}

export default Posts;