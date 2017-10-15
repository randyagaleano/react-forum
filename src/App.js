import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Post from './Post/component/Post';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);

    this.state = {
      posts: [],
      newPostBody: '',
    }
  }

  addPost() {
    const newState = Object.assign({}, this.state);
    newState.posts.push(this.state.newPostBody);
    newState.newPostBody = '';
    this.setState(newState);
  }

  handlePostEditorInputChange(event) {
    this.setState({
      newPostBody: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        { 
          this.state.posts.map((postBody, index) => {
            return (
              <Post key={index} postBody={postBody} />
            )
          })
        }
        <div className="panel panel-default post-editor">
          <div className="panel-body">
            <textarea className="form-control post-editor-input" onChange={this.handlePostEditorInputChange} />
            <button className="btn btn-success post-editor-button" onClick={this.addPost}>Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
