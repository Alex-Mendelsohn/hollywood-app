module.exports = {
  path: "/api/actors/{actorId}",
  method: ["PUT", "PATCH"],
  handler: function(request, reply) {
    let id = request.params.actorId;
    let actor = request.payload;
    this.models.Actor
      .get(id)
      .then(doc => doc.merge(actor).save())
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
