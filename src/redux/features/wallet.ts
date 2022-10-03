import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import fetchCurrenciesThunk from '../thunks/fetchCurrencies'
import createExpenseThunk, { LocalExpense } from '../thunks/createExpenseThunk'

interface walletState {
  currencies: string[]
  expenses: Expense[]
  editor: boolean
  idToEdit: number
}

const initialState: walletState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    deleteExpense: (state, action: PayloadAction<number>) => {
      state.editor = false;
      state.expenses = state.expenses.filter(item => item.id !== action.payload)
    },
    startEditExpense: (state, action: PayloadAction<number>) => {
      state.editor = true,
        state.idToEdit = action.payload;
    },
    endEditExpense: (state, action: PayloadAction<LocalExpense>) => {
      state.editor = false
      state.expenses = state.expenses.map(item => (
        item.id === state.idToEdit
          ? { ...action.payload, id: item.id, exchangeRates: { ...item.exchangeRates } }
          : item
      ))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrenciesThunk.fulfilled, (state, action) => {
      const currencies = Object.keys(action.payload).filter(item => item !== 'USDT')
      state.currencies = currencies
    })

    builder.addCase(createExpenseThunk.fulfilled, (state, { payload }) => {
      state.expenses = [...state.expenses, { ...payload, id: state.expenses.length }]
    })
  }
})

export const { deleteExpense, startEditExpense, endEditExpense } = walletSlice.actions

export default walletSlice.reducer
