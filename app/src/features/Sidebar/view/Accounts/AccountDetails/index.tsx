import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getAccount } from '@api/requests';
import { Account, HistoryDetail } from '@features/Sidebar/types';
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

interface IState {
  isLoaded: boolean;
  account?: Account;
  history?: HistoryDetail[];
}

class AccountDetails extends React.Component<MatchProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params.productId) {
      getAccount({ clientId: 1, productId: +params.productId, getAccount: true }).then(
        ({ data }) => {
          this.setState({
            account: data.account,
            history: data.history,
            isLoaded: true
          });
        }
      );
    }
  }

  renderAccountDetail = () => {
    const { account, history } = this.state;
    if (account && history) {
      return (
        <>
          <CurrentAccountWrapper>
            <AccountBox {...account} />
            <CircledIcon onClick={() => this.props.history.push('/chat/accounts/')}>
              <IconCross />
            </CircledIcon>
          </CurrentAccountWrapper>
          <HistoryWrapper>
            <HistoryTitle>История операций</HistoryTitle>
            {history.map((historyDetail: HistoryDetail) => (
              <HistoryBox key={historyDetail.carriedOut} {...historyDetail} />
            ))}
          </HistoryWrapper>
        </>
      );
    }
    return <div>Error</div>;
  };
  render() {
    const { isLoaded } = this.state;
    return <Wrapper>{isLoaded ? this.renderAccountDetail() : <Loader />}</Wrapper>;
  }
}

export default AccountDetails;
