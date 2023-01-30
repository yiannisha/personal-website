import * as React from "react";
import { Link } from "gatsby";
import { Container, Col, Row } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";

// components
import Page from "../containers/Page";
import Typewriter from "../components/Typewriter";

// styles
import * as styles from "../styles/page.module.css";
import * as homePageStyles from "../styles/homePage.module.css";
import * as animationStyles from "../styles/animations.module.css";

const HomePage = () => {
  return (
    <Page>
      <Container className={styles.maxHeight}>
        <Row className={styles.maxHeight}>
          <Col md={6} className={homePageStyles.headerCol}>
            <div>
              <h1 className={homePageStyles.header}>
                <span className={animationStyles.fadeInUp}>
                  Hi,
                </span>
                <br/>
                <span className={animationStyles.fadeInUp} style={{animationDelay: `1s`}}>
                  I'm Yiannis.
                </span>
              </h1>
              <h4 className={homePageStyles.subtitle}>
                <Typewriter text="I love coding stuff." interval={80} delay={1.5} />
              </h4>
            </div>
            <div>
              <StaticImage src="../images/me.jpg"
              alt="A picture of me"
              className={`${homePageStyles.imageWrapper} ${animationStyles.fadeInUp}`}
              style={{animationDelay: `1s`}}
              />
            </div>
            <div className={`${homePageStyles.socialsContainer} ${animationStyles.fadeInUp}`} style={{animationDelay: `3.5s`}}>
              <a
              className={`text-reset ${homePageStyles.socialLink} ${animationStyles.bounce}`}
              href="https://github.com/yiannisha/"
              style={{animationDelay: `3.7s`}} >
                <i className="fa fa-github fa-3x"></i>
              </a>
              <a
              className={`text-reset ${homePageStyles.socialLink} ${animationStyles.bounce}`}
              href="https://www.linkedin.com/in/yiannis-hadjiyianni-36294b1b1/"
              style={{animationDelay: `3.8s`}} >
                <i className="fa fa-linkedin fa-3x"></i>
              </a>
              <a
              className={`text-reset ${homePageStyles.socialLink} ${animationStyles.bounce}`}
              href="mailto:hadjiyiannis.3@gmail.com"
              style={{animationDelay: `3.9s`}} >
                <i className="fa fa-envelope fa-3x"></i>
              </a>
            </div>
          </Col>
          <Col  md={{ size: 3, offset: 3}} className={`${homePageStyles.navigationCol} ${animationStyles.fadeInRight}`} style={{animationDelay: `4.2s`}}>
            <Link to="/about"
            className={`text-reset text-decoration-none ${homePageStyles.navigationLink} ${animationStyles.bounceRight}`}
            style={{animationDelay: `4.4s`}}
            >About me</Link>
            <Link to="/work"
            className={`text-reset text-decoration-none ${homePageStyles.navigationLink} ${animationStyles.bounceRight}`}
            style={{animationDelay: `4.6s`}}
            >My previous work</Link>
            <Link to="/projects"
            className={`text-reset text-decoration-none ${homePageStyles.navigationLink} ${animationStyles.bounceRight}`}
            style={{animationDelay: `4.8s`}}
            >My personal projects</Link>
          </Col>
        </Row>
      </Container>
    </Page>
  )
};

export default HomePage;

export const Head = () => <title>Home Page</title>
