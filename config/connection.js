// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wejc3d11kfr4rmcu",
  password: "ndt6ngbfz2enezue",
  database: "uf6pwpe63uhmvucu"
 // host: "localhost",
  //user: "root",
  //password:"Desi7401",
  //database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
