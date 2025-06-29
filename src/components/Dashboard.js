import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const COLORS = ['#00e6b2', '#ff6b6b', '#ffc107', '#36a2eb', '#9c27b0'];

function Dashboard() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/chartdata', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setChartData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="title">📊 Expense Breakdown</h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#00e6b2"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="no-data">No chart data available</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
