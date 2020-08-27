const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const {urlencoded} = require('express')

const server = express()

server.use(urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)


nunjucks.configure("src/app/views", {
    express:server,
    autoescape: false,
    noCache: true
})



server.listen(5000, function(){
    console.log("@#$%Server is running")
})