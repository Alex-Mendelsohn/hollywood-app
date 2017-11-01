module.exports = {
  path: "/api/movies/{movieId}",
  method: ["PUT", "PATCH"],
  handler: function(request, reply) {
    let id = request.params.movieId;
    let movie = request.payload;
    this.models.Movie
      .get(id)
      .then(doc => doc.merge(movie).save())
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
