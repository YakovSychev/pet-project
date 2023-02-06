'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketDevice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Basket, Device}) {
      BasketDevice.belongsTo(Basket, {foreignKey: 'basketId'})
      BasketDevice.belongsTo(Device, {foreignKey: 'deviceId'})
    }
  }
  BasketDevice.init({
    deviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Devices',
        key: 'id',
      },
    },
    basketId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Baskets',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'BasketDevice',
  });
  return BasketDevice;
};