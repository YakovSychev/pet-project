'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Basket, Rating}) {
      User.hasOne(Basket, {foreignKey: 'userId'})
      User.hasMany(Rating, {foreignKey: 'userId'})
    }
  }
  User.init({
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    role: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};