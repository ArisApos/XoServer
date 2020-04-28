const app = require('../servers').app;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const playerRoutes = require("../api/routes/players");




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

module.exports = app;