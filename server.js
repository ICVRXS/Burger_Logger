const express = require("express");
const exphbs = require("express-handlebars");
const burgerConrtoller = require("./controllers/burgers_controller");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(burgerConrtoller);

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Listening on port ${PORT}`);
});