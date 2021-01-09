import React from "react";

function SessionInterval(props){
    return(
        <section>
            <h4>Session Length</h4>
            <section className="IntervalBox">
                <button>Down</button>
                <p className="IntervalLength">{props.SessionInterval}</p>
                <button>Up</button>
            </section>
        </section>
    )
}

export default SessionInterval;