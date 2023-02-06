'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, BasketDevice}) {
      Basket.belongsTo(User, {foreignKey: 'userId'})
      Basket.hasMany(BasketDevice, {foreignKey: 'basketId'})
    }
  }
  Basket.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};