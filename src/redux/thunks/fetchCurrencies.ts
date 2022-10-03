import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchCurrenciesThunk = createAsyncThunk(
  'wallet/fetchCurrenciesThunk',
  async () => {
    const url = 'https://economia.awesomeapi.com.br/json/all'
    try {
      const response: ExchangeRates = await (await fetch(url)).json()
      return response
    } catch (error) {
      // WARNING: Tratar o possivel erro da api!
      return {} as ExchangeRates
    }
  }
)

export default fetchCurrenciesThunk
