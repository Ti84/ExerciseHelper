import React, { Component } from "react";
import Timer from "./Timer";
import Button from "./Button";

class TimerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerControlText: "Start",
      timeLeft: 1200,
      timerPlaying: false
    };
  }

  componentDidMount() {
    this.setTime(this.state.timeLeft);
  }

  playButtonClick = () => {
    this.setState(
      {
        ...this.state,
        timerControlText:
          this.state.timerControlText === "Start" ? "Pause" : "Start",
        timerPlaying: !this.state.timerPlaying
      },
      () => this.timer(this.state.timeLeft)
    );
  };

  setTimeLeft = seconds => {
    this.setState(
      {
        ...this.state,
        timeLeft: seconds,
        timerPlaying: false,
        timerControlText: "Start"
      },
      () => this.timer(this.state.timeLeft)
    );
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
    let countDown;
    if (this.state.timerPlaying) {
      countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft <= 0) {
          clearInterval(this.state.countDown);
          return;
        }
        this.setTime(secondsLeft);
      }, 1000);
      this.setState({
        ...this.state,
        countDown
      });
    } else {
      clearInterval(this.state.countDown);
    }
  };

  render() {
    return (
      <div className="timer-page">
        <Timer seconds={this.state.timeLeft} />
        <Button onClick={() => this.setTimeLeft(300)} label={5} />
        <Button onClick={() => this.setTimeLeft(600)} label={10} />
        <Button onClick={() => this.setTimeLeft(900)} label={15} />
        <Button onClick={() => this.setTimeLeft(1200)} label={20} />
        <Button
          onClick={this.playButtonClick}
          label={this.state.timerControlText}
        />
      </div>
    );
  }
}

export default TimerPage;
