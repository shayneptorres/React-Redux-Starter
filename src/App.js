import React, { Component } from 'react';
import './App.css';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from "react-router";

import PlayerInfo from "./components/player_info";


class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

const Home = () => <div className="App"><PlayerInfo /></div>

export default App;
