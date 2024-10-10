import React from "react";
import Header from "../Header/Header";
import BusinessOverview from "./BusinessOverview";
import CustomerBehaviour from "./CustomerBehaviour";
import CampaignResult from "./CampaignResult";
import SocialMedia from "./SocialMedia";
import "./EulerMail.css";
import { useNavigate } from "react-router-dom";
const EulerMail = () => {
  const navigate=useNavigate()
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
    <div className="eulermailMain">
      <div className="flex text-black justify-around ">
        <div style={{ color: "#439541" }} className="text-xl font-bold">
          Company
        </div>
        <div className=" border-solid border-2 border-lime-500 rounded-xl px-2 text-lime-600">
          General Report
        </div>
      </div>
      <div className=" firstChartSec">
        <div  className="flex flex-col py-5 ">
          <BusinessOverview data={data} />
          // <CustomerBehaviour data={data} />
        </div>
        <div
          onClick={() => navigate("/campaignerdesign")}
          className="centerImage"
        >
          <img src="/logo.png" alt="logo" />
        </div>
        <div  className="flex flex-col py-5">
          <CampaignResult data={data} />
          // <SocialMedia data={data} />
        </div>
      </div>
    </div>
  );
};

export default EulerMail;
