const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();  
const socketIO = require('socket.io');
const messages = require('./messages.json');

const port = process.env.PORT || 8080;
const socketPort = 8081;
const io = socketIO.listen(socketPort);

io.on('connection', (socket) => {
  socket.on('msg history', () => {
    io.sockets.emit('msg history', messages);
  });
  socket.on('message to server', (message) => {
    io.sockets.emit('msg to client', message);
  });
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use('/api', routes);

app.listen(port, function () {
  console.log(`Server ready and listen on port --> ${port}`);
});