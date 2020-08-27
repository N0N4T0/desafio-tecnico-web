const express = require('express')
const routes = express.Router()
const Movies = require("./src/app/controllers/movies")

routes.get('/', Movies.index)

routes.get('/page-movie/:id', Movies.pageMovie)

module.exports = routes