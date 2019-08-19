const { random } = require('lodash');
const currencySymbols = ['₽', '$', '€'];
const operationTypes = ['open', 'close', 'percent'];

const createDepositStub = () => {
  const created = random(1500000000, 1505555555);

  const passed = random(0, 12);
  const period = random(passed, 24);

  const percent = random(1.00, 10.99);
  const balance = random(100.00, 30000.99);
  const tick = balance * percent / 100;

  return {
    balance: {
      current: parseFloat((balance + (tick * passed)).toFixed(2)),
      init: parseFloat(balance.toFixed(2)),
      end: parseFloat((balance + (tick * period)).toFixed(2)),
    },
    percent: parseFloat(percent.toFixed(2)),
    period,
    passed,
    created,
    tick,
    number: random(1111111, 9999999),
    currency: currencySymbols[random(0, 2)],
  };
};

const makeHistoryStubs = () => {
  const generate = () => {
    const created = random(1500000000, 1505555555);
    const tick = random(500.00, 5000.99).toFixed(2);
    const balance = random(1000 + tick, tick + 20000);
    const type = operationTypes[random(0, 2)];
    const currency = currencySymbols[random(0, 2)];

    return {
      balance: parseFloat(balance),
      tick: parseFloat(tick),
      currency,
      created,
      type,
     };
  };

  const length = random(10, 50);
  const data = new Array(length).fill(null);

  return data.map(generate);
};

const account = (res, { client_id, product_id, get_deposit }) => {
  if (isNaN(client_id) || isNaN(product_id)) {
    return res.json({
      error: 'Invalid field value',
    });
  }

  return res.json({
    deposit: (get_deposit) ? createDepositStub() : null,
    history: makeHistoryStubs(),
  });
};

module.exports = account;
