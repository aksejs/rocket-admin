import React from 'react';
import io from 'socket.io-client';
// import { History } from 'history';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { setSocket, loadInitialMessages, initializeSockets } from 'app/common/actions';
import routes from './routes';
import { SOCKET_URL } from 'app/utils/constants';

let socket: any;
class App extends React.Component<any> {
  componentDidMount() {
    const { 
      setSocket, 
      loadInitialMessages, 
      initializeSockets,
      chat: { messages }, 
      persist: { rehydrated = false }
    } = this.props;
    
    const isMessagesRehydrated = rehydrated && messages.length;

    socket = io.connect(SOCKET_URL);
    setSocket(socket);
    initializeSockets(socket);
    if (!isMessagesRehydrated) {
      loadInitialMessages(socket);
    };
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  render() {
    return (
      <>
        <ConnectedRouter history={this.props.history}>
          {routes}
        </ConnectedRouter>
      </>
      );
  }
}

export default connect((state) => ({
  persist: state._persist,
  chat: state.chat
}), (dispatch) => ({
  setSocket: (socket:any) => dispatch(setSocket(socket)),
  initializeSockets: (socket: any) => initializeSockets(socket)(dispatch),
  loadInitialMessages: (socket:any) => loadInitialMessages(socket)(dispatch)
}))(App);