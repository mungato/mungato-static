const StaticServer = require("static-server");

const server = new StaticServer({
  rootPath: ".",
  port: 9080,
  cors: "*",
  followSymlink: true,
});

// server.cors('Access-Control-Allow-Origin', 'localhost')

server.start(function () {
  console.log(`Mungato static server run on PORT ${server.port}`);
});


