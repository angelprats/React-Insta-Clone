import React from 'react'

const Comment = props => {
  return (
    <div className='comment-area'>
      <div className='username'>{props.comment.username}</div>
      <div className='text'>{props.comment.text}</div>
    </div>
  )
}

export default Comment