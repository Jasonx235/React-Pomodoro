import React from 'react'
import testUtils from 'react-dom/test-utils';

class Timer extends React.Component{

    constructor(){
        super();
        this.state = {
            isSession: true,
            TimerSecond: 0,
            intervalID: 0
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.restart = this.restart.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    start(){
        let intervalID = setInterval(this.decreaseTimer, 1000);
        this.props.onPlay(true);
        this.setState({
            intervalID: intervalID
        })
    }

    decreaseTimer(){
        switch(this.state.TimerSecond){
            case 0:
                if(this.props.TimerMinute === 0){
                    if(this.state.isSession){
                        this.setState({
                            isSession: false
                        });
                        this.props.onToggleInterval(this.state.isSession);
                    }
                    else{
                        this.setState({
                            isSession: true
                        });
                        this.props.onToggleInterval(this.state.isSession);
                    }
                }else{
                this.props.UpdateTimerMinute()
                this.setState({
                    TimerSecond: 59
                })
            }
                break;
            default:
                this.setState((prevState) =>{
                    return{
                        TimerSecond: prevState.TimerSecond - 1
                    }
                })
                break;
        }
    
    }

    stop(){
        clearInterval(this.state.intervalID);
        this.props.onPlay(false);
    }

    restart(){
        this.stop();
        this.props.resetTimer();
        this.props.onPlay(false);
        this.setState({
            TimerSecond: 0,
            isSession: true
        })

    }


    render(){
        return(
            <section>
                <section className="TimerContainer">
                    <h4>{this.state.isSession === true ? "Session Time" : "Break Time"}</h4>
                    <span className="timer">{this.props.TimerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">
                        {this.state.TimerSecond === 0 ? 
                        "00" 
                        : this.state.TimerSecond < 10 
                        ? "0" + this.state.TimerSecond 
                        : this.state.TimerSecond}</span>
                </section>
                <section className="timer-action">
                        <button disabled={this.props.isPlay === true ? "disabled" : ""} onClick={this.start}>Start</button>
                        <button onClick={this.stop}>Stop</button>
                        <button onClick={this.restart}>Restart</button>
                </section>
            </section>

        );
    }
}

export default Timer;