import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    email: string,
    password: string,
}

type Profile = {
    user:User
}

const initialState: Profile = {
    user: {
        email:'',
        password:''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
           state.user = action.payload;
        }
    }
})


export const { login } = userSlice.actions;

export default userSlice.reducer;
