import React from 'react';
import Comment from './Comment';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  handleInput = e => {
    this.setState({
      currentComment: {...this.state.currentComment, [e.target.name] : e.target.value}
    })
  }

  toggleClick = () => {
    this.setState({ click: !this.state.click })
    if(this.state.click === true) {
      this.setState({ likesCounter: this.state.likesCounter +1});
    } else {
      this.setState({ likesCounter: this.state.likesCounter -1})
    }
  }



  render() {
    return (
      <div>
        {this.state.comments.map(comment =>
          <Comment comment={comment} />
        )}
        <form>
          <input placeholder="Add a comment..." />
        </form>
      </div>
    )
  }
}
export default CommentSection