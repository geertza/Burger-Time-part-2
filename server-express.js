// import express module--------------------
const express = require("express");
const PORT = process.env.PORT || 8080;
// Import routes and give the server access to them.
var routes = require("./controllers/controller");


app = express();

// get(style/front js) content from the "public" directory.
app.use(express.static("public"));

// Place Handlebars ino the steerer.
const bars = require("express-handlebars");
app.engine("handlebars", bars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);
// Start  server so that it can begin listening
app.listen(PORT, function() {
    console.log("Server listening on localhost:" + PORT);
  });