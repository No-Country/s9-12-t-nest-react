import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_URL = 'http://localhost:3000/api/v1'

export const loginWithGoogle = createAsyncThunk('auth/loginWithGoogle', async (_, thunkAPI) => {
  try {
    // redirigimos a google login
    window.open(`${API_URL}/google`, '_blank')
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

// procesa la respuesta una vez inicia sesion
export const processGoogleCallback = createAsyncThunk('auth/processGoogleCallback', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/google/callback`, {
      method: 'GET'
    })
    if (!response.ok) {
      const error = await response.json()
      return thunkAPI.rejectWithValue(error)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

// cerrar sesion
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'GET'
    })
    if (!response.ok) {
      const error = await response.json()
      return thunkAPI.rejectWithValue(error)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const loginWithUsernameAndPassword = createAsyncThunk(
  'auth/loginWithUsernameAndPassword',
  async (userData, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        const error = await response.json()
        return thunkAPI.rejectWithValue(error)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const AutenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    user: null,
    loading: false,
    error: null,
    token: null,
    isAuthenticated: false,
    isLoggedIn: false,
    isAdmin: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // para iniciar sesion
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
        state.isLoggedIn = true
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // para procesar la respuesta de google
      .addCase(processGoogleCallback.pending, (state) => {
        state.loading = true
      })
      .addCase(processGoogleCallback.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
        state.isLoggedIn = true
      })
      .addCase(processGoogleCallback.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // para cerrar sesion
      .addCase(logout.pending, (state) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false
        state.user = null
        state.isAuthenticated = false
        state.isLoggedIn = false
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(loginWithUsernameAndPassword.pending, (state) => {
        state.loading = true
      })
      .addCase(loginWithUsernameAndPassword.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
        state.isLoggedIn = true
      })
      .addCase(loginWithUsernameAndPassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default AutenticationSlice.reducer
