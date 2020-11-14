import styled from 'styled-components';

interface MessageProps {
    isShow: boolean,
    theme?: any
};

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
    position: relative;
    & svg:nth-child(n) {
        margin: 0 10px;
        cursor: pointer;
    }

    & :nth-child(1) {
        margin-left: 0!important;
    }
`;

export const StickersPlateWrapper = styled.div`
    display: ${({ isShow }: MessageProps) => isShow ? 'block' : 'none'};
    transition: display 0.5s ease;
    position: absolute;
    background-color: rgba(246,246,246,1);
    top: -212px;
    left: 0;
    width: 260px;
    padding: 10px;
    height: 205px;
    border-radius: 6px;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);
`;

export const StyledSticker = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
`;
