const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



// Create a new Sequelize model for books
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
