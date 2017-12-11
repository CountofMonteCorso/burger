var express = require("express");

var router = express.Router();

var burger = require("../models/burgermodel.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", {burgers: data});
  });
});

router.post("/api/burger", function(req, res) {
  burger.create([
    "burger_name"
  ], 
  [
    req.body.burger_name
  ], function(result) {
  	//burger.handlebars
  	res.json({
    	id: result.insertId,
    	burger_name: req.body.burger_name
    });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "item_id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burger/:id", function(req, res) {
  var condition = "item_id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;