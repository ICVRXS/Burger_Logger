const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;