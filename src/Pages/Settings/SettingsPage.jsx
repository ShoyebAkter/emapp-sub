import React, { useState } from 'react'
import { auth } from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './SettingsPage.css'
import { FaLock, FaUser } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { MdDashboard,MdOutlineCampaign  } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import AccountPreference from './AccountPreference';
import Profile from './Profile';
import ForgotPassword from './ForgotPassword';
import DataConnection from './DataConnection';
const SettingsPage = () => {
    const [activeSetting,setActiveSetting]=useState("AccountPreference");
  const [data,setData]=useState([]);
  const [user]=useAuthState(auth)
    // useEffect(()=>{
    //     fetch("https://emapp-backend.vercel.app/subscription/database")
    //   .then((res) => res.json())
    //   .then((result) => setData(result))
    //   .catch((error) => console.error(error));
    // },[])
    
    // const foundObject = user && data.find(obj => obj?.email === user.email);
  
  return (
    <div style={{"paddingTop":"110px"}} className="mainSetting">
      <div className="settingLeftSide">
        <div className="headerName flex gap-10">
         {/* <img style={{"width":"50px","height":"50px"}} src={foundObject?.photoUrl} alt=""/> */}
          Settings</div>
        <div onClick={()=>setActiveSetting("AccountPreference")} className="cursor-pointer flex items-center gap-4"> <FaUser /> Account Preference</div>
        <div onClick={()=>setActiveSetting("password")} className="cursor-pointer flex items-center gap-4"> <TbPassword />Change Password</div>
        <div onClick={()=>setActiveSetting("Security")} className="cursor-pointer flex items-center gap-4"><FaLock />Security</div>
        <div onClick={()=>setActiveSetting("Data")} className="cursor-pointer flex items-center gap-4"> <IoShareSocial />Data & Connection</div>
        <div onClick={()=>setActiveSetting("Dashboard")} className="cursor-pointer flex items-center gap-4"> <MdDashboard />Dashboard Option</div>
        <div onClick={()=>setActiveSetting("Campaign")} className="cursor-pointer flex items-center gap-4"> <MdOutlineCampaign />Campaign Designer</div>
      </div>
      {
        activeSetting ==="AccountPreference" && <AccountPreference setActiveSetting={setActiveSetting}  />
      }
      {
        activeSetting ==="Profile" && <Profile/>
      }
      {
        activeSetting ==="password" && <ForgotPassword/>
      }
      {
        activeSetting ==="Data" && <DataConnection/>
      }
      
    </div>
  )
}

export default SettingsPage
