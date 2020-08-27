const data = require("../../../data.json")

module.exports = {
    index(req, res){
        return res.render("index.njk", { movies: data.movies })
    },

    pageMovie(req, res){
        const id = req.params.id
        const movies = data.movies

        const movie = movies.find(function(movie){
            return movie.id == id
        })

        if (!movie) {
            return res.send('Movie not found!')
        }
        

        return res.render("page-movie.njk", { movie })
    }
}
