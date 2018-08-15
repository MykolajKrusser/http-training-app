import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Nick',
        submited: false
    }
    postDatahandler = ()=>{
        const data = {
            title: this.state.title,
            doby: this.state.body,
            author: this.state.author
        }
        axios.post("/posts", data)
            .then(respons =>{
                console.log(respons)
                this.setState({title: '', content: ''})
                // this.setState({submited: true})
                // this.props.history.replace('/posts')
                this.props.history.push('/posts')
                alert('Data sent!!')
            })
    }
    render () {
        
        let redirect = null
        if(this.state.submited){
            redirect = <Redirect to="/posts"/>
        }

        return (
            <div className="NewPost">
            {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Nick">Nick</option>
                    <option value="Pipt">Pipt</option>
                </select>
                <button onClick={this.postDatahandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;