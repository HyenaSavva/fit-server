var DataTypes = require("sequelize").DataTypes;
var _customer = require("./customer");
var _customer_session = require("./customer_session");
var _product = require("./product");
var _product_category = require("./product_category");

function initModels(sequelize) {
  var customer = _customer(sequelize, DataTypes);
  var customer_session = _customer_session(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_category = _product_category(sequelize, DataTypes);

  customer_session.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(customer_session, { as: "customer_sessions", foreignKey: "customer_id"});
  product.belongsTo(product_category, { as: "category", foreignKey: "category_id"});
  product_category.hasMany(product, { as: "products", foreignKey: "category_id"});

  return {
    customer,
    customer_session,
    product,
    product_category,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
