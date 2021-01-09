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
      TimerMinute: 25,
      isPlay: false
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onPlay = this.onPlay.bind(this);
  }

  onIncreaseBreakLength(){
    this.setState((prevState) => {
      return{
        breakLength: prevState.breakLength + 1
      }
    });
  }

  onDecreaseBreakLength(){
    this.setState((prevState) => {
      return{
        breakLength: prevState.breakLength - 1
      }
    });
  }

  onIncreaseSessionLength(){
    this.setState((prevState) => {
      return{
        sessionLength: prevState.sessionLength + 1,
        TimerMinute: prevState.sessionLength + 1
      }
    });
  }

  onDecreaseSessionLength(){
    this.setState((prevState) => {
      return{
        sessionLength: prevState.sessionLength - 1,
        TimerMinute: prevState.sessionLength - 1
      }
    });
  }

  onUpdateTimerMinute(){
    this.setState((prevState) => {
      return{
        TimerMinute: prevState.TimerMinute - 1
      }
    });
  }

  onToggleInterval(isSession){
    if(isSession){
      this.setState({
        TimerMinute: this.state.sessionLength
      })
    }else{
      this.setState({
        TimerMinute: this.state.breakLength
      })
    }
  }

  onReset(){
    this.setState({
      TimerMinute: this.state.sessionLength
    })
  }

  onPlay(isPlay){
    this.setState({
      isPlay: isPlay
    })
  }
  render(){
    return (
      <main>
        <h2>Pomodoro Timer</h2>
        <section className = "IntervalLengthContainer">
          <BreakInterval 
          isPlay = {this.state.isPlay}
          BreakInterval={this.state.breakLength} 
          increaseBreak={this.onIncreaseBreakLength} 
          decreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionInterval 
          isPlay = {this.state.isPlay}
          SessionInterval={this.state.sessionLength}
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength}
          />
        </section>
        <Timer 
        isPlay = {this.state.isPlay}
        TimerMinute = {this.state.TimerMinute}
        breakLength = {this.state.breakLength}
        UpdateTimerMinute = {this.onUpdateTimerMinute}
        onToggleInterval = {this.onToggleInterval}
        resetTimer={this.onReset}
        onPlay={this.onPlay}
        />
      </main>
    );
  }
}

export default App;
