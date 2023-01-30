import * as React from 'react';

import Page from "../containers/Page";
import ShowPage from "../containers/ShowPage";

const Projects = () => {
    return (
        <Page>
            <ShowPage type="projects" />
        </Page>
    );
}

export default Projects;

export const Head = () => <title>Personal Projects</title>;
