import { action } from 'typesafe-actions';
import { setMessages, setNewMessage } from '@features/Chat/controllers/actions';
import { FrontStateActionTypes } from './types';

export const setSocket = (data:any) => action(FrontStateActionTypes.SET_SOCKET, data);

/***************************************************************************************** */
/* Async Action Thunks using - Sockets													   */
/***************************************************************************************** */

export const initializeSockets = (socket:any) => (dispatch:any) => {
    socket.on('connect', () => {
        socket.emit('msg history');
    });
    socket.on('msg to client', (message: any) => {
        dispatch(setNewMessage(message));
    });
};

export const loadInitialMessages = (socket: any) => (dispatch: any) => {
    socket.on('msg history', ({ messages }: any) => {
        dispatch(setMessages(messages));
    });
};