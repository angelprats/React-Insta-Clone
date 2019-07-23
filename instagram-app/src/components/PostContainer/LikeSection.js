import React from 'react';

class LikeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    }
  }

  increment = ev => {
    ev.preventDefault();
    this.setState(prevState => ({ likes: ++prevState.likes}));
  }

  render() {
   return(
     <div>
      {this.state.likes}
      <button onClick={this.increment}>Increment by 3</button>
    </div>
   ); 
  }

}



export default LikeSection;