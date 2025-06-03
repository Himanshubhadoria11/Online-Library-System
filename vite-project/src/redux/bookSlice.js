// import { books } from '../utils/books.json';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

 const NewBook = createAsyncThunk(
    'books/addNewBook',
    async (newBook) => {
        const response = await fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(newBook),
        })
        return response.json();
    }
)



// const booksSlice = createSlice({
//   name: 'books',
//   initialState: {
//     list: books,
//   },
//   reducers: {
//     addNewBook: (state, action) => {
//       const newBook = {
//         id: Date.now(), // simple unique ID
//         ...action.payload,
//       };
//       state.list.push(newBook);
//     },
//   },
// });


const booksSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
  },
  reducers: {
    addNewBook: (state, action) => {
      const newBook = { ...action.payload, id: Date.now() }; // Add ID
      state.list.push(newBook);
    },
    deleteBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
    },
  },
});

export const { deleteBook } = booksSlice.actions;





  
   
  








export const { addNewBook } = booksSlice.actions;
export default booksSlice.reducer;