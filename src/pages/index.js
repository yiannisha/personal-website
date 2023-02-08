import * as React from "react";
import { Container, Col, Row } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";

// components
import Page from "../containers/Page";
import Typewriter from "../components/Typewriter";
import NavigationLink from "../components/NavigationLink";

// styles
import * as styles from "../styles/page.module.css";
import * as homePageStyles from "../styles/homePage.module.css";
import * as animationStyles from "../styles/animations.module.css";

const HomePage = () => {
  return (
    <Page current="home">
      <Container className={styles.maxHeight}>
        <Row className={styles.maxHeight}>
          <Col md={6} className={homePageStyles.headerCol}>
            <div>
              <h1 className={styles.header}>
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
          {/* <Col  md={{ size: 3, offset: 3}} className={`${homePageStyles.navigationCol} ${animationStyles.fadeInRight}`} style={{animationDelay: `4.2s`}}>
            <NavigationLink
            type="about"
            href="/about"
            className={animationStyles.bounceRight}
            style={{animationDelay: `4.4s`}}
            >
              About me
            </NavigationLink>
            <NavigationLink
            type="work"
            href="/work"
            className={animationStyles.bounceRight}
            style={{animationDelay: `4.6s`}}
            >
              My previous work
            </NavigationLink>
            <NavigationLink
            type="projects"
            href="/projects"
            className={animationStyles.bounceRight}
            style={{animationDelay: `4.8s`}}
            >
              My personal projects
            </NavigationLink>
          </Col> */}
        </Row>
      </Container>
    </Page>
  )
};

export default HomePage;

export const Head = () => <title>Home Page</title>
