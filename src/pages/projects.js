import * as React from 'react';

import Page from "../containers/Page";
import { useProjects } from '../hooks';
import ShowPage from "../containers/ShowPage";

const Projects = () => {

    const projectData = useProjects();
    console.log(projectData[1]);

    return (
        <Page>
            <ShowPage type="projects" projectData={projectData[1]} />
        </Page>
    );
}

export default Projects;

export const Head = () => <title>Personal Projects</title>;