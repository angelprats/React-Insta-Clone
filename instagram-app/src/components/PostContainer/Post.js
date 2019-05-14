import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const Post = props => {
  return (
    <div>
      <div>
        <div>
          <img className='thumbnail' src={props.thumbnailUrl} />
          <h1>
            {props.username}
          </h1>
        </div>

        <img src={props.imageUrl} />
        <p>Likes {props.likes}</p>

      </div>

      <div>
        <CommentSection comments={props.comments} />
      </div>
      <p>{props.timestamp}</p>
      <form>
        <input placeholder="Add a comment..." />

      </form>

    </div>
  )
}

export default Post;