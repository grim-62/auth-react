import React from 'react'
import { Route, Routes } from 'react-router'

import Authpage from './views/Authpage'
import HomePage from './views/Home'
import ProtectedRoute from './layouts/ProtectedRoute'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Authpage />} />
        <Route path='/home' element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
