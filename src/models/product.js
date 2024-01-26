const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "product",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      carbohydrates: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      proteins: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "product_category",
          key: "id",
        },
      },
      fats: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      img: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      calories: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      gramms: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "customer",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "product",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "product_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
