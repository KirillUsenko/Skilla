import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./reducer/userSlice"


const rootReducer = combineReducers({
    user: userSlice
})

export const store = configureStore({
    reducer: rootReducer,
})

