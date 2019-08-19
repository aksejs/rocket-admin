import { Reducer } from 'redux';
import { FronState, FrontStateActionTypes } from '../types';

const initialState: FronState = {
  socket: {},
  scenarioStage: 1
}

const reducer: Reducer<FronState> = (state = initialState, action) => {
  switch (action.type) {
    case FrontStateActionTypes.SET_SOCKET: {
      return { ...state, socket: action.payload }
    }
    case FrontStateActionTypes.SET_SCENARIO_ID: {
      return { ...state, scenarioStage: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as frontStateReducer };