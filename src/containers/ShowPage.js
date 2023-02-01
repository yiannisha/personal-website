import * as React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from "reactstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { capitalize } from "../utils";
import NavigationLink from "../components/NavigationLink";

import * as styles from "../styles/page.module.css";
import * as showPageStyles from "../styles/showPage.module.css";

const ShowPage = ({ type, projectData}) => {

    type = capitalize(type);

    const image1 = getImage(projectData.image1);
    const image2 = getImage(projectData.image2);
    
    const {
        name,
        description,
        technicalSkills,
        caption1,
        caption2,
        externalLink,
    } = projectData;

    // remove unnecessary unicode characters
    description.raw = description.raw.replace(/[\u{0080}-\u{FFFF}]/gu,"");
    const formattedDescription = documentToReactComponents(JSON.parse(description.raw));

    return (
        <main>
            <Container>
                <Row className={showPageStyles.topRow}>
                    <Col md={{size: 6}}>
                        <h1 className={styles.header}>
                            Personal<br/>Projects:
                        </h1>
                    </Col>
                    <Col md={{size: 6}} className={showPageStyles.titleCol}>
                        <h1 className={showPageStyles.title}>
                            { name }
                        </h1>
                    </Col>
                </Row>
                <Row className={`mt-3`}>
                    <Col md={{size: 6}} className={showPageStyles.imageContainer}>
                        <Row className={showPageStyles.imageWrapper}>
                            <Col md={{ size: 6 }}>
                                    <GatsbyImage alt={ name } image={ image1 } className={`me-3 ${showPageStyles.imageShadow} ${showPageStyles[`imageShadow${type}`]}`}/>
                            </Col>
                            <Col md={{ size: 6 }} className={showPageStyles.mobileCaption}>
                                <span>
                                    { caption1 }
                                </span>
                            </Col>
                        </Row>
                        <Row className={showPageStyles.imageWrapper}>
                            <Col md={{ size: 6 }} className={showPageStyles.mobileCaption}>
                                <span>
                                    { caption2 }
                                </span>
                            </Col>
                            <Col md={{ size: 6 }}>
                                    <GatsbyImage alt={ name } image={ image2 } className={`me-3 ${showPageStyles.imageShadow} ${showPageStyles[`imageShadow${type}`]}`}/>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={{size: 6}}>
                        <div className={`${showPageStyles.description} ${showPageStyles[`description${type}`]}`}>
                            { formattedDescription }
                        </div>
                        <div className={showPageStyles.technicalSkills}>
                            <p>
                                { technicalSkills }
                            </p>
                        </div>
                        <hr className={`${showPageStyles.separator} ${showPageStyles[`separator${type}`]}`} />
                        <div className={showPageStyles.externalLink}>
                            <NavigationLink
                            type={type}
                            href={ externalLink }
                            anchor>
                                <i className="fa fa-github"></i>
                                &nbsp;Github Page
                            </NavigationLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default ShowPage;