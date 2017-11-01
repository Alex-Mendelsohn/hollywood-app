module.exports = {
  path: "/api/movies/{movieId}",
  method: "DELETE",
  handler: function(request, reply) {
    let id = request.params.movieId;
    this.models.Movie
      .get(id)
      .then(doc => doc.delete())
      .then(result => reply(true))
      .catch(error => reply(error));
  }
};
