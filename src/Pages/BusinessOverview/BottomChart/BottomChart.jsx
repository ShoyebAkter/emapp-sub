import React, { useState } from 'react'
import WorldMap from './WorldMap';
import UsaMap from './UsaMap';

const BottomChart = () => {
    const [clicked,setClicked]=useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [stateName,setStateName]=useState()
  return (
    <div>
      <div
          style={{
            height: "500px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            "background":"white"
          }}
          className=" rounded-2xl py-1 mb-10"
        >
          
          {clicked === false ? (
        <WorldMap 
          setClicked={setClicked} 
          setSelectedCountry={setSelectedCountry} 
          setStateName={setStateName} 
        />
      ) : (
        selectedCountry !== "United States" ? (
          <UsaMap setSelectedCountry={setSelectedCountry} />
        ) : (
          <WorldMap 
            setClicked={setClicked} 
            setSelectedCountry={setSelectedCountry} 
            setStateName={setStateName} 
          />
        )
      )}

          
          
        </div>
       
    </div>
  )
}

export default BottomChart
