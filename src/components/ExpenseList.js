import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios.get('http://localhost:5000/expenses')
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>
            {item.title} - ₹{item.amount} ({item.category}) on {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
