var express = require("express");
var debug = require("debug")("instagram_clone:server");
var http = require("http");
const { engine } = require("express-handlebars");
const path = require("path");

const { setUpServer } = require("./src/setup");
var app = express();
setUpServer(app);

var port = normalizePort(process.env.PORT || 4000);

//port
app.set("port", port);

//static file

app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("src/public"));
//engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "src/views"));
//server
var server = http.createServer(app);

//listen
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

module.exports = app;
