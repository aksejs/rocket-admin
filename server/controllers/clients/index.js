const account = require('./account');
const accounts = require('./accounts');

const deposit = require('./deposit');
const deposits = require('./deposits');

const generateError = ({ res }) => {
  return res.status(404).send(`Wrong route params.`);
};

const toAccount = ({ res, req }) => {
  const { client_id, product_id, get_account } = req.body;

  account(res, {
    client_id: parseInt(client_id),
    product_id: parseInt(product_id),
    get_account: (String(get_account) === 'true'),
  });
};

const toAccounts = ({ res, req }) => {
  const { client_id } = req.body;

  accounts(res, {
    client_id: parseInt(client_id),
  });
};

const toDeposits = ({ res, req }) => {
  const { client_id } = req.body;

  deposits(res, {
    client_id: parseInt(client_id),
  });
};

const toDeposit = ({ res, req }) => {
  const { client_id, product_id, get_deposit } = req.body;

  deposit(res, {
    client_id: parseInt(client_id),
    product_id: parseInt(product_id),
    get_deposit: (String(get_deposit) === 'true'),
  });
};

const client = (req, res, next) => {
  switch (req.params.type) {
    case 'account': return toAccount({ res, req });
    case 'accounts': return toAccounts({ res, req });

    case 'deposit': return toDeposit({ res, req });
    case 'deposits': return toDeposits({ res, req });

    default: return generateError({ res });
  }
};

module.exports = client;
