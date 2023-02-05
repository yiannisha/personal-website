import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import * as styles from "../styles/page.module.css";
import * as animationStyles from "../styles/animations.module.css";
import * as projectCardStyles from "../styles/projectCard.module.css";

const ProjectCard = ({ to, name, image, tags=[], filter={}, filterActive=null, className="" }) => {
    
    image = getImage(image);

    const [fadeIn, setFadeIn] = React.useState(true);

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

    className = `${ className } ${ projectCardStyles.projectCard } ${ projectCardStyles.inherit }`;
    className = (display || !filterActive) ?
        `${className} ${(fadeIn) ? projectCardStyles.fadeInUp:""}`
        :
        `${className} ${projectCardStyles.fadeOutDown}`;

    function handleAnimations (animationName) {
        let fadeOutReg = /fade-out-down/g;
        let fadeInReg = /fade-in-up/g;

        if (fadeInReg.test(animationName)) {
            setFadeIn(false);
        }

        else if (fadeOutReg.test(animationName)) {
            setFadeIn(true);
        }
    }

    return (
        <Link to={to}>
            <div className={ `${className}` } onAnimationEnd={(e) => handleAnimations(e.animationName)}>
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