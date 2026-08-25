// src/redux/slices/loader/loaderSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface LoaderState {
  count: number;
}

const initialState: LoaderState = {
  count: 0,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,

  reducers: {
    showLoader: (state) => {
      state.count += 1;
    },

    hideLoader: (state) => {
      state.count = Math.max(0, state.count - 1);
    },

    resetLoader: (state) => {
      state.count = 0;
    },
  },
});

export const { showLoader, hideLoader, resetLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
