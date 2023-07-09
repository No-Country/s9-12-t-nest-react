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

export const getProducts = createAsyncThunk('products/get', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
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

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      })
      if (!response.ok) {
        if (response.status === 404) {
          return thunkAPI.rejectWithValue({ status: response.status, message: 'ID de producto no encontrado.' })
        } else {
          const error = await response.text()
          return thunkAPI.rejectWithValue(error)
          // throw new Error('Algo salio mal')
        }
      }
      const data = await response.json()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const modifyProductById = createAsyncThunk('products/modify',
  async (productId, newProduct, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
      if (!response.ok) {
        if (response.status === 404) {
          return thunkAPI.rejectWithValue({ status: response.status, message: 'ID de producto no encontrado.' })
        } else {
          const error = await response.text()
          return thunkAPI.rejectWithValue(error)
          // throw new Error('Algo salio mal')
        }
      }
      const data = await response.json()
      return data
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
        state.products.push(action.payload) // lo añadimos a la lista de productos
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
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loading = false
        state.products = action.payload
        state.error = null
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.loading = false
        state.error = action.payload
      })
      .addCase(getProductById.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loading = false
        state.products = action.payload
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.loading = false
        state.error = action.payload
        if (action.payload && action.payload.status === 404) {
          state.error = action.payload.message
        } else {
          state.error = 'Ocurrión un error al obtener el producto.'
        }
      })
      .addCase(modifyProductById.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(modifyProductById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loading = false
        state.products = state.products.map(product => product.id === action.payload.id ? action.payload : product)
      })
      .addCase(modifyProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.loading = false
        state.error = action.payload
        if (action.payload && action.payload.status === 404) {
          state.error = action.payload.message
        } else {
          state.error = 'Ocurrión un error al modificar el producto.'
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
