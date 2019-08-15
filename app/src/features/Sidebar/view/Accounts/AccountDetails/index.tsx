import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getAccount } from '@api/requests';
import { Account, HistoryDetail } from '@features/Sidebar/types';
import AccountBox from '../AccountBox';
import HistoryBox from './HistoryBox';
import { Wrapper, CurrentAccountWrapper, HistoryWrapper, HistoryTitle } from './styles';

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
        <Wrapper>
          <CurrentAccountWrapper>
            <AccountBox {...account} />
          </CurrentAccountWrapper>
          <HistoryWrapper>
              <HistoryTitle>История операций</HistoryTitle>
              {history.map((historyDetail: HistoryDetail) => (
                  <HistoryBox {...historyDetail}/>
              ))}
          </HistoryWrapper>
        </Wrapper>
      );
    }
    return <div>Error</div>
  };
  render() {
    const { isLoaded } = this.state;
    return <Wrapper>{isLoaded ? this.renderAccountDetail() : <div>Loading...</div>}</Wrapper>;
  }
}

export default AccountDetails;
