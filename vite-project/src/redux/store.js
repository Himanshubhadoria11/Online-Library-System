// import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './bookSlice'; 

// const store = configureStore({
//     reducer: {
//         books: booksReducer, 
//     },
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';
import { books as defaultBooks } from '../utils/books.json';

// Load from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('books');
    if (serializedState === null) {
      return { list: defaultBooks }; // fallback to JSON
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return { list: defaultBooks };
  }
};

// Save to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.books);
    localStorage.setItem('books', serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  preloadedState: {
    books: loadState(),
  },
});

// Save every time state changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;





