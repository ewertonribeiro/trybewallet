import { configureStore } from '@reduxjs/toolkit'
import user from '../features/user'
import wallet from '../features/wallet'

const store = configureStore({
  reducer: {
    user,
    wallet
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
