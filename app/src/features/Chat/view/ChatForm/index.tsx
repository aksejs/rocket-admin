import * as React from 'react';
import { connect } from 'react-redux';
import SendIcon from '@assets/svg/ico-send.svg';
import Controlls from './Controlls';
import { Wrapper, StyledForm, StyledInput, SendButton, InputsWrapper } from './styles';

const ChatForm: React.FC<{ socket?: SocketIOClient.Socket }> = ({ socket }) => {
  const [value, setValue] = React.useState<string>('');

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  //todo: Refactor types
  const handleSumbit = (event: any) => {
    event.preventDefault();
    if (socket) {
      socket.emit('MESSAGE_TO_SERVER', {
        isClient: false,
        message: value,
        timestamp: (new Date().getTime() / 1000) | 0,
        type: 'message'
      });
    }
    setValue('');
  };

  return (
    <Wrapper>
      <StyledForm>
        <InputsWrapper>
          <Controlls />
          <StyledInput
            type="text"
            value={value}
            onChange={handleChangeValue}
            placeholder="Введите сообщение..."
          />
        </InputsWrapper>
        <SendButton onClick={handleSumbit}>
          <SendIcon />
        </SendButton>
      </StyledForm>
    </Wrapper>
  );
};

export default connect(({ frontState }) => ({
  socket: frontState.socket
}))(ChatForm);
