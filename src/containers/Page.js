import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/page.module.css';

const Page = (props) => {
    return (
        <main>
            {props.children}
        </main>
    );
}

export default Page;