import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CampaignResult = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [12000, 19000, 3000, 5000, 20000, 30000],
        backgroundColor: '#659148',
            borderRadius: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Legend position
      },
      title: {
        display: true,
        text: 'Monthly Sales Data for 2024',
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
    <div>
      <div>
            <h1 style={{"color":"#294F41","width":"300px"}} className="mx-auto font-bold  text-center text-xl  cursor-pointer"> Customer Behaviour</h1>
            <Bar options={options} height={350} width={500} data={data} />
            </div>
    </div>
  );
};

export default CampaignResult;
