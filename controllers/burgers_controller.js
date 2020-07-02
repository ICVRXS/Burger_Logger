const router = require("express").Router();
const Burger = require("../models/burger");

router.get("/", (req, res) => {
    Burger.all("*", (results) => {
        console.log(results);
        res.render("index", {
            burgers: results
        });
    });
});

router.post("/api/burgers", (req, res) => {
    Burger.create(req.body, (result) => {
        console.log(result);
        res.json({id: result.insertId});
    });
});

module.exports = router;