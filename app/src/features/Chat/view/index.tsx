import * as React from 'react';
import styled from 'styled-components';

import ChatForm from './ChatForm';
import ChatHistory from './ChatHistory';
import { connect } from 'react-redux'

const Wrapper = styled.div`
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
 
class ChatView extends React.Component<any> {
    render() {
        return (
            <Wrapper>
                <ChatHistory 
                    dispatch={this.props.dispatch} 
                    messages={this.props.messages} 
                />
                <ChatForm 
                />
            </Wrapper>
        )
    }
};

export default connect((state) => ({
    messages: state.chat.messages
}))(ChatView)