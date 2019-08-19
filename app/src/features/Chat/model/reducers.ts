import { Reducer } from 'redux'
import { ChatState, ChatActionTypes } from '../types'

const initialState: ChatState = {
  messages: []
}

const reducer: Reducer<ChatState> = (state = initialState, action) => {
  switch (action.type) {
    case ChatActionTypes.FETCH_MESSAGES: {
      return { ...state, messages: action.payload }
    }
    case ChatActionTypes.SET_NEW_MESSAGE: {
      return { ...state, messages: [...state.messages, action.payload]}
    }
    default: {
      return state
    }
  }
}

export { reducer as chatReducer };