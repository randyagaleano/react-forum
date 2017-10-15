import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="panel panel-default post-body">
          <div className="panel-body">
            Hello, i'm a post.
          </div>
        </div>
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
