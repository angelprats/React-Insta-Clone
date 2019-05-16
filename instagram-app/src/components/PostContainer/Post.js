import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';

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
        {/* <p>Likes {props.likes}</p> */}

      </div>

      <div>
        <LikeSection
          likes={props.likes}
        />
        <CommentSection comments={props.comments} />
      </div>
      <p>{props.timestamp}</p>
    </div>
  )
}

export default Post;