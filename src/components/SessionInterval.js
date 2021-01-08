import React from "react";

function SessionInterval(props){
    return(
        <section>
            <button>Up</button>
            <p>{props.SessionInterval}</p>
            <button>Down</button>
        </section>
    )
}

export default SessionInterval;