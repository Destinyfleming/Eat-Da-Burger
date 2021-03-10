let orm = require('../config/orm.js');

let burger = {
  select: function(callback) {
    orm.select('burgers', function(res) {
      callback(res);
    });
  },
  insert: function(colum, vals, callback) {
    orm.insert('burgers', colum, vals, function(res) {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update('burgers', objColVals, condition, function(res) {
      callback(res);
    });
  }
};
module.exports = burger;
