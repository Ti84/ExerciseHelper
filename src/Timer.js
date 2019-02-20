// This page is based on: https://www.youtube.com/watch?v=LAaf7-WuJJQ Wes Bos is amazing!

import React, { Component } from "react";

class Timer extends Component {
  formatSeconds = remainingSeconds => {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = Math.floor(remainingSeconds % 60);
    return seconds.toString().length < 2
      ? `${minutes}:0${seconds}`
      : `${minutes}:${seconds}`;
  };

  render() {
    return (
      <div className="Timer">
        <p>{this.formatSeconds(this.props.seconds)}</p>
      </div>
    );
  }
}

export default Timer;
