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
        this.socket.on("output", (data) => {
            this.setState({output: this.state.output + data});
        })
        this.socket.on('joinClient', () => {
            this.setState({output: ""});
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
                <div className="output">
                    <pre className="terminal-tab" id="output">
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
