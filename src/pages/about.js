import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Page from "../containers/Page";
import { useAbout } from "../hooks";

import * as styles from "../styles/page.module.css";
import * as aboutStyles from "../styles/about.module.css";
import * as homePageStyles from "../styles/homePage.module.css";

const About = () => {

    const aboutData = useAbout();
    const formattedText = documentToReactComponents(JSON.parse(aboutData.aboutText.raw));
    const image = getImage(aboutData.aboutImage);

    return (
        <Page current="about">
            <Container className={styles.container}>
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
                <Row>
                    <Col md={{size: 6, offset: 6}}>
                        <div className={`${homePageStyles.socialsContainer}`} >
                            <a
                            className={`text-reset ${homePageStyles.socialLink}`}
                            href="https://github.com/yiannisha/">
                                <i className="fa fa-github fa-3x"></i>
                            </a>
                            <a
                            className={`text-reset ${homePageStyles.socialLink}`}
                            href="https://www.linkedin.com/in/yiannis-hadjiyianni-36294b1b1/">
                                <i className="fa fa-linkedin fa-3x"></i>
                            </a>
                            <a
                            className={`text-reset ${homePageStyles.socialLink}`}
                            href="mailto:hadjiyiannis.3@gmail.com">
                                <i className="fa fa-envelope fa-3x"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Page>
    );
};

export default About;

export const Head = () => <title>About Page</title>