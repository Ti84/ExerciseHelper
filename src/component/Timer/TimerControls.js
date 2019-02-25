// This page is based on: https://www.youtube.com/watch?v=LAaf7-WuJJQ Wes Bos is amazing!

import React, { Component } from "react";
import "./TimerDisplay.scss";
import ButtonControl from "../Shared/ButtonControl";

const TIMER_CONTROL_OPERATORS = {
  Start: "START"
};

class TimerControls extends Component {
  buttonClick = label => {
    this.props.onClick(label);
  };
  render() {
    return (
      <div className="btn-control-nav">
        <div className="time-controls">
          {this.props.timeSetValues &&
            this.props.timeSetValues.map((seconds, i) => (
              <ButtonControl
                onClick={() => this.buttonClick(seconds * 60)}
                label={seconds}
                key={i}
              />
            ))}
        </div>
        <div className="function-controls">
          <ButtonControl
            onClick={() => this.buttonClick(TIMER_CONTROL_OPERATORS.Start)}
            label={this.props.timerPlaying ? "Pause" : "Start"}
          />
        </div>
      </div>
    );
  }
}

export default TimerControls;
export { TIMER_CONTROL_OPERATORS };
