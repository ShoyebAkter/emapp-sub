import { useState } from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import EulerMail from './Pages/EulerMail/EulerMail'
import Orders from './Pages/Orders/Orders'
import Header from './Pages/Header/Header'
import ConfirmOrder from './Pages/Orders/ConfirmOrder'
import { auth } from './firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth);
  const navigate=useNavigate()
  !user && navigate('/login')
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<EulerMail />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/confirmOrders/:id" element={<ConfirmOrder />} />
      </Routes>
    </>
  )
}

export default App
