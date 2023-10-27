const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



// Create a new Sequelize model for books
class Roles extends Model {}

Dept.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
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
