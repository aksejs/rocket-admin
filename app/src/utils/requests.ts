import axios from 'axios';

export const getAccountsList = (clientId = -1) => {
  return axios.post('/api/client/accounts', {
    client_id: clientId,
  });
};

export const getDepositsList = (clientId = -1) => {
  return axios.post('/api/client/deposits', {
    client_id: clientId,
  });
};