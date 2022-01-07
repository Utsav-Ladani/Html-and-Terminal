const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const Terminal = require('./Terminal');

const PORT = 3046;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('./public'));
app.use('/node_modules', express.static('./node_modules/'));

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

	// resize
	socket.on('resize', (cols, rows) => {
		term.resize(cols, rows);
    })

    socket.on('disconnect', () => {
		term.kill();
        console.log("User disconnected");
    })

})

server.listen(PORT, () => { console.log(`Listening on port: ${PORT} ...`) })