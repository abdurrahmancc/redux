import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Indian", author: "abdur rahman" },
    { id: uuidv4(), title: "Bangladeshi", author: "abdur rahman" },
    { id: uuidv4(), title: "African", author: "abdur rahman" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isExist = state.books.filter((book) => book.id === id);
      if (isExist) {
        isExist[0].title = title;
        isExist[0].author = author;
      }
    },
  },
});

export const { showBooks, addBooks, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
