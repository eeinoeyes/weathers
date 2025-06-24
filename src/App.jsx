// import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import Bookmarks from './pages/Bookmarks'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/details/:city" element={<Details />} />
         <Route path="/bookmarks" element={<Bookmarks />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
