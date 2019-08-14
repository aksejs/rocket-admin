import * as React from 'react';
import { Wrapper, StyledForm, StyledInput, SendButton } from './styles';

import SendIcon from '@assets/svg/ico-send.svg';

interface IState {
	value: string;
}

export default class ChatForm extends React.Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleSumbit = (event: any) => {
		event.preventDefault();
		this.props.sendMessage({
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
					<StyledInput
						type="text"
						value={this.state.value}
						onChange={this.handleChangeValue}
						placeholder="Введите сообщение..."
					/>
					<SendButton onClick={this.handleSumbit}>
						<SendIcon />
					</SendButton>
				</StyledForm>
			</Wrapper>
		);
	}
}
