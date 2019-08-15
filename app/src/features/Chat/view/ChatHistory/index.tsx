import * as React from 'react';
import { Wrapper } from './styles';
import Message from './Message';
import Operation from './Operation';
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
        return messages.map(({ isClient, message, timestamp, type, operationDetails }) => {
            if (type === "operation" && operationDetails) {
                return (
                    <Operation
                        key={timestamp}
                        isClient={isClient}
                        timestamp={timestamp}
                        operationDetails={operationDetails}
                        type={type}
                    />
                )
            } else {
                return (
                    <Message 
                        key={timestamp}
                        isClient={isClient} 
                        message={message} 
                        timestamp={timestamp}
                        type={type}
                    />
                )
            }
        })
    }

    render() {
        return (
            <Wrapper>
                { this.renderMessages() }
            </Wrapper>
        )
    }
};