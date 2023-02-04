import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Page from "../../containers/Page";
import Filter from "../../components/Filter";
import NavigationLink from "../../components/NavigationLink";

import { useProjects } from "../../hooks";

import * as styles from "../../styles/page.module.css";
import * as projectStyles from "../../styles/projects.module.css";

const Projects = () => {

    const initialFilterState = {
        React: false,
        Python: false,
        MATLAB: false,
        AI: false,
    };

    const [filterOptions, setFilterOptions] = React.useState(initialFilterState);

    const getTrigger = (key) => () => {
        const newState = filterOptions;
        newState[key] = !filterOptions[key];

        setFilterOptions(newState);
    };

    const filters = Array.from(Object.keys(filterOptions)).map(name => {
        const trigger = getTrigger(name);
        return (
            <Filter triggerParentActive={trigger} key={ name }>
                { name }
            </Filter>
        );
    });

    return (
        <Page>
            <Container>
                <Row className={styles.topRow}>
                    <Col>
                        <h1 className={styles.header}>
                            Personal
                            <br />
                            Projects
                        </h1>
                        <div className={projectStyles.filterWrapper}>
                            <h5 className={projectStyles.filterHeader}>
                                Filters:&nbsp;
                            </h5>
                            <div className={projectStyles.filters}>
                                { filters }
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </Page>
    );
}

export default Projects;

export const Head = () => <title>Personal Projects</title>;