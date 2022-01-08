import React from 'react'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

import socketio from 'socket.io-client'
import { SOCKET_URL } from "../config"


class Cmd extends React.Component {

    constructor(props) {
        super(props);

        // refs
        this.term_wrapper = React.createRef();
        this.termDOM = React.createRef();
    }

    componentDidMount() {
        // init
        this.socket = socketio.connect(SOCKET_URL, { transports: ['websocket'] });
        this.term = new Terminal();

        // config
        this.term.open(this.termDOM.current);
        this.term.resize(90, 25);
        this.socket.emit('resize', 90, 25);
        this.term.focus();

        // input
        this.term.onData((data) => {
            this.socket.emit('in', data);
        })

        // output
        this.socket.on('out', (data) => {
            this.term.write(data);
        })

        // exit
        this.socket.on('exit', (data) => {
            this.term.dispose();
            this.socket.emit('kill');
        })

        // focus
        window.addEventListener('focus', () => {
            this.term.focus();
        })
    }

    componentWillUnmount() {
        // close terminal
        this.term.dispose();
        this.socket.emit('kill');

        window.removeEventListener('focus', window);
    }


    render() {
        return (
            <div ref={this.term_wrapper} className="term-wrapper" >
                <div ref={this.termDOM} className="terminal"></div>
            </div >
        );
    }
}

export default Cmd;
