import React, { Component } from 'react';
import Post from '../../Post/component/Post';
import PostEditor from '../../PostEditor/component/PostEditor';

class ThreadDisplay extends Component {

	constructor(props) {
	  super(props);

	  this.addPost = this.addPost.bind(this);

	  this.state = {
	    posts: [],
	  }
	}

	addPost(newPostBody) {
	  const newState = Object.assign({}, this.state);
	  newState.posts.push(newPostBody);
	  this.setState(newState);
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
			  <PostEditor addPost={this.addPost} />
			</div>
		)
	}
}

export default ThreadDisplay;