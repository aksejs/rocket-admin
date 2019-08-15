import axios from 'axios';

export const getAccountsList = (clientId = -1) => {
    return axios.post('/api/client/accounts', {
      client_id: clientId,
    });
  };
  
  export const getAccount = ({ clientId = -1, productId = -1, getAccount = false }) => {
    return axios.post('/api/client/account', {
      client_id: clientId,
      product_id: productId,
      get_account: getAccount,
    });
  };
  
  export const getDepositsList = (clientId = -1) => {
    return axios.post('/api/client/deposits', {
      client_id: clientId,
    });
  };
  
  export const getDeposit = ({ clientId = -1, productId = -1, getDeposit = false }) => {
    return axios.post('/api/client/deposit', {
      client_id: clientId,
      product_id: productId,
      get_deposit: getDeposit,
    });
  };