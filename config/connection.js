var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgersdb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("ur connected af");
});

module.exports = connection;