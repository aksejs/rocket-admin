const socketIO = require('socket.io');
const messages = require('./messages.json');

const startSocketServer = ({ port }) => {
  const io = socketIO.listen(port);
  io.on('connection', (socket) => {
    let greetingMessageTimerId = null;
    let messagePosition = 1;
    socket.on('msg history', () => {
      io.sockets.emit('msg history', messages);
      greetingMessageTimerId = setTimeout(() => {
        io.sockets.emit('msg to client', {
          isClient: true,
          message: 'Привет, ребята, снова проблемка, есть время?',
          timestamp: (new Date().getTime() / 1000) | 0,
          type: 'message'
        });
      }, 10300);
    });
    socket.on('message to server', (message) => {
      if (message.type === 'message' && message.message.toLowerCase().includes('проблема')) {
        clearTimeout(greetingMessageTimerId);
        messagePosition = 0;
      }
      if (messagePosition === 0 || (message.type !== 'operation' && message.message.toLowerCase().includes('да') && messagePosition === 1)
      ) {
        setTimeout(() => {
          io.sockets.emit('msg to client', {
            isClient: true,
            type: 'message',
            message:
              'В общем проблема такая, не могу найти на сколько я последний раз поел в маке..',
            timestamp: (new Date().getTime() / 1000) | 0
          });
          messagePosition = 2;
        }, 6000);
      }
      if (message.type === 'operation' && messagePosition === 2) {
        if (message.operationDetails.name === 'Макдональдс') {
          setTimeout(() => {
            io.sockets.emit('msg to client', {
              isClient: true,
              type: 'message',
              message: 'Ничего себе, спасибо!',
              timestamp: (new Date().getTime() / 1000) | 0
            });
            messagePosition = 3;
          }, 3000);
        } else {
          setTimeout(() => {
            io.sockets.emit('msg to client', {
              isClient: true,
              type: 'message',
              message: 'Не, это че-то не то. Тут нигде не сказано про макдак.',
              timestamp: (new Date().getTime() / 1000) | 0
            });
          }, 3000);
        }
      }
      io.sockets.emit('msg to client', message);
    });
  });
  return { io };
};

module.exports = startSocketServer;
