import styled from 'styled-components';

interface MessageProps {
    isClient: boolean,
    theme?: any
};

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.primary_dark(0.98)};
    flex-grow: 1;
    padding: 25px 30px;
    overflow: scroll;
    line-height: 22px;
`;

export const StickerMessageWrapper = styled.div`
    display: flex;
    justify-content: ${({ isClient }: MessageProps) => isClient ? 'flex-start' : 'flex-end'};
    & img {
        width: 200px;
        height: 200px;
        margin: 20px 0;
    }
`;