export interface FronState {
    socket: any,
    scenarioStage: number
};

export enum FrontStateActionTypes {
    SET_SOCKET = '@FRONT_STATE/SET_SOCKET',
    SET_SCENARIO_ID = '@FRONT_STATE/SET_SCENARIO_ID'
};

export interface AccountListRequest {
    clientId: number
    productId: number
    getAccount: boolean
};
