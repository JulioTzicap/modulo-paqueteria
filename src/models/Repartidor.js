const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Repartidor = sequelize.define('Repartidor', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Repartidor;