import React from 'react'
import {Link} from 'react-router-dom'


function CmdAnime() {
    return (
        <div className="cmd-anime" >
            <div className="draw" >
                <h6>&gt; echo hello, hi </h6>
                <h6>&gt; hello, hi</h6>
            </div>
        </div>
    );
}

function Welcome() {
    return (
        <div className="welcome" >
            <div className="center">
                <h3>Welcome to &gt; Run</h3>
                <p>Control your server using terminal</p>
                <Link to="/cmd">
                    <button className="btn btn-primary" >
                        Get Started &nbsp;
                        <i className="fa fa-arrow-right" ></i>
                    </button>
                </Link> 
            </div>
        </div>
    );
}

function Home() {
    return (
        <div className="page" >
            <CmdAnime />
            <Welcome />
        </div>
    );
}

export default Home;
