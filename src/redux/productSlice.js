import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
  loading: false,
};

export const getProducts = createAsyncThunk("products", async (params) => {
  let link = `http://localhost:4000/products?keyword=${
    params.keyword
  }&rating[gte]=${params.rating || 0}&price[gte]=${
    params.price.min || 0
  }&price[lte]=${params.price.max || 50000}`;
  if (params.category) {
    link = `http://localhost:4000/products?keyword=${
      params.keyword
    }&rating[gte]=${params.rating || 0}&price[gte]=${
      params.price.min || 0
    }&price[lte]=${params.price.max || 50000}&category=${params.category}`;
  }
  const response = await fetch(link);
  return await response.json();
});

export const getProductDetail = createAsyncThunk("product", async (id) => {
  const response = await fetch(`http://localhost:4000/products/${id}`);
  return await response.json();
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(getProductDetail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
