// Imports
var express = require("express");
var productsController = require("./routes/productsController");

// Router
exports.router = (function() {
  var apiRouter = express.Router();

  // Products routes
  apiRouter.route("/products/").post(productsController.products);

  return apiRouter;
})();
