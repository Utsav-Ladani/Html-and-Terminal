import React from 'react'


class CmdAnime extends React.Component {

    render() {
        return (
            <div className="cmd-anime" >
                <div className="draw" >
                    <h6>&gt; echo hello, hi </h6>
                    <h6>&gt; hello, hi</h6>
                </div>
            </div>
        );
    }
}

class Welcome extends React.Component {

    render() {
        return (
            <div className="welcome" >
                <div className="center">
                    <h3>Welcome to &gt; run</h3>
                    <p>Run command on sever</p>
                    <button className="btn btn-primary" >Get Started <i className="fa fa-arrow-right" ></i></button>
                </div>
            </div>
        );
    }
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
