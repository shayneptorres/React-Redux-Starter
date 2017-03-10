import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlayerInfo from "./components/player_info";


class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerInfo />
      </div>
    );
  }
}

export default App;
