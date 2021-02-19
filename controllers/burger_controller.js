
const burger = require("../models/burger.js");
const express = require("../config/orm.js");
var router = require('express').Router()

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerData = {
            burgers: data
          };
        console.log(burgerData);
        res.render("index", burgerData);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var objId = "id = " + req.params.id;
    burger.updateOne({
        devoured: true
    }, objId, function (data) {
        res.redirect("/");

    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], 
    [req.body.burger_name, req.body.devoured], function(result) {
        // Send back the ID of the new burger
        res.redirect("/");
    });
});

module.exports = router;

