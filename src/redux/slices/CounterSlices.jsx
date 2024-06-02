import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        reset: (state) => {
            state.value = 0;
        },
        addByAmount: (state,actions) => {
            state.value += actions.payload;
        }
    }
});

export const { increment, decrement, reset,addByAmount } = counterSlice.actions;

export default counterSlice.reducer;
