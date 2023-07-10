import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/fetchProducts'
import authReducer from '../features/authSlice/authSlice'
import categoriesReducer from '../features/categoriesSlice/categorySlice'
import productReducer from '../features/productsSlice/productSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    authUser: authReducer,
    productsDb: productReducer,
    categories: categoriesReducer
  }
})
