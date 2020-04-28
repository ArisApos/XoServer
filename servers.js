// Servers Initialization ExpressApp, SocketIo, MongoDb
const express = require("express");
const app = express();
const socketio = require("socket.io");
const mongoose = require('mongoose');


// Express App initialization
// Serve the static files from the React app
app.use(express.static(__dirname + "/public/build"));
app.use(express.static(__dirname + "/public"));
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/build");
});


// Mongoose Initialization
const DB_ROOT_URL = "mongodb://127.0.0.1:27017/";
const XODB = 'xoDb';
const XODB_URL = DB_ROOT_URL + XODB;

mongoose.connect(XODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const xodb = mongoose.connection;
xodb.once("open", () => {
  console.log("*****Database connected: DUUUUUDDDEEE!!!*****", XODB_URL);
});

xodb.on("error", (err) => {
  console.error(`connection to database ${XODB_URL} error:`, err);
});


// Get expressServer and pass it to socketServer
// The server is listening in port 5000 and the socket.io is listening in server
const port = process.env.PORT || 5000;
const expressServer = app.listen(port);
console.log("App is listening on port " + port);


// SocketIo initialization
// the second parameter object is the default. Serves the client io api
const io = socketio(expressServer, {
  path: "/socket.io",
  serveClient: true
});

module.exports = { app, io, express };