const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
      orm.selectAll("burgers", function (res) {
        cb(res);   
      });
    },
    insertOne: function (val, cb) {
      orm.insertOne("burgers", "burger_name", val, function (res) {
        cb(res);
      });
    },
    updateOne: function(devoured, cb){
      orm.updateOne(devoured, function(res){
        cb(res);
      });
    },
};

module.exports = burger;