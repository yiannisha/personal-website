import * as React from "react";

import Page from "../containers/Page";
import ShowPage from "../containers/ShowPage";

const Component = (props) => {

    return (
        <Page>
            <ShowPage type="projects" projectData={props.pageContext} />
        </Page>
    );
}

export default Component;

export const Head = () => <title>Test</title>