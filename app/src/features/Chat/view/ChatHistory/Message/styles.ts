import styled from 'styled-components';
import SeenIcon from '@assets/svg/ico-seen.svg';

interface MessageProps {
    isClient: boolean,
    theme?: any
};

export const MessageBox = styled.div`
    width: 249px;
    margin: 5px 0;
    border-radius: 10px;
    background-color: ${({ theme, isClient }: MessageProps) => isClient ? theme.white_smoke(1) : theme.dark};
    color: ${({ theme, isClient }: MessageProps) => isClient ? theme.black(1) : theme.white(1)};
    align-self: ${({ isClient }: MessageProps) => isClient ? 'flex-start': 'flex-end'};
    padding: 8px 15px;
    position: relative;  
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const StyledSeenIcon = styled(SeenIcon)`
    position: absolute;
    bottom: 7px;
    right: 7px;
`;