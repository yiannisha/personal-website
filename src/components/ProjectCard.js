import * as React from "react";

import { getImage, GatsbyImage } from "gatsby-plugin-image";

import * as styles from "../styles/page.module.css";
import * as projectCardStyles from "../styles/projectCard.module.css";

const ProjectCard = ({ name, image, tags=[], filter={}, className="" }) => {
    
    image = getImage(image);

    const tagsString = tags.join();

    className = `${ className } ${ projectCardStyles.projectCard } ${ projectCardStyles.inherit }`;
    
    return (
        <div className={ className }>
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
    );
}

export default ProjectCard;