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
      TimerLength: 25
    }
  }

  render(){
  return (
    <main>
      <h1>Pomodoro Clock</h1>
      <BreakInterval BreakInterval={this.state.breakLength}/>
      <SessionInterval SessionInterval={this.state.sessionLength}/>
      <Timer />
    </main>
  );
  }
}

export default App;
