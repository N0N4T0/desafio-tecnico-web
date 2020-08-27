const data = require("../../../data.json")

module.exports = {
    index(req, res){
        return res.render("index.njk", { movies: data.movies })
    },

    pageMovie(req, res){
        return res.render("page-movie.njk")
    }
}
