import * as React from 'react';
import styled from 'styled-components';

import ChatForm from './ChatForm';
import ChatHistory from './ChatHistory';
import { connect } from 'react-redux'
import { setMessages, getNewMessage } from '@features/Chat/actions';
import io from 'socket.io-client';
import { MessageType } from '../types';

const Wrapper = styled.div`
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
 
class ChatView extends React.Component<any> {
    static socket = io.connect('http://localhost:8081');
    
    initSocketConnection = () => {
        ChatView.socket.on('connect', () => {
            ChatView.socket.emit('msg history');
        });
    
        ChatView.socket.on('msg history', ({ messages }: any) => {
          this.props.dispatch(setMessages(messages));
        });
        ChatView.socket.on('msg to client', (message: any) => {
          this.props.dispatch(getNewMessage(message));
        });
    };

    componentDidMount() {
        this.initSocketConnection();
    };

    sendMessage = (messageText: MessageType) => {
        ChatView.socket.emit('message to server', messageText);
    };

    render() {
        return (
            <Wrapper>
                <ChatHistory 
                    dispatch={this.props.dispatch} 
                    messages={this.props.messages} 
                />
                <ChatForm 
                    sendMessage={this.sendMessage}
                />
            </Wrapper>
        )
    }
};

export default connect((state) => ({
    messages: state.chat.messages
}))(ChatView)