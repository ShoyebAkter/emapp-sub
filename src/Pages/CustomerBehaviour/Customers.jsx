import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Customers = () => {
    const data = {
        labels: ['Needing Attention', 'Recent Customers', 'Potential Loyalist', 'Loyal Customers', 'Champion', 'At Risk'],
        datasets: [
          {
            label: 'Customers',
            data: [2, 1, 4, 1, 0, 2],
            borderColor: '#649445',
                    backgroundColor: '#649445',
          },
        ],
      };
    
      const options = {
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: `Customers: 10`,
            color: "#2a4e40", // Change the title color
            font: {
              size: 16,
              weight:700,
              family: 'Montserrat',// Change the title font size
            },
            padding: {
              bottom: 30 // Add padding to the bottom
          }
            // text: `Customers: ${customers.length}`,
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
        // onClick: (event, elements,chart) => {
          
        //   if (elements.length > 0) {
        //     const element = elements[0];
        //   const index = element.index;
        //   const label = chart.data.labels[index];
        //   setBarName(label)
        //   setData(customersData);
          
        //   }
        // }
      };
  return (
    <div className="customerChartdiv">
      <Bar options={options} height={200} data={data} />
    </div>
  )
}

export default Customers
