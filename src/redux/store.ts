import { configureStore } from "@reduxjs/toolkit";

import incentivePeriodReducer from "./slices/incentivePeriod/incentivePeriod.slice";

export const store = configureStore({
  reducer: {
    incentivePeriod: incentivePeriodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
