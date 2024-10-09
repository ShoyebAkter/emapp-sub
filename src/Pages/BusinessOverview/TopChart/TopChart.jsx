import React from 'react'
import TotalSales from './TotalSales'
import Orders from './Orders'
import OrdersAvg from './OrdersAvg'

const TopChart = () => {
  return (
    <div>
      <div className="topChart">
            <div  className="greenDiv"></div>
            <TotalSales />
            <Orders  />
            
            <OrdersAvg />
            {/* {!shopify && <MeanChart chartType={"median"}/>} */}
        </div>
    </div>
  )
}

export default TopChart
