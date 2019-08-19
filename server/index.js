const startExpressServer = require('./express');
const startSocketServer = require('./socket');

require('dotenv').config();

const port = process.env.API_PORT;
const socketPort = process.env.SOCKET_PORT;

startExpressServer({ port: port });
startSocketServer({ port: socketPort });