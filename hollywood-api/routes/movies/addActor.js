module.exports = {
  path: "/api/movies/{movieId}/actor",
  method: "POST",
  handler: function(request, reply) {
    let id = request.params.movieId;
    let actor = request.payload;

    this.models.Movie
      .get(id)
      .then(movie => movie.addRelation("actors", actor))
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
