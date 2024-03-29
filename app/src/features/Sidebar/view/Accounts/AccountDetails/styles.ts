import styled from 'styled-components';
import { DescriptionText } from '../AccountBox/styles';
import IconChat from '@assets/svg/ico-chat.svg';

export { Amount, DescriptionText } from '../AccountBox/styles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CurrentAccountWrapper = styled.div`
    display: flex;
    & > div {
        margin: 0;
    }
`;

export const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
`;

export const ChatIcon = styled(IconChat)`
    display: none;
    transition: display 0.5s ease;
    position: absolute;
    top: 10px;
    right: 5px; 
`;

export const HistoryBoxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 40px 15px 15px;
    margin-left: -15px;
    width: 27vw;
    transition: background-color 0.5s ease;
    cursor: default;
    position: relative;
    &:hover {
        background-color: #e9e9e9;
        border-radius: 6px;
    }
    &:hover ${ChatIcon} {
        display: block;
        cursor: pointer;
    }
`;

export const BoxDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoxContentWrapper = styled.div`
    display: flex;
`;

export const CompanyLogo = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const HistoryTitle = styled(DescriptionText)`
    margin: 30px 0;
`;

export const CircledIcon = styled.div`
    position: absolute;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
`;