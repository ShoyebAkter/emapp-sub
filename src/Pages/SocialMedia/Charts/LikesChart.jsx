import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import { useSelector } from "react-redux";
import { BsChatSquareHeartFill } from "react-icons/bs";


const LikesChart = () => {
    const options = {
        chart: {
          type: "column",
          width: 500,
          height: 500,
        },
        title: {
          text: "",
          align: "center",
        },
    
        xAxis: {
          categories: ["FB", "Insta", "Linkedin", "Tiktok", "Youtube"],
          crosshair: true,
          accessibility: {
            description: "Countries",
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Social Media Likes",
          },
        },
        tooltip: {
          valueSuffix: " ",
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        credits: {
            enabled: false // Hide credits
          },
        series: [
          {
            name: "Likes",
            data: [ 2500,3500, 170, 630, 100],
            color: "#22DD22",
            borderRadius: 15,
            groupPadding: 0,
          },
        ],
      };
  return (
    <div>
      <div
        style={{ color: "#40E0D0" }}
        className=" flex gap-3 justify-center items-center font-bold"
      >
        <span className="">
          <BsChatSquareHeartFill size={36} />
        </span>
        <span style={{ color: "#6b6b6b" }}>Likes</span>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default LikesChart
