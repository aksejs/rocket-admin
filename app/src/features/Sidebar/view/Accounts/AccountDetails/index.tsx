import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getAccount } from '@api/requests';
import { Account, HistoryDetail } from '@features/Sidebar/types';
import { sortByDate } from '@utils/helpers';
import IconCross from '@assets/svg/ico-cross.svg';
import AccountBox from '../AccountBox';
import HistoryBox from './HistoryBox';
import Loader from './Loader';
import {
  Wrapper,
  CurrentAccountWrapper,
  HistoryWrapper,
  HistoryTitle,
  CircledIcon
} from './styles';

interface MatchParams {
  productId: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

interface initialState {
  account: Account | {},
  history: HistoryDetail[] | []
};

const AccountDetails: React.FC<MatchProps> = ({ 
  match: { params }, 
  history: { push }
}) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [data, setData] = React.useState<initialState>({
    account: {},
    history: []
  });
  React.useEffect(() => {
    if (params.productId) {
      getAccount({ clientId: 1, productId: +params.productId, getAccount: true }).then(
        ({ data }) => {
          setData(data);
          setIsLoaded(true);
        });
    }
  }, [])
  const renderAccountDetail = () => {
    const { account, history } = data;
    if (account && history.length) {
      return (
        <>
          <CurrentAccountWrapper>
            <AccountBox {...account} />
            <CircledIcon onClick={() => push('/chat/accounts/')}>
              <IconCross />
            </CircledIcon>
          </CurrentAccountWrapper>
          <HistoryWrapper>
            <HistoryTitle>История операций</HistoryTitle>
            {sortByDate(history).map((historyDetail: HistoryDetail) => (
              <HistoryBox key={historyDetail.carriedOut} {...historyDetail} />
            ))}
          </HistoryWrapper>
        </>
      );
    }
    return <div>Error</div>;
  };
  return <Wrapper>{isLoaded ? renderAccountDetail() : <Loader />}</Wrapper>;
}

export default AccountDetails;
