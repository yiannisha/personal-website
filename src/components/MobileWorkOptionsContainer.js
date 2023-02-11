import * as React from "react";

import * as styles from "../styles/page.module.css";
import * as mobileWorkOptionStyles from "../styles/mobileWorkOptions.module.css";

const MobileWorkOptionsContainer = ({ options, setActiveOption }) => {
    const [index, setIndex] = React.useState(0);
    
    const next = () => {
        const newIndex = (index+1) % options.length;
        setIndex(newIndex);
        setActiveOption(options[newIndex]);
    }

    const prev = () => {
        const newIndex = (index-1 >= 0) ? index-1:options.length-1;
        setIndex(newIndex);
        setActiveOption(options[newIndex]);
    }

    return (
        <div className={mobileWorkOptionStyles.optionContainer}>
            <div onClick={prev}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <div className={`${styles.underlinePermanent} ${styles.underlineWork}`}>
                <h3>{ options[index].name }</h3>
            </div>
            <div onClick={next}>
                <i className="fa fa-arrow-right"></i>
            </div>
        </div>
    );
};

export default MobileWorkOptionsContainer;
