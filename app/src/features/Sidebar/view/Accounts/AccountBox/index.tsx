import * as React from 'react';
import LastOperation from './LastOperation';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { toSpaced, convertUnixTime } from '@utils/helpers';
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

const AccountBox: React.FC<any> = ({ 
    number, 
    balance, 
    currency,
    annual,
    created,
    last_operation,
    push
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
                    <StyledExpand onClick={() => push(`/chat/accounts/${number}`)} />
                }
            </InfoWrapper>
        </Wrapper>
    );
}

export default connect(null, { push })(AccountBox);