import React from 'react';

// Parent component must add underline and decoration-COLOR
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
