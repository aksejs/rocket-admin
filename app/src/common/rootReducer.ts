import { combineReducers } from 'redux';
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'

import { chatReducer } from '@features/Chat';
import { ChatState } from '@features/Chat/types';

import { controlPanelReducer } from '@features/Sidebar';
import { ControlPanelState } from '@features/Sidebar/types';

import { FronState } from '@common/types';
import { frontStateReducer } from '@common/reducers/frontReducer';

export interface ApplicationState {
  chat: ChatState
  controlPanel: ControlPanelState,
  frontState: FronState,
  router: RouterState
}

export const rootReducer = (history: History) => combineReducers<ApplicationState>({
  chat: chatReducer as any,
  controlPanel: controlPanelReducer as any,
  frontState: frontStateReducer as any,
  router: connectRouter(history)
});
