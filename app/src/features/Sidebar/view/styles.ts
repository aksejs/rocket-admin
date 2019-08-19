import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 32%;
    height: 100vh;
    overflow: scroll;
    min-width: 400px;
    padding: 60px;
    background-color: ${({ theme }) => theme.white_smoke(1)};
    position: relative;
`;

export const Tabs = styled.div`
    display: flex;
    font-size: 24px;
    font-family: SFUIDisplay-Bold;
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