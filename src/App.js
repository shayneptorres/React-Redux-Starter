import React, { Component } from 'react';
import './App.css';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from "react-router";

import PlayerInfo from "./components/player_info";


class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/battle" component={Battle} />
      </Router>
    );
  }
}

const Home = () => (
  <div className="App">
    <PlayerInfo />
    <Link to="/battle">Let's Battle</Link>
  </div>
)
const Battle = () => (
  <div className="App">
    <h2>Here is where the battle will go</h2>
    <Link to="/">Back to set up</Link>
  </div>
)
export default App;
