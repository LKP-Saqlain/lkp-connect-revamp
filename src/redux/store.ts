import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice";
import incentivePeriodReducer from "./slices/incentivePeriod/incentivePeriod.slice";

export const store = configureStore({
  reducer: {
    incentivePeriod: incentivePeriodReducer,
    loader: loaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
