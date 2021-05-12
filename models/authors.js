const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Authors extends Model {}

Authors.init(
  {
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_first: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_last: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'authors',
  }
);

module.exports = Authors;
