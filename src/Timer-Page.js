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

  componentDidMount() {
    this.timer(this.state.timeLeft);
  }

  playButtonClick = () => {
    this.setState({
      ...this.state,
      timerControlText:
        this.state.timerControlText === "Start" ? "Pause" : "Start",
      timerPlaying: this.state.timerControlText === "Start" ? false : true
    });
  };

  setTime = seconds => {
    this.setState({
      ...this.state,
      timeLeft: seconds
    });
  };

  timer = seconds => {
    const now = Date.now();
    const then = now + seconds * 1000;
    this.setTime(seconds);

    const countDown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft <= 0) {
        clearInterval(countDown);
        return;
      }
      this.setTime(secondsLeft);
    }, 1000);
  };

  render() {
    return (
      <div class="timer-page">
        <Timer seconds={this.state.timeLeft} />
        <Button
          onClick={this.playButtonClick.bind(this)}
          label={this.state.timerControlText}
        />
      </div>
    );
  }
}

export default TimerPage;
