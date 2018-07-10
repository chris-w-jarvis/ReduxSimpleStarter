import { combineReducers } from 'redux';

// so you choose the name when u import reducers this way
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // the mapping of state, key=books, the value is the return of the reducer
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
