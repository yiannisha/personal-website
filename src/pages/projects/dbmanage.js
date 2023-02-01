import * as React from "react";

import Page from "../../containers/Page";
import { useProjects } from '../../hooks';
import ShowPage from "../../containers/ShowPage";

const Component = () => {
    const projectData = useProjects();
    console.log(projectData[0]);

    return (
        <Page>
            <ShowPage type="projects" projectData={projectData[0]} />
        </Page>
    );
}

export default Component;

export const Head = () => <title>Test</title>