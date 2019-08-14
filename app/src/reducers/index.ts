import { combineReducers } from 'redux';
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'

import { chatReducer } from '@features/Chat/reducers';
import { ChatState } from '@features/Chat/types';

import { ControlPanelState } from '@features/Sidebar/types';
import { controlPanelReducer } from '@features/Sidebar/reducers';

export interface ApplicationState {
  chat: ChatState
  controlPanel: ControlPanelState,
  router: RouterState
}

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = (history: History) => combineReducers<ApplicationState>({
  chat: chatReducer as any,
  controlPanel: controlPanelReducer as any,
  router: connectRouter(history)
});