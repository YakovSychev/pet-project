'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Type, Brand, Rating, BasketDevice, DeviceInfo}) {
      Device.belongsTo(Type, {foreignKey: 'typeId'})
      Device.belongsTo(Brand, {foreignKey: 'brandId'})
      Device.hasMany(Rating, {foreignKey: 'deviceId'})
      Device.hasMany(BasketDevice, {foreignKey: 'deviceId'})
      Device.hasMany(DeviceInfo, {foreignKey: 'deviceId'})
    }
  }
  Device.init({
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    typeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Types',
        key: 'id',
      },
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Brand',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};