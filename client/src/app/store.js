import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productsReducer from '../features/products/fetchProducts'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer
  }
})
