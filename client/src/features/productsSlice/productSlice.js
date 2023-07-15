import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// dejo armado el slice, asi ya despues solo cambiamos la ruta

const API_URL = 'http://localhost:3000/api/v1/products'

export const createProduct = createAsyncThunk('products/create', async (product, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // },
      body: product
    })
    // if (response.ok || response.status === 201) {
    //   const data = await response.json()
    //   return { status: response.status, message: 'El producto ha sido creado con éxito.', data }
    //   // return data
    // } else if (response.status === 400) {
    //   return thunkAPI.rejectWithValue({ status: response.status, message: 'Solicitud incorrecta en los datos del producto.' })
    // } else if (response.status === 409) {
    //   return thunkAPI.rejectWithValue({ status: response.status, message: 'El producto ya existe.' })
    // } else {
    //   const error = await response.text()
    //   return thunkAPI.rejectWithValue(error)
    //   // throw new Error('Algo salio mal')
    // }
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
  async (newProduct, productId, thunkAPI) => {
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

export const deleteProductById = createAsyncThunk('products/delete',
  async (productId, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      if (!response.ok) {
        if (response.status === 404) {
          return thunkAPI.rejectWithValue({ status: response.status, message: 'ID de producto no encontrado.' })
        } else if (response.status === 403) {
          return thunkAPI.rejectWithValue({ status: response.status, message: 'No tienes permisos para realizar esta accion.' })
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

export const getProductsByCategoryId = createAsyncThunk('products/getProductsByCategoryId', async (categoryId, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/category/${categoryId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (!response.ok) {
      if (response.status === 404) {
        return thunkAPI.rejectWithValue({ status: response.status, message: 'Productos con id de categoría no encontrados' })
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

export const getProductsBySubcategoryId = createAsyncThunk('products/getProductsBySubcategoryId', async (subCategoryId, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/subcategories/${subCategoryId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (!response.ok) {
      if (response.status === 404) {
        return thunkAPI.rejectWithValue({ status: response.status, message: 'Productos con ID de subcategoría no encontrados' })
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
    productById: [],
    productsByCategory: [],
    productsBySubcategory: [],
    productsByKeyword: [],
    status: '',
    loading: false,
    error: null
  },
  reducers: {
    addToproductsByKeyword: (state, action) => {
      state.productsByKeyword = []
      state.productsByKeyword = action.payload
    },
    clearProductById: (state) => {
      state.productById = []
    },
    clearProductsByCategory: (state) => {
      state.productsByCategory = []
    },
    clearProductsBySubcategory: (state) => {
      state.productsBySubcategory = []
    },
    clearProductByKeyword: (state) => {
      state.productsByKeyword = []
    },
    clearAllFilters: (state) => {
      state.productById = []
      state.productsByCategory = []
      state.productsBySubcategory = []
      state.productsByKeyword = []
    }
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
        state.productById = action.payload
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
      .addCase(deleteProductById.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loading = false
        state.products = state.products.filter(product => product.id !== action.payload.id)
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.loading = false
        state.error = action.payload
        if (action.payload && action.payload.status === 404) {
          state.error = action.payload.message
        } else if (action.payload && action.payload.status === 403) {
          state.error = action.payload.message
        } else {
          state.error = 'Ocurrión un error al eliminar el producto.'
        }
      })
      .addCase(getProductsByCategoryId.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(getProductsByCategoryId.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loading = false
        state.productsByCategory = action.payload
      })
      .addCase(getProductsByCategoryId.rejected, (state, action) => {
        state.status = 'failed'
        state.loading = false
        state.error = action.payload
        if (action.payload && action.payload.status === 404) {
          state.error = action.payload.message
        } else {
          state.error = 'Ocurrión un error al obtener los productos.'
        }
      })
      .addCase(getProductsBySubcategoryId.pending, (state) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(getProductsBySubcategoryId.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loading = false
        state.productsBySubcategory = action.payload
      })
      .addCase(getProductsBySubcategoryId.rejected, (state, action) => {
        state.status = 'failed'
        state.loading = false
        state.error = action.payload
        if (action.payload && action.payload.status === 404) {
          state.error = action.payload.message
        } else {
          state.error = 'Ocurrión un error al obtener los productos.'
        }
      })
  }
})

export const { addToproductsByKeyword, clearProductById, clearProductsByCategory, clearProductsBySubcategory, clearProductByKeyword, clearAllFilters } = productSlice.actions
export const selectProducts = (state) => state.product.products
export default productSlice.reducer

/*
Nota:
al haber tantas formas de filtrar creo que lo mas conveniente es hacerlo algo asi:

* en caso de querer filtar todo en el home
if (productByCategory.length > 0 && productsBySubcategory.length === 0 && productById.length === 0 &&  productsByKeyword.length === 0 ) {
    Mostrar los productos filtrados por categoría
  } else if (productById.length > 0 &&  productByCategory.length === 0 && productsBySubcategory.length === 0 &&  productsByKeyword.length === 0 ){
    Mostrar los productos filtrados por ID
  }
  else if ( productsByKeyword.length > 0 && productById.length === 0 &&  productByCategory.length === 0 && productsBySubcategory.length === 0 ){
    Mostrar los productos filtrados por palabra clave
  }
  else {
    mostramos todos los productos
  }

  * la otra es añadir rutas para cada filtrado, quizas sea lo mejor opcion
  /  => filtra todos
  /filtroId  => filtrara por id
  /filtroCategoryId => filtra por id de la categoria
  /filtroSubcategoryId => filtra por id de la subcategoria
  /filtroKeyword => filtra por palabra clave

*/
