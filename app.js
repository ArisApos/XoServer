const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Serve the static files from the React app
app.use(express.static(__dirname + "/build"));
// Body parser for handle json sended data
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

app.post("/loggin", (req, res) => {
  const { body } = req;
  console.log("POOOOOSSTTT--Loggin-", body);
  let valid = body.name === "aris" ? true :false;
  res.status(200).json({ valid, body });
});

app.post("/register", (req, res) => {
  const { body } = req;
  console.log("POOOOOSSTTT--Register-", body);
  res.status(200).json(body);
});
const port = process.env.PORT || 5000;

// Get expressServer and pass it to socketServer
// The server is listening in port 5000 and the socket.io is listening in server
exports.expressServer = app.listen(port);
console.log("App is listening on port " + port);

