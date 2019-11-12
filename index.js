'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')

let webhook = require('./webhook')

app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/webhook', webhook)

app.listen(8080)

console.log('info', `server listening on port 8080`)