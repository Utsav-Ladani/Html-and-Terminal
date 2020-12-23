const { exec } = require('child_process')
const fs = require('fs')

function runcmd(req, res) {
    let location = req.query.location + "";
    let command = req.query.command + "";

    let output = {
        text: "",
        success: false,
    };

    console.log(location, command);

    const options = {
        cwd: location,
        shell: 'cmd',
    }

    exec(command, options, (err, stdout, stderr) => {
        if (err) {
            output.text = "Application error";
        }
        else {
            output.text = (stderr || stdout);
            output.success = true;
            res.json({ op: output });
            res.end();
        }
    });
}

exports.runcmd = runcmd;