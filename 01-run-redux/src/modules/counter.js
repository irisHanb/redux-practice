import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
  diff: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setDiff: (state, action) => {
      state.diff = action.payload;
    },
    increase: (state, action) => {
      console.log('state> ', state.number, action.payload);
      state.number = state.number + state.diff;
    },
    decrease: (state, action) => {
      state.number = state.number - state.diff;
    },
  },
});

export const { setDiff, increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
