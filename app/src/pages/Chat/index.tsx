import * as React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { setSocket, loadInitialMessages, initializeSockets, sendScenarioId } from '@common/actions';
import { SOCKET_URL } from '@utils/constants';
import { ChatView } from '@features/Chat';
import { MessageType } from '@features/Chat/types';
import SideBarView from '@features/Sidebar/view';

import { Wrapper } from './styles';

const ChatPage: React.FC<any> = ({
  setSocket,
  initializeSockets,
  loadInitialMessages,
  sendScenarioId,
  persist: {
    rehydrated = false
  }, 
  chat: {
    messages
  }
}) => {
  const [socket, ] = React.useState<SocketIOClient.Socket>(io.connect(SOCKET_URL));

  //todo: Переписать в кастомный хук useSocket()
  React.useEffect(() => {
    const isMessagesRehydrated = rehydrated && messages.length;
    setSocket(socket);
    initializeSockets(socket);
    if (!isMessagesRehydrated) {
      loadInitialMessages(socket);
    }
    sendScenarioId(socket, messages);

    return () => {
      socket.disconnect();
    }
  }, [])

  return (
    <Wrapper>
         <ChatView />
         <SideBarView />
    </Wrapper>
  )
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
