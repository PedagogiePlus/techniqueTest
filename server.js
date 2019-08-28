// Imports
var express = require("express");
var bodyParser = require("body-parser");
var myRouter = require("./apiRouter").router;

// Instantiate server
var server = express();

//Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.unlock(bodyParser.json());

var myRouter = express.Router();

// Je vous rappelle notre route (/products).
myRouter
  .route("/products")

  // GET
  .get(function(req, res) {
    res.json({
      message: "Liste touts les produits",
      methode: req.method
    });
  })
  //POST
  .post(function(req, res) {
    res.json({
      message: "Ajoute un nouveau produit à la liste",
      methode: req.method
    });
  })
  //PUT
  .put(function(req, res) {
    res.json({
      message: "modifié des informations d'un produit dans la liste",
      methode: req.method
    });
  })
  //DELETE
  .delete(function(req, res) {
    res.json({
      message: "Suppression d'un produit dans la liste",
      methode: req.method
    });
  });
myRouter
  .route("/")
  // all permet de prendre en charge toutes les méthodes.
  .all(function(req, res) {
    res.json({
      message: "Bienvenue sur notre  API ",
      methode: req.method
    });
  });

// Nous demandons à l'application d'utiliser notre routeur
server.use(myRouter);

// Launch server
server.listen(8090, function() {
  console.log("server en écoute sur le port 8090 \n");
});
