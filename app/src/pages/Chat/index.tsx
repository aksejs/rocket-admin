import * as React from 'react';
import ChatView from '@features/Chat/view';
import SideBarView from '@features/Sidebar/view';
import { Wrapper } from './styles';

const ChatPage: React.FC<any> = (props) => {
  return (
    <Wrapper>
      <ChatView />
      <SideBarView />
    </Wrapper>
  );
};

export default ChatPage;