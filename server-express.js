// import express module--------------------
const express = require("express");
const PORT = process.env.PORT || 8080;
app = express();

// get(style/front js) content from the "public" directory.
app.use(express.static("public"));

// Set Handlebars.
const bars = require("express-handlebars");
app.engine("handlebars", bars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./test");
app.use(routes);
// Start  server so that it can begin listening
app.listen(PORT, function() {
    console.log("Server listening on localhost:" + PORT);
  });