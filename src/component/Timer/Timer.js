import React, { Component } from "react";
import TimerDisplay from "./TimerDisplay";
import NoSleep from "nosleep.js";
import "./Timer.scss";
import TimerControls, { TIMER_CONTROL_OPERATORS } from "./TimerControls";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.noSleep = new NoSleep();
    this.state = {
      timeLeft: 1200,
      timerPlaying: false
    };
  }

  componentDidMount() {
    window.addEventListener("click", this.handleNoSleep);
    window.addEventListener("touch", this.handleNoSleep);
    this.setTime(this.state.timeLeft);
  }
  handleNoSleep = () => {
    document.removeEventListener("click", this.handleNoSleep, false);
    document.removeEventListener("touch", this.handleNoSleep, false);
    this.noSleep.enable();
  };

  handleTimerControlClick = timerControlLabel => {
    if (typeof timerControlLabel === "number") {
      this.setState(
        {
          ...this.state,
          timeLeft: timerControlLabel,
          timerPlaying: false
        },
        () => this.timer(this.state.timeLeft)
      );
    }
    if (timerControlLabel === TIMER_CONTROL_OPERATORS.Start) {
      this.setState(
        {
          ...this.state,
          timerPlaying: !this.state.timerPlaying
        },
        () => this.timer(this.state.timeLeft)
      );
    }
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
        if (this.state.timeLeft % 60 === 0) {
          const audio = document.getElementById("audio");
          audio.play();
        }
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
      <div className="timer">
        <TimerDisplay seconds={this.state.timeLeft} />
        <TimerControls
          onClick={this.handleTimerControlClick}
          timerPlaying={this.state.timerPlaying}
        />
      </div>
    );
  }
}

export default Timer;
