import React, { Component } from 'react';
import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state={
        loadedPostById: null
    }

    deletePostHandler = ()=>{
        axios.delete('/posts/' + this.props.match.params.id)
            .then(respons=>{
                console.log(respons)
                alert("Post was deleted!!")
            })
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(){
        this.loadData();
    }

    loadData(){
        if(this.props.match.params.id){
            if(!this.state.loadedPostById || (this.state.loadedPostById && this.state.loadedPostById.id !== +this.props.match.params.id)){
                axios.get('/posts/' + this.props.match.params.id)
                .then(respons=>{
                    //console.log(respons.data)
                    this.setState({loadedPostById: respons.data})
                })
            }
        }
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign: "center"}}>Loading...</p>;
        }
        if(this.state.loadedPostById){
            post = (
            <div className="FullPost">
                <h1>{this.state.loadedPostById.title}</h1>
                <p>{this.state.loadedPostById.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>
            );
        }
        
        return post;
    }
}

export default FullPost;