import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function Dashboard() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/chartdata')
      .then(res => setChartData(res.data))
      .catch(err => console.error(err));
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div>
      <h2>Expense Summary</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="amount"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Dashboard;
