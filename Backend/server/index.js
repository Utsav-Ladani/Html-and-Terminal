const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { exec } = require('child_process')

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/run/', getCommand)

function getCommand(req, res) {
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
            output.text = ( stderr || stdout );
            output.success = true;
            res.json({ op: output });
            res.end();
        }
    });
}

app.listen(port, () => console.log(`Example app listening on port port!`))