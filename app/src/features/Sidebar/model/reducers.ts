import { Reducer } from 'redux'
import { ControlPanelState, ControlPannelActionTypes } from '../types'

const initialState: ControlPanelState = {
  deposits: [],
  accounts: []
}

const reducer: Reducer<ControlPanelState> = (state = initialState, action) => {
  switch (action.type) {
    case ControlPannelActionTypes.GET_DEPOSITS: {
      return { ...state, deposits: action.payload }
    }
    case ControlPannelActionTypes.SET_ACCOUNTS: {
      return { ...state, accounts: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as controlPanelReducer };