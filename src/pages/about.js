import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Page from "../containers/Page";
import { useAbout } from "../hooks";

import * as styles from "../styles/page.module.css";
import * as aboutStyles from "../styles/about.module.css";

const About = () => {

    const aboutData = useAbout();
    console.log(aboutData);
    const formattedText = documentToReactComponents(JSON.parse(aboutData.aboutText.raw));
    const image = getImage(aboutData.aboutImage);

    return (
        <Page current="about">
            <Container>
                <Row className={styles.topRow}>
                    <Col md={{size: 6}}>
                        <h1 className={styles.header}>
                            About<br />Me:
                        </h1>
                    </Col>
                </Row>
                <Row className={ styles.botRow }>
                    <Col md={{size: 6}} className={aboutStyles.imageWrapper}>
                        <GatsbyImage image={image} alt={ aboutData.caption } className={`${styles.imageShadow} ${styles.imageShadowAbout}`}/>
                        <span className={aboutStyles.caption}>
                            { aboutData.caption }
                        </span>
                    </Col>
                    <Col md={{size: 6}} className={aboutStyles.aboutText}>
                        { formattedText }
                    </Col>
                </Row>
            </Container>
        </Page>
    );
};

export default About;

export const Head = () => <title>About Page</title>