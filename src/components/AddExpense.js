import React, { useState } from 'react';
import axios from 'axios';

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
    axios.post('http://localhost:5000/add_expense', expense)
      .then(res => {
        alert("Expense Added!");
        setExpense({ title: '', amount: '', category: '', date: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input name="title" value={expense.title} onChange={handleChange} placeholder="Title" required /><br/>
      <input name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" type="number" required /><br/>
      <input name="category" value={expense.category} onChange={handleChange} placeholder="Category" required /><br/>
      <input name="date" value={expense.date} onChange={handleChange} type="date" required /><br/>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;
