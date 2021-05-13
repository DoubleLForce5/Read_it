const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model {}

Books.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    isbn: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    year: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'authors',
            key: 'author_id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'books',
  }
);

module.exports = Books;
