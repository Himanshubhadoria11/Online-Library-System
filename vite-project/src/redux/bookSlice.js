 
//  import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunk (if needed for backend POST)
// export const NewBook = createAsyncThunk(
//   'books/addNewBook',
//   async (newBook) => {
//     const response = await fetch('http://localhost:5000/books', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newBook),
//     });
//     return response.json();
//   }
// );







// // Helper: Sync state to localStorage
// const syncToLocalStorage = (list) => {
//   localStorage.setItem('books', JSON.stringify(list));
// };

// const booksSlice = createSlice({
//   name: 'books',
//   initialState: {
//     list:  JSON.parse(localStorage.getItem('books')) || [],
//   },
//   reducers: {
   
//    addNewBook: (state, action) => {
//   const maxId = state.list.reduce((max, book) => {
//     const id = parseInt(book.id, 10);
//     return isNaN(id) ? max : Math.max(max, id);
//   }, 0);

//   const newBook = {
//     ...action.payload,
//     id: (maxId + 1).toString(), // ✅ Ensure `id` is added inside object
//   };

//   state.list.push(newBook);

//   // ✅ Save updated array with all books having `id` inside object
//   localStorage.setItem("books", JSON.stringify(state.list));
// },


//     deleteBook: (state, action) => {
//       state.list = state.list.filter((book) => book.id !== action.payload);
//       syncToLocalStorage(state.list);
//     },
//     // editBook: (state, action) => {
//     //   const updatedBook = action.payload;
//     //   const index = state.list.findIndex((book) => book.id === updatedBook.id);
//     //   if (index !== -1) {
//     //     state.list[index] = updatedBook;
//     //     syncToLocalStorage(state.list);
//     //   }
//     // },
//   },
// });




// export const { addNewBook, deleteBook } = booksSlice.actions;
// export default booksSlice.reducer;


//import { books } from '../utils/books.json';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//  const NewBook = createAsyncThunk(
//     'books/addNewBook',
//     async (newBook) => {
//         const response = await fetch('http://localhost:5000/books', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },

//             body: JSON.stringify(newBook),
//         })
//         return response.json();
//     }
// )






//  const booksSlice = createSlice({
//   name: 'books',
//   initialState: {
//     list: [],
//   },

//   reducers: {
//     // addNewBook: (state, action) => {
//     //   const newBook = { ...action.payload, id: Date.now() }; // Add ID
//     //   state.list.push(newBook);
//     // },
//      addNewBook: (state, action) => {
//   const maxId = state.list.reduce((max, book) => {
//     const id = parseInt(book.id, 10);
//     return isNaN(id) ? max : Math.max(max, id);
//   }, 0);

//   const newBook = {
//     ...action.payload,
//     id: (maxId + 1).toString(), // ✅ Ensure `id` is added inside object
//   };

//   state.list.push(newBook);

//   // ✅ Save updated array with all books having `id` inside object
//   localStorage.setItem("books", JSON.stringify(state.list));
// },
//     deleteBook: (state, action) => {
//       state.list = state.list.filter((book) => book.id !== action.payload);
//     },
//   },
// });

// export const { deleteBook } = booksSlice.actions;





  
   
  








// export const { addNewBook } = booksSlice.actions;
// export default booksSlice.reducer;

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

// Consistent initial state
const initialState = {
  list: booksData.books || [], // Ensure it's always an array
  status: "idle",
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addNewBook: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("books", JSON.stringify(state.list));
    },
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
