import * as React from 'react';
import LastOperation from './LastOperation';
import { Link } from 'react-router-dom';
import { Account } from '@features/Sidebar/types';
import { toSpaced, convertUnixTime } from 'app/utils';
import { 
    Wrapper,
    InfoWrapper, 
    AccountNumber,
    Amount,
    DescriptionBlock,
    DescriptionText,
    StyledIcon,
    StyledExpand
} from './styles';

const AccountBox: React.FC<Account> = ({ 
    number, 
    balance, 
    currency,
    annual,
    created,
    last_operation
}) => {
    const spacedBalance = toSpaced(Math.round(balance).toString());
    const createdDate = convertUnixTime(created);
    const isShowLastOperation = last_operation;
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
                    </DescriptionText>
                    {last_operation && 
                        <LastOperation 
                            lastOperation={last_operation} 
                            currency={currency}
                        />
                    }
                </DescriptionBlock>
                { isShowLastOperation && 
                    <Link to={`/chat/accounts/${number}`}>
                        <StyledExpand />
                    </Link>
                }
            </InfoWrapper>
        </Wrapper>
    );
}

export default AccountBox;