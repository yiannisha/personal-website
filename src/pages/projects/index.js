import * as React from 'react';
import { Link } from "gatsby";
import { Container, Row, Col } from 'reactstrap';

import Page from "../../containers/Page";
import Filter from "../../components/Filter";
import ProjectCard from '../../components/ProjectCard';

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
            <Filter triggerParentActive={trigger} key={ name } type="projects">
                { name }
            </Filter>
        );
    });

    const projectData = useProjects();
    const projectCards = projectData.map(project => {
        const { name, image1, technicalSkills } = project;
        return (
            <Link to="/projects/dbmanage">
                <ProjectCard
                name={name}
                image={image1}
                tags={technicalSkills.split()}
                key={name}
                className={projectStyles.projectCard} />
            </Link>
        );
    })

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
                <Row style={{paddingBottom: "2em"}}>
                    <Col md={{ offset:2, size: 8 }} className={projectStyles.projectContainer}>
                        { projectCards }
                    </Col>
                </Row>
            </Container>
        </Page>
    );
}

export default Projects;

export const Head = () => <title>Personal Projects</title>;