"use strict";
module.exports = (sequelize, DataTypes) => {
  const Products_json = sequelize.define(
    "Products_json",
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      rating: DataTypes.DECIMAL,
      warranty_years: DataTypes.DECIMAL,
      available: DataTypes.BOOLEAN
    },
    {}
  );
  Products_json.associate = function(models) {
    // associations can be defined here
  };
  return Products_json;
};
