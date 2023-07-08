import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productsReducer from '../features/products/fetchProducts'
import authReducer from '../features/authSlice/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    authUser: authReducer
  }
})
