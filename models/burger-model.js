// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // create a new burger in database
  create: function(burger_name,vals, cb) {
    orm.create(vals, function(res) {
      cb(res);
    });
  },
  // update database value
  update: function(id, cb) {
    var condition = `id=${id}`;
    orm.update("burgers", {devoured: true}, condition, cb);     

  }
}

// Export the database functions to use in  controller
module.exports = burger;