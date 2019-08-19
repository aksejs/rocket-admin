import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getDepositsList, getAccountsList } from '@api/requests';
import { setDeposits, setAccounts } from '@features/Sidebar/controllers/actions';
import { CHAT_ACCOUNTS_PATH } from 'app/utils/constants';
import { Wrapper, Tabs, Tab } from './styles';

import AccountBox from './Accounts/AccountBox';
import AccountDetails from './Accounts/AccountDetails';

const SidebarView: React.FC<any> = ({ 
  pathname, 
  dispatch, 
  accounts = [] 
}) => {
  const renderTabs = () => {
    return (
      <Tabs>
        <Tab strict to="/chat/accounts">
          Счета
        </Tab>
        <Tab to="/chat/deposits">Вклады</Tab>
      </Tabs>
    );
  };

  const renderAccountsList = () => {
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

  React.useEffect(() => {
    getDepositsList().then(({ data: { deposits } }) => dispatch(setDeposits(deposits)));
    getAccountsList().then(({ data: { accounts } }) => dispatch(setAccounts(accounts)));
  }, []);

  return (
    <Wrapper>
      {pathname.length <= CHAT_ACCOUNTS_PATH.length && renderTabs()}
      <Switch>
        <Route path="/chat/accounts/:productId" component={AccountDetails} />
        <Route path="/chat/accounts/" render={renderAccountsList} />

        {/* <Route path="/chat/deposits/:productId" render={renderDepositDetails} />
        <Route path="/chat/deposits/" render={renderDeposits} /> */}

        <Redirect from="*" to="/chat/" />
      </Switch>
    </Wrapper>
  );
};

export default connect(({ controlPanel, router }) => ({
  accounts: controlPanel.accounts,
  deposits: controlPanel.deposits,
  pathname: router.location.pathname
}))(SidebarView);
