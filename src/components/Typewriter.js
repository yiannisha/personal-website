import * as React from 'react';

import * as animationStyles from "../styles/animations.module.css";

const Typewriter = ({ text, interval, delay }) => {
    const [delayed, setDelayed] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const incrementIndex = () => setIndex(index+1);

    React.useEffect(() => {
        var timer;

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

    }, [index, delayed]);

    return (
        <span className={animationStyles.typewriter} style={{opacity: (delayed) ? 1:0}}>
            &nbsp;{text.slice(0, index)}
        </span>
    )
}

export default Typewriter;