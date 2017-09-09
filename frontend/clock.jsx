import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.clockTick = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTick);
  }

  tick() {
    this.setState({time: new Date()});
  }


  render() {
    let hours = this.state.time.getHours() > 12 ?
    this.state.time.getHours() - 12 : this.state.time.getHours();
    let minutes = this.state.time.getMinutes() < 10 ?
    "0" + this.state.time.getMinutes() : this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds() < 10 ?
    "0" + this.state.time.getSeconds() : this.state.time.getSeconds();

    return (
      <div id="clock-widget">
        <h1 className="clock-name">Clock widget</h1>
        <div id='clock-time'>
          {hours}:{minutes}:{seconds}
        </div>

      </div>

    );
  }
}

export default Clock;
