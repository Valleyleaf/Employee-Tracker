const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



// Create a new Sequelize model for books
class Employee extends Model {}

Empl.init(
  {
    title: {
      type: DataTypes.STRING
      },

    id: {
        type: DataTypes.INTEGER
      },

    department: {
      type: DataTypes.STRING
    },

    first_name: {
      type: DataTypes.STRING
    },

    last_name: {
      type: DataTypes.STRING
    },

    salery: {
      type: DataTypes.INTEGER
    },

    isManager: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'employee'
  }
);

module.exports = employee;
