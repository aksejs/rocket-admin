const { random } = require('lodash');
const currencySymbols = ['₽', '$', '€'];
const operationTypes = [
  {
    name: 'top_up',
    positive: true,
  },
  {
    name: 'percent',
    positive: true,
  },
  {
    name: 'charge_off',
    positive: false,
  }
];

const makeAccountStubs = () => {
  const annual = random(0.5, 15).toFixed(2);
  const balance = random(100.00, 300000.99).toFixed(2);
  const created = random(1500000000, 1505555555);
  const number = random(57890000, 57899999);
  const currency = currencySymbols[random(0, 2)];

  return {
    annual: parseFloat(annual),
    balance: parseFloat(balance),
    created: parseInt(created),
    number: parseInt(number),
    currency,
  };
};

const makeHistoryStubs = () => {
  const generate = () => {
    const created = random(1500000000, 1505555555);

    // last operation
    const carriedOut = random(created, created + random(20000, 333333));
    const lastCartNumber = random(1111, 9999);
    const amount = random(10.00, 20000.99).toFixed(2);
    const type = operationTypes[random(0, 2)];

    return {
      amount: parseFloat(amount),
      carriedOut: parseInt(carriedOut),
      lastCartNumber: String(lastCartNumber),
      positive: type.positive,
      type: type.name,
    };
  };

  const length = random(10, 50);
  const data = new Array(length).fill(null);

  return data.map(generate);
};

const account = (res, { client_id, product_id, get_account }) => {
  if (isNaN(client_id) || isNaN(product_id)) {
    return res.json({
      error: 'Invalid field value',
    });
  }

  return res.json({
    account: (get_account) ? makeAccountStubs() : null,
    history: makeHistoryStubs(),
  });
};

module.exports = account;
