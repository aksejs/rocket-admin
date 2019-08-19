import { action } from 'typesafe-actions';
import { setMessages, setNewMessage } from '@features/Chat/controllers/actions';
import { FrontStateActionTypes } from './types';

export const setSocket = (data:any) => action(FrontStateActionTypes.SET_SOCKET, data);

/***************************************************************************************** */
/* Async Action Thunks using - Sockets													   */
/***************************************************************************************** */

export const initializeSockets = (socket:any) => (dispatch:any) => {
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