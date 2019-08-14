import * as React from 'react';
import { Account } from '@features/Sidebar/types';
import { toSpaced, convertUnixTime } from 'app/utils';
import { 
    Wrapper,
    InfoWrapper, 
    AccountNumber,
    Amount,
    DescriptionBlock,
    DescriptionText,
    StyledAmount,
    StyledIcon
} from './styles';

const AccountBox: React.FC<Account> = ({ 
    number, 
    balance, 
    currency,
    annual,
    created,
    last_operation: {
        carriedOut,
        amount,
        positive
    }
}) => {
    const spacedBalance = toSpaced(Math.round(balance).toString());
    const spacedAmount = toSpaced(Math.round(amount).toString());
    const createdDate = convertUnixTime(created);
    const lastCarriedOutDate = convertUnixTime(carriedOut);
    return (
        <Wrapper>
            <StyledIcon />
            <InfoWrapper>
                <AccountNumber>
                    Счет № {number}
                </AccountNumber>
                <Amount>{spacedBalance} {currency}</Amount>
                <DescriptionBlock>
                    <DescriptionText>
                        {annual}% годовых<br/>
                        Создан: {createdDate}<br/>
                        Последняя операция:<br/>
                        {lastCarriedOutDate} (<StyledAmount>{positive ? '+' : '-'} {spacedAmount} {currency}</StyledAmount>)
                    </DescriptionText>
                </DescriptionBlock>
            </InfoWrapper>
        </Wrapper>
    );
}

export default AccountBox;