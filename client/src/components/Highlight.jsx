import React from 'react';

// Parent component must add underline and decoration-COLOR
const Highlight = ({ children, styles }) => {
    return (
        <span
        style={{textDecorationSkipInk: 'none'}}
        className={`${styles} underline-offset-[-0.3em] decoration-[0.5em] `}>
            {children}
        </span>
    );
};

export default Highlight;
