import * as React from 'react';
import { LastOperationTypes } from '@features/Sidebar/types';
import { toSpaced, convertUnixTime } from 'app/utils';
import { DescriptionText, StyledAmount } from './styles';

const LastOperation: React.FC<{
  lastOperation: LastOperationTypes,
  currency: string
}> = ({
    lastOperation: {
        carriedOut,
        amount,
        positive
    },
    currency
}) => {
  const spacedAmount = toSpaced(Math.round(amount).toString());
  const lastCarriedOutDate = convertUnixTime(carriedOut);
  return (
    <DescriptionText>
      Последняя операция:
      <br />
      {lastCarriedOutDate} (
      <StyledAmount>
        {positive ? '+' : '-'} {spacedAmount} {currency}
      </StyledAmount>
      )
    </DescriptionText>
  );
};

export default LastOperation;
