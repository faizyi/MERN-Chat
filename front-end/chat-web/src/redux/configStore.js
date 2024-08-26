import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../../src/redux/userRedux/userSlice'
const preloadedState = {
    user: JSON.parse(localStorage.getItem('receiverData')) || null,
  };
export const store = configureStore({
    reducer : {
        user :  userReducer
    },
    // preloadedState,
})