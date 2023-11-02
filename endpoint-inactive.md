### Taxa de juros do Banco Nacional de Angola

Retorna o valor da taxa de juros do BNA.

**GET** `https://angolaapi.onrender.com/api/v1/banks/rates/interest/bna`

#### Exemplo da consulta

```json
// GET https://angolaapi.onrender.com/api/v1/banks/rates/interest/bna

{
  "rate": "15,5%"
}
```

### Taxa de juros LUIBOR

Retorna o valor da taxa interbancária de oferta de fundos do mercado de Luanda.

**GET** `https://angolaapi.onrender.com/api/v1/banks/rates/interest/luibor`

#### Exemplo da consulta

```json
// GET https://angolaapi.onrender.com/api/v1/banks/rates/interest/luibor

{
  "date": "10 de Setembro de 2020",
  "rates": [
    {
      "maturity": "Overnight",
      "rate": "5,38%"
    },
    {
      "maturity": "3 Meses",
      "rate": "12,35%"
    },
    {
      "maturity": "12 Meses",
      "rate": "16,14%"
    }
  ]
}
```

### Taxa de inflação

Retorna o valor da taxa de inflação do Banco Nacional de Angola.

**GET** `https://angolaapi.onrender.com/api/v1/banks/rates/inflation`

#### Exemplo da consulta

```json
// GET https://angolaapi.onrender.com/api/v1/banks/rates/inflation

{
  "date": "14 de Fevereiro de 2021",
  "status": "Dados referentes ao mês de Janeiro de 2021",
  "rates": [
    {
      "type": "Inflação Mensal",
      "rate": "1,50%"
    },
    {
      "type": "Inflação Acumulada",
      "rate": "1,50%"
    },
    {
      "type": "Inflação Homóloga",
      "rate": "24,41%"
    }
  ]
}
```

### Taxas de câmbio do Banco Nacional de Angola

Retorna as taxas de câmbio mais importantes do BNA.

**GET** `https://angolaapi.onrender.com/api/v1/banks/rates/exchange`

#### Exemplo da consulta

```json
// GET https://angola-api.com/api/v1/banks/rates/exchange

{
  "rates": [
    {
      "currency": "USD",
      "rate": 635.762
    },
    {
      "currency": "EUR",
      "rate": 773.722
    },
    {
      "currency": "ZAR",
      "rate": 44.132
    }
  ]
}
```

### Venda, compra, e taxa de variação das duas moedas estrangeiras mais populares de Angola

Retorna a cotação do dolar e euro nos principais bancos comerciais do país.

**GET** `https://angolaapi.onrender.com/api/v1/banks/rates/comercial-exchange`

#### Exemplo da consulta

```json
// GET https://angolaapi.onrender.com/api/v1/banks/rates/comercial-exchange

{
  "date": "25 de Fevereiro de 2021",
  "banks": [
    {
      "name": "Banco de Investimento Rural - (BIR)",
      "current": {
        "buy": [
          {
            "currency": "USD/AOA",
            "quotation": 572
          },
          {
            "currency": "EUR/AOA",
            "quotation": 712.07
          }
        ],
        "sell": [
          {
            "currency": "USD/AOA",
            "quotation": 699
          },
          {
            "currency": "EUR/AOA",
            "quotation": 854.55
          }
        ]
      },
      "lastDay": {
        "buy": [
          {
            "currency": "USD/AOA",
            "quotation": 595
          },
          {
            "currency": "EUR/AOA",
            "quotation": 715.31
          }
        ],
        "sell": [
          {
            "currency": "USD/AOA",
            "quotation": 698
          },
          {
            "currency": "EUR/AOA",
            "quotation": 854.55
          }
        ]
      },
      "variation": {
        "buy": [
          {
            "currency": "USD/AOA",
            "variation": "4,02%"
          },
          {
            "currency": "EUR/AOA",
            "variation": "0,46%"
          }
        ],
        "sell": [
          {
            "currency": "USD/AOA",
            "variation": "-0,14%"
          },
          {
            "currency": "EUR/AOA",
            "variation": "0,00%"
          }
        ]
      }
    },
    ...
  ]
    
```

### Taxas de juro dos bancos comerciais para depósitos a prazo

Retorna o nome do banco, os dias e as taxas de juros de para depósitos a prazo efetuado pelos mesmos

**GET** `https://angolaapi.onrender.com/api/v1/banks/rates/interest/term-deposit`

#### Exemplo da consulta

```json
// GET https://angolaapi.onrender.com/api/v1/banks/rates/interest/term-deposit

{
  "date": "25 de Fevereiro de 2021",
  "banks": [
    {
      "name": "Banco Millenium Atlântico - (ATL)",
      "rates": [
        {
          "days": 30,
          "rate": "3,50%"
        },
        {
          "days": 90,
          "rate": "5,00%"
        },
        {
          "days": 360,
          "rate": "7,00%"
        }
      ]
    },
    {
      "name": "Banco Angolano de Investimentos - (BAI)",
      "rates": [
        {
          "days": 30,
          "rate": "4,50%"
        },
        {
          "days": 90,
          "rate": "7,00%"
        },
        {
          "days": 360,
          "rate": "11,0%"
        }
      ]
    },
    ...
  ]
```