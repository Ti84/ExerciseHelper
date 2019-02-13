// This page is based on: https://www.youtube.com/watch?v=LAaf7-WuJJQ Wes Bos is amazing!

import React, { Component } from 'react';

class Timer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: 1149,
      minutes: 0,
      seconds: 0
    };
  }
  setTime = (seconds) => {
    this.setState({
      ...this.state,
      minutes: Math.floor(seconds / 60),
      seconds: Math.floor(seconds % 60)
    })
  };
  timer = (seconds) => {
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
  }
  formatSeconds = (remainingSeconds) => remainingSeconds.toString().length < 2 ? `0${remainingSeconds}` : remainingSeconds;


  componentDidMount() {
    this.timer(this.state.timeLeft);
  }
  render() {
    return (<div className="Timer">
      <p>{`${this.state.minutes}:${this.formatSeconds(this.state.seconds)}`}</p>
    </div>);  
  }
}

export default Timer;