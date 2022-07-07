import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: '',
    },
    reducers: {
        changeToken(state, action) {
            state.token = action.payload
        },
        changeCity(state, action) {
            state.city = action.payload
        }
    }
})
export default userSlice.reducer
export const userActions = userSlice.actions