import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoader : false
}
const loaderSlice = createSlice({
    name: "loader",
    initialState: initialState,
    reducers: {
        showLoader: (state)=>{
            state.isLoader = true;
        },
        hideLoader: (state)=>{
            state.isLoader = false;
        }
    }
});
export default loaderSlice.reducer;
export const {showLoader, hideLoader} = loaderSlice.actions