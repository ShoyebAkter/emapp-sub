
import PropTypes from "prop-types"
import { Pie } from 'react-chartjs-2';
export const BounceRate = ({result}) => {
  const defaultData=[
    {
      campaignType:"New",
      total:2
    },
    {
      campaignType:"Old",
      total:4
    }
  ]
    const data = {
        labels: result.length!==0? result.map((data)=>data.campaignType):defaultData.map((data)=>data.campaignType),
        datasets: [
          {
            label:result.length!==0? 'No. Of Campaign':"Default Result",
            data: result.length!==0 ? result.map((data)=>data.total):defaultData.map((data)=>data.total),
            backgroundColor: [
              '#649445',
              '#48705c',
              '#2a4e40',
            ],
            borderColor: [
              '#649445',
              '#48705c',
              '#2a4e40',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div id="chart">
            <h1 className="text-black text-lg font-bold">Email Campaign Type</h1>
            <Pie data={data} width={300}/>
        </div>

    )
}
BounceRate.propTypes = {
  result:PropTypes.array.isRequired
  }
