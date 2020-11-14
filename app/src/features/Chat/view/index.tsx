import * as React from 'react';
import styled from 'styled-components';

import ChatForm from './ChatForm';
import ChatHistory from './ChatHistory';

const Wrapper = styled.div`
  flex-grow: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ChatView: React.FC = () => (
  <Wrapper>
    <ChatHistory />
    <ChatForm />
  </Wrapper>
);
