import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomerBehaviour = ( ) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [12000, 19000, 3000, 5000, 20000, 30000],
        borderColor: '#649445',
                backgroundColor: '#649445',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Legend position
      },
      title: {
        display: true,
        text: 'Monthly Sales Data for 2024',
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
            <Bar options={options} height={300} width={500} data={data} />
            </div>
    </div>
  );
};

export default CustomerBehaviour;
