import React, { Component } from "react";
// import { Router } from "@reach/router";
import "./App.scss";
import Timer from "./Timer/Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Fix github config to get Router working with github pages */}
        {/* <Router> */}
        <Timer path="/" />
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
