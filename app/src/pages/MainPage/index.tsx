import * as React from 'react';
import { Wrapper, StyledButton } from './styles';

const MainPage: React.FC<any> = ({ history }) => (
    <Wrapper>
        Рокетбанк🚀
        <StyledButton onClick={() => history.push('/chat')}>
            Перейти
        </StyledButton>
    </Wrapper>
);

export default MainPage;