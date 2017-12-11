// =============================================================
// stuff and things
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// =============================================================
// Specify the port.
// =============================================================
var PORT = process.env.PORT || 3000;

// =============================================================
// Create an instance of the express app.
// =============================================================

var app = express();
// =============================================================
// ...idk but it makes body parser work
// =============================================================
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// =============================================================
// Set Handlebars as the default templating engine.
// =============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// =============================================================
// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =============================================================
// import routes
// =============================================================
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.use(express.static('public')); // Look in public dir for css/images/js/html files

// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("ur connected af");
});
