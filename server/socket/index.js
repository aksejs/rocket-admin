const socketIO = require('socket.io');
const messages = require('./messages.json');
const messageController = require('./controllers/messageController');

const startSocketServer = ({ port }) => {
  const io = socketIO.listen(port);
  const includesOneOf = (text, values) => {
    return values.some(function(val) {
      return text.includes(val);
    });
  };

  io.on('connection', (socket) => {
    let messagePosition = 1;
    socket.on('MESSAGE_INIT_HISTORY', () => {
      io.sockets.emit('MESSAGE_INIT_HISTORY', messages);
    });
    socket.on('SET_SCENARIO', (position) => {
      messagePosition = +position;
    });
    socket.on('MESSAGE_TO_SERVER', (message) => {
      if (
        message.type === 'message' &&
        includesOneOf(message.message.toLowerCase(), messageController.getCorrectAnswers(1)) &&
        messagePosition === 1
      ) {
        setTimeout(() => {
          io.sockets.emit('MESSAGE_TO_CLIENT', messageController.getRandomMessage('problem'));
          messagePosition = 2;
        }, 6000);
      }

      if (message.type === 'operation' && messagePosition === 2) {
        if (message.operationDetails.name === 'Макдональдс') {
          setTimeout(() => {
            io.sockets.emit('MESSAGE_TO_CLIENT', messageController.getRandomMessage('correct'));
            messagePosition = 3;
          }, 4000);
        } else {
          setTimeout(() => {
            io.sockets.emit('MESSAGE_TO_CLIENT', messageController.getRandomMessage('wrong'));
          }, 3000);
        }
      }
      if (message.type === 'message' && messagePosition === 2) {
        if (includesOneOf(message.message.toLowerCase(), messageController.getCorrectAnswers(2))) {
          setTimeout(() => {
            io.sockets.emit(
              'MESSAGE_TO_CLIENT',
              messageController.getRandomMessage('incorrectMessage')
            );
          }, 3000);
        }
      }
      io.sockets.emit('MESSAGE_TO_CLIENT', message);
    });
  });
  return { io };
};

module.exports = startSocketServer;
