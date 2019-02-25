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
          <ButtonControl onClick={() => this.buttonClick(300)} label={5} />
          <ButtonControl onClick={() => this.buttonClick(600)} label={10} />
          <ButtonControl onClick={() => this.buttonClick(900)} label={15} />
          <ButtonControl onClick={() => this.buttonClick(1200)} label={20} />
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
