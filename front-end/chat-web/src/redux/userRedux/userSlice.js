import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
}
const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setReceiverData: (state, {payload}) =>{
            state.user = payload;
            localStorage.setItem("receiverData", JSON.stringify(state.user))
        },
    }
})
export const {setReceiverData} = userSlice.actions;
export default userSlice.reducer;