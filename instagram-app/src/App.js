import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
// import dummyData from './dummyData';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
      </div>
    );
  }

}


export default App;
