import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getBarrio = createAsyncThunk(
  'barrio/getBarrio', async (ubicacion, thunkAPI) => {
    // console.log('primera ubi', ubicacion)
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${ubicacion.latitude}&lon=${ubicacion.longitude}&format=json`, {
        method: 'GET'
      })
      if (response.ok) {
        const data = await response.json()
        return data.address.road
      } else {
        throw new Error('No se pudo obtener la ubicación.')
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  })

const barrioSlice = createSlice({
  name: 'barrio',
  initialState: {
    barrio: null,
    loading: false,
    error: null
  },
  reducers: {
    resetBarrio: (state) => {
      state.barrio = ''
      state.loading = false
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getBarrio.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(getBarrio.fulfilled, (state, action) => {
        state.loading = false
        state.barrio = action.payload
      })
      .addCase(getBarrio.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { resetBarrio } = barrioSlice.actions
export default barrioSlice.reducer
