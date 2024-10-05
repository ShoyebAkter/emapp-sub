import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import EulerMail from './Pages/EulerMail/EulerMail'
import Orders from './Pages/Orders/Orders'
import Header from './Pages/Header/Header'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/eulerMail" element={<EulerMail />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App
