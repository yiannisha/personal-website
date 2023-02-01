import * as React from 'react';

import Page from "../../containers/Page";
import NavigationLink from "../../components/NavigationLink";

const Projects = () => {

    return (
        <Page>
            <NavigationLink
            type="projects"
            href="/projects/dbmanage"
            >
                DBmanage
            </NavigationLink>
        </Page>
    );
}

export default Projects;

export const Head = () => <title>Personal Projects</title>;