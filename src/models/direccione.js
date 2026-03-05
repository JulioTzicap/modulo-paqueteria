const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Direccione', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    latEntrega: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'lat_entrega'
    },
    longEntrega: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'long_entrega'
    },
    dirEntrega: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'dir_entrega'
    }
  }, {
    sequelize,
    tableName: 'direcciones',
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
    ]
  });
};
