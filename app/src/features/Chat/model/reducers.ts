import { Reducer } from 'redux'
import { handleActions } from 'redux-actions';
import { ChatState, ChatActionTypes } from '../types'

const initialState: ChatState = {
  messages: []
}

const reducer: Reducer<ChatState> = handleActions<any, any>({
  [ChatActionTypes.FETCH_MESSAGES]: (state, { payload }) => ({ ...state, messages: payload }),
  [ChatActionTypes.SET_NEW_MESSAGE]: (state, { payload }) => ({ ...state, messages: [...state.messages, payload]})
}, initialState)

export { reducer as chatReducer };
