import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    getKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { getKeyword } = generalSlice.actions;

export default generalSlice.reducer;
