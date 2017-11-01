module.exports = {
  path: "/api/actors/{actorId}",
  method: "DELETE",
  handler: function(request, reply) {
    let id = request.params.actorId;
    this.models.Actor
      .get(id)
      .then(doc => doc.delete())
      .then(result => reply(true))
      .catch(error => reply(error));
  }
};
