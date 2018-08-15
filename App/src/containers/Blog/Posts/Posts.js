import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import axios from '../../../axios';
import {Link, Route} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get('/posts')
        .then(respons => {
            const posts = respons.data.slice(0, 4)
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
        //this.props.history.push({pathname: "/posts/" + id})
        this.props.history.push("/posts/" + id)
    }

    render(){
        let posts = <p style={{textAlign: "center", color: "red"}}>Somthing goes wrong</p>
        if(!this.state.error){
            posts = this.state.post.map(post =>{
                return (
                    //<Link to={"/posts/" + post.id} key={post.id}>
                        <Post 
                            clicked={()=>this.postSelectedHandler(post.id)}
                            title={post.title}
                            author={post.author}
                            key={post.id}
                        />
                    //</Link>
                    );
            })
        }
        return(
            <div>
                <section className="Posts">
                        {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;