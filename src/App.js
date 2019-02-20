import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.scss";
import TimerPage from "./Timer-Page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <TimerPage path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
