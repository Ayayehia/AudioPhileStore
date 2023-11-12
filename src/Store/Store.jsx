import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice";
import ValidationReducer from "./Slices/CheckoutValidationSlice"

 export const Store = configureStore({
    reducer:{
        cart:CartReducer,
        checkout:ValidationReducer
    }
})