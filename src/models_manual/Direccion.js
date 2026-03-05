const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Direccion = sequelize.define('Direccion', {
  lat_entrega: DataTypes.STRING,
  long_entrega: DataTypes.STRING,
  dir_entrega: DataTypes.STRING
});

module.exports = Direccion;