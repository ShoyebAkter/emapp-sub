import { FaImages } from "react-icons/fa";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PostChart = () => {
    const options = {
        chart: {
          type: 'column',
          width:500,
          height: 500
        },
        title: {
          text: '',
          align: 'center'
        },
        
        xAxis: {
          categories: ['FB', 'Insta', 'Linkedin', 'Tiktok', 'Youtube'],
          crosshair: true,
          accessibility: {
            description: 'Countries'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Social Media Post'
          }
        },
        tooltip: {
          valueSuffix: ' '
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        credits: {
          enabled: false // Hide credits
        },
        series: [
          {
            name: 'Posts',
            data: [70, 100, 170, 630, 10],
            color: "#48705c",
              borderRadius: 15,
              groupPadding: 0,
          },
          
        ]
      };
  return (
    <div>
    <div
        style={{ color: "#40E0D0" }}
        className=" flex gap-3 justify-center items-center font-bold"
      >
        <span className="">
          <FaImages size={36} />
        </span>
        <span style={{ color: "#6b6b6b" }}># of Posts</span>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default PostChart
