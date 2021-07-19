import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
}

const spinnerSlice = createSlice({
    name: 'spinner',
    initialState,
    reducers: {
        setSpinner(state, action) {
            state.isLoading = action.payload
        }
    }
});

export const { setSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;