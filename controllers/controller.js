var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var model = require("../models/burger-model.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("page loaaded")
  model.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  model.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

  
  
router.post("/:id", (req, res) => {
  console.log("control")
  model.update(req.params.id, (result) => {
    res.redirect("/")
  })
});
   
  
// })})

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   control.delete(condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;
