import React from 'react'

class Navbar extends React.Component {

    changePage = (index) => {
        this.props.changePage(index);
    }

    render() {
        return (
            <div className="nav" >
                <div className="subdiv">
                    <span className="logo" title="> Run" > &gt;&nbsp;Run</span>
                    <span className="navlink">
                        {
                            ["Home", "Docs", "Cmd", "About"]
                                .map((val, index) => {
                                    return <span className={val === this.props.index ? "link active" : "link"} key={index} onClick={() => this.changePage(val)} >{val}</span>;
                                })
                        }
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
