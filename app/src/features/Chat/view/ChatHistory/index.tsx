import * as React from 'react';
import { connect } from 'react-redux';
import { MessageType } from '@features/Chat/types';
import Message from './Message';
import Operation from './Operation';
import { Wrapper, StickerMessageWrapper } from './styles';

const ChatHistory: React.FC<{ messages?: MessageType[] }> = ({ messages = [] }) => {
  const historyRef = React.useRef<HTMLDivElement | null>(null);
  const scrollToCurrentMessage = () => {
    if (historyRef && historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToCurrentMessage();
  }, []);

  React.useEffect(() => {
    scrollToCurrentMessage();
  }, [messages.length]);

  const renderMessages = () => {
    if (!messages.length) {
      return null;
    }

    return messages.map(
      ({ isClient, message, timestamp, type, operationDetails, stickerIndex }) => {
        switch (type) {
          case 'operation':
            if (operationDetails) {
              return (
                <Operation
                  key={timestamp}
                  isClient={isClient}
                  timestamp={timestamp}
                  operationDetails={operationDetails}
                  type={type}
                />
              );
            }
          case 'message':
            return (
              <Message
                key={timestamp}
                isClient={isClient}
                message={message}
                timestamp={timestamp}
                type={type}
              />
            );
          case 'sticker':
            return (
              <StickerMessageWrapper key={timestamp} isClient={isClient}>
                <img src={`/assets/img/stickers/pepe_frog${stickerIndex}.png`} />
              </StickerMessageWrapper>
            );
          default:
            return null;
        }
      }
    );
  };

  return (
    <Wrapper ref={historyRef}>
      {renderMessages()}
    </Wrapper>
    );
};

export default connect(({ chat }) => ({
  messages: chat.messages
}))(ChatHistory);
