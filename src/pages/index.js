import * as React from "react";
import { Container, Col, Row } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";

// components
import Page from "../containers/Page"; 

// styles
import * as styles from "../styles/page.module.css";
import * as homePageStyles from "../styles/homePage.module.css";

const HomePage = () => {
  return (
    <Page>
      <Container className={styles.maxHeight}>
        <Row className={styles.maxHeight}>
          <Col md={6} className={homePageStyles.headerCol}>
            <h1 className={homePageStyles.header}>
              Hi,<br/>I'm Yiannis.
            </h1>
            <h4 className={homePageStyles.subtitle}>
              I love coding stuff.
            </h4>
            <div className="mt-3">
              <StaticImage src="../images/me.jpg" alt="A picture of me" className={homePageStyles.imageWrapper} />
            </div>
            <div className={homePageStyles.socialsContainer}>
              <a href="https://github.com/yiannisha/">
                <i className="fa fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/yiannis-hadjiyianni-36294b1b1/">
                <i className="fa fa-linkedin fa-3x"></i>
              </a>
              <a href="mailto:hadjiyiannis.3@gmail.com">
                <i className="fa fa-envelope fa-3x"></i>
              </a>
            </div>
          </Col>
          <Col md={6}>
            <ul>
              <li>Who am I</li>
              <li>My previous work</li>
              <li>My personal projects</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Page>
  )
};

export default HomePage;

export const Head = () => <title>Home Page</title>
