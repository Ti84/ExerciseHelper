import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import Button from './Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timerControlText: 'Start'
    }
  }

  playButtonClick = () => {
    this.setState({
      ...this.state,
      timerControlText: this.state.timerControlText === 'Start' ? 'Pause' : 'Start'
    });
  }

  render() {
    return (
      <div className="App">
        <Timer></Timer>
        <Button onClick={this.playButtonClick.bind(this)} label={this.state.timerControlText}></Button>
      </div>
    );
  }
}

export default App;
