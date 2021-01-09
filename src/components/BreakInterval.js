import React from "react";

function BreakInterval(props){
    return(
        <section>
            <h4>Break Length</h4>
            <section className="IntervalBox">
                <button>Down</button>
                <p className="IntervalLength">{props.BreakInterval}</p>
                <button>Up</button>
            </section>
        </section>
    )
}

export default BreakInterval;