const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Paquete = sequelize.define('Paquete', {
  instrucciones_entrega: DataTypes.TEXT,
  precio: DataTypes.FLOAT,
  distancia: DataTypes.FLOAT,
  fecha_creacion: DataTypes.DATE,
  estado: {
    type: DataTypes.ENUM(
      'pendiente',
      'aceptado',
      'entregado',
      'en_curso',
      'cancelado'
    ),
    defaultValue: 'pendiente'
  },
  descripcion_pedido: DataTypes.TEXT,
  tipo_cobro: DataTypes.STRING,
  hora_entrega: DataTypes.TIME,
  serie_factura: DataTypes.STRING
});

module.exports = Paquete;