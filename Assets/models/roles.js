const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Roles extends Model {}

Dept.init(
  {
    role_title: {
      type: DataTypes.STRING
      },
      role_id: {
        type: DataTypes.STRING
        },
      department: {
        type: DataTypes.STRING
        },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'roles'
  }
);

module.exports = roles;
