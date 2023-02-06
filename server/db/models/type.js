'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
   
    static associate({Device, Brand, TypeBrand}) {
      Type.hasMany(Device, {foreignKey: 'typeId'})
      Type.belongsToMany(Brand, {through: TypeBrand, foreignKey: 'typeId', otherKey: 'brandId'})
    }
  }
  Type.init({
    name: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};