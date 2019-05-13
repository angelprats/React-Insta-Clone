import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: dummyData
    }
  };



  render() {
    return (
      <div className="App">

        <SearchBar />
        <PostContainer profiles={this.state.profiles} />
        {/* <CommentSection /> */}

      </div>
    );
  }

}


export default App;
