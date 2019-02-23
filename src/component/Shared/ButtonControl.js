// This page is based on: https://www.youtube.com/watch?v=LAaf7-WuJJQ Wes Bos is amazing!

import React, { Component } from "react";
import "./ButtonControl.scss";

class ButtonControl extends Component {
  onClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <input
        className="btn-control"
        type="button"
        onClick={() => this.onClick()}
        value={this.props.label}
      />
    );
  }
}

export default ButtonControl;
