const express = require('express')
const route = require('./src/route')

const server = express()

server.use(route)

server.set('view engine', 'ejs')


server.listen(3000, () => console.log("SERVIDOR DO LAFERA RODANDO."))