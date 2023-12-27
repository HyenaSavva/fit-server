const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'product_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Product Category_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
