 




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksData from "../utils/books.json";

// Load books from localStorage or JSON file asynchronously
export const loadBooksFromJson = createAsyncThunk("books/loadFromJson", async (_, { rejectWithValue }) => {
  try {
    const stored = localStorage.getItem("books");
    if (stored) return JSON.parse(stored);

    const response = await fetch("/books.json");
    if (!response.ok) throw new Error("Failed to load books data");

    const data = await response.json();
    localStorage.setItem("books", JSON.stringify(data));
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  list: JSON.parse(localStorage.getItem("books")) || booksData.books || [],
  status: "idle",
  error: null,
};


// Consistent initial state
// const initialState = {
//   list: booksData.books || [], // Ensure it's always an array
//   status: "idle",
//   error: null,
// };

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addNewBook: (state, action) => {
  const newBook = { id: Date.now(), ...action.payload }; // Generate a unique ID
  state.list.push(newBook);
  localStorage.setItem("books", JSON.stringify(state.list));
},

    // addNewBook: (state, action) => {
    //   state.list.push(action.payload);
    //   localStorage.setItem("books", JSON.stringify(state.list));
    // },
    deleteBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
      localStorage.setItem("books", JSON.stringify(state.list));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBooksFromJson.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadBooksFromJson.fulfilled, (state, action) => {
        state.list = action.payload || [];
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(loadBooksFromJson.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error occurred";
      });
  },
});

// Export actions and reducer
export const { addNewBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;