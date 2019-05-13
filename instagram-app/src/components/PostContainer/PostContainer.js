import React from 'react';
import Post from './Post';

const PostContainer = props => {
  return (
    <div>
      {props.profiles.map(item => (
        <Post
          thumbnailUrl={item.thumbnailUrl}
          username={item.username}
          imageUrl={item.imageUrl} />
      ))}
    </div>
  )
}

export default PostContainer;