const express = require('express');
const app = express.Router();
const burgers = require('../models/burger.js');

app.get('/', function(req, res) {
  burgers.select(function(data) {
    let burgerData = {
      burger: data
    };
    console.log(burgerData);
    res.render('index', burgerData);
  });
});
app.post('/b', function(req, res) {
  burgers.insert([
    'burger_name'
  ], [
    req.body.burger_name
  ], function() {
    res.redirect('/');
  });
});
app.put('/b/:id', function(req, res) {
  let condition = 'id = ' + req.params.id;
  burgers.update({
    devoured: true
  }, condition, function() {
    res.redirect('/');
  });
});

module.exports = app;