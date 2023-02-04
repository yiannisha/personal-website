import * as React from "react";

import * as styles from "../styles/page.module.css";

const Filter = ({ children, className = "", triggerParentActive = null }) => {

    const [active, setActive] = React.useState(false);
    const triggerActive = () => {
        let t = !active;
        setActive(t);

        if (triggerParentActive) {
            triggerParentActive(t);
        }
    }

    const style = (!active) ? `${className} ${styles.underline}`: `${className} ${styles.underlinePermanent}`;

    return (
        <span className={style} onClick={triggerActive}>
            { children }
        </span>
    );
}

export default Filter;