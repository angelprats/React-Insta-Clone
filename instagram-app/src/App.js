import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

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
      <div className="App">
        <SearchBar />
        <PostContainer profiles={this.state.profiles} />

      </div>
    );
  }

}


export default App;
