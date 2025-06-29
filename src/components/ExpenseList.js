import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExpenseList.css';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/expenses', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="list-container">
      <div className="list-card">
        <h2 className="title">📋 Your Expenses</h2>
        <ul className="expense-ul">
          {expenses.length === 0 ? (
            <li className="no-data">No expenses found.</li>
          ) : (
            expenses.map((item, index) => (
              <li key={index} className="expense-item">
                <span className="expense-title">{item.title}</span>
                <span className="expense-meta">
                  ₹{item.amount} | {item.category} | {item.date}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;
