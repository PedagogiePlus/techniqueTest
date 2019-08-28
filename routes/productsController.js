// Routes
module.exports = {
  products: function(req, res) {
    // Param
    var name = req.body.name;
    var type = req.body.type;
    var price = req.body.price;
    var rating = req.body.rating;
    var warranty_years = req.body.warranty_years;
    var available = req.body.available;

    if (name == null || type == null || price == null || available == null) {
      return res.status(400).json({ error: "paramètre manquant" });
    }
  }
};
