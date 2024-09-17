import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../../src/redux/userRedux/userSlice'
import loaderReducer from "../../src/redux/loaderRedux/loaderSlice"
import profileReducer from "../../src/redux/profile/profileSlice"
export const store = configureStore({
    reducer : {
        user :  userReducer,
        loader : loaderReducer,
        profile : profileReducer,
    },
})