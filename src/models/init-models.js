var DataTypes = require("sequelize").DataTypes;
var _Direccione = require("./direccione");
var _Paquete = require("./paquete");
var _Repartidore = require("./repartidore");
var _Usuario = require("./usuario");

function initModels(sequelize) {
  var Direccione = _Direccione(sequelize, DataTypes);
  var Paquete = _Paquete(sequelize, DataTypes);
  var Repartidore = _Repartidore(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  Paquete.belongsTo(Direccione, { as: "direccionEnvio", foreignKey: "direccionEnvioId"});
  Direccione.hasMany(Paquete, { as: "paquetes", foreignKey: "direccionEnvioId"});
  Paquete.belongsTo(Direccione, { as: "direccionRecepcion", foreignKey: "direccionRecepcionId"});
  Direccione.hasMany(Paquete, { as: "direccionRecepcionPaquetes", foreignKey: "direccionRecepcionId"});
  Paquete.belongsTo(Repartidore, { as: "repartidor", foreignKey: "repartidorId"});
  Repartidore.hasMany(Paquete, { as: "paquetes", foreignKey: "repartidorId"});
  Paquete.belongsTo(Usuario, { as: "emisor", foreignKey: "emisorId"});
  Usuario.hasMany(Paquete, { as: "paquetes", foreignKey: "emisorId"});
  Paquete.belongsTo(Usuario, { as: "receptor", foreignKey: "receptorId"});
  Usuario.hasMany(Paquete, { as: "receptorPaquetes", foreignKey: "receptorId"});

  return {
    Direccione,
    Paquete,
    Repartidore,
    Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
