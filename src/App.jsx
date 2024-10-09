import { useState } from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import EulerMail from './Pages/EulerMail/EulerMail'
import Orders from './Pages/Orders/Orders'
import Header from './Pages/Header/Header'
import ConfirmOrder from './Pages/Orders/ConfirmOrder'
import { auth } from './firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import Business from './Pages/BusinessOverview/Business'
import MainCustomerBehaviour from './Pages/CustomerBehaviour/MainCustomerBehaviour'
import MainCampaignResult from './Pages/CampaignResult/MainCampaignResult'
import MainSocialMedia from './Pages/SocialMedia/MainSocialMedia'
import CampaignDesign from './Pages/CampaignDesign/CampaignDesign'

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
        <Route exact path="/businessOverview" element={<Business />} />
        <Route exact path="/customerBehaviour" element={<MainCustomerBehaviour />} />
        <Route exact path="/campaignResult" element={<MainCampaignResult />} />
        <Route exact path="/socialMedia" element={<MainSocialMedia />} />
        <Route exact path="/campaignerdesign" element={<CampaignDesign />} />
      </Routes>
    </>
  )
}

export default App
