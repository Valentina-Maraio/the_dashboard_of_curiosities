import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedContent: "default",
};

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setSelectedContent: (state, action) => {
            state.selectedContent = action.payload;
        },
    },
});

export const {setSelectedContent} = contentSlice.actions;
export default contentSlice.reducer;