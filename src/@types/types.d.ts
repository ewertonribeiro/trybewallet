declare type CODES = 'USD'
| 'CAD'
| 'EUR'
| 'GBP'
| 'ARS'
| 'BTC'
| 'LTC'
| 'JPY'
| 'CHF'
| 'AUD'
| 'CNY'
| 'ILS'
| 'ETH'
| 'XRP'
| 'DOGE'
| 'USDT'

declare type ExchangeRates = Partial<{
  [key in CODES]: {
    code: string
    name: string
    ask: string
  }
}>

declare interface Expense {
  id: number
  value: string
  description: string
  currency: CODES
  method: string
  tag: string
  exchangeRates: ExchangeRates
}
