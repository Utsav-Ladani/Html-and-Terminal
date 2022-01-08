const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const cors = require('cors');
const Terminal = require('./Terminal');

const PORT = 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());

io.on('connection', (socket) => {
    console.log("New User connected.");

	const term = new Terminal();

	// input
	socket.on('in', (data) => {
		term.write(data);
    })

	// output
	term.onData((data) => {
		socket.emit('out', data);
	})

	// exit
	term.onExit((data) => {
		socket.emit('exit', data);
	})

	// kill by user
	socket.on('kill', () => {
		term.kill();
        console.log("User kill terminal");
    })

	// resize
	socket.on('resize', (cols, rows) => {
		term.resize(cols, rows);
    })

    socket.on('disconnect', () => {
		term.kill();
        console.log("User disconnected");
    })

})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ....`);
});
