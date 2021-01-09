import React from "react";

function SessionInterval(props){

    function decreaseSession(){
        if(props.SessionInterval === 1){
            return;
        } 
        props.decreaseSession();
    }

    function increaseSession(){
        if(props.SessionInterval === 60){
            return;
        }
        props.increaseSession();
    }

    return(
        <section className="margin-fix">
            <h4>Session Length</h4>
            <section className="IntervalBox">
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick = {decreaseSession}>Down</button>
                <p className="IntervalLength">{props.SessionInterval}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick = {increaseSession}>Up</button>
            </section>
        </section>
    )
}

export default SessionInterval;