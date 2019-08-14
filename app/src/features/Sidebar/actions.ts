import { action } from 'typesafe-actions';
import { ControlPannelActionTypes, Deposit, Account } from './types';


export const setDeposits = (data: Deposit[]) => action(ControlPannelActionTypes.GET_DEPOSITS, data);
export const setAccounts = (data: Account[]) => action(ControlPannelActionTypes.SET_ACCOUNTS, data);