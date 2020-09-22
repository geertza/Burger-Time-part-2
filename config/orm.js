// Import MySQL connection.
var connection = require("../config/connection.js");


function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // make new burger
  create: function(vals, cb) {
    var queryString = `INSERT INTO burgers(burger_name, devoured) VALUES('${vals}','0')`;;
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // change data base of devoured value to 1 for selected id of burger
  // update: function(tableInput, colToSearch, valOfCol,res) {
    
    // var queryString = `UPDATE burgers.burgers  SET devoured = '1' WHERE id='${vals}';`;;
    update: function (table, objColVals, condition, cb) {
      var queryString = 
      `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`
      connection.query(queryString, function (err, res) {
          if (err) {
              throw err;
          }
          cb(res);
      });
  },
  delete: function(table, condition) {
    
    var queryString = `DELETE FROM ${table} WHERE ${condition}`;

    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }

    
    });
  }
};

// Export to model 
module.exports = orm;
