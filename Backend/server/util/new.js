const { exec } = require('child_process')

function runcmd(req, res) {
    let location = req.query.location + "";
    let command = req.query.command + "";

    let output = {
        text: "",
        success: false,
    };

    console.log(location, command);

    const options = {
        cwd: 'E:/' + location,
        shell: 'cmd',
    }

    let cmd = exec(command, options);
    // let cmd = exec(command);

    cmd.stdout.on('data', (data) => {
        console.log(">> ", data);
    });

    cmd.stdin.on('drain' , () => {
        console.log(">> pause ");
    });

    cmd.stdout.on('resume', () => {
        console.log(">> resume ");
    });

    cmd.stdout.on('close', () => {
        console.log(">> close ");
    });

    output.text = "o/p";
    output.success = true;
    res.json({ op: output });
    res.end();

}

exports.runcmd = runcmd;