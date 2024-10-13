import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './MainCustomer.css'
import Customers from './Customers';
import CustomersSegment from './CustomersSegment';
import Sales from './Sales';
import Engagement from './Engagement';
const MainCustomerBehaviour = () => {
  const [data, setData] = useState([]);
  const [barName,setBarName]=useState("")
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cohortYear, setCohortYear] = useState(0);
  const [activeYear, setActiveYear] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [totalSales, setTotalSales] = useState(0);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  return (
    <div className="customerBehaviourMain">
      <div className="leftSection">
        <div
          style={{  width: "150px", cursor: "pointer" }}
          className="flex font-bold gap-3 center items-center mb-5"
        >
         <img src="./sales.png" alt=""/></div>
        <div
          style={{  width: "150px", cursor: "pointer" }}
          className="flex font-bold gap-3 items-center"
        >
         <img src="./sitedata.png" alt=""/></div>
      </div>
      <div className="mx-auto mt-3 ">
        <div className="firstChartSection ">
        <div className="flex gap-16 insideFirstSec">
              <Customers />
              <CustomersSegment />
            </div>
        </div>
        <div className="cohortChartSection ">
            <Sales />
            <Engagement />
            
          </div>

      </div>
    </div>
  )
}

export default MainCustomerBehaviour
