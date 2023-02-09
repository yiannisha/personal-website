import * as React from "react";
import { Link } from "gatsby";
import { capitalize } from "../utils";

import * as styles from "../styles/page.module.css";
import * as headerStyles from "../styles/header.module.css";

const Header = ({ routes, current, className, style }) => {
    
    const links = Object.keys(routes).map(key => {
        const name = capitalize(key)
        return (
            <Link
            key={key}
            to={routes[key].path}
            className={
                `text-reset text-decoration-none
                ${(current===key) ? `${styles.underlinePermanent} ${headerStyles.linkActive}`:styles.underline}
                ${styles[`underline${name}`]}
                ${headerStyles.link}`
            }
            style={{color: (current===key)? "red":"white"}}
            >
                { name }
            </Link>
        )
    });

    return (
        <div
        className={`${headerStyles.header} ${className}`}
        style={style}
        >
            { links }
        </div>
    );
}

export default Header;