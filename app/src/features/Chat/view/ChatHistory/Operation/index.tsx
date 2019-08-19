import * as React from 'react';
import { OperationBoxProps } from '@features/Chat/types';
import { 
	Wrapper, 
	MessageBox, 
	StyledSeenIcon, 
	CompanyLogo, 
	Amount, 
	Cashback 
} from './styles';

const OperationMessage: React.FC<OperationBoxProps> = ({
  isClient,
  timestamp,
  operationDetails: { amount, positive, name, operationCode }
}) => {
  const roundedAmount = Math.round(amount);
  const rocketCashback = Math.round(roundedAmount / 100);
  return (
    <Wrapper key={timestamp}>
      <MessageBox isClient={isClient}>
        <CompanyLogo src={`/assets/img/company-logos/merchant-${operationCode}@2x.png`} />
        <p>{name}</p>
        <Amount>
          {positive ? '+' : '-'}
          {roundedAmount} ₽
        </Amount>
        <Cashback>+{rocketCashback} рокетрублей</Cashback>
        {!isClient && <StyledSeenIcon />}
      </MessageBox>
    </Wrapper>
  );
};

export default OperationMessage;
