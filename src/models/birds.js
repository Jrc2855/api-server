'use strict';

const { Sequelize } = require("sequelize");

module.exports = (SequelizeDatabase, DataTypes) => {
  return SequelizeDatabase.define('birds', () => {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    domesticated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
}