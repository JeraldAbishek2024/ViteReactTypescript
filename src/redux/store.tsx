import { createSlice, configureStore } from "@reduxjs/toolkit";

export type stateType = {
  value: number;
};

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (stateCounter: stateType) => {
      stateCounter.value += 1;
    },
    decremented: (stateCounter: stateType) => {
      stateCounter.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

export const store = configureStore({
  devTools: false,
  reducer: counterSlice.reducer,
});

// store.subscribe(() => console.log(store.getState()));

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
