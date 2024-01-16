const { sequelize, DataTypes } = require("../../db");
const sequelizeProducts = require("../models/customer");

const defineProducts = sequelizeProducts(sequelize, DataTypes);

class ProductsAccessor {
  createProductsInstance() {
    return defineProducts;
  }
}

module.exports = new ProductsAccessor();
