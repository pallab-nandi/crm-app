const express = require('express');
const serverConfig = require('./src/configs/server.config');
const { connect } = require('./src/utils/db.connection');

const app = express();



app.listen(serverConfig.PORT, () => {
  console.log(`Application is running in PORT : ${serverConfig.PORT}...`)
  connect();
})