import React from "react";
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionInterval from './SessionInterval';
import Timer from './Timer';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      TimerMinute: 25
    }
  }

  render(){
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className = "IntervalLengthContainer">
          <BreakInterval BreakInterval={this.state.breakLength}/>
          <SessionInterval SessionInterval={this.state.sessionLength}/>
        </section>
        <Timer TimerMinute={this.state.TimerMinute} />
      </main>
    );
  }
}

export default App;
