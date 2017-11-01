module.exports = {
  path: "/api/actors/{actorId}",
  method: "GET",
  handler: function(request, reply) {
    let id = request.params.actorId;
    this.models.Actor
      .get(id)
      .getJoin({ movies: true })
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
