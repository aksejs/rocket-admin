import * as React from 'react';
import { connect } from 'react-redux';
import { StyledSticker } from './styles';
import { sendToSocket } from 'app/utils';

const Sticker: React.FC<{
  index: string;
  socket?: SocketIOClient.Socket;
}> = ({ index, socket }) => {
  const handleSendMessage = () => {
    return sendToSocket(socket, {
      isClient: false,
      stickerIndex: +index,
      timeStamp: (new Date().getTime() / 1000) | 0,
      type: 'sticker'
    });
  };

  return (
    <StyledSticker
      src={`/assets/img/stickers/pepe_frog${index}.png`}
      onClick={() => handleSendMessage()}
    />
  );
};

export default connect((state) => ({
  socket: state.frontState.socket
}))(Sticker);
