import * as React from 'react';
import { Wrapper, MessageBox, StyledSeenIcon, ClientName } from './styles';
import { MessageType } from '@features/Chat/types';

const ChatMessage: React.FC<MessageType> = ({ isClient, message, timestamp }) => (
	<Wrapper key={timestamp} >
		{isClient && <ClientName>Серёжа</ClientName>}
		<MessageBox isClient={isClient}>
			{message}
			{!isClient && <StyledSeenIcon />}
		</MessageBox>
	</Wrapper>
);

export default ChatMessage;
