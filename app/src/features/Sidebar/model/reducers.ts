import { Reducer } from 'redux';
import { handleActions } from 'redux-actions';
import { ControlPanelState, ControlPannelActionTypes } from '../types';

const initialState: ControlPanelState = {
  deposits: [],
  accounts: []
}

const reducer: Reducer<ControlPanelState> = handleActions<any, any>({
  [ControlPannelActionTypes.GET_DEPOSITS]: (state, { payload }) => ({ ...state, deposits: payload }),
  [ControlPannelActionTypes.SET_ACCOUNTS]: (state, { payload }) => ({ ...state, accounts: payload })
}, initialState)

export { reducer as controlPanelReducer };