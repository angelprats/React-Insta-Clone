import React from 'react';
import withAuthenticate from './components/Authentication/withAuthenticate';
import dummyData from './dummy-data';
import LoginPage from './components/Login/LoginPage';
import PostPage from './components/PostContainer/PostPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    }
  };

  componentDidMount() {
    this.setState({ profiles: dummyData })
  }


  render() {
    return (
     <PostPage profiles={this.state.profiles}/>
    );
  }

}


export default withAuthenticate(App)(LoginPage);
