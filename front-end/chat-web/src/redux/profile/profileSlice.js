import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    image: null,
}
const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        uploadImg: (state, action) =>{
            state.image = action.payload;
        }
    }
});

export default profileSlice.reducer;
export const {uploadImg} = profileSlice.actions;