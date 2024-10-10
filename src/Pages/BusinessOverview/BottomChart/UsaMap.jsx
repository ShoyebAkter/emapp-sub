import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../../data/mockDataGeo.js";
import { useEffect, useState } from "react";
// import { callApi } from "../EulerMail/getSalesData";
// import { auth } from "../../firebase.init";
// import iso2ToIso3 from "country-iso-2-to-3";
// import PropTypes from "prop-types";
// import { scaleThreshold } from 'd3-scale';
// import { useAuthState } from "react-firebase-hooks/auth";
// import { fetchData } from "../CustomerBehaviour/shopifyLogic";
// import { countDuplicateValues } from "./Topchart/topchart";
const UsaMap = ({ setSelectedCountry }) => {
  const color = "#c9a0dc";
  // const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  // const shopify = localStorage.getItem("shopify");
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetch("https://emapp-backend.vercel.app/warehousepro/stateData")
      .then((res) => res.json())
      .then((result) => {
        // Filter out objects that have the action: "deleted"
        setUsers(result); // Set the filtered data to state
      })
      .catch((error) => console.error(error));
  }, []);
  const sum = users.reduce((sum, obj) => sum + obj.value, 0);
  const countedValues = [
    {
      id: "USA",
      value: sum,
    },
  ];

  const handleCountryClick = (feature) => {
    if (feature.properties.name === "USA") {
      setSelectedCountry("United States");
    } else if (feature.properties.name === "Korea") {
      setSelectedCountry("South Korea");
    }
    // console.log(feature);
    // You can perform any other actions here based on the clicked country
  };
  return (
    <div className="mapDiv">
      <div className="mapChartDiv">
        <h1
          style={{ color: "#294F41" }}
          className="font-bold text-center text-2xl py-5 cursor-pointer"
        >
          Users In Each Country
        </h1>
        <ResponsiveChoropleth
          data={countedValues}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: color,
                },
              },
              legend: {
                text: {
                  fill: color,
                },
              },
              ticks: {
                line: {
                  stroke: color,
                  strokeWidth: 1,
                },
                text: {
                  fill: color,
                },
              },
            },
            legends: {
              text: {
                fill: color,
              },
            },
          }}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 10000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          colors="nivo"
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: "#444444",
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "none",
                  style: {
                    itemTextColor: "#000000",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          onClick={handleCountryClick}
        />
      </div>
    </div>
  );
};

export default UsaMap;
