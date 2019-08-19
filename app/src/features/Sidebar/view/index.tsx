import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AccountBox from './Accounts/AccountBox';
import AccountDetails from './Accounts/AccountDetails';
import { Wrapper, Tabs, Tab } from './styles';
import { getDepositsList, getAccountsList } from '@api/requests';
import { setDeposits, setAccounts } from '@features/Sidebar/controllers/actions';
import { CHAT_ACCOUNTS_PATH } from 'app/utils/constants';

class SidebarView extends React.Component<any> {
  
  componentDidMount = () => {
    getDepositsList().then(({ data: { deposits } }) => this.props.dispatch(setDeposits(deposits)));

    getAccountsList().then(({ data: { accounts } }) => this.props.dispatch(setAccounts(accounts)));
  };

  renderTabs = () => {
    return (
      <Tabs>
        <Tab strict to="/chat/accounts">Счета</Tab>
        <Tab to="/chat/deposits">Вклады</Tab>
      </Tabs>
    );
  };

  renderAccountsList = () => {
    const { accounts } = this.props;

    if (!accounts.length) {
      return null;
    }

    return accounts.map(({ number, balance, currency, annual, created, last_operation }: any) => (
      <AccountBox
        key={number}
        number={number}
        balance={balance}
        currency={currency}
        annual={annual}
        created={created}
        last_operation={last_operation}
      />
    ));
  };

  render() {
    return (
      <Wrapper>
        {(this.props.pathname.length <= CHAT_ACCOUNTS_PATH.length) && this.renderTabs()}
        <Switch>
          <Route path="/chat/accounts/:productId" component={AccountDetails} />
          <Route path="/chat/accounts/" render={this.renderAccountsList} />

          {/* <Route path="/chat/deposits/:productId" render={this.renderDepositDetails} />
          <Route path="/chat/deposits/" render={this.renderDeposits} /> */}

          <Redirect from="*" to="/chat/" />
        </Switch>
      </Wrapper>
    );
  }
}

export default connect((state) => ({
  accounts: state.controlPanel.accounts,
  deposits: state.controlPanel.deposits,
  pathname: state.router.location.pathname
}))(SidebarView);
