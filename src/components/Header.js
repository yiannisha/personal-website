import * as React from "react";
import { Link } from "gatsby";
import { capitalize } from "../utils";

import * as styles from "../styles/page.module.css";
import * as headerStyles from "../styles/header.module.css";

const Header = ({ routes, current }) => {
    
    const links = Object.keys(routes).map(key => {
        const name = capitalize(key)
        return (
            <Link to={routes[key].path}
            className={`text-reset text-decoration-none ${(current===key) ? styles.underlinePermanent:styles.underline} ${styles[`underline${name}`]}`}
            style={{color: (current===key)? "red":"white"}}
            >
                { name }
            </Link>
        )
    });

    return (
        <div className={`${headerStyles.header}`}>
            { links }
        </div>
    );
}

export default Header;