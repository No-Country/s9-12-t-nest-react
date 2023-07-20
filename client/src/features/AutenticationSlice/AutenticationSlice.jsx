import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_URL = 'http://localhost:3000/api/v1/'

export const loginGoogle = createAsyncThunk('auth/loginGoogle', async (_, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
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
      .addCase(loginGoogle.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        // state.token = action.payload.token
        state.isAuthenticated = true
        state.isLoggedIn = true
        // state.isAdmin = action.payload.user.role === 'admin'
      })
      .addCase(loginGoogle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.user = null
        state.isAuthenticated = false
        state.isLoggedIn = false
        state.isAdmin = false
      })
  }
})

export default AutenticationSlice.reducer
