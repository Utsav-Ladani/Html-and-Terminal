const { spawn } = require('child_process')

const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const cors = require('cors');

const port = 5000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static("../public"));


io.on("connection", (socket) => {
    console.log("New connnection eshtablish");
    socket.emit('joinClient');

    let p = spawn('cmd.exe');
    
    p.stdout.on('data', (d) => {
        socket.emit("output", d.toString());
    })
    
    p.stderr.on('data', (err) => {
        socket.emit("output", err.toString());
    })

    p.on('exit', () => {
        socket.emit("closeTerminal");
    })
    
    socket.on('join', () => {
        console.log("someone joined..");
    })

    socket.on("input", (data) => {
        console.log(data);
        p.stdin.write(data + "\r\n");
    });

    socket.on("disconnect", () => {
        console.log("disconnect..");
        delete p;
    });
});

server.listen(port, () => {
    console.log(`server listening on port ${port} ....`);
});
