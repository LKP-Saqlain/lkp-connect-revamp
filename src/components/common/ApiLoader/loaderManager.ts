// src/redux/loader/loaderManager.ts

import { store } from "@/redux/store";
import { showLoader, hideLoader } from "@/redux/slices/loaderSlice";

export const startLoader = () => {
  store.dispatch(showLoader());
};

export const stopLoader = () => {
  store.dispatch(hideLoader());
};
