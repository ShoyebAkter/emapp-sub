import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import EulerMail from './Pages/EulerMail/EulerMail'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/eulerMail" element={<EulerMail />} />
      </Routes>
    </>
  )
}

export default App
