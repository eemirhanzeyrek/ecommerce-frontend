import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
  openModal: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    getKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    openModalFunc: (state, action) => {
      state.openModal = !state.openModal;
    },
  },
});

export const { getKeyword, openModalFunc } = generalSlice.actions;

export default generalSlice.reducer;
