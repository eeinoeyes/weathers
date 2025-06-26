import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weatherSlice'
import bookmarkReducer from '../features/bookmarkSlice'

const loadBookmarks = () => {
   try {
      const saved = localStorage.getItem('bookmarks')
      return JSON.parse(saved)
   } catch {
      return []
   }
}

const store = configureStore({
   reducer: {
      weathers: weatherReducer,
      bookmarks: bookmarkReducer,
   },
   preloadedState: {
      bookmarks: loadBookmarks(),
   },
})

store.subscribe(() => {
   const { bookmarks } = store.getState()
   localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
})

export default store
