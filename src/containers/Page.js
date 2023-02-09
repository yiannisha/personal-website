import * as React from 'react';

import Header from '../components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/page.module.css';

const Page = (props) => {
    const routes = {
        home: {
            path: "/?animations=false",
        },
        about: {
            path: "/about",
        },
        work: {
            path: "/work",
        },
        projects: {
            path: "/projects",
        },
    };

    return (
        <main>
            <Header
            routes={routes}
            current={props.current}
            className={props.headerClass}
            style={props.headerStyle}
            />
            {props.children}
        </main>
    );
}

export default Page;