import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_URL = 'http://localhost:3000/api/v1/users'

export const register = createAsyncThunk('authUser/register', async (user, thunkAPI) => {
  // const { email, password, firstName,lastName,contact,address } = user
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
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

// añadan el login

const authSlice = createSlice({
  name: 'authUser',
  initialState: {
    user: null,
    isAuthenticated: false,
    token: null, // loañado por si trae un token o algo asi
    isLoading: false,
    error: null
  },
  reducers: {
    successLogin: (state) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.token = action.payload.token
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload.message
      })
  }
})
export const { successLogin, logout } = authSlice.actions
export default authSlice.reducer
