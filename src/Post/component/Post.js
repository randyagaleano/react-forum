import React from 'react';

const Post = (props) => {
	return (
		<div className="panel post-body">
		  <div className="panel-body">
		    { props.postBody }
		  </div>
		</div>
	);
}

export default Post;