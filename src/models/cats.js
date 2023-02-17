'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('cats', () => {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    vaccinated: {
      type: DataTypes.BOOLEAN
      // According to Sequelize docs, if I leave this blank, then allowNull deafaults to true.
    }
  })
}