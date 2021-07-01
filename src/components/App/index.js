import { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import 'whatwg-fetch';
import Series from '../../containers/Series';
import Main from '../Main';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Main/>
      </div>
    );
  }
}
export default App;
