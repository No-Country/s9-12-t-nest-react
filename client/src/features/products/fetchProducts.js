import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// dejo armado el slice, asi ya despues solo cambiamos la ruta

const API_URL = 'https://fakestoreapi.com'

export const getProducts = createAsyncThunk('/products/getProducts', async () => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message)
      // throw new Error('Algo salio mal')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return error.message
  }
}
)

// trae todos los productos
export const fetchCategories = createAsyncThunk('products/fetchProductsCategories', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/products/categories`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (!response.ok) {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
      // throw new Error('Algo salio mal')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

// filtro por categorias
export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (categoryName, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/products/category/${categoryName}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (!response.ok) {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
      // throw new Error('Algo salio mal')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
}
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsByCategory: [],
    category: [],
    status: 'idle',
    loading: false,
    error: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    // manejo acciones asincronas
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.state = 'succeeded'
        state.loading = false
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.state = 'succeeded'
        state.loading = false
        state.category = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.state = 'succeeded'
        state.loading = false
        state.productsByCategory = action.payload
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
  }

})

export const selectProducts = (state) => state.products.products
// export const selectStatus = (state) => state.products.status
// export const selectLoading = (state) => state.products.loading
// export const selectError = (state) => state.products.error
// export const selectCategory = (state) => state.products.category
export default productsSlice.reducer
