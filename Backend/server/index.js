const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const execa = require('execa')

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/run/', getCommand)

function getCommand(req, res) {
    let command = req.query.command+"";
    let output;

    try {
        output = execa.sync(command).stdout;
    }
    catch {
        output = "Application error";
    }

    res.json({ op: output });
    res.end();
}

app.listen(port, () => console.log(`Example app listening on port port!`))