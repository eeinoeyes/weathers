import './App.css'

import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import Bookmarks from './pages/Bookmarks'
import StarCursorEffect from './pages/StarCursorEffect'

function App() {
   return (
      <div>
         <StarCursorEffect />
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details/:city" element={<Details />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/*" element={<NotFound />} />
         </Routes>
      </div>
   )
}

export default App
