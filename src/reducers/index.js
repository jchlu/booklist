import { combineReducers } from 'redux'
import BooksReducer from './books'
import ActiveBookReducer from './active_book'

export default combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
})
