const mysql = require("mysql");
// connect MySQL
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "gosport",
});
module.exports = connection;