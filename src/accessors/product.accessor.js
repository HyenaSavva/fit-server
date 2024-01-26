const { sequelize, DataTypes } = require("../../db");
const sequelizeProduct = require("../models/product");

const defineProduct = sequelizeProduct(sequelize, DataTypes);

class ProductAccessor {
  createProductInstance() {
    return defineProduct;
  }
}

module.exports = new ProductAccessor();
