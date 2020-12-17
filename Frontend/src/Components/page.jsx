import React from 'react'

import Home from './pages/Home'
import Docs from './pages/Docs'
import Cmd from './pages/Cmd'
import About from './pages/About'


class Page extends React.Component {

    render() {

        const Pages = {
            "Home": <Home />,
            "Docs": <Docs />,
            "Cmd": <Cmd />,
            "About": <About />,
        };

        return (
            Pages[this.props.name]
        );
    }
}

export default Page;
