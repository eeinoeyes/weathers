import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeather, getForecast } from '../api/weatherApi'

export const fetchWeathers = createAsyncThunk('weathers/fetchWeathers', async (city) => {
   const response = await getWeather(city)
   return response //객체
})

export const fetchForecast = createAsyncThunk('weathers/fetchForecast', async (city) => {
   const response = await getForecast(city)
   return response.list //객체
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      weathers: null,
      forecast: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeathers.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchWeathers.fulfilled, (state, action) => {
            state.loading = false
            state.weathers = action.payload
         })
         .addCase(fetchWeathers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchForecast.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchForecast.fulfilled, (state, action) => {
            state.loading = false
            state.forecast = action.payload
         })
         .addCase(fetchForecast.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
