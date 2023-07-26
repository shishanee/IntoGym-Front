import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import products from "../features/productSlice";
import productCategory from "../features/productCategorySlice";
import follow from "../features/followSlice";
import user from "../features/userSlice";

export const store = configureStore({
  reducer: {
    application,
    products,
    productCategory,
    follow,
    user,
  },
});
