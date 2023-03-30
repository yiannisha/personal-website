import * as React from 'react';
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
        Django: false,
    };

    const [filterOptions, setFilterOptions] = React.useState(initialFilterState);
    
    const isFilterActive = (filter) => Object.values(filter).reduce((sum, curr) => sum || curr, false);
    const [filterActive, setFilterActive] = React.useState(isFilterActive(initialFilterState));
    

    const getTrigger = (key) => () => {

        const newState = {
            ...filterOptions,
            [key]: !filterOptions[key],
        };

        setFilterOptions(newState);

        setFilterActive(isFilterActive(newState));
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
        var { name, image1, technicalSkills } = project;
        
        technicalSkills = technicalSkills.split(',');
        technicalSkills = technicalSkills.map(str => str.trim());

        return (
            <ProjectCard
            to={`/projects/${ name.toLowerCase() }`}
            name={name}
            image={image1}
            tags={technicalSkills}
            filter={filterOptions}
            filterActive={filterActive}
            key={name}
            className={projectStyles.projectCard} />
        );
    })

    return (
        <Page current="projects">
            <Container className={styles.container}>
                <Row className={styles.topRow}>
                    <Col>
                        <h1 className={styles.header}>
                            Personal
                            <br />
                            Projects:
                        </h1>
                        <div className={projectStyles.filterWrapper}>
                            <div className={projectStyles.filters}>
                                { filters }
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{paddingBottom: "2em"}} className={projectStyles.projectContainer}>
                    { projectCards }
                </Row>
            </Container>
        </Page>
    );
}

export default Projects;

export const Head = () => <title>Personal Projects</title>;