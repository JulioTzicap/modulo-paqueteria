const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./src/config/database');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servicio de Paquetería funcionando');
});

sequelize.sync({ alter: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));