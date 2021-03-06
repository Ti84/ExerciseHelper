import React, { Component } from "react";
import Timer from "./Timer/Timer";
import "./TimerPage.scss";

class TimerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSetValues: [5, 10, 15, 20],
      initialSeconds: 1200,
      displayPlayButton: true
    };
  }
  render() {
    return (
      <div className="timer-page__timer">
        <Timer
          timeSetValues={this.state.timeSetValues}
          displayPlayButton={this.state.displayPlayButton}
          initialSeconds={this.state.initialSeconds}
        />
      </div>
    );
  }
}
export default TimerPage;
