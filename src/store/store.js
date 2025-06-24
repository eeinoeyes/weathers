import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weatherSlice'
import bookmarkReducer from '../features/bookmarkSlice'

const store = configureStore({
   reducer: {
      weathers: weatherReducer,
      bookmarks: bookmarkReducer,
   },
})

export default store
