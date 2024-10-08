import { BarChart,CartesianGrid, Legend,XAxis, Tooltip,Bar, YAxis } from "recharts";

const CustomerBehaviour = ({data}) => {
  return (
    <div>
    <div className="text-center text-xl font-bold my-3">Customer Behaviour</div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default CustomerBehaviour;
