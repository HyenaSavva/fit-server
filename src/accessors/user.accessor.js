const { sequelize, DataTypes } = require("../../db");
const sequelizeUser = require("../models/customer");

const defineUser = sequelizeUser(sequelize, DataTypes);

class UserAccessor {
  createUserInstance() {
    return defineUser;
  }
}

module.exports = new UserAccessor();
