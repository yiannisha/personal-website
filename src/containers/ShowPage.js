import * as React from "react";
import { Container, Row, Col } from "reactstrap";

import NavigationLink from "../components/NavigationLink";

import * as styles from "../styles/page.module.css";
import * as showPageStyles from "../styles/showPage.module.css";

const ShowPage = ({ type }) => {
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
                            DBmanage
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 6}}>
                        Pictures
                    </Col>
                    <Col md={{size: 6}}>
                        <div className={showPageStyles.description}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className={showPageStyles.technicalSkills}>
                            <p>
                                TECHNICAL SKILLS
                            </p>
                        </div>
                        <div className={showPageStyles.externalLink}>
                            <NavigationLink
                            type={type}
                            href={`https://www.google.com`}
                            anchor>
                                Github Page
                            </NavigationLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default ShowPage;