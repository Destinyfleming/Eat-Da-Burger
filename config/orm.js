const connection = require("../config/connection.js");

const orm = {
   //selectAll()
   selectAll: function (tableName, cb) {
      const queryString = `SELECT * FROM ${tableName};`;
      connection.query(queryString, function (err, res) {
        if (err) {
          throw err;
        }
        cb(res);
        console.log(res)
      });
   },
   //insertOne()
   insertOne: function (tableName, colName, val, cb) {
      const queryString = `INSERT INTO ${tableName} (${colName}) VALUES ("${val}")`;
      connection.query(queryString, function (err, res) {
        if (err) {
          throw err
        };
        cb(res);
        console.log(res)
      });
    },
   //updateOne()
   updateOne: function (tableName, colName, boolean, condition, cb) {
      const queryString = `UPDATE ${tableName} SET ${colName} = ${boolean} WHERE ${condition}`;
      connection.query(queryString, function (err, res) {
        if (err) {
          throw err
        };
        cb(res);
        console.log(res)
      });
    },
}
module.exports = orm;