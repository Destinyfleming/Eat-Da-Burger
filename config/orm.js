const connection = require("../config/connection.js");

const orm = {
   //selectAll()
   selectAll: function (tableName, cb) {
      const queryString = `SELECT * FROM ${tableName};`;
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
   },
   //insertOne()
   insertOne: function (tableName, colName, val, cb) {
      const queryString = `INSERT INTO ${tableName} (${colName}) VALUES ("${val}")`;
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err
        };
        cb(result);
      });
    },
   //updateOne()
   updateOne: function (tableName, colName, boolean, condition, cb) {
      const queryString = `UPDATE ${tableName} SET ${colName} = ${boolean} WHERE ${condition}`;
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err
        };
        cb(result);
      });
    },
}


module.exports = orm;