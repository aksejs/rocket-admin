const { random } = require('lodash');
const currencySymbols = ['₽', '$', '€'];

const createDeposit = () => {
  const created = random(1500000000, 1505555555);

  const passed = random(0, 12);
  const period = random(passed, passed + 24);

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
    tick: parseFloat(tick.toFixed(2)),
    period,
    passed,
    created,
    number: random(1111111, 9999999),
    currency: currencySymbols[random(0, 2)],
  };
};

const makeDepositsStub = () => {
  const length = random(3, 10);
  const data = new Array(length).fill(null);

  return data.map(createDeposit);
};

const deposits = (res, { client_id }) => {
  if (isNaN(client_id) || client_id === -666) {
    return res.json({
      error: 'Invalid field value (client_id)',
    });
  }

  return res.json({
    deposits: makeDepositsStub(),
  });
};

module.exports = deposits;
