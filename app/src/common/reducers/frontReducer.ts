import { Reducer } from 'redux'
import { FronState, FrontStateActionTypes } from '../types'

const initialState: FronState = {
  socket: {}
}

const reducer: Reducer<FronState> = (state = initialState, action) => {
  switch (action.type) {
    case FrontStateActionTypes.SET_SOCKET: {
      return { ...state, socket: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as frontStateReducer };