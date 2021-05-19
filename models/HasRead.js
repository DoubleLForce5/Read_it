const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HasRead extends Model {}

HasRead.init(
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
    // modelName: 'hasRead',
  }
);

module.exports = HasRead;
