const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Paquete', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    instruccionesEntrega: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'instrucciones_entrega'
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    distancia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      field: 'fecha_creacion'
    },
    estado: {
      type: DataTypes.ENUM('pendiente','aceptado','en_curso','entregado','cancelado'),
      allowNull: true,
      defaultValue: "pendiente"
    },
    descripcionPedido: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'descripcion_pedido'
    },
    tipoCobro: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'tipo_cobro'
    },
    horaEntrega: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'hora_entrega'
    },
    serieFactura: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'serie_factura'
    },
    emisorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      field: 'emisor_id'
    },
    receptorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      field: 'receptor_id'
    },
    repartidorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'repartidores',
        key: 'id'
      },
      field: 'repartidor_id'
    },
    direccionEnvioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'direcciones',
        key: 'id'
      },
      field: 'direccion_envio_id'
    },
    direccionRecepcionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'direcciones',
        key: 'id'
      },
      field: 'direccion_recepcion_id'
    }
  }, {
    sequelize,
    tableName: 'paquetes',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_emisor",
        using: "BTREE",
        fields: [
          { name: "emisor_id" },
        ]
      },
      {
        name: "fk_receptor",
        using: "BTREE",
        fields: [
          { name: "receptor_id" },
        ]
      },
      {
        name: "fk_repartidor",
        using: "BTREE",
        fields: [
          { name: "repartidor_id" },
        ]
      },
      {
        name: "fk_direccion_envio",
        using: "BTREE",
        fields: [
          { name: "direccion_envio_id" },
        ]
      },
      {
        name: "fk_direccion_recepcion",
        using: "BTREE",
        fields: [
          { name: "direccion_recepcion_id" },
        ]
      },
    ]
  });
};
