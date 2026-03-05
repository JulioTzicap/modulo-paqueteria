const Usuario = require('./Usuario');
const Repartidor = require('./Repartidor');
const Direccion = require('./Direccion');
const Paquete = require('./Paquete');

// Relaciones
Paquete.belongsTo(Usuario, { as: 'emisor' });
Paquete.belongsTo(Usuario, { as: 'receptor' });

Paquete.belongsTo(Repartidor);
Paquete.belongsTo(Direccion, { as: 'direccion_envio' });
Paquete.belongsTo(Direccion, { as: 'direccion_recepcion' });

module.exports = {
  Usuario,
  Repartidor,
  Direccion,
  Paquete
};