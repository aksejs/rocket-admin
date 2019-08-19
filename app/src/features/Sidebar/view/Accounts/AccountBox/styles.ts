import styled from 'styled-components';
import IconAccount from '@assets/svg/pic-account-1.svg';
import IconExpand from '@assets/svg/ico-disclosure.svg';

export const Wrapper = styled.div`
    display: flex;
    margin: 30px 0;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
`;

export const AccountNumber = styled.p`
    font-size: 14px;
    margin: 0 0 5px 0;
`;

export const Amount = styled.p`
    font-size: 14px;
    font-family: SFUIDisplay-Bold;
`;

export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

export const DescriptionText = styled.div`
    font-size: 14px;
    color: #b2b2b2;
    line-height: 1.29;
`;

export const StyledAmount = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.dark};
`;

export const StyledIcon = styled(IconAccount)`
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);
    margin: 0 20px 0 0;
`; 

export const StyledExpand = styled(IconExpand)`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;