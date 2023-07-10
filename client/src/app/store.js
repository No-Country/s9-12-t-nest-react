import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productsReducer from '../features/products/fetchProducts'
import authReducer from '../features/authSlice/authSlice'
import categoriesReducer from '../features/categoriesSlice/categorySlice'
// import productReducer from '../features/productsSlice/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    authUser: authReducer,
    categories: categoriesReducer
    // products: productReducer
  }
})
