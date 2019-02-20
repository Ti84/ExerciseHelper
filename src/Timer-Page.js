import React, { Component } from "react";
import Timer from "./Timer";
import Button from "./Button";

class TimerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerControlText: "Start",
      timerPlaying: false,
      timeLeft: 1200
    };
  }

  playButtonClick = () => {
    this.setState({
      ...this.state,
      timerControlText:
        this.state.timerControlText === "Start" ? "Pause" : "Start",
      timerPlaying: this.state.timerControlText === "Start" ? false : true
    });
  };

  render() {
    return (
      <div class="timer-page">
        <Timer
          playing={this.state.timerPlaying}
          timerTime={this.state.timeLeft}
        />
        <Button
          onClick={this.playButtonClick.bind(this)}
          label={this.state.timerControlText}
        />
      </div>
    );
  }
}

export default TimerPage;
