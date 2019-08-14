import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.primary_dark(0.98)};
    flex-grow: 1;
    padding: 25px 30px;
    overflow: scroll;
    line-height: 22px;
`;