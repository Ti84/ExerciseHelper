import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import Button from './Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timerControlText: 'Start',
      timerPlaying: false,
      timeLeft: 1200
    }
  }

  playButtonClick = () => {
    this.setState({
      ...this.state,
      timerControlText: this.state.timerControlText === 'Start' ? 'Pause' : 'Start',
      timerPlaying: this.state.timerControlText === 'Start' ? false : true,
    });
  }

  render() {
    return (
      <div className="App">
        <Timer playing={this.state.timerPlaying} timerTime={this.state.timeLeft}></Timer>
        <Button onClick={this.playButtonClick.bind(this)} label={this.state.timerControlText}></Button>
      </div>
    );
  }
}

export default App;
