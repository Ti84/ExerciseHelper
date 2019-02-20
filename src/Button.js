// This page is based on: https://www.youtube.com/watch?v=LAaf7-WuJJQ Wes Bos is amazing!

import React, { Component } from "react";

class Button extends Component {
  onClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button type="button" onClick={() => this.onClick()}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
