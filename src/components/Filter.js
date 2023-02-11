import * as React from "react";
import { isMobile } from "react-device-detect";

import { capitalize } from "../utils";

import * as styles from "../styles/page.module.css";

const Filter = ({ children, className = "", triggerParentActive = null, type = "" }) => {

    type = capitalize(type);

    const [active, setActive] = React.useState(false);
    const triggerActive = () => {
        let t = !active;
        setActive(t);

        if (triggerParentActive) {
            triggerParentActive(t);
        }
    }

    const style = (!active) ?
        `${className} ${(!isMobile) ? styles.underline:""} ${styles[`underline${type}`]}`
        :
        `${className} ${styles.underlinePermanent} ${styles[`underline${type}`]}`;

    return (
        <span className={style} onClick={triggerActive}>
            { children }
        </span>
    );
}

export default Filter;