const { sequelize, DataTypes } = require("../../db");
const sequelizeSession = require("../models/customer_session");
const sequelizeCustomer = require("../models/customer");

const defineSession = sequelizeSession(sequelize, DataTypes);
const defineCustomer = sequelizeCustomer(sequelize, DataTypes);

class AuthAccessor {
  createSessionInstance() {
    return defineSession;
  }
  createCustomerInstance() {
    return defineCustomer;
  }
}

module.exports = new AuthAccessor();
