export interface MessageType {
    isClient: boolean,
    message: string,
    timestamp: number
};

export interface ChatState {
    messages: Array<MessageType>
};

export enum ChatActionTypes {
    FETCH_MESSAGES = '@@CHAT/FETCH_MESSAGES',
    SET_NEW_MESSAGE = '@@CHAT/SET_NEW_MESSAGE'
};