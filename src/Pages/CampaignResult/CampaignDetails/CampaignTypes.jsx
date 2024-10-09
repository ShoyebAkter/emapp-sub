import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import PropTypes from "prop-types"
ChartJS.register(ArcElement, Tooltip, Legend);
export const CampaignTypes = ({emailCampaign,whatsAppCampaign}) => {
    
    const data = {
        labels: ['EmailCampaign','WhatsAppCampaign'],
        datasets: [
          {
            label: emailCampaign && whatsAppCampaign ? 'No. Of Campaign':"Default Result",
            data: [emailCampaign ? emailCampaign : 1,whatsAppCampaign?whatsAppCampaign:1],
            backgroundColor: [
              '#649445',
              '#48705c',
            ],
            borderColor: [
              '#649445',
              '#48705c',
            ],
            borderWidth: 1,
          },
        ],
        
      };
      // const options= {
      //   scales: {
      //     y: {
      //       ticks: {
      //         color: 'red',
      //         font: {
      //           size: 14,
      //         }
      //       }
      //     },
      //     x: {
      //       ticks: {
      //         color: 'red',
      //         font: {
      //           size: 14
      //         }
      //       }
      //     }
      //   }
      // }
    return (
        <div id="chart">
            <h1 className="text-black text-lg font-bold">Campaign Types</h1>
            <Pie  data={data} width={300}/>
        </div>

    )
}
CampaignTypes.propTypes = {
  emailCampaign:PropTypes.number.isRequired,
    whatsAppCampaign:PropTypes.number.isRequired
  }