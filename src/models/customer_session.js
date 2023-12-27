const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_session', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    issued_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_session',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_session_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
