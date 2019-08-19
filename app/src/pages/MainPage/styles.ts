import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    font-size: 48px;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
`;

export const StyledButton = styled.button`
    border-radius: 2px;
    background-color: ${({ theme }) => theme.jet(1)};
    color: #f2f2f2;
    border: none;
    width:  100px;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
`;