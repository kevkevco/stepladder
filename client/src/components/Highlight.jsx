import React from 'react';

// Parent component must PASS underline as argument, and must PASS or HAVE decoration-COLOR
const Highlight = ({ children, styles }) => {
  return (
    <span
      style={{ textDecorationSkipInk: 'none' }}
      className={`${styles} decoration-[0.5em] underline-offset-[-0.3em] `}
    >
      {children}
    </span>
  );
};

export default Highlight;
