import * as React from 'react';
import { connect } from 'react-redux';
import { Wrapper, StickerMessageWrapper } from './styles';
import Message from './Message';
import Operation from './Operation';
import { MessageType } from '../../types';

class ChatHistory extends React.Component<any> {
  private historyRef = React.createRef<HTMLDivElement>();
  constructor(props: any) {
    super(props);
    this.state = {
      messages: [{ isClient: false, message: 'Hello' }, { isClient: true, message: 'Hi' }]
    };
  }

  scrollToCurrentMessage = () => {
    if (this.historyRef.current) {
      this.historyRef.current.scrollTop = this.historyRef.current.scrollHeight;
    }
  };

  componentDidMount = () => {
    this.scrollToCurrentMessage();
  };

  componentDidUpdate = (prevProps: any) => {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.scrollToCurrentMessage();
    }
  };

  renderMessages = () => {
    const messages: MessageType[] = this.props.messages;

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
              <StickerMessageWrapper isClient={isClient}>
                <img
                  src={`http://localhost:4000/assets/img/stickers/pepe_frog${stickerIndex}.png`}
                />
              </StickerMessageWrapper>
            );
          default:
            return null;
        }
      }
    );
  };

  render() {
    return (
        <Wrapper ref={this.historyRef}>
            {this.renderMessages()}
        </Wrapper>
    );
  }
}

export default connect(({ chat }) => ({
  messages: chat.messages
}))(ChatHistory);
