import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
import todoReducer from '../features/Todo/todoslice'
export default configureStore({
  reducer:  {counter: counterReducer,todoStore:todoReducer},
})