import axios from 'axios';
import { AccountListRequest } from '@common/types';
import { API_CLIENT_PATH } from '@utils/constants';

export const getAccountsList = (clientId:number = -1) => {
    return axios.post(`${API_CLIENT_PATH}/accounts`, {
      client_id: clientId,
    });
  };
  
  export const getAccount = ({ clientId = -1, productId = -1, getAccount = false }: AccountListRequest) => {
    return axios.post(`${API_CLIENT_PATH}/account`, {
      client_id: clientId,
      product_id: productId,
      get_account: getAccount,
    });
  };
  
  export const getDepositsList = (clientId:number = -1) => {
    return axios.post(`${API_CLIENT_PATH}/deposits`, {
      client_id: clientId,
    });
  };
  
