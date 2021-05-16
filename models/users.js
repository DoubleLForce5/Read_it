const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Users extends Model {
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password)
  }
}

Users.init(
  {
    user_id: {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUser) => {
        try {
          newUser.password = await bcrypt.hash(newUser.password, 10);
          return newUser;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
      beforeUpdate: async (updatedUser) => {
        try {
          updatedUser.password = await bcrypt.hash(
            updatedUser.password,
            10
          );
          return updatedUser;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = Users;
