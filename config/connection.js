const mysql = require('mysql')
var connection = mysql.createConnection({
    host: "localhost",
  //  port
    port: 3306,
   // Your username
    user: "root",
   // Your password
    password: "password",
    database: "Burger_list"
  });

  //  connection promise------------------------
  connection.connect(function(err) {
    if (err) throw err;
  });


  module.exports = connection;