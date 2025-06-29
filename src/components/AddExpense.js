import React, { useState } from 'react';
import axios from 'axios';
import './AddExpense.css';

function AddExpense() {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    category: '',
    date: ''
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    axios.post('http://localhost:5000/add_expense', expense, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        alert("Expense Added!");
        setExpense({ title: '', amount: '', category: '', date: '' });
      })
      .catch(err => {
        console.error(err);
        alert("Failed to add expense.");
      });
  };

  return (
    <div className="expense-container">
      <form className="expense-card" onSubmit={handleSubmit}>
        <h2 className="title">💸 Add New Expense</h2>

        <div className="input-group">
          <input type="text" name="title" value={expense.title} onChange={handleChange} required />
          <label>Title</label>
        </div>

        <div className="input-group">
          <input type="number" name="amount" value={expense.amount} onChange={handleChange} required />
          <label>Amount (₹)</label>
        </div>

        <div className="input-group">
          <input type="text" name="category" value={expense.category} onChange={handleChange} required />
          <label>Category</label>
        </div>

        <div className="input-group">
          <input type="date" name="date" value={expense.date} onChange={handleChange} required />
          <label className="date-label">Date</label>
        </div>

        <button type="submit" className="submit-btn">➕ Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
