'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeviceInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Device}) {
      DeviceInfo.belongsTo(Device, {foreignKey: 'deviceId'})
    }
  }
  DeviceInfo.init({
    deviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Devices',
        key: 'id',
      },
    },
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DeviceInfo',
  });
  return DeviceInfo;
};