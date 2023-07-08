import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// dejo armado el slice, asi ya despues solo cambiamos la ruta

const API_URL = 'http://localhost:3000/api/v1/products'

export const createProduct = createAsyncThunk('products/create', async (product, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    if (response.ok || response.status === 201) {
      const data = await response.json()
      return { status: response.status, message: 'El producto ha sido creado con éxito.', data }
      // return data
    } else if (response.status === 400) {
      return thunkAPI.rejectWithValue({ status: response.status, message: 'Solicitud incorrecta en los datos del producto.' })
    } else if (response.status === 409) {
      return thunkAPI.rejectWithValue({ status: response.status, message: 'El producto ya existe.' })
    } else {
      const error = await response.text()
      return thunkAPI.rejectWithValue(error)
      // throw new Error('Algo salio mal')
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: '',
    loading: false,
    error: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    // manejo acciones asincronas
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading'
        state.loading = true
        state.error = null
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loading = false
        state.products.push(action.payload)
        state.error = null
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed'
        state.loading = false
        state.error = action.payload

        if (action.payload && action.payload.status === 400) {
        // Solicitud incorrecta en los datos del producto
          state.error = action.payload.message
        } else if (action.payload && action.payload.status === 409) {
        // El producto ya existe
          state.error = action.payload.message
        } else {
        // Otro caso de error
          state.error = 'Ocurrió un error al crear el producto.'
        }
      })
  }
})

export const selectProducts = (state) => state.product.products
// export const selectStatus = (state) => state.products.status
// export const selectLoading = (state) => state.products.loading
// export const selectError = (state) => state.products.error
// export const selectCategory = (state) => state.products.category
export default productSlice.reducer
