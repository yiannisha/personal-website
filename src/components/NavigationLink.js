import * as React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/page.module.css";

const NavigationLink = ({ href, type, anchor = false, className = "", style, children }) => {
    
    type = capitalize(type);

    return (
        (anchor) ?
        <a
        href={href}
        className={`text-reset text-decoration-none ${className} ${styles.navigationLink} ${styles[`navigationLink${type}`]}`}
        style={style}>
            <span>
                {children}
            </span>
        </a>
        :
        <Link
        to={href}
        className={`text-reset text-decoration-none ${className} ${styles.navigationLink} ${styles[`navigationLink${type}`]}`}
        style={style}>
            <span>
                {children}
            </span>
        </Link>
    )
}

export default NavigationLink;

const capitalize  = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}