 
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk (if needed for backend POST)
export const NewBook = createAsyncThunk(
  'books/addNewBook',
  async (newBook) => {
    const response = await fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    return response.json();
  }
);







// Helper: Sync state to localStorage
const syncToLocalStorage = (list) => {
  localStorage.setItem('books', JSON.stringify(list));
};

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    list:  JSON.parse(localStorage.getItem('books')) || [],
  },
  reducers: {
   
   addNewBook: (state, action) => {
  const maxId = state.list.reduce((max, book) => {
    const id = parseInt(book.id, 10);
    return isNaN(id) ? max : Math.max(max, id);
  }, 0);

  const newBook = {
    ...action.payload,
    id: (maxId + 1).toString(), // ✅ Ensure `id` is added inside object
  };

  state.list.push(newBook);

  // ✅ Save updated array with all books having `id` inside object
  localStorage.setItem("books", JSON.stringify(state.list));
},


    deleteBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
      syncToLocalStorage(state.list);
    },
    // editBook: (state, action) => {
    //   const updatedBook = action.payload;
    //   const index = state.list.findIndex((book) => book.id === updatedBook.id);
    //   if (index !== -1) {
    //     state.list[index] = updatedBook;
    //     syncToLocalStorage(state.list);
    //   }
    // },
  },
});




export const { addNewBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;


