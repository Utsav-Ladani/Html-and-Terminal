import React from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav" >
                <div className="subdiv">
                    <span className="logo" title="> Run" > &gt;&nbsp;Run</span>
                    <span className="navlink">
                        <NavLink exact className="link" activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="link" activeClassName="active" to="/cmd">Terminal</NavLink>
                        <NavLink className="link" activeClassName="active" to="/about">About</NavLink>
                    </span>
                </div>
                <a className="github-link" href="https://github.com/Utsav-Ladani/Html-and-Terminal" target="_blank" rel="noopener noreferrer">
                    <img className="github-mark" src="./GitHub-Mark-32px.png" alt="github link" title="Github link" />
                </a>
            </div>
        );
    }
}

export default Navbar;
