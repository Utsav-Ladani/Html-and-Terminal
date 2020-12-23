const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { runcmd } = require('./util/runcmd')

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/run/', runcmd)

app.listen(port, () => console.log(`Example app listening on port port!`))