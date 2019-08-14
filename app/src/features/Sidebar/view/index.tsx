import * as React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Tabs, Tab } from './styles';
import { getDepositsList, getAccountsList } from 'app/utils/requests';
import { setDeposits, setAccounts } from '@features/Sidebar/actions';
import AccountBox from './AccountBox';

class SidebarView extends React.Component<any> {

    componentDidMount = () => {
        getDepositsList()
            .then(({ data: { deposits } }) => this.props.dispatch(setDeposits(deposits)))

        getAccountsList()
            .then(({ data: { accounts } }) => this.props.dispatch(setAccounts(accounts)))
    }

    renderAccountsList = () => {
        const { accounts } = this.props;

        if (!accounts.length) {
            return null
        }

        return accounts.map(({ 
            number, 
            balance, 
            currency, 
            annual, 
            created, 
            last_operation }: any) => (
                <AccountBox 
                    key={number}
                    number={number} 
                    balance={balance}
                    currency={currency}
                    annual={annual}
                    created={created} 
                    last_operation={last_operation} />)
        );
    }

    render() {
        return (
            <Wrapper>
                <Tabs>
                    <Tab to="/chat/accounts/">Счета</Tab>
                    <Tab to="/">Вклады</Tab>
                </Tabs>
                {this.renderAccountsList()}
            </Wrapper>
        )
    }
};

export default connect(({ controlPanel }) => ({
    accounts: controlPanel.accounts,
    deposits: controlPanel.deposits
}))(SidebarView);