import { action } from 'typesafe-actions';
import { setMessages, setNewMessage } from '@features/Chat/controllers/actions';
import { MessageType } from '@features/Chat/types';
import { detectStage } from '@utils/helpers';
import { FrontStateActionTypes } from './types';

export const setSocket = (data: any) => action(FrontStateActionTypes.SET_SOCKET, data);

export const setScenarioId = (data: any) => action(FrontStateActionTypes.SET_SCENARIO_ID, data);

/***************************************************************************************** */
/* Async Action Thunks using - Sockets													   */
/***************************************************************************************** */

export const initializeSockets = (socket: any) => (dispatch: any) => {
  socket.on('connect', () => {
    socket.emit('MESSAGE_INIT_HISTORY');
  });
  socket.on('MESSAGE_TO_CLIENT', (message: any) => {
    dispatch(setNewMessage(message));
  });
};

export const loadInitialMessages = (socket: any) => (dispatch: any) => {
  socket.on('MESSAGE_INIT_HISTORY', ({ messages }: any) => {
    dispatch(setMessages(messages));
  });
};

export const sendScenarioId = (socket: any, messages: Array<MessageType>) => (dispatch: any) => {
  socket.emit('SET_SCENARIO', detectStage(messages));
  dispatch(setScenarioId(detectStage(messages)));
};
