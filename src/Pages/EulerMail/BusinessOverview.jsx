import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import './BoxStyle.css'
const BusinessOverview = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        
        borderColor: "#649445",
              backgroundColor: "#649445",
        tension: 0.1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales",
        color: '#294F41',
        font: {
          size: 14,
          family: 'Montserrat',
          
          weight: 700 // specify the font size here
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color:'black'
        },
      },
      y: {
        ticks: {
          color:'black'
        },
      },
    },
  };
  return (
    <div className="boxcontainer border-scoop">
      <div>
        <h1
          style={{ color: "#294F41" }}
          className="font-bold text-center text-xl  cursor-pointer"
          onClick={() => navigate("/businessoverview")}
        >
          {" "}
          Business Overview
        </h1>
        {/* <h1 style={{"color":"#294F41"}} className="font-bold text-center text-sm mt-2"  > Yearly Revenue</h1> */}

        <Line options={options} height={300} width={500} data={data} />
      </div>
    </div>
  );
};

export default BusinessOverview;
