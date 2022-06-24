import React, { useState, useEffect } from "react";

function Count () {
    // define state
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    },[count]);

    return(
        <div id="count">
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
        </div>
    )
}

export default Count;