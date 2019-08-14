import * as React from 'react';
import { Wrapper, MessageBox, StyledSeenIcon } from './styles';
import { MessageType } from '@features/Chat/types';

const ChatMessage: React.FC<MessageType> = ({ isClient, message, timestamp }) => (
	<Wrapper>
		{isClient && <p>Admin</p>}
		<MessageBox isClient={isClient}>
			{message}
			{!isClient && <StyledSeenIcon />}
		</MessageBox>
	</Wrapper>
);

export default ChatMessage;
