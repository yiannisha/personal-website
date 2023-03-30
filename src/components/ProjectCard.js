import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import * as styles from "../styles/page.module.css";
import * as projectCardStyles from "../styles/projectCard.module.css";

const ProjectCard = ({ to, name, image, tags=[], filter={}, filterActive=null, className="" }) => {
    
    image = getImage(image);

    const [fadeIn, setFadeIn] = React.useState(true);
    const [collapse, setCollapse] = React.useState(false);

    const tagsString = tags.join(", ");
    const isFiltered = () => {
        for (let tag of tags) {
            if (filter[tag]) {
                return true;
            }
        }
        return false;
    }
    const display = isFiltered();

    className = `${ className } ${ projectCardStyles.projectCard }`;
    className = (display || !filterActive) ?
        `${className} ${(fadeIn) ? projectCardStyles.fadeInUp:""}`
        :
        `${className} ${projectCardStyles.fadeOutDown}`;

    function handleAnimationEnd (animationName) {
        let fadeOutReg = /fade-out-down/g;
        let fadeInReg = /fade-in-up/g;

        if (fadeInReg.test(animationName)) {
            setFadeIn(false);
        }

        else if (fadeOutReg.test(animationName)) {
            setFadeIn(true);
            setCollapse(true);
        }
    }

    function handleAnimationStart (animationName) {
        let fadeInReg = /fade-in-up/g;

        if (fadeInReg.test(animationName)) {
            setCollapse(false);
        }
    }

    return (
        <Link to={to} className={`${projectCardStyles.projectCardLink} ${(collapse) ? projectCardStyles.collapse:""}`} >
            <div className={ `${className}` } onAnimationStart={(e) => handleAnimationStart(e.animationName)} onAnimationEnd={(e) => handleAnimationEnd(e.animationName)}>
                    <GatsbyImage alt={ name } image={ image } className={`${projectCardStyles.image} ${styles.imageShadow} ${styles.imageShadowProjects}`} />
                    <div className={ projectCardStyles.infoWrapper } >
                        <h3 className={ projectCardStyles.header }>
                            { name }
                        </h3>
                        <span>
                            { tagsString }
                        </span>
                    </div>
            </div>
        </Link>
    );
}

export default ProjectCard;