
const burger = require("./burger.js");
const express = require("./orm.js");
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('burger home page');
})

// About page route.
router.get('/devour', function (req, res) {
  res.send('yum!');
})

//export router
module.exports = router;