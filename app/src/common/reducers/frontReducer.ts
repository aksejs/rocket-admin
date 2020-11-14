import { Reducer } from 'redux';
import { handleActions } from 'redux-actions';
import { FronState, FrontStateActionTypes } from '../types';

const initialState: FronState = {
  socket: {},
  scenarioStage: 1
}

const reducer: Reducer<FronState> = handleActions<any, any>({
  [FrontStateActionTypes.SET_SOCKET]: (state, { payload }) => ({ ...state, socket: payload }),
  [FrontStateActionTypes.SET_SCENARIO_ID]: (state, { payload }) => ({ ...state, scenarioStage: payload })
}, initialState)

export { reducer as frontStateReducer };
