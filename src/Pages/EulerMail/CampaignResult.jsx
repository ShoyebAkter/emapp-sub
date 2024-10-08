import {
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  Tooltip,
  Bar,
  YAxis,
} from "recharts";

const CampaignResult = ({ data }) => {
  return (
    <div>
        <div className="text-center text-xl font-bold my-3">CampaignResult</div>
      <BarChart layout="vertical" width={700} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* XAxis should represent the numeric data */}
        <XAxis type="number" />
        {/* YAxis should represent the categorical data */}
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default CampaignResult;
