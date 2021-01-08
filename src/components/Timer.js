import React from 'react'

class Timer extends React.Component{

    constructor(){
        super();
        this.state = {
            isSession: true
        }
    }
    render(){
        return(
            <section>
                <section>
                    <h4>{this.props.isSession === true ? "Session Time" : "Break Time"}</h4>
                    <span> </span>
                </section>
            </section>

        );
    }
}

export default Timer;