import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Post from './Post/component/Post';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [
        'hello world',
        'sup'
      ],
    }
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
            <textarea className="form-control post-editor-input" />
            <button className="btn btn-success post-editor-button">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
