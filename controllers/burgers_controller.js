const express = require("express");
const burgers = require("../models/burger");
const Burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    Burger.all("*", (results) => {
        res.render("index", {
            burgers: results
        });
    });
});

router.post("/api/burgers", (req, res) => {
    Burger.create(res.body, (result) => {
        console.log(result);
        res.json({id: result.insertId});
    });
});

module.exports = router;