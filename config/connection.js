const mysql = require('mysql')
 


var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "localhost",
  //  port
    port: 3306,
   // Your username
    user: "root",
   // Your password
    password: "password",
    database: "burgers"
  });
}
  //  connection promise------------------------
  connection.connect(function(err) {
    if (err) throw err;
  });


  module.exports = connection;