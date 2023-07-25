import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import follow from "../features/followSlice";

export const store = configureStore({
  reducer: {
    application,
    follow,
  },
});
