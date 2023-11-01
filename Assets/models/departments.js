const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Dept.init(
  {
    title: {
      type: DataTypes.STRING
      },
      id: {
        type: DataTypes.STRING
        },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'department'
  }
);

module.exports = department;
