import * as React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { setSocket, loadInitialMessages, initializeSockets, sendScenarioId } from '@common/actions';
import { SOCKET_URL } from '@utils/constants';
import { ChatView } from '@features/Chat';
import { MessageType } from '@features/Chat/types';
import SideBarView from '@features/Sidebar/view';

import { Wrapper } from './styles';

let socket: SocketIOClient.Socket;
class ChatPage extends React.Component<any> {
  componentDidMount() {
    const {
      setSocket,
      loadInitialMessages,
      initializeSockets,
      sendScenarioId,
      chat: { messages },
      persist: { rehydrated = false }
    } = this.props;

    const isMessagesRehydrated = rehydrated && messages.length;

    socket = io.connect(SOCKET_URL);
    setSocket(socket);
    initializeSockets(socket);
    if (!isMessagesRehydrated) {
      loadInitialMessages(socket);
    }
    sendScenarioId(socket, messages);
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  render() {
    return (
      <Wrapper>
        <ChatView />
        <SideBarView />
      </Wrapper>
    );
  }
}

export default connect(
  (state) => ({
    persist: state._persist,
    chat: state.chat
  }),
  (dispatch) => ({
    setSocket: (socket: SocketIOClient.Socket) => dispatch(setSocket(socket)),
    initializeSockets: (socket: SocketIOClient.Socket) => initializeSockets(socket)(dispatch),
    loadInitialMessages: (socket: SocketIOClient.Socket) => loadInitialMessages(socket)(dispatch),
    sendScenarioId: (socket: SocketIOClient.Socket, messages: Array<MessageType>) => sendScenarioId(socket, messages)(dispatch)
  })
)(ChatPage);
