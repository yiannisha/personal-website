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

const HomePage = ({ location }) => {

  var playAnimations = true;
  if (location.search) {
    const urlParams = new URLSearchParams(location.search);
    playAnimations = urlParams.get("animations") === "true";
  }

  const replayAnimations = () => {
    if (!location.search) {
      window.location.reload();
    }
  };

  return (
    <Page current="home" headerClass={(playAnimations) ? animationStyles.fadeInDown:""} headerStyle={{animationDelay: `4.1s`}}>
      <Container className={styles.container}>
        <Row className={styles.topRow}>
          <Col md={6}>
            <div>
              <h1 className={`${styles.header} ${homePageStyles.header}`}>
                <span className={(playAnimations) ? animationStyles.fadeInUp:""}>
                  Hi,
                </span>
                <br/>
                <span className={(playAnimations) ? animationStyles.fadeInUp:""} style={{animationDelay: `1s`}}>
                  I'm Yiannis.
                </span>
              </h1>
              <h4 className={homePageStyles.subtitle}>
                <Typewriter text="I love coding stuff." interval={80} delay={1.5} animated={playAnimations} />
              </h4>
            </div>
            <div>
              <StaticImage src="../images/me.jpg"
              alt="A picture of me"
              className={`${homePageStyles.imageWrapper} ${(playAnimations) ? animationStyles.fadeInUp:""}`}
              style={{animationDelay: `1s`}}
              />
            </div>
            <div className={`${homePageStyles.socialsContainer} ${(playAnimations) ? animationStyles.fadeInUp:""}`} style={{animationDelay: `3.5s`}}>
              <a
              className={`text-reset ${homePageStyles.socialLink} ${(playAnimations) ? animationStyles.bounce:""}`}
              href="https://github.com/yiannisha/"
              style={{animationDelay: `3.7s`}} >
                <i className="fa fa-github fa-3x"></i>
              </a>
              <a
              className={`text-reset ${homePageStyles.socialLink} ${(playAnimations) ? animationStyles.bounce:""}`}
              href="https://www.linkedin.com/in/yiannis-hadjiyianni-36294b1b1/"
              style={{animationDelay: `3.8s`}} >
                <i className="fa fa-linkedin fa-3x"></i>
              </a>
              <a
              className={`text-reset ${homePageStyles.socialLink} ${(playAnimations) ? animationStyles.bounce:""}`}
              href="mailto:hadjiyiannis.3@gmail.com"
              style={{animationDelay: `3.9s`}} >
                <i className="fa fa-envelope fa-3x"></i>
              </a>
            </div>
            <div className={`${homePageStyles.replayAnimations} ${(playAnimations) ? animationStyles.fadeInUp:""}`} style={{animationDelay: `4.1s`}} onClick={replayAnimations}>
              <Link to="/" className={`text-reset text-decoration-none`}>
                Replay animations
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Page>
  )
};

export default HomePage;

export const Head = () => <title>Home Page</title>
