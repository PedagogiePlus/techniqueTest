// Imports
var express = require("express");
var productsController = require("./routes/productsController");

// Router
exports.router = (function() {
  var myRouter = express.Router();

  // Products routes
  myRouter.route("/products/").post(productsController.products);

  return myRouter;
})();
