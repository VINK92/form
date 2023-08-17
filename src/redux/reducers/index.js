import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  },
  reducers: {
    foo1: (state) => {
      state.value += 1;
    },
    foo2: (state) => {
      state.value -= 1;
    },
    foo3: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = formSlice.actions;

export default formSlice.reducer;
