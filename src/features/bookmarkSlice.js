import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const bookmarkSlice = createSlice({
   name: 'bookmarks',
   initialState: [],
   reducers: {
      addBookmark: (state, action) => {
         const city = action.payload
         const group = state.some((data) => data.name === city.name)
         if (!group) state.push(city)
      },
      removeBookmark: (state, action) => {
         return state.filter((data) => data.name !== action.payload)
      },
   },
})
export default bookmarkSlice.reducer
export const { addBookmark, removeBookmark } = bookmarkSlice.actions
