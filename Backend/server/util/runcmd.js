const { spawn } = require('child_process')

function Runcmd(callback) {
    this.p = spawn('cmd.exe');
    
    this.p.stdout.on('data', (d) => {
        callback("output", d.toString());
    })
    
    this.p.stderr.on('err', (err) => {
        callback("output", err.toString());
    })

    this.write = this.p.stdin.write;
}

exports.Runcmd = Runcmd;