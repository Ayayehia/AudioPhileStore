import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice";

export const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
