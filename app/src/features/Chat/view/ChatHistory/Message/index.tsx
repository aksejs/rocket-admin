import * as React from 'react';
import { MessageType } from '@features/Chat/types';
import { 
	Wrapper, 
	MessageBox, 
	StyledSeenIcon, 
	ClientName 
} from './styles';

const ChatMessage: React.FC<MessageType> = ({ isClient, message, timestamp }) => (
  <Wrapper key={timestamp}>
    {isClient && <ClientName>Серёжа</ClientName>}
    <MessageBox isClient={isClient}>
      {message}
      {!isClient && <StyledSeenIcon />}
    </MessageBox>
  </Wrapper>
);

export default ChatMessage;
