'use strict'

let express = require('express');
let app = express();

require('dotenv').config();

let webhook = require('./webhook');

app.use(express.urlencoded({ extended: 'true' }))
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/webhook', webhook)

app.listen(process.env.PORT || 4000)

console.log('info', `server listening on port ${process.env.PORT}`)