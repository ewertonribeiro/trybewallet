import { createAsyncThunk } from "@reduxjs/toolkit";

export interface LocalExpense {
  value: string,
  description: string,
  currency: CODES,
  method: string,
  tag: string,
}


const createExpenseThunk = createAsyncThunk(
  'wallet/createExpenseThunk',
  async (expense: LocalExpense) => {
    const url = 'https://economia.awesomeapi.com.br/json/all'

    try {
      const response: ExchangeRates = await (await fetch(url)).json()
      const obj = { ...expense, exchangeRates: response };
      return obj 
    } catch (error) {
      //WARNING: Tratar o retorno da api!
      return {} as Expense
    }
  }
)

export default createExpenseThunk
