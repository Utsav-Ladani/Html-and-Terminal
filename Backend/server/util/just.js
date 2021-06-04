const { spawn } = require('child_process')
const readline = require('readline')

let p = spawn('cmd.exe');

p.stdout.on('data', (data) => {
    let op = {
        text: data.toString(),
    }
    console.log(op);
})

p.stderr.on('err', (err) => {
    console.log(err.toString());
})

p.on('close', () => {
    console.log("close ..................");
})

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    p.stdin.write(line + "\r\n");
})

// p.stdin.write(" dir \r\n")

exports.inp = p.stdin;