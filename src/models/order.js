const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'order',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Order_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
