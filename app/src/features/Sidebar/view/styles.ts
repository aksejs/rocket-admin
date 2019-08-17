import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 32%;
    height: 100vh;
    overflow: scroll;
    min-width: 400;
    padding: 60px 60px;
    background-color: ${({ theme }) => theme.white_smoke(1)}
`;

export const Tabs = styled.div`
    display: flex;
    margin-bottom: 30px;
    font-size: 24px;
`;

export const Tab = styled(NavLink)`
    margin-right: 30px;
    color: ${({ theme }) => theme.spanish_gray(1)};
    cursor: default;
    &.active {
        color: ${({ theme }) => theme.dark};
        cursor: pointer;
    }
`;