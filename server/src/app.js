console.log('hello6')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `Howdy ${req.body.email}! Your user was registered!`
    })
})

app.post('/login', (req, res) => {
    res.status(200).send({ message: `Hi! ${req.body.userName}, Welcome back to VUE-Express` })
})

app.listen(process.env.PORT || 8081)