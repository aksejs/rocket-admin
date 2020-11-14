import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.dark};
    height: 100px;
    padding: 16px 19px 21px 30px;
    display: flex;
`;

export const StyledForm = styled.form`
    margin-top: auto;
    width: 100%;
    justify-content: space-between;
    align-self: flex-end;
    display: flex;
`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    border: none;
    background: none;
    color: #fafafa;
    font-size: 16px;

    &::placeholder {
        color: rgba(101, 101, 101, 0.95);
        opacity: 1; 
        transition: opacity 0.3s ease;
    }
    &:focus::placeholder {
        opacity: 0;
    }
`;

export const SendButton = styled.button`
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    padding: 0;
    cursor: pointer;
    align-self: flex-end;
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
