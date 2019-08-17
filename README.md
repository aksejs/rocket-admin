# rocket-admin

`POST /api/client/accounts`
params:
  client_id<Integer>: # ID клиента

response example:
```
  {
    "accounts": [
      {
        "balance": 68896.67,
        "created": 1500496135,
        "annual": 4.16,
        "number": 57899618,
        "currency": "€",
        "last_operation": {
          "amount": 6554,
          "carriedOut": 1500502905,
          "positive": true,
          "type": "percent"
        }
      },
    ]
  }
```


`POST /api/client/account`
params:
  client_id<Integer>: # ID клиента
  product_id<Integer>: # Номер продукта (счёт, вклад)  
  get_account<Boolean>: # Передавать ли вместе с историей информацию о счёте

response example:
```
{
  "account": {
    "annual": 0.58,
    "balance": 146769.15,
    "created": 1501433382,
    "number": 57896019,
    "currency": "₽"
  },
  "history": [
    {
      "amount": 17157.33,
      "carriedOut": 1500910557,
      "lastCartNumber": "3900",
      "positive": false,
      "type": "charge_off"
    },
    {
      "amount": 19278.18,
      "carriedOut": 1504761633,
      "lastCartNumber": "1732",
      "positive": true,
      "type": "top_up"
    },
    {
      "amount": 16386.68,
      "carriedOut": 1503680581,
      "lastCartNumber": "8716",
      "positive": true,
      "type": "top_up"
    }
  ]
}
```

`POST /api/client/deposits`
params:
  client_id<Integer>: # ID клиента
```
[{
  "balance": {
    "current": 9298.23,
    "init": 7106.5,
    "end": 15142.84
  },
  "percent": 5.14,
  "tick": 365.29,
  "period": 22,
  "passed": 6,
  "created": 1500347621,
  "number": 8379298,
  "currency": "$"
}]
```

`POST /api/client/deposit`
params:
  client_id<Integer>: # ID клиента
  product_id<Integer>: # Номер продукта (счёт, вклад)  
  get_deposit<Boolean>: # Передавать ли вместе с историей информацию о вкладе
```
{
  "deposit": {
    "balance": {
      "current": 41651.53,
      "init": 22569.07,
      "end": 64550.48
    },
    "percent": 8.46,
    "period": 22,
    "passed": 10,
    "created": 1500615856,
    "number": 2660859,
    "currency": "₽",
    "tick: 2000
  },
  "history": [
    {
      "balance": 9998164.80042773,
      "tick": 1306.12,
      "currency": "€",
      "created": 1500440018,
      "type": "percent"
    },
    {
      "balance": 2496246.831303064,
      "tick": 3770.92,
      "currency": "€",
      "created": 1500771520,
      "type": "percent"
    },
    {
      "balance": 6409881.048780619,
      "tick": 4480.82,
      "currency": "€",
      "created": 1504987517,
      "type": "percent"
    },
    {
      "balance": 1415168.311353467,
      "tick": 1776.35,
      "currency": "₽",
      "created": 1502809147,
      "type": "open"
    }
  ]
}
```


<!-- Sockets -->
Объект `USER`:
  userId: <Integer>
  isClient: <Boolean>
  avatarUrl: <String>
  displayName: <String>
