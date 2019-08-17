export interface MessageType {
    isClient: boolean,
    message?: string,
    timestamp: number,
    type: string,
    operationDetails?: OperationDetails,
    stickerIndex?: number;
};

export interface OperationDetails {
    name: string,
    positive: boolean,
    amount: number,
    operationCode: string
};

export interface OperationBoxProps extends MessageType {
    operationDetails: OperationDetails
};

export interface ChatState {
    messages: Array<MessageType>
};

export enum ChatActionTypes {
    FETCH_MESSAGES = '@CHAT/FETCH_MESSAGES',
    SET_NEW_MESSAGE = '@CHAT/SET_NEW_MESSAGE'
};