import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (cart) => cart.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQuantity = item.quantity + action.payload.quantity;
            return {
              ...item,
              quantity: tempQuantity,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state, action) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
