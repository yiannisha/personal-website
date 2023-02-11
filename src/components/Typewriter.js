import * as React from 'react';

import * as animationStyles from "../styles/animations.module.css";

const Typewriter = ({ text, interval, delay, animated=true }) => {
    const [delayed, setDelayed] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const incrementIndex = () => setIndex(index+1);

    React.useEffect(() => {
        var timer;

        if (!animated) {
            return;
        }

        if (!delayed) {
            timer = setTimeout(() => setDelayed(true), delay*1000);
        }

        else if (index < text.length) {
            timer = setTimeout(incrementIndex, interval);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }

    }, [index, delayed, animated]);

    return (
        <span className={animationStyles.typewriter} style={{opacity: (delayed || !animated) ? 1:0}}>
            &nbsp;{(animated) ? text.slice(0, index):text}
        </span>
    )
}

export default Typewriter;