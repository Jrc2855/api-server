'use strict';

require(dotenv).config();
let cats = require('./cats');
let birds = require('./birds');
let { Sequelize, DataTypes } = require('sequelize');

let DATABASE_URL = process.env.DATABASE_URL;

let sequelizeDatabase = new Sequelize(DATABASE_URL);

let catsModel = cats(sequelizeDatabase, Datatypes);
let birdsModel = birds(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  catsModel,
  birdsModel
}