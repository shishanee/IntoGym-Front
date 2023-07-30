import { AnyAction, Dispatch, configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import products from "../features/productSlice";
import productCategory from "../features/productCategorySlice";
import follow from "../features/followSlice";
import user from "../features/userSlice";
import questions from "../features/questionSlice";
import cart from "../features/cartSlice";
import workout from "../features/wortkoutSlice";
import search from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    application,
    products,
    productCategory,
    follow,
    user,
    questions,
    cart,
    workout,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<AnyAction>;
