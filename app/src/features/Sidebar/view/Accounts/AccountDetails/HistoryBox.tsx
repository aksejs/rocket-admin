import * as React from 'react';
import { connect } from 'react-redux';
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

interface HistoryBoxProps extends HistoryDetail {
  socket?:any
}

const HistoryBox: React.FC<HistoryBoxProps> = ({ 
    amount, 
    carriedOut, 
    name, 
    positive,
    operationCode,
    socket 
}) => {
  const lastCarriedOutDate = convertUnixTime(carriedOut);
  const handleSendMessage = () => {
    socket.emit('MESSAGE_TO_SERVER', {
      isClient: false,
      message: amount,
      timeStamp: new Date().getTime() / 1000 | 0,
      type: "operation",
      operationDetails: {
        name: name,
        positive: positive,
        amount: amount,
        operationCode: operationCode
      }
    })
  }
  return (
    <HistoryBoxWrapper>
      <BoxContentWrapper>
        <CompanyLogo src={`../../assets/img/company-logos/merchant-${operationCode}@2x.png`}/>
        <BoxDescription>
            <p>{name}</p>
            <DescriptionText>{lastCarriedOutDate}</DescriptionText>
        </BoxDescription>
      </BoxContentWrapper>
      <Amount>{positive ? '+' : '-'}{amount} ₽</Amount>
      <ChatIcon onClick={handleSendMessage} />
    </HistoryBoxWrapper>
  );
};

export default connect((state) => ({
  socket: state.frontState.socket
}))(HistoryBox);