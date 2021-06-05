import React from 'react'

import socketio from 'socket.io-client'
import { SOCKET_URL } from "../config"


class Cmd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            output: "",
        }
    }
    
    componentDidMount() {
        this.socket = socketio.connect(SOCKET_URL, { transports: ['websocket'] });

        this.socket.emit("join");

        this.socket.on('joinClient', () => {
            this.setState({output: ""});
        })

        this.socket.on("output", (data) => {
            this.setState((state) => ({output: state.output + data}));

            let view = document.getElementById("output");
            view.scrollBy(0, view.scrollHeight);
        })

        this.socket.on('closeTerminal', () => {
            delete this.socket;
            window.location.href = '/';
        })
    }

    componentWillUnmount() {
        delete this.socket;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.socket.emit("input", e.target.children[0].value);

        e.target.children[0].value = "";
    }


    render() {
        return (
            <div className="cmd" >
                <div className="output" id="output">
                    <pre className="terminal-tab">
                        {this.state.output}
                    </pre>
                </div>

                <form method="post" className="inp" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="command"
                        name="command"
                        placeholder="Type Command"
                    ></input>
                </form>
            </div >
        );
    }
}

export default Cmd;
