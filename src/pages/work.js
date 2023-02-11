import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MobileView, isBrowser, isMobile } from "react-device-detect";

import Page from "../containers/Page";
import NavigationLink from "../components/NavigationLink";
import MobileWorkOptionsContainer from "../components/MobileWorkOptionsContainer";
import { useWork } from "../hooks";

import * as styles from "../styles/page.module.css";
import * as workStyles from "../styles/work.module.css";

const Work = () => {
    const work = useWork();
    const [active, setActive] = React.useState(work[0]);
    const description = documentToReactComponents(JSON.parse(active.description.raw));

    const workOptions = work.map(option => {
        return (
            <div
            onClick={() => setActive(option)} key={option.name}
            className={
                `${workStyles.option}
                 ${styles.underline}
                 ${(active === option) ? styles.underlinePermanent:""}
                 ${styles.underlineWork}`
                }
            >
                <h3 className={workStyles.optionTitle}>
                    { option.name }
                </h3>
            </div>
        );
    });

    var links = undefined;
    console.log(active.externalLinkObject);
    if (active.externalLinkObject) {
        links = active.externalLinkObject.links.map(link => {
                return (
                    <NavigationLink href={link.url} type={`work`} style={{width: (!isMobile) ? "fit-content":"auto"}}>
                        <i className="fa fa-arrow-right"></i>&nbsp;{ link.name }
                    </NavigationLink>
                );
            });
    }

    return (
        <Page current="work">
            <Container className={styles.container} style={{overflowX: (isMobile) ? "hidden":"auto"}}>
                <Row className={`${styles.topRow} ${workStyles.topRow}`}>
                    <Col md={{size: 6}}>
                        <h1 className={styles.header}>
                            Previous<br/>Work:
                        </h1>
                    </Col>
                    <Col md={{size: 6}} className={workStyles.workHeader}>
                        <h3>
                            { active.jobTitle }&nbsp;
                            { (active.companyName) && 
                            <>
                                <span style={{color: `var(--primary-theme-work)`, fontWeight: 200}}>@</span>&nbsp;{active.companyName}
                            </> }
                        </h3>
                        <h5>
                            { active.workPeriod }
                        </h5>
                    </Col>
                </Row>
                <Row className={`${styles.botRow} ${workStyles.botRow}`}>
                    <Col md={{size: 6}} className={ workStyles.optionsContainer }>
                        { isBrowser && workOptions }
                        <MobileView style={{width: "100%"}}>
                            <MobileWorkOptionsContainer options={work} setActiveOption={setActive} />
                        </MobileView>
                    </Col>
                    <Col md={{size: 6}}>
                        <div className={ workStyles.description }>
                            { description }
                        </div>
                        <div className={ workStyles.technicalSkills }>
                            { active.technicalSkills }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 6, offset: 6}}>
                        {
                            links &&
                            <div className={ workStyles.linkContainer }>
                                { links }
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </Page>
    );
};

export default Work;

export const Head = () => <title>Work Page</title>