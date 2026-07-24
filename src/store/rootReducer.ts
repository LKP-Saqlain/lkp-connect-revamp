import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});
