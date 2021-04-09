var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wejc3d11kfr4rmcu",
  password: "ndt6ngbfz2enezue",
  database: "uf6pwpe63uhmvucu"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected to db!");
});

module.exports = connection;
