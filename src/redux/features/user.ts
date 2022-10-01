import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  email: string
  password: string
}

interface Profile {
  user: User
}

const initialState: Profile = {
  user: {
    email: '',
    password: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const { login } = userSlice.actions

export default userSlice.reducer
