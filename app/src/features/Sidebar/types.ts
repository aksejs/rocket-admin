export interface Deposit {
    balance: {
        current: number,
        init: number
    },
    created: number,
    currency: string,
    number: number,
    passed: number,
    percent: number,
    period: number,
    tick: number

};

export interface LastOperationTypes {
    amount: number
    carriedOut: number
    positive: boolean
    type: string
};

export interface Account {
    balance: number
    created: number
    annual: number
    number: number
    currency: string,
    last_operation?: LastOperationTypes
};

export interface ControlPanelState {
    accounts: Array<string>,
    deposits: Array<Deposit>
};

export enum ControlPannelActionTypes {
    GET_DEPOSITS = '@@CP/GET_DEPOSITS',
    SET_ACCOUNTS = '@@CP/SET_ACCOUNTS'
};

export interface HistoryDetail {
    amount: number
    carriedOut: number
    lastCartNumber: string
    positive: boolean
    type: string
};
export interface GetAccountResponseTypes {
    account: Account,
    history: Array<HistoryDetail>
};