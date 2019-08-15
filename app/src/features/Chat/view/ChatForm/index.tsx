import * as React from 'react';
import Controlls from './Controlls';
import { Wrapper, StyledForm, StyledInput, SendButton, InputsWrapper } from './styles';

import SendIcon from '@assets/svg/ico-send.svg';
import { connect } from 'react-redux';


interface IState {
	value: string;
}

class ChatForm extends React.Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleSumbit = (event: any) => {
		event.preventDefault();
		const { socket } = this.props;
		socket.emit('message to server', {
			isClient: false,
			message: this.state.value,
			timestamp: new Date().getTime() / 1000 | 0
		})
		this.setState({ value: '' });
	};

	handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<Wrapper>
				<StyledForm>
					<InputsWrapper>
						<Controlls />
						<StyledInput
							type="text"
							value={this.state.value}
							onChange={this.handleChangeValue}
							placeholder="Введите сообщение..."
						/>
					</InputsWrapper>
					<SendButton onClick={this.handleSumbit}>
						<SendIcon />
					</SendButton>
				</StyledForm>
			</Wrapper>
		);
	}
}

export default connect((state) => ({
	socket: state.frontState.socket
}))(ChatForm)