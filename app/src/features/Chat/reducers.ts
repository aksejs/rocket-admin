// ./src/store/heroes/reducer.ts

import { Reducer } from 'redux'
import { ChatState, ChatActionTypes } from './types'

// Type-safe initialState!
const initialState: ChatState = {
  messages: []
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
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

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as chatReducer }