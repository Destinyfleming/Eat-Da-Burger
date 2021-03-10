var connection = require ('./connection.js');

function questionmarks(num) {
	var array = [];
	for (var i = 0; i < num; i++) {
		array.push("?");
	}
	return array.toString();
}
function mysqlObj(object) {
	var array = [];
	for (var key in object) {
		array.push(key + "=" + object[key]);
	}
	return array.toString();
}

var orm = {
	select: function(tableInput, callback) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	},
	insert: function(table, cols, val, callback) {
		var queryString2 = "INSERT INTO " + table;
		queryString2 += " (";
		queryString2 += cols.toString();
		queryString2 += ") ";
		queryString2 += "VALUES (";
		queryString2 += questionmarks(val.length);
		queryString2 += ") ";
		console.log(queryString2);
		connection.query(queryString2, val, function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	},
	update: function(table, objColval, condition, callback) {
		var queryString3 = "UPDATE " + table;
		queryString3 += " SET ";
		queryString3 += mysqlObj(objColval);
		queryString3 += " WHERE ";
		queryString3 += condition;
		console.log(queryString3);
		connection.query(queryString3, function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	}
};

module.exports = orm;