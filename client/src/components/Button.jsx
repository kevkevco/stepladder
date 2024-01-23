import React from "react";
import { Link } from 'react-router-dom';

function Button({ colors, text, onClick }) {
    let styles = colors + `
        transition-all
        ease-in-out
        duration-500
        py-2
        px-4
        rounded-0 // -lg
        inline-block
        whitespace-nowrap
        hover:shadow-lg
        hover:scale-x-105`;
    return (<Link to={onClick} className={styles}>{text}</Link>);
}

export default Button;
