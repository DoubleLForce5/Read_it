const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class My_List extends Model {}

My_List.init(
  {
    list_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    will_read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    is_reading: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    has_read: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'my_list',
  }
);

module.exports = My_List;
