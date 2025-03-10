import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { generalSlice } from "./generalSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    general: generalSlice,
  },
});
