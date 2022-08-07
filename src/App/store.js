import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../fetaures/books/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksSlice,
  },
});

export default store;
