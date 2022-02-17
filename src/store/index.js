import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./item-slice";

const store = configureStore({
  reducer: { items: itemSlice.reducer },
});

export default store;
