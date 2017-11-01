module.exports = {
  path: "/api/movies/{movieId}",
  method: "GET",
  handler: function(request, reply) {
    let id = request.params.movieId;
    this.models.Movie
      .get(id)
      .getJoin({ actors: true })
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
