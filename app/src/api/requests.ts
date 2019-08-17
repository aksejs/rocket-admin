import axios from 'axios';
import { API_CLIENT_PATH } from 'app/utils/constants';

export const getAccountsList = (clientId = -1) => {
    return axios.post(`${API_CLIENT_PATH}/accounts`, {
      client_id: clientId,
    });
  };
  
  export const getAccount = ({ clientId = -1, productId = -1, getAccount = false }) => {
    return axios.post(`${API_CLIENT_PATH}/account`, {
      client_id: clientId,
      product_id: productId,
      get_account: getAccount,
    });
  };
  
  export const getDepositsList = (clientId = -1) => {
    return axios.post(`${API_CLIENT_PATH}/deposits`, {
      client_id: clientId,
    });
  };
  
  export const getDeposit = ({ clientId = -1, productId = -1, getDeposit = false }) => {
    return axios.post(`${API_CLIENT_PATH}/deposit`, {
      client_id: clientId,
      product_id: productId,
      get_deposit: getDeposit,
    });
  };