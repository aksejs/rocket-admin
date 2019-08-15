import * as React from 'react';
import { convertUnixTime } from 'app/utils';
import { HistoryDetail } from '@features/Sidebar/types';
import { 
    HistoryBoxWrapper, 
    BoxDescription, 
    Amount, 
    DescriptionText,
    BoxContentWrapper,
    CompanyLogo,
    ChatIcon
} from './styles';

const HistoryBox: React.FC<HistoryDetail> = ({ 
    amount, 
    carriedOut, 
    type, 
    positive 
}) => {
  const lastCarriedOutDate = convertUnixTime(carriedOut);
  return (
    <HistoryBoxWrapper>
      <BoxContentWrapper>
        <CompanyLogo src="../../assets/img/company-logos/merchant-dixi@2x.png"/>
        <BoxDescription>
            <p>{type}</p>
            <DescriptionText>{lastCarriedOutDate}</DescriptionText>
        </BoxDescription>
      </BoxContentWrapper>
      <Amount>{positive ? '+' : '-'}{amount} ₽</Amount>
      <ChatIcon />
    </HistoryBoxWrapper>
  );
};

export default HistoryBox;