const hapi = require("hapi");
const server = new hapi.Server();
const api = require("./api");
server.connection({
  host: "localhost",
  port: 4040,
  routes: { cors: true },
  router: { stripTrailingSlash: true }
});
server.register(
  [
    {
      register: api
    }
  ],
  () => {
    server.start(err => {
      if (err) {
        return console.log(err);
      }

      console.log(`Server started at: ${server.info.uri}`);
    });
  }
);
