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
import { useState } from "react";
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
const MiddleChart = () => {
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
    <div id="chart" className='middleChart'>
      <div className="greenDiv"></div>
      <Line height={200}
      width={700}
        options={options}
        data={data}
      />
    </div>
  )
}

export default MiddleChart
