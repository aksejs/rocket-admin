const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();  
const socketIO = require('socket.io');
const messages = require('./messages.json');

require('dotenv').config();

const port = process.env.API_PORT;
const socketPort = process.env.SOCKET_PORT;
const io = socketIO.listen(socketPort);

io.on('connection', (socket) => {
  socket.on('msg history', () => {
    io.sockets.emit('msg history', messages);
  });
  socket.on('message to server', (message) => {
    io.sockets.emit('msg to client', message);

    if (message.message === 'Привет') {
      setTimeout(() => io.sockets.emit('msg to client', {
        isClient: true,
        type: "message",
        timestamp: new Date().getTime() / 1000 | 0,
        message: "Привет, опять проблемка, ты тут?"
      }), 5000);
    }
  });
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use('/api', routes);

app.listen(port, function () {
  console.log(`Server ready and listen on port --> ${port}`);
});