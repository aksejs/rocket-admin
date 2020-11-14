import styled from 'styled-components';
import SeenIcon from '@assets/svg/ico-seen.svg';

interface MessageProps {
    isClient: boolean,
    theme?: any
};

export const MessageBox = styled.div`
    display: flex;
    width: 249px;
    margin: 5px 0;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-color: ${({ theme, isClient }: MessageProps) => isClient ? theme.white_smoke(1) : theme.dark};
    color: ${({ theme, isClient }: MessageProps) => isClient ? theme.black(1) : theme.white(1)};
    align-self: ${({ isClient }: MessageProps) => isClient ? 'flex-start': 'flex-end'};
    padding: 20px 15px;
    position: relative;  
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

export const StyledSeenIcon = styled(SeenIcon)`
    position: absolute;
    bottom: 7px;
    right: 7px;
`;

export const CompanyLogo = styled.img`
    margin-bottom: 15px;
`;

export const Amount = styled.div`
    font-weight: bold;
    font-size: 26px;
    margin: 10px 0;
`;

export const Cashback = styled.div`
    color: #b2b2b2;
    font-size: 14px;
`;
