import React from 'react'
import Header from '../Header/Header'
import BusinessOverview from './BusinessOverview'
import CustomerBehaviour from './CustomerBehaviour'
import CampaignResult from './CampaignResult'
import SocialMedia from './SocialMedia'

const EulerMail = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='pt-32'>
      <div className='flex justify-around'>
        <BusinessOverview data={data}/>
        <CustomerBehaviour data={data}/>
      </div>
      <div className='flex justify-around'>
        <CampaignResult data={data}/>
        <SocialMedia data={data}/>
      </div>
    </div>
  )
}

export default EulerMail
