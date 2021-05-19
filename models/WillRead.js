const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WillRead extends Model {}

WillRead.init(
  {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'user_id',
        },
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'books',
            key: 'book_id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // modelName: 'is_reading',
  }
);

module.exports = WillRead;
