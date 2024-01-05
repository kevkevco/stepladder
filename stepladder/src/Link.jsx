import React, { useState } from 'react';

function Link(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>
                {props.text}
            </button>
        </div>
    );
};

export default Link;