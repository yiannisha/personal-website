import * as React from "react";

import * as styles from "../styles/page.module.css";
import * as mobileWorkOptionStyles from "../styles/mobileWorkOptions.module.css";
import * as animationStyles from "../styles/animations.module.css";

const MobileWorkOptionsContainer = ({ options, setActiveOption }) => {
    const [index, setIndex] = React.useState(0);
   
    const slideAnimations = {
        slideInLeft: animationStyles.slideInLeft,
        slideOutLeft: animationStyles.slideOutLeft,
        slideInRight: animationStyles.slideInRight,
        slideOutRight: animationStyles.slideOutRight,
    }

    const [activeAnimation, setActiveAnimation] = React.useState(slideAnimations.slideInRight);

    const nextIndex = () => {
        const newIndex = (index+1) % options.length;
        setIndex(newIndex);
        setActiveOption(options[newIndex]);
    };

    const prevIndex = () => {
        const newIndex = (index-1 >= 0) ? index-1:options.length-1;
        setIndex(newIndex);
        setActiveOption(options[newIndex]);
    };

    const next = () => {
        setActiveAnimation(slideAnimations.slideOutLeft);
    }

    const prev = () => {
        setActiveAnimation(slideAnimations.slideOutRight);
    }

    const handleAnimationEnd = ({ animationName }) => {

        if (animationName === animationStyles.slideOutRightAnimation) {
            setActiveAnimation(slideAnimations.slideInRight);
            prevIndex();
        }

        else if (animationName === animationStyles.slideOutLeftAnimation) {
            setActiveAnimation(slideAnimations.slideInLeft);
            nextIndex();
        }
    }

    return (
        <div className={mobileWorkOptionStyles.optionContainer}>
            <div onClick={prev}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <div key={ options[index].name } className={`
            ${styles.underlinePermanent}
            ${styles.underlineWork}
            ${activeAnimation}
            `}
            onAnimationEnd={handleAnimationEnd}
            >
                <h3>{ options[index].name }</h3>
            </div>
            <div onClick={next}>
                <i className="fa fa-arrow-right"></i>
            </div>
        </div>
    );
};

export default MobileWorkOptionsContainer;
