const mysql = require("mysql");
let connection;
//mysql://itt0t86ptsj4b9eb:p5al24r2dtxjwneh@eyw6324oty5fsovx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ikq981mt2tpc7ycs
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
  }
  else {
  connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Desi7401",
	database: "burger_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

  
module.exports = connection;