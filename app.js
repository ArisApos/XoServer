const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require('mongoose');
const playerRoutes = require('./api/routes/players')

// Serve the static files from the React app
app.use(express.static(__dirname + "/build"));
// Logs API middleware
app.use(morgan('dev'));
// Body parser for handle json sended data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting ACA headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build");
});

app.use('/players', playerRoutes)

// Error middlware handlers

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.PORT || 5000;
// Get expressServer and pass it to socketServer
// The server is listening in port 5000 and the socket.io is listening in server
const expressServer = app.listen(port);
console.log("App is listening on port " + port);

module.exports = expressServer;