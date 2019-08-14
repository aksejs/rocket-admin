import { action } from 'typesafe-actions';
import { ChatActionTypes, MessageType } from './types';


export const setMessages = (data: MessageType[]) => action(ChatActionTypes.FETCH_MESSAGES, data);
export const getNewMessage = (data: MessageType) => action(ChatActionTypes.SET_NEW_MESSAGE, data);