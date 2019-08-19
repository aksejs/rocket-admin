export interface FronState {
    socket: any
};

export enum FrontStateActionTypes {
    SET_SOCKET = '@FRONT_STATE/SET_SOCKET'
};

export interface AccountListRequest {
    clientId: number
    productId: number
    getAccount: boolean
};