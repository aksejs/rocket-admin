import * as React from 'react';
import { Wrapper } from './styles';
import Message from './Message';
import { MessageType } from '../../types';
 
export default class ChatHistory extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {
            messages: [
                {isClient: false, message: 'Hello'},
                {isClient: true, message: 'Hi'}
            ]
        }
    }

    renderMessages = () => {
        const messages: MessageType[] = this.props.messages;
        if (!messages.length) {
            return null
        }
        return messages.map(({ isClient, message, timestamp }) => (
            <Message 
                key={timestamp}
                isClient={isClient} 
                message={message} 
                timestamp={timestamp}
            />
        ))
    }

    render() {
        return (
            <Wrapper>
                { this.renderMessages() }
            </Wrapper>
        )
    }
};