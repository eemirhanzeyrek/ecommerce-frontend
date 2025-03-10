import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { generalSlice } from "./generalSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    general: generalSlice,
    user: userSlice,
  },
});
