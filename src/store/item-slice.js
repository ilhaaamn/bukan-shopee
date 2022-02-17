import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  items: [],
  loading: false,
};

const itemSlice = createSlice({
  name: "items",
  initialState: initialItemState,
  reducers: {
    handleItemChange: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    handleItemLoading: (state) => {
      state.items = [];
      state.loading = true;
    },
  },
});

export const itemsActions = itemSlice.actions;
export default itemSlice;
