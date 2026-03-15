const sequelize = require('./src/config/database');
const initModels = require('./src/models/init-models');

const models = initModels(sequelize);

async function test() {
  let transaction;
  try {
    await sequelize.authenticate();
    console.log("Conexión a MySQL correcta");

    // Iniciamos una transacción para pruebas
    transaction = await sequelize.transaction();

    // Crear datos de prueba temporal
    const user = await models.User.create({ name: 'Test User', status: true }, { transaction });
    const courier = await models.Courier.create({ name: 'Test Courier', status: true }, { transaction });
    const shipment = await models.Shipment.create({
      deliveryInstructions: 'Test delivery',
      total: 100.50,
      shipmentStatus: 'pending',
      senderId: user.idUser,
      receiverId: user.idUser,
      courierId: courier.idCourier,
      status: true
    }, { transaction });

    // Consultas con relaciones
    const shipments = await models.Shipment.findAll({
      limit: 5,
      include: ["sender", "receiver", "courier", "packages"],
      transaction
    });
    console.log(`Shipments encontrados: ${shipments.length}`);

    const users = await models.User.findAll({
      limit: 5,
      include: ["addresses", "shipments", "receiverShipments"],
      transaction
    });
    console.log(`Users encontrados: ${users.length}`);

    const couriers = await models.Courier.findAll({
      limit: 5,
      include: ["shipments"],
      transaction
    });
    console.log(`Couriers encontrados: ${couriers.length}`);

    // Revertimos todo para no llenar la DB
    await transaction.rollback();
    console.log("Datos de prueba eliminados, base de datos intacta.");

  } catch (error) {
    if (transaction) await transaction.rollback();
    console.error("Error al probar modelos:", error);
  } finally {
    await sequelize.close();
  }
}

test();